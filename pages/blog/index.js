import Head from "next/head"
import Header from "comp/Header"
import Footer from "comp/Footer"
import styl from "./blog.module.scss"
import Posts from "../../components/Posts"

const PostsPage = ({ posts, prevPosts, nextPosts }) => {

  return (
    <>
      <div className={styl.container}>
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
        <Header theme='dark' />
        {/* <Featured /> */}
        <Posts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />

        <Footer />
      </div>
    </>
  )
}

export default PostsPage
