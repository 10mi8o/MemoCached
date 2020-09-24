import PostList from '../../blog/PostList'
import Label from '../Label'
import Link from 'next/link'


export default function Card(item) {
  const posts = item.props
  return(
    <>
      { posts.map((post, id) => (   
          <div key={id} className="w-1/3 px-2 mb-10 flex">
          <div className="card max-w-sm rounded overflow-hidden shadow-lg">
            <Link  href="/posts/[slug]" as={`/posts/${post.fields.slug}`}>
              <a>
                <PostList 
                  title={post.fields.title} 
                  createdAt={post.sys.createdAt} 
                  img_url={post.fields.image?.fields.file.url === undefined ? "" : post.fields.image.fields.file.url}
                  category={post.fields.category.fields.slug}
                />
              </a>
            </Link>
              <div className="flex px-4 py-4">
                {post.fields.tag.map((tag_name, id)=> (
                  <div key={id}>
                    <Link href="/posts/tag/[slug]" as={`/posts/tag/${tag_name.fields.slug}`}>
                    <a>
                      <Label name={tag_name.fields.name} />
                    </a>
                    </Link>
                  </div>
                )
                )}
              </div>
            </div>
          </div>
        )
      )}
    </>
  )
}