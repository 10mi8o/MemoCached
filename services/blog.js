const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

// Contentfulにポストされたエントリを全て取得する
export async function fetchAllEntries() {
  const articles = await client.getEntries()
  if (articles.items) {
    return articles.items
  } else {
    console.log('Error getting Articles')
  }
}