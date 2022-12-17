import styl from "styl/ReactBlog.module.css"
import { getReactPosts } from "../../src/api"
import ReactPosts from "../../src/views/ReactPosts"
import Header from "comp/Header"
import BlogNav from "comp/BlogNav"
import config from "../../blog.config"

export default function ReactBlog({ posts, prevPosts, nextPosts }) {
  return (
    <div className={styl.container}>
      <Header darkmode/>
      <main>
        <BlogNav posts={posts} />
        <div className={styl.reactBlogList}>
          <ReactPosts
            posts={posts}
            prevPosts={prevPosts}
            nextPosts={nextPosts}
          />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getReactPosts(
    [
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
      "navTitle",
    ],
    false
  )

  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}
