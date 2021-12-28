import React, { useState, useEffect } from "react"
import Head from "next/head"
import Nav from "../src/ui/Nav"
import styl from "styles/css/app.module.css"

import { useRouter } from "next/router"
import "../styles/globals.css"
// import nProgress from "nprogress"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [tabValue, setTabValue] = useState(router.asPath || "/")

  function redirectAndSetTabValue(href) {
    setTabValue(href)
    router.push(href)
  }

  useEffect(() => {
    setTabValue(router.asPath)
  }, [router.asPath])

  // useEffect(async () => {
  //   router.events.on("routeChangeStart", () => nProgress.start())
  //   router.events.on("routeChangeComplete", () => nProgress.done())
  //   router.events.on("routeChangeError", () => nProgress.done())
  // }, [])

  return (
    <>
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Noto+Serif&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>

      <div className={styl.navAndComponentContainer}>
        <Nav tabValue={tabValue} setTabValue={redirectAndSetTabValue} />
        <Component {...pageProps} tabValue={tabValue} />
      </div>
    </>
  )
}

export default MyApp
