import { fetchAllPosts, fetchPostBySlug } from '../../services/blog'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Post from '../../components/blog/Post'

export default function PostDetail(props) {
  const post = props.post.items
  const image = post[0].fields.image.fields // 調査: より良い書き方があるはず
  console.log(post[0].fields.image.fields)

  return(
    <Layout>
      <Post title={post[0].fields.title} body={post[0].fields.body} image={image} />
      <Link href="/">
        <a>一覧へ戻る</a>
      </Link>
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