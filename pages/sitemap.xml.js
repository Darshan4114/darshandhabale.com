import fs from "fs"
import { getAllPosts } from "../src/api"
const Sitemap = () => {}

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:5000",
    production: "https://darshandev.tech",
  }[process.env.NODE_ENV]

  const excludeList = ["_app.js", "_document.js", "_error.js", "sitemap.xml.js"]

  const staticPages = fs
    .readdirSync(
      {
        development: "pages",
        production: "./",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      const slug = staticPage.slice(0, staticPage.length - 3)
      return (
        !excludeList.includes(staticPage) &&
        staticPage.endsWith(".js") &&
        !slug.startsWith["["] &&
        !slug.endsWith(["]"])
      )
    })
    .map((staticPage) => {
      if (staticPage === "index.js")
        return `${baseUrl}/${staticPage.slice(0, staticPage.length - 8)}`
      if (staticPage.endsWith(".js"))
        return `${baseUrl}/${staticPage.slice(0, staticPage.length - 3)}`
    })

  const posts = getAllPosts(["date", "slug"]).map((post) => {
    return {
      url: baseUrl + "/" + post.slug.slice(0, post.slug.length - 4),
      date: post.date,
    }
  })
  console.log(getAllPosts(["date", "slug"]))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join("")}
      ${posts
        .map((post) => {
          return `
            <url>
              <loc>${post.url}</loc>
              <lastmod>${new Date(post.date).toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join("")}
    </urlset>
  `

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
