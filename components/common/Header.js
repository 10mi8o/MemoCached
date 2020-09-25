import Link from 'next/link'

const Header = () => {
  const date = new Date()

  return(
    <div>
      <header className="h-48 sm:h-32 px-3 sm:px-5 md:px-10 py-3 sm:py-5 md:py-10 text-left">
        <div className="header-inner sm:flex items-center justify-between m-auto">
        <h1 className="font-black line-through">
          <Link href="/">
            <a href="">
              Memo<br />Cached
            </a>
          </Link>
        </h1>
        <nav className="main-nav mt-3 text-base sm:text-lg">
          <ul className="sm:flex">
            <li className="mb-4 sm:mx-5"><a href="/">Archive</a></li>
            <li className="mb-4 sm:mx-5"><a href="/">About</a></li>
            <li className="mb-4 sm:mx-5"><a href="/">Contact</a></li>
          </ul>
        </nav>
        </div>
      </header>
    </div>
  )
}

export default Header