import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const Post = ({ title, body, image }) => {
  
  return(
    <>
      <h1>{title}</h1>
      <div>
        <img src={image.file.url} alt={image.description}/>
      </div>
      <ReactMarkdown source={body}/>
    </>
  )
}

export default Post