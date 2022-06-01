import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "src/mdx/posts")

export function getPostSlugs() {
  console.log("process.env.NODE_ENV = ", process.env.NODE_ENV)
  console.log("postsDirectory  = ", postsDirectory)
  const files = fs
    .readdirSync(postsDirectory)
    .filter((slug) => slug.endsWith(".mdx"))
  console.log("files = ", files)
  return files
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
      return getPostBySlug(slug, fields)
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  return posts
}
export function getReactPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => {
      return getPostBySlug(slug, fields)
    })
    .filter((post) => post?.tags?.includes("react"))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  return posts
}
