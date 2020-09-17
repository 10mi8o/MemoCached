const PostList = ({title, img_url}) => {
  return(
    <>
      <img src={img_url} alt=""/>
      <h2>
        {title}
      </h2>
    </>
  )
}

export default PostList