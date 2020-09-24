import Link from 'next/link'
import Layout from '../components/Layout'
import PostList from '../components/blog/PostList'
import Label from '../components/common/Label'
import { fetchAllPosts } from '../services/blog'

//記事一覧ページ
export default function Home(props) {
  const posts = props.posts
  const LIMIT = posts.length;

  return (
    <Layout>
      <div className="container m-auto">
        <div className="flex flex-wrap ">
        { posts.map((post, id) => (   
            <div key={id} className="w-1/3 px-2 mb-10 flex">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Link  href="/posts/[slug]" as={`/posts/${post.fields.slug}`}>
                <a>
                  <PostList 
                    title={post.fields.title} 
                    createdAt={post.sys.createdAt} 
                    img_url={post.fields.image?.fields.file.url === undefined ? "" : post.fields.image.fields.file.url}
                    category={post.fields.category.fields.slug}
                  />
                </a>
              </Link>
                <div className="flex px-4 py-4">
                  {post.fields.tag.map((tag_name, id)=> (
                    <div key={id}>
                      <Link href="/posts/tag/[slug]" as={`/posts/tag/${tag_name.fields.slug}`}>
                      <a>
                        <Label name={tag_name.fields.name} />
                      </a>
                      </Link>
                    </div>
                  )
                  )}
                </div>
              </div>
            </div>
          )
        )}
        </div>
        { LIMIT <= 16 ? '' :
        <div className="text-center">
          <Link href="/posts/archive/[num]" as="/posts/archive/1"><a>Archive &gt;&gt;</a></Link>
        </div>
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await fetchAllPosts()

  return {
    props: {
      posts
    }
  }
}