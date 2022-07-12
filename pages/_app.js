import React, { useState, useEffect } from "react"
import Head from "next/head"
import Nav from "../src/ui/Nav"
import styl from "styles/css/app.module.css"
import { ToastContainer, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
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
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Montserrat:wght@300;700&family=Ovo&family=PT+Serif&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YRSWJK38X4"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-YRSWJK38X4');`}
        </script>
        {/* <!-- Global site tag (gtag.js) - Google Ads: 348077670 --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-348077670"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-348077670');`}
        </script>

        {/* <!-- Begin Mailchimp Signup Form --> */}
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css"
          rel="stylesheet"
          type="text/css"
        />
        <style type="text/css">
          /* Add your own Mailchimp form style overrides in your site stylesheet
          or in this style block. We recommend moving this block and the
          preceding CSS link to the HEAD of your HTML file. */
        </style>
        <script id="mcjs">
          {`!function(c,h,i,m,p)
          {
            ((m = c.createElement(h)),
            (p = c.getElementsByTagName(h)[0]),
            (m.async = 1),
            (m.src = i),
            p.parentNode.insertBefore(m, p))
          }
          (document,"script","https://chimpstatic.com/mcjs-connected/js/users/83d32f24735b5dda5dad59075/337312b53033e158d020ebbd1.js");
        `}
        </script>
      </Head>

      <div className={styl.navAndComponentContainer}>
        <Nav tabValue={tabValue} setTabValue={redirectAndSetTabValue} />
        <Component {...pageProps} tabValue={tabValue} />
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar
          transition={Slide}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  )
}

export default MyApp
