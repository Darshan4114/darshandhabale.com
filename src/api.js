import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const postsDirectory =
  process.env.NODE_ENV === "development"
    ? join(process.cwd(), "src/mdx/posts")
    : "./"

export function getPostSlugs() {
  console.log("process.env.NODE_ENV = ", process.env.NODE_ENV)
  console.log("postsDirectory  = ", postsDirectory)
  return fs.readdirSync(postsDirectory).filter((slug) => slug.endsWith(".mdx"))
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug, fields)
      post.slug = slug
      return post
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  return posts
}
