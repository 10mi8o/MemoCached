import { fetchLimitPosts } from '../../../services/blog'
import Layout from '../../../components/Layout'
import Pager from '../../../components/common/Pager'
import Card from '../../../components/common/molecules/Card'

const COUNT_PER_PAGE = 3

export default function PostDetail(props) {
  const posts = props.posts

  return(
    <Layout>
      <div className="container m-auto py-10">
        <div className="flex flex-wrap">
          <Card props={posts}/>
        </div>
        <Pager
            page={props.page} total={props.total} perPage={props.perPage}
            href="/posts/archive/[num]"
            asCallback={(page) => `/posts/archive/${page}`}
          />
      </div>
    </Layout>
  )
}

export async function getStaticProps({params}) {

  const page = parseInt(params.num, 10)
  const end = COUNT_PER_PAGE * page
  const start = end - COUNT_PER_PAGE
  const posts = await fetchLimitPosts()

  return {
    props: {
      posts: posts.slice(start, end),
      page,
      total: posts.length,
      perPage: COUNT_PER_PAGE
    }
  }
}

export async function getStaticPaths() {
  const posts = await fetchLimitPosts()
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
  const paths = pages.map((page) => ({
    params: { num: `${page}`}
  }))

  return {
    paths: paths,
    fallback: false
  }
}

function range(stop) {
  return Array.from({ length: stop }, (_, i) => i + 1)
}