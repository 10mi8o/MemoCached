import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>MemoCached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default Layout