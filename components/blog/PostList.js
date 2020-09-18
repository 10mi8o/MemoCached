const PostList = ({title, img_url}) => {
  return(
    <div>
      <figure>
        <img className="w-full" src={img_url} alt=""/>
      </figure>
      <h2 className="font-bold text-xl mb-2 px-6 py-4">
        {title}
      </h2>
    </div>
  )
}

export default PostList