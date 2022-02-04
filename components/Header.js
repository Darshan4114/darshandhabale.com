import config from "../blog.config"
import Link from "next/link"
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
      <div className={styl.container}>
        <Logo />
        {showNavUl && (
          <ul className={styl.navUl}>
            <li>
              <Link href="/portfolio/air3x3">
                <a>Portfolio</a>
              </Link>
            </li>
            {/* <li>
              <Link href="https://www.youtube.com/channel/UC77DrmHbTucUG_IPuAujnHw">
                <a target="_blank">Youtube</a>
              </Link>
            </li> */}
            <li>
              <Link href="/mini-games">
                <a>Mini Games</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </MDXProvider>
  )
}
export default Header
