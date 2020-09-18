import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language="javascript" style={darcula}>{value}</SyntaxHighlighter>;
};

const Post = ({ title, body, image }) => {

  return(
    <>
      <figure>
        <img src={image.file.url} alt={image.description}/>
      </figure>
      <h1>{title}</h1>
      <ReactMarkdown source={body} renderers={{ code: CodeBlock }}/>
    </>
  )
}

export default Post