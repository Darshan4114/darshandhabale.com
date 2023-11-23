import Head from "next/head"
import Script from "next/script"
// import "react-toastify/dist/ReactToastify.min.css"
import "../styles/globals.css"

function MyApp ({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YRSWJK38X4"></Script>
        <Script >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YRSWJK38X4');
            `}
        </Script>

        {/* <!-- Begin Mailchimp Signup Form --> */}
        <link
          defer
          href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css"
          rel="stylesheet"
          type="text/css"
        />

        <Script id="mcjs" defer>
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
        </Script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
