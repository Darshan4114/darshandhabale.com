import Head from "next/head"
import Image from "next/image"
import Header from "comp/Header"
import Footer from "comp/Footer"
import styl from "styles/css/air3x3.module.css"
import { useState, useEffect } from "react"

export default function Air3x3() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    function checkIfDesktop() {
      if (window.innerWidth < 750) {
        setIsDesktop(false)
      } else {
        setIsDesktop(true)
      }
    }
    checkIfDesktop()
    window.addEventListener("resize", () => {
      checkIfDesktop()
    })
  }, [])
  return (
    <>
      <div className={styl.container}>
        <Head>
          <title>DarshanDev Project: Air3x3</title>
        </Head>
        <Header />
        <div className={styl.landing}>
          <h1>
            Air 3x3
            <span>The basketball tournament application</span>
          </h1>
          {/* <div className={styl.hero}>
            <Image
              src="/img/portfolio/air3x3/hero.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
        </div>
        <div className={styl.features}>
          <h2>Features</h2>
          <section className={styl.feature}>
            <h3>Custom booking system</h3>
            <div className={styl.img}>
              <Image
                src={`/img/portfolio/air3x3/tour_book${
                  isDesktop ? "_desktop" : ""
                }.svg`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>

          <section className={styl.feature}>
            <h3>Admin Navigation</h3>
            <div className={styl.img}>
              <Image
                src="/img/portfolio/air3x3/admin_nav.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
          <section className={styl.feature}>
            <h3>Stripe Integration</h3>
            <div className={styl.img}>
              <Image
                src="/img/portfolio/air3x3/stripe_integration.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
          <section className={styl.feature}>
            <h3>Customizable Email Integration</h3>
            <div className={styl.img}>
              <Image
                src="/img/portfolio/air3x3/custom_email_templates.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
          <section className={styl.feature}>
            <h3>Invite and team management</h3>
            <div className={styl.img}>
              <Image
                src="/img/portfolio/air3x3/invite_and_team_mgmt.jpg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
