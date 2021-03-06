import Link from 'next/link'
import PostList from 'components/blog/PostList'
import Label from 'components/common/Label'


export default function Card(item) {
  const posts = item.props
  return(
    <>
      { posts.map((post, id) => (   
          <div key={id} className="md:w-1/3 px-5 sm:px-8 md:px-2 mb-10 flex">
          <div className="card rounded overflow-hidden shadow-lg">
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