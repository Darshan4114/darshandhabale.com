import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
;(() => {
  const site = "https://darshandev.tech/"
  const data = fs.readdirSync("./src/mdx/posts")
  const postsDirectory = join(process.cwd(), "src/mdx/posts")

  console.log(data)
  const siteMapData = data.map((slug) => {
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = join(postsDirectory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    return { url: site + realSlug, date: data.date }
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${siteMapData
        .map((blog) => {
          return `
            <url>
              <loc>${blog.url}</loc>
              <lastmod>${new Date(blog.date).toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join("")}
      </urlset>
        `
  fs.writeFileSync("./public/sitemap.xml", sitemap)
})()
