import { fetchAllPosts, fetchPostBySlug } from '../../services/blog'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Post from '../../components/blog/Post'

export default function PostDetail(props) {
  const post = props.post.items
  // const image = post[0].fields.image.fields // 調査: より良い書き方があるはず
  // console.log(post[0].fields.image.fields)
  return(
    <Layout>
      <div id="post_detail">
        <div className="container">
        <Post 
          title={post[0].fields.title} 
          body={post[0].fields.body} 
          img_url={post[0].fields.image?.fields === undefined ? "" : post[0].fields.image.fields} 
          category={post[0].fields.category.fields.slug}
        />
        <Link href="/">
          <a>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-12 border border-gray-400 rounded shadow">
              一覧へ戻る
            </button>
          </a>
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({params}) {

  const slug = params.slug

  // １件の記事を取得する
  const post = await fetchPostBySlug(slug)
  return {
    props: {
      post: post
    }
  }
}

export async function getStaticPaths() {
  const posts = await fetchAllPosts()
  const paths = posts.map((post) => {
      return `/posts/${post.fields.slug}`
    })

  return {
    paths: paths,
    fallback: false
  }
}