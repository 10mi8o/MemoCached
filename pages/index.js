import Head from 'next/head'
import Link from 'next/link'
import Post from '../components/blog/Post' 
import Layout from '../components/Layout'

import styles from '../styles/Home.module.css'

import { fetchAllPosts } from '../services/blog'

//記事一覧ページ
export default function Home(props) {
  const posts = props.posts
  console.log(posts);

  return (
      <Layout>
        <div>
            { posts.map((post, id) => {
              return (
                <React.Fragment key={id}>
                  <Link  href="/posts/[slug]" as={`/posts/${post.fields.slug}`}>
                    <a>
                      <div>
                        <img src={post.fields.image.fields.file.url} alt=""/>
                      </div>
                      <h2>
                        {post.fields.title}
                      </h2>
                    </a>
                  </Link>
                </React.Fragment>
              )
            })}
        </div>
      </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetchAllPosts()
  const posts = await res.map( post => post )
  return {
    props: {
      posts
    }
  }
}