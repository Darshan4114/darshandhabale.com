import Link from "next/link"
import {useRouter} from "next/router"
import {MDXProvider} from "@mdx-js/react"
import Logo from "comp/Logo"
import styl from "styl/Header.module.scss"
import {useState, useEffect, useContext} from "react"
import ThemeToggler from 'comp/ThemeToggler'
import {ThemeContext} from "comp/ThemeContext"

const Header = (props) => {
  const [showNavUl, setShowNavUl] = useState(false)
  const {theme} = useContext(ThemeContext);
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
        className={`${styl.container} ${props?.paddingClass === "pr15" && styl.pr15
          } ${theme === 'dark' && styl.darkmode}`}
      >
        <Logo darkmode={theme === 'dark'} />
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
                  <a>work</a>
                </Link>
              </li>
            )}
            <li>
              <Link href="https://www.youtube.com/channel/UC77DrmHbTucUG_IPuAujnHw">
                <a target="_blank">youtube</a>
              </Link>
            </li>
            {/* {router.asPath !== "/mini-games" && (
              <li>
                <Link href="/mini-games">
                  <a>Mini Games</a>
                </Link>
              </li>
            )} */}
            {router.asPath !== "/about" && (
              <li>
                <Link href="/about">
                  <a>about</a>
                </Link>
              </li>
            )}
            {router.asPath !== "/consult" && (
              <li>
                <Link href="/consult">
                  <a>consult</a>
                </Link>
              </li>
            )}
            <ThemeToggler />
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
