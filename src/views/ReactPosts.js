import MDX from "@mdx-js/runtime"
// import { Flex, Box, Heading, Text } from "theme-ui"
import Image from "next/image"
import DraftBadge from "../ui/DraftBadge"
import Link from "next/link"
import styl from "styl/Posts.module.scss"

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
            <Link href={"/react-blog/" + post.slug} className={styl.postTitle}>
              <div
                className={styl.postContainer}
                style={{ pb: 5 }}
                key={post.slug}
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
                  <h2>
                    {/* {post.draft && <DraftBadge />} */}
                    {post.title}
                  </h2>

                  {/* <div className={styl.excerpt}>
                  <MDX>{post.excerpt}</MDX>
                </div>
                <Link href={"/" + post.slug} passHref>
                  <a>Read more...</a>
                </Link> */}
                </div>
              </div>
            </Link>
          ))}
      <div style={{ fontStyle: "italic" }}>
        <div style={{ width: "50%", py: 3, textAlign: "left" }}>
          {prevPosts !== null && (
            <Link href={"/blog/" + prevPosts} passHref>
              « see newer posts
            </Link>
          )}
        </div>
        <div style={{ width: "50%", py: 3, pr: 3, textAlign: "right" }}>
          {nextPosts !== null && (
            <Link href={"/blog/" + nextPosts} passHref>
              see older posts »
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Posts
