import MDX from "@mdx-js/runtime"
import { Flex, Box, Heading, Text } from "theme-ui"
import Image from "next/image"
import DraftBadge from "../ui/DraftBadge"
import Link from "next/link"
import styl from "styl/Posts.module.css"
import { useState } from "react"

const Posts = ({ posts, prevPosts, nextPosts }) => {
  const [col1, setCol1] = useState([])
  const [col2, setCol2] = useState([])
  const [col3, setCol3] = useState([])
  const isLocal = process.env.NODE_ENV === "development"

  return (
    <div className={styl.container}>
      <div>
        {posts &&
          posts
            .slice(0, Math.floor(posts.length / 3) + 1)
            .filter((post) => {
              return isLocal || !post.draft
            })
            .map((post) => <Post post={post} />)}
      </div>

      <div>
        {posts &&
          posts
            .slice(
              posts.length - 2 * Math.floor(posts.length / 3),
              posts.length - 1 * Math.floor(posts.length / 3)
            )
            .filter((post) => {
              return isLocal || !post.draft
            })
            .map((post) => <Post post={post} />)}
      </div>
      <div>
        {posts &&
          posts
            .slice(
              posts.length - 1 * Math.floor(posts.length / 3),
              posts.length
            )
            .filter((post) => {
              return isLocal || !post.draft
            })
            .map((post) => <Post post={post} />)}
      </div>

      <Flex sx={{ fontStyle: "italic" }}>
        <Box sx={{ width: "50%", py: 3, textAlign: "left" }}>
          {prevPosts !== null && (
            <Link href={"/blog/" + prevPosts} passHref>
              <a>« see newer posts</a>
            </Link>
          )}
        </Box>
        <Box sx={{ width: "50%", py: 3, pr: 3, textAlign: "right" }}>
          {nextPosts !== null && (
            <Link href={"/blog/" + nextPosts} passHref>
              <a>see older posts »</a>
            </Link>
          )}
        </Box>
      </Flex>
    </div>
  )
}

function Post({ post }) {
  return (
    <Link
      href={
        post?.tags?.includes("react") ? "/react-blog/" : "/blog/" + post.slug
      }
      passHref
      key={post.slug}
    >
      <a className={styl.postTitle}>
        <div
          className={styl.postContainer}
          key={post.slug}
          style={{ marginBottom: "1em" }}
        >
          {post.coverImage && (
            <div className={styl.coverImgContainer}>
              <Image
                src={post.coverImage}
                layout="fill"
                objectFit="cover"
                alt={post.coverImageAlt || ""}
              />
            </div>
          )}
          <div className={styl.text}>
            <h2>{post.title}</h2>
            {post?.tags?.length > 0 &&
              post.tags.map((tag) => <p className={styl.tag}>{tag}</p>)}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Posts
