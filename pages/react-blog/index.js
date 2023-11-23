import styl from "styl/ReactBlog.module.scss"
import Header from "comp/Header"
import BlogNav from "comp/BlogNav"
import config from "../../blog.config"

export default function ReactBlog ({ posts, prevPosts, nextPosts }) {
  return (
    <div className={styl.container}>
      <Header darkmode />
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
