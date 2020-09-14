import Link from 'next/link'

const Post = ({ title, body, slug }) => {
  
  return(
    <>
      <Link href="/posts/[slug]" as={`/posts/${slug}`}>
        <a>{title}</a>
      </Link>
      <p>{body}</p>
    </>
  )
}

export default Post