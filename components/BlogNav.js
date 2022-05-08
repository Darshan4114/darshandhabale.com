import Image from "next/image"
import { useEffect, useState } from "react"
import styl from "styl/BlogNav.css"

export function getStaticProps() {}
export default function BlogNav(props) {
  const [blogList, setBlogList] = useState([])
  return (
    <div className={styl.navContainer}>
      <div className={styl.reactLogo}>
        <p>Learn</p>
        <Image src="/img/react.png" height="70" width="70" />
      </div>
      <ol>
        {blogList.map((blog) => (
          <li>{blog.navTitle}</li>
        ))}
      </ol>
    </div>
  )
}
