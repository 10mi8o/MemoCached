import { fetchAllPosts } from 'services/blog'
import Link from 'next/link'
import Layout from 'components/Layout'
import Card from 'components/common/molecules/Card'

//記事一覧ページ
export default function Home(props) {
  const posts = props.posts
  const LIMIT = posts.length;

  return (
    <Layout>
      <div className="container m-auto">
        <div className="flex flex-wrap ">
          <Card props={posts}/>
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