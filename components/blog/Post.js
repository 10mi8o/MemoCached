import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const Post = ({ title, body, slug }) => {
  
  return(
    <>
      <Link href="/posts/[slug]" as={`/posts/${slug}`}>
        <a>{title}</a>
      </Link>
      <ReactMarkdown source={body} />
    </>
  )
}

export default Post