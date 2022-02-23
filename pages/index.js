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
          <meta
            name="description"
            content="Blog and code snippets to learn JavaScript, Next.js and Firebase, and other coding stuff. By Darshan D. Darshan D. is a programmer by profession who likes to show his projects online."
          />
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
