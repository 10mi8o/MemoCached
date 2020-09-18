import Date from '../common/Date'

const PostList = ({title, createdAt, img_url}) => {
  return(
    <div>
      <figure>
        <img className="w-full" src={img_url} alt=""/>
      </figure>
      <div className="mb-2 px-6 py-4">
        <Date dateString={createdAt} />
        <h2 className="font-bold text-xl">
          {title}
        </h2>
      </div>

    </div>
  )
}

export default PostList