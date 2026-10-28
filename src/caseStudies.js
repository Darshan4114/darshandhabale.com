import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const caseStudiesDirectory = join(process.cwd(), "src/mdx/case-studies")
const portfolioImagesDirectory = join(process.cwd(), "public/img/portfolio")

// The written case study for a project, or null until one is written.
export function getCaseStudyArticle(slug) {
  const fullPath = join(caseStudiesDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"))
  // JSON round-trip turns YAML dates into strings so getStaticProps can serialize them.
  return { ...JSON.parse(JSON.stringify(data)), content }
}

// Screenshots named `<imageDir>-N.png` in /public/img/portfolio/<imageDir>, in order.
export function getScreenshots(imageDir) {
  if (!imageDir) return []
  const dir = join(portfolioImagesDirectory, imageDir)
  if (!fs.existsSync(dir)) return []
  const pattern = new RegExp(`^${imageDir}-(\\d+)\\.(png|jpe?g|webp)$`)
  return fs
    .readdirSync(dir)
    .map((file) => ({ file, match: file.match(pattern) }))
    .filter(({ match }) => match)
    .sort((a, b) => Number(a.match[1]) - Number(b.match[1]))
    .map(({ file }) => `/img/portfolio/${imageDir}/${file}`)
}
