import { useEffect } from "react"
import theme from "./Theme"
import PropTypes from "prop-types"
import Head from "./Head"
import Style from "./Style"
import Header from "comp/Header"
import AuthorSummary from "comp/AuthorSummary"
import MailchimpForm from "comp/MailchimpForm"
import styl from "styl/Layout.module.scss"
import Main from "../ui/Main"
import Nav from "../ui/Nav"
import Footer from "../ui/Footer"

// inject inline styles on the body before the page is rendered to avoid the flash of light if we are in dark mode
let codeToRunOnClient = false
if (theme.colors.modes && theme.colors.modes.length !== 0) {
  codeToRunOnClient = `
  (function() {
    const theme = ${JSON.stringify(theme)}

    let mode = localStorage.getItem("theme-ui-color-mode")

    if (!mode) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      if (typeof mql.matches === 'boolean' && mql.matches) {
        mode = "dark"
      }
    }

    if (mode && typeof theme.colors.modes === "object" && typeof theme.colors.modes[mode] === "object") {
      const root = document.documentElement
      Object.keys(theme.colors.modes[mode]).forEach((colorName) => {
        document.body.style.setProperty("--theme-ui-colors-"+colorName, "var(--theme-ui-colors-primary,"+theme.colors.modes[mode][colorName]+")")
      })
    }
  })()`
}

const Layout = (props) => {
  useEffect(() => {
    // the theme styles will be applied by theme ui after hydration, so remove the inline style we injected on page load
    document.body.removeAttribute("style")
  }, [])

  return (
    <>
      <Head {...props} />
      {codeToRunOnClient && (
        <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
      )}
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <Header />
        <div className={styl.container}>
          {/* <AuthorSummary /> */}
          <Main>{props.children}</Main>
        </div>

        {/* <MailchimpForm /> */}
        <Nav />
        {/* <Footer /> */}
      </div>

      {/* <Style /> */}
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Layout
