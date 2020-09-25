import { fetchAllPosts, fetchPostByTag, fetchTag } from 'services/blog'
import Link from 'next/link'
import Layout from 'components/Layout'
import Card from 'components/common/molecules/Card'

export default function PostDetail(props) {
  const posts = props.posts.items
  
  return(
    <Layout>
      <div className="container m-auto">
        <div className="flex flex-wrap">
          <Card props={posts}/>
        </div>

        <div className="text-center">
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

  //paramsにはルーティングの情報が入っている
  const slug = params.slug // 「react」や「typescript」等

  //slugで対象のカテゴリを抽出
  const tag = await fetchTag(slug);

  // category_idを取得
  const tagId = tag.items[0].sys.id;
  
  // カテゴリIDにマッチする記事を取得する
  const posts = await fetchPostByTag(tagId)

  return {
    props: {
      posts: posts
    }
  }
}

export async function getStaticPaths() {
  const posts = await fetchAllPosts()
  const paths = posts.map((post) => {
      return `/posts/tag/${post.fields.tag[0].fields.slug}`
    })

  return {
    paths: paths,
    fallback: false
  }
}