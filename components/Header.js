import config from "../blog.config"
import Link from "next/link"
import { useRouter } from "next/router"
import { MDXProvider } from "@mdx-js/react"
import { Box, Heading } from "theme-ui"
// import Nav from "../src/ui/Nav"
import Logo from "comp/Logo"
// import Blurb from "../mdx/blurb.mdx"
import styl from "styl/Header.module.css"
import { useState, useEffect } from "react"
import Image from "next/image"
const Header = (props) => {
  const [showNavUl, setShowNavUl] = useState(false)
  const router = useRouter()
  useEffect(() => {
    function resetNavUl() {
      if (window.innerWidth < 750) {
        setShowNavUl(false)
      } else {
        setShowNavUl(true)
      }
    }
    resetNavUl()
    window.addEventListener("resize", () => {
      resetNavUl()
    })
  }, [])
  return (
    <MDXProvider>
      <div
        className={`${styl.container} ${
          props?.paddingClass === "pr15" && styl.pr15
        } `}
      >
        <Logo />
        {showNavUl && (
          <ul className={styl.navUl}>
            {router.asPath !== "/" && (
              <li>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
            )}
            {router.asPath !== "/portfolio" && (
              <li>
                <Link href="/portfolio">
                  <a>Portfolio</a>
                </Link>
              </li>
            )}
            {/* <li>
              <Link href="https://www.youtube.com/channel/UC77DrmHbTucUG_IPuAujnHw">
                <a target="_blank">Youtube</a>
              </Link>
            </li> */}
            {router.asPath !== "/mini-games" && (
              <li>
                <Link href="/mini-games">
                  <a>Mini Games</a>
                </Link>
              </li>
            )}
            {router.asPath !== "/about" && (
              <li>
                <Link href="/about">
                  <a>About Author</a>
                </Link>
              </li>
            )}
            {/* <li>
              <Link href="/resume.pdf">
                <a>Download resume</a>
              </Link>
            </li> */}
            {/* <li>
              <Link href="/just-fun/when-the-earth-blows-up">
                <a>When the earth blows up</a>
              </Link>
            </li> */}
          </ul>
        )}
      </div>
    </MDXProvider>
  )
}
export default Header
