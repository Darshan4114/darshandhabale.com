import Link from "next/link"
import { useRouter } from "next/router"
import { MDXProvider } from "@mdx-js/react"
import Logo from "comp/Logo"
import styl from "./Header.module.scss"
import { useContext } from "react"
import ThemeToggler from 'comp/ThemeToggler'
import { ThemeContext } from "comp/ThemeContext"

const Header = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const router = useRouter()
  return (
    <MDXProvider>
      <div
        className={`${styl.container} ${props?.paddingClass === "pr15" && styl.pr15
          } ${theme === 'dark' && styl.darkmode}`}
      >
        <Logo darkmode={theme === 'dark'} />
        <ul className={styl.navUl}>
          {router.pathname !== "/" && (
            <li>
              <Link href="/">
                about
              </Link>
            </li>
          )}
          {router.pathname !== "/portfolio" && (
            <li>
              <Link href="/portfolio">
                portfolio
              </Link>
            </li>
          )}
          {router.pathname !== "/blog" && (
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
      </div>
    </MDXProvider>
  )
}
export default Header
