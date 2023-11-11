import fs from "fs"
import path, { join } from "path"
import matter from "gray-matter"

// Recursive file list
const readDirRecursive = async (filePath) => {
  const dir = await fs.promises.readdir(filePath)
  const files = await Promise.all(
    dir.map(async (relativePath) => {
      const absolutePath = path.join(filePath, relativePath)
      const stat = await fs.promises.lstat(absolutePath)

      return stat.isDirectory() ? readDirRecursive(absolutePath) : absolutePath
    })
  )
  return files.flat()
}

  ; (async () => {
    const site = "https://darshandhabale.com/"
    const EXCLUDE_LIST = ["_document", "_app"]

    //Processing /pages dir
    const pagesDir = await readDirRecursive("pages")
    console.log('pagesDir', pagesDir);
    pagesDir.flat(Number.POSITIVE_INFINITY)
    const pagesDirUrls = pagesDir
      .filter((filePath) => filePath.slice(0, 6) === "pages\\" && filePath.slice(filePath.length - 3, filePath.length) === ".js")
      .map((filePath) => {
        let url = filePath.slice(6, filePath.length - 3)
        console.log('url', url)
        url = url.replace("index", "").replace(/\\/g, '/');
        return url;
      })
      .filter((url) => !EXCLUDE_LIST.includes(url) && !url?.includes("["))

    //Processing /posts dir
    const data = fs.readdirSync("./src/mdx/posts")
    const postsDirectory = join(process.cwd(), "src/mdx/posts")

    const siteMapData = data
      .filter((slug) => {
        const skipList = [".DS_Store"]
        return !skipList.includes(slug)
      })
      .map((slug) => {
        const realSlug = slug.replace(/\.mdx$/, "")
        const fullPath = join(postsDirectory, `${realSlug}.mdx`)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data } = matter(fileContents)
        return { url: site + 'blog/' + realSlug, date: data.date }
      })
    console.log('pagesDirUrls', pagesDirUrls)
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pagesDirUrls
        .map((page) => {
          return `
            <url>
              <loc>${site + page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join("")}
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
