// import { fetchLimitPosts } from '../../../services/blog'
// import Layout from '../../../components/Layout'
// import Link from 'next/link'
// import PostList from '../../../components/blog/PostList'
// import Label from '../../../components/common/Label'
// import Pager from '../../../components/common/Pager'

// const COUNT_PER_PAGE = 3

// export default function PostDetail(props) {
//   const posts = props.posts

//   return(
//     <Layout>
//       <div className="container m-auto py-10">
//         <div className="flex flex-wrap">
//           {posts.map((post, id) => (
//             <div key={id} className="w-1/3 px-2 mb-10 flex">
//               <div className="max-w-sm rounded overflow-hidden shadow-lg">
//                 <Link  href="/posts/[slug]" as={`/posts/${post.fields.slug}`}>
//                   <a>
//                     <PostList  title={post.fields.title} createdAt={post.sys.createdAt} img_url={post.fields.image.fields.file.url} />
//                   </a>
//                 </Link>
//                 <div className="flex px-4 py-4">
//                 {post.fields.tag.map((tag_name, id)=> (
//                     <div key={id}>
//                       <Link href="/posts/tag/[slug]" as={`/posts/tag/${tag_name.fields.slug}`}>
//                       <a>
//                         <Label name={tag_name.fields.name} />
//                       </a>
//                       </Link>
//                     </div>
//                   )
//                 )}
//               </div>
//               </div>
//             </div>
//             )
//           )}
//         </div>
//         <Pager
//             page={props.page} total={props.total} perPage={props.perPage}
//             href="/posts/archive/[num]"
//             asCallback={(page) => `/posts/archive/${page}`}
//           />
//       </div>
//     </Layout>
//   )
// }

// export async function getStaticProps({params}) {

//   const page = parseInt(params.num, 10)
//   const end = COUNT_PER_PAGE * page
//   const start = end - COUNT_PER_PAGE
//   const posts = await fetchLimitPosts()

//   return {
//     props: {
//       posts: posts.slice(start, end),
//       page,
//       total: posts.length,
//       perPage: COUNT_PER_PAGE
//     }
//   }
// }

// export async function getStaticPaths() {
//   const posts = await fetchLimitPosts()
//   const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
//   const paths = pages.map((page) => ({
//     params: { num: `${page}`}
//   }))

//   return {
//     paths: paths,
//     fallback: false
//   }
// }

// function range(stop) {
//   return Array.from({ length: stop }, (_, i) => i + 1)
// }