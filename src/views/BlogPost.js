import MDX from "@mdx-js/runtime"
import config from "../../blog.config"
// import { DiscussionEmbed } from "disqus-react"
// import { Box, Text, Heading } from "theme-ui"
import Link from "next/link"
import Image from "next/image"
import Container from "../ui/Container"
import CodeBlock from "../ui/CodeBlock"
import DraftBadge from "../ui/DraftBadge"
import styl from "styl/Post.module.scss"

const BlogPost = ({ post }) => {
  const isLocal = process.env.NODE_ENV === "development"

  const components = {
    Box: (props) => <div {...props} />,
    pre: (props) => <div {...props} />,
    code: CodeBlock,
    script: (props) => <script {...props}>{props.children}</script>,
    Image,
  }

  return (
    <Container className={styl.container}>
      {!isLocal && post.draft ? (
        <p style={{ fontSize: 2, color: "#666" }}>
          This post has not yet been published. Please try again later.
        </p>
      ) : (
        <>
          <div style={{ pb: [3, 4] }} className={styl.postTitle}>
            <h1
              style={{ fontSize: [5, 7], position: "relative" }}
              className={styl.heading}
            >
              {post.draft && (
                <div style={{ top: "10px", right: 1, position: "relative" }}>
                  <DraftBadge />
                </div>
              )}
              {post.title}
            </h1>
            {config.showDate && (
              <>
                <p
                  style={{ fontStyle: "italic", fontSize: [2], color: "#777" }}
                >
                  {new Date(post.date).toDateString()}
                </p>
                <p>
                  <p
                    style={{ fontStyle: "italic", fontSize: [1], color: "#777" }}
                  >
                    - D. K. Dhabale
                  </p>
                </p>
              </>
            )}
          </div>
          {post.coverImage && (
            <div
              style={{
                mb: 3,
                // border: "1px solid",
                // borderColor: "rgba(0,0,0,.1)",
                // position:"relative"
              }}
            >
              {/* <div
                style={{
                  height: post.coverImageHeight,
                  width: post.coverImageWidth,
                  maxWidth: "84vw",
                  position: "relative",
                }}
              > */}
              <img
                src={post.coverImage}
                layout="fill"
                objectFit="contain"
                style={{
                  margin: "0 auto",
                  width: "700px",
                  maxWidth: "calc(100vw - 2em)",
                  // minWidth: "500px",
                }}
                alt={post.coverImageAlt || ""}
              />
              {/* </div> */}
            </div>
          )}
          <MDX components={components}>{post.content}</MDX>
          <div id="graphcomment"></div>
        </>
      )}
    </Container>
  )
}

export default BlogPost
