import fs from "fs"
import path, { join } from "path"

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
      .filter((filePath) => filePath.slice(0, 5) === "pages" && filePath.slice(filePath.length - 3, filePath.length) === ".js")
      .map((filePath) => {
        let url = filePath.slice(6, filePath.length - 3)
        console.log('url', url)
        url = url.replace("index", "").replace(/\\/g, '/');
        return url;
      })
      .filter((url) => !EXCLUDE_LIST.includes(url) && !url?.includes("["))
    console.log('pagesDirUrls', pagesDirUrls);

    //Processing /posts dir
    const blogPages = fs.readdirSync("./pages/blog");
    const reactBlogPages = fs.readdirSync("./pages/react-blog");

    const blogData = blogPages
      .filter((filePath) => {
        return filePath.slice(filePath.length - 4, filePath.length) === ".mdx"
      })
      .map((slug) => {
        const realSlug = slug.replace(/\.mdx$/, "")
        return { url: site + 'blog/' + realSlug, date: new Date() }
      })

    const reactBlogData = reactBlogPages
      .filter((filePath) => {
        return filePath.slice(filePath.length - 4, filePath.length) === ".mdx"
      })
      .map((slug) => {
        const realSlug = slug.replace(/\.mdx$/, "")
        return { url: site + 'react-blog/' + realSlug, date: new Date() }
      })

    const siteMapData = [...blogData, ...reactBlogData];

    console.log('siteMapData', siteMapData)
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
