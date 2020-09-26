import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language="javascript" style={darcula}>{value}</SyntaxHighlighter>;
};

const Post = ({ title, body, img_url, category }) => {

  //categoryによってデフォルトのimgを出し分け
  if(img_url === "" && category === 'react') {
    img_url = "/images/react_bnr.png"
  } else if (img_url === "" && category === 'javascript') {
    img_url = "/images/js_bnr.png"
  } else {
    img_url = img_url.file.url
  }

  return(
    <>
      <figure>
        <img 
          src={img_url} 
          // alt={image.description}
        />
      </figure>
      <h1>{title}</h1>
      <ReactMarkdown source={body} renderers={{ code: CodeBlock }} escapeHtml={false} />
    </>
  )
}

export default Post