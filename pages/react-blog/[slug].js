import Wrapper from "../../src/layout/Wrapper"
import BlogPost from "../../src/views/BlogPost"
import config from "../../blog.config.js"
import { getPostBySlug, getAllPosts } from "../../src/api"
import { useEffect } from "react"

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "draft",
  ])

  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      }
    }),
    fallback: false,
  }
}

export default function ReactBlog({ post }) {
  useEffect(() => {
    const __semio__params = {
      graphcommentId: "DarshanDev-Blog", // make sure the id is yours

      behaviour: {
        // HIGHLY RECOMMENDED
        uid: post.slug, // uniq identifer for the comments thread on your page (ex: your page id)
      },

      // configure your variables here
    }
    function __semio__onload() {
      __semio__gc_graphlogin(__semio__params)
    }

    ;(function () {
      var gc = document.createElement("script")
      gc.type = "text/javascript"
      gc.async = true
      gc.onload = __semio__onload
      gc.defer = true
      gc.src =
        "https://integration.graphcomment.com/gc_graphlogin.js?" + Date.now()
      ;(
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(gc)
    })()
  }, [])
  return (
    <Wrapper
      url={config.url + post.slug}
      title={post.title}
      description={post.excerpt}
      imageUrl={config.url + post.coverImage}
      imageAlt={post.coverImageAlt}
    >
      <BlogPost post={post} />
    </Wrapper>
  )
}
