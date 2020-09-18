import Head from 'next/head'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>MemoCached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="py-10">
        <div className="container flex flex-wrap">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout