import Link from 'next/link'

const Header = () => {
  return(
    <>
      <header className="py-10 text-center">
        <h1 className="font-black line-through">
          <Link href="/">
            <a href="">
              Memo Cached
            </a>
          </Link>
        </h1>        
      </header>
    </>
  )
}

export default Header