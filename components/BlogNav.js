import Image from "next/image"
import styl from "styl/BlogNav.module.scss"

export function getStaticProps() {}
export default function BlogNav(props) {
  return (
    <div className={styl.navContainer}>
      <div className={styl.reactLogo}>
        {/* <p>Learn</p> */}
        <Image src="/img/react.png" height="70" width="70" />
      </div>
      <ol>
        {props.posts.reverse().map((blog) => (
          <li className={styl.navTab}>{blog.navTitle}</li>
        ))}
      </ol>
    </div>
  )
}
