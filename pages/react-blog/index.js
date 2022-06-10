import styl from "styl/ReactBlog.module.css"
import { getReactPosts } from "../../src/api"
import ReactPosts from "../../src/views/ReactPosts"
import Header from "comp/Header"
import config from "../../blog.config"

export default function ReactBlog({ posts, prevPosts, nextPosts }) {
  console.log("postss", posts)

  return (
    <>
      <Header />
      <div className={styl.reactBlogList}>
        <ReactPosts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = getReactPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "excerpt",
    "draft",
    "tags",
  ])

  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}
