import Head from "next/head"
import "react-toastify/dist/ReactToastify.css"
import "../styles/globals.css"

function MyApp ({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YRSWJK38X4"></script>
        <script >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YRSWJK38X4');
            `}
        </script>

        {/* <!-- Begin Mailchimp Signup Form --> */}
        <link
          defer
          href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css"
          rel="stylesheet"
          type="text/css"
        />
        <style type="text/css">
          /* Add your own Mailchimp form style overrides in your site stylesheet
          or in this style block. We recommend moving this block and the
          preceding CSS link to the HEAD of your HTML file. */
        </style>
        <script id="mcjs" defer>
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
