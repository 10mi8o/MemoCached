import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { fetchAllPosts } from '../services/blog'

export default function Home(props) {
  const posts = props.posts
  return (
    <div>
      <Head>
        <title>MemoCached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          { posts.map((post, id) => {
            return(
              <div key={id}>
              <p>{post.fields.title}</p>
              <p>{post.fields.title}</p>
            </div>     
            )
          })}
      </div>
    </div>
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