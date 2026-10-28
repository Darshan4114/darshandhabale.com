import MDX from "@mdx-js/runtime"
import Image from "next/image"
import CodeBlock from "src/ui/CodeBlock"

const mdxComponents = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  Image,
}

// Split out so the MDX runtime only ships on case studies that have an article.
export default function CaseStudyArticle({ content }) {
  return <MDX components={mdxComponents}>{content}</MDX>
}
