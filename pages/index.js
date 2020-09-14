import Head from 'next/head'
import Post from '../components/blog/Post' 
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import { fetchAllPosts } from '../services/blog'

export default function Home(props) {
  const posts = props.posts
  return (
      <Layout>
        <div>
            { posts.map((post, id) => {
              return(
                <React.Fragment key={id}> 
                  <Post title={post.fields.title} body={post.fields.body} slug={post.fields.slug} /> 
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