import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { fetchAllEntries } from '../services/blog'

export default function Home(props) {
  const entries = props.entries
  console.log(entries)
  return (
    <div>
      <Head>
        <title>MemoCached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          { entries.map((entry, id) => {
            return(
              <div key={id}>
              <p>{entry.fields.title}</p>
              <p>{entry.fields.title}</p>
            </div>     
            )
          })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchAllEntries()
  const entries = await res.map( entry => entry )
  return {
    props: {
      entries
    }
  }
}