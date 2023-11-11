import Link from "next/link"
import { useRouter } from "next/router"
import { MDXProvider } from "@mdx-js/react"
import Logo from "comp/Logo"
import styl from "./Header.module.scss"
import { useState, useEffect, useContext } from "react"
import ThemeToggler from 'comp/ThemeToggler'
import { ThemeContext } from "comp/ThemeContext"

const Header = (props) => {
  const [showNavUl, setShowNavUl] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext);
  const router = useRouter()
  useEffect(() => {
    function resetNavUl () {
      if (window.innerWidth < 750) {
        setShowNavUl(false)
      } else {
        setShowNavUl(true)
      }
    }
    // if (props.theme !== theme) { toggleTheme() };
    resetNavUl()
    window.addEventListener("resize", () => {
      resetNavUl()
    })
  }, [])
  return (
    <MDXProvider>
      <div
        className={`${styl.container} ${props?.paddingClass === "pr15" && styl.pr15
          } ${theme === 'dark' && styl.darkmode}`}
      >
        <Logo darkmode={theme === 'dark'} />
        {showNavUl && (
          <ul className={styl.navUl}>
            {router.asPath !== "/" && (
              <li>
                <Link href="/">
                  about
                </Link>
              </li>
            )}
            {router.asPath !== "/portfolio" && (
              <li>
                <Link href="/portfolio">
                  portfolio
                </Link>
              </li>
            )}
            {router.asPath !== "/blog" && (
              <li>
                <Link href="/blog">
                  blog
                </Link>
              </li>
            )}
            <li>
              <Link target="_blank" href="https://www.youtube.com/channel/UC77DrmHbTucUG_IPuAujnHw">
                youtube
              </Link>
            </li>
            {/* <ThemeToggler /> */}
          </ul>
        )}
      </div>
    </MDXProvider>
  )
}
export default Header
