import MDX from "@mdx-js/runtime"
import { Flex, Box, Heading, Text } from "theme-ui"
import Image from "next/image"
import DraftBadge from "../ui/DraftBadge"
import Link from "next/link"
import styl from "styl/Posts.module.css"

const Posts = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === "development"

  return (
    <div className={styl.container}>
      {posts &&
        posts
          .filter((post) => {
            return isLocal || !post.draft
          })
          .map((post) => (
            <Box className={styl.postContainer} sx={{ pb: 5 }} key={post.slug}>
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
                <h2>
                  {/* {post.draft && <DraftBadge />} */}
                  <Link href={"/" + post.slug} passHref>
                    <a className={styl.postTitle}>{post.title}</a>
                  </Link>
                </h2>

                {/* <div className={styl.excerpt}>
                  <MDX>{post.excerpt}</MDX>
                </div>
                <Link href={"/" + post.slug} passHref>
                  <a>Read more...</a>
                </Link> */}
              </div>
            </Box>
          ))}
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

export default Posts
