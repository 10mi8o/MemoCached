import Link from 'next/link'
import Layout from '../components/Layout'
import PostList from '../components/blog/PostList'
import Label from '../components/common/Label'

import styles from '../styles/Home.module.css'

import { fetchAllPosts } from '../services/blog'

//記事一覧ページ
export default function Home(props) {
  const posts = props.posts

  return (
      <Layout>
        <div>
            { posts.map((post, id) => {
              return (
                <React.Fragment key={id}>
                  <Link  href="/posts/[slug]" as={`/posts/${post.fields.slug}`}>
                    <a>
                      <PostList title={post.fields.title} img_url={post.fields.image.fields.file.url} />
                    </a>
                  </Link>

                  <Link href="/posts/category/[slug]" as={`/posts/category/${post.fields.category.fields.slug}`}>
                    <a>
                      <Label name={post.fields.category.fields.name}/>
                    </a>
                  </Link>

                  {post.fields.tag.map((tag_name, id)=> {
                    return(
                      <div key={id}>
                        <Link href="/posts/tag/[slug]" as={`/posts/tag/${tag_name.fields.slug}`}>
                        <a>
                          <Label name={tag_name.fields.name}/>
                        </a>
                        </Link>
                      </div>
                    )
                  })}

                </React.Fragment>
              )
            })}
        </div>
      </Layout>
  )
}

export async function getStaticProps() {
  const posts = await fetchAllPosts()
  // const posts = await res.map( post => post )

  return {
    props: {
      posts
    }
  }
}