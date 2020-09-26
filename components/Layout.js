import { useRouter } from 'next/router'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import CustomHead from 'components/common/CustomHead'

const Layout = ({children}) => {

  const router = useRouter()
  const POST_URL = router.asPath
  // // console.log(POST_URL)  
  // const post = children.props.children.props.children[0].props
  // const body = post.body
  // // console.log(body)

  return (
    <>
      <CustomHead
        title={'MemoCached'}
        description={'MemoCachedは技術系の小さなトピックを集めたブログです。'}
        image={'https://memo-cached.vercel.app/images/og_logo.png'}
        url={`https://memo-cached.vercel.app${POST_URL}`}
      />

      <Header />
      <div className="py-12 lg:px-12">
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout