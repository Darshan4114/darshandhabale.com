import config from "../blog.config"
import {useEffect, useRef} from "react"
import Head from "next/head"
import Header from "comp/Header"
import Footer from "comp/Footer"
import Featured from "comp/Featured"
import styl from "styl/index.module.scss"
import Posts from "../src/views/Posts"
import {getAllPosts} from "../src/api"

const PostsPage = ({posts, prevPosts, nextPosts}) => {
  const player = useRef(null)
  useEffect(() => {
    // useAnimationFrame(()=>{
    //         player.current.style.top += 1;
    // })
  }, [])

  return (
    <>
      <div className={styl.container}>
        {/* <div className={styl.player} ref={player}></div>
        <div className={styl.ground}></div> */}

        <Head>
          <title>
            Best React blog for beginners | Learn React, Javascript, Node.js,
            Next.js | Master React in 10 blogs
          </title>
          <meta
            name="description"
            content="Best blog and code snippets to learn JavaScript, Next.js, Node.js and Firebase. -By Darshan Dhabale. A full-stack developer with 3 years of experience in MERN stack. Upskill as a developer with React.js"
          />
        </Head>
        <Header darkmode={true} />
        <Featured />
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
    "tags",
  ])
  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2

  return {
    props: {posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts},
  }
}

export default PostsPage
