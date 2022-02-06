import config from "../blog.config"
import Head from "next/head"
import Header from "comp/Header"
import Footer from "comp/Footer"
import styl from "styles/css/index.module.css"
import Posts from "../src/views/Posts"
import { getAllPosts } from "../src/api"

const PostsPage = ({ posts, prevPosts, nextPosts }) => {
  return (
    <>
      <div className={styl.container}>
        <Head>
          <title>DarshanDev: Blog and Portfolio</title>
        </Head>
        <Header />
        <Posts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />

        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
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
  ])

  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}

export default PostsPage
