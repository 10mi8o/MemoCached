const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

// Contentfulにポストされた記事を全て取得する
export async function fetchAllPosts() {
  const posts = await client.getEntries({
    content_type: 'blogPost',
  })
  if (posts.items) {
    return posts.items
  } else {
    console.log('Error getting Posts.')
  }
}

// Contentfulにポストされた記事をSlugで１件抽出
export async function fetchPostBySlug(slug) {
  const post = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  })
  return post
}