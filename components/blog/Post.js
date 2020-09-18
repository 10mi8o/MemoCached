import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const Post = ({ title, body, image }) => {
  
  return(
    <>
      <figure>
        <img src={image.file.url} alt={image.description}/>
      </figure>
      <h1>{title}</h1>
      <ReactMarkdown source={body}/>
    </>
  )
}

export default Post