import { fetchAllPosts, fetchPostBySlug } from '../../services/blog'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Post from '../../components/blog/Post'

export default function PostDetail(props) {
  const post = props.post.items

  return(
    <Layout>
      <Post title={post[0].fields.title} body={post[0].fields.body} />
      <Link href="/">
        <a>一覧へ戻る</a>
      </Link>
    </Layout>
  )
}

export async function getStaticProps({params}) {

  const slug = params.slug

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