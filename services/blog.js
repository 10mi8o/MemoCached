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

// ページネーション周りの実装は要検討
const MAX_ENTRY = 8;
export async function fetchLimitPosts() {
  const posts = await client.getEntries({
    content_type: 'blogPost',
    limit: MAX_ENTRY,
  })
  return posts.items;
}

// Contentfulにポストされた記事をSlugで１件抽出
export async function fetchPostBySlug(slug) {
  const post = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  })
  return post
}

// slugで一致するCategoryを抽出
// export async function fetchCategory(slug) {
//   const category = await client.getEntries({
//     content_type: 'category',
//     'fields.slug': slug
//   })
//   return category
// }

// slugで一致するTagを抽出
export async function fetchTag(slug) {
  const tag = await client.getEntries({
    content_type: 'tag',
    'fields.slug': slug
  })
  return tag
}

// Categoryで記事を抽出
// export async function fetchPostByCategory(id) {
//   const posts = await client.getEntries({
//     content_type: 'blogPost',
//     'fields.category.sys.id': id
//   })
//   // console.log(posts.items[0].fields.category.fields.slug)
//   return posts
// }

// Tagで記事を抽出
export async function fetchPostByTag(id) {
  const posts = await client.getEntries({
    content_type: 'blogPost',
    'fields.tag.sys.id': id
  })
  return posts
}
