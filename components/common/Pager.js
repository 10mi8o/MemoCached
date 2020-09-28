import Link from "next/link"

const Pager = (props) => {
  const { total, page, perPage, href, asCallback } = props

  // console.log("total" + total)
  // console.log("perPage" + perPage)
  // console.log("page" + page)

  const prevPage = page > 1 ? page - 1 : null
  let nextPage = null
  if (page < Math.ceil(total / perPage)) {
    nextPage = page + 1
  }
  
  return (
    <div className="pager text-center">   
        {page === 1 &&
          <a className="pager-item" href="/">← TOP</a>
        }
        {prevPage ? (
          <Link href={href} as={asCallback(prevPage)}>
            <a className="pager-item">Prev</a>
          </Link>
        ) : ``}
      <span className="pager-item current">{page}</span>
        {(nextPage && nextPage !== null) ? (
          <Link href={href} as={asCallback(nextPage)}>
            <a className="pager-item">Next</a>
          </Link>
        ) : ``}
      <style jsx>{`
        .pager {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flew-wrap: nowrap;
        }
        .pager-item {
          margin: 0 1em;
        }
      `}</style>
    </div>
  )
}
export default Pager