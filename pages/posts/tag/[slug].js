import { fetchAllPosts, fetchPostByTag, fetchTag } from '../../../services/blog'
import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function PostDetail(props) {
  const posts = props.posts.items

  return(
    <Layout>
      {posts.map((post, id) => {
        return(
          <React.Fragment key={id}>
            <Link href="/posts/[slug]" as={`/posts/${post.fields.slug}`}>
              <a>
              <div>
                <img src={post.fields.image.fields.file.url} alt=""/>
              </div>
              <h1>
                {post.fields.title}
              </h1>
              </a>
            </Link>
          </React.Fragment>
        )
      })}

      <Link href="/">
        <a>一覧へ戻る</a>
      </Link>
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