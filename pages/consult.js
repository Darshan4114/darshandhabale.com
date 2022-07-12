import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Header from "comp/Header"
import ScrollIcon from "comp/ScrollIcon"
import ProfilePic from "comp/ProfilePic"
import ButtonIcon from "comp/ButtonIcon"
// import PageScroll from "util/PageScroll"
import styl from "styl/consult.module.css"
import ReactFullpage from "@fullpage/react-fullpage"

import { useEffect } from "react"
import { toast } from "react-toastify"
import { toastOptions } from "comp/constants"

const ConsultPage = () => {
  useEffect(() => {
    // new PageScroll("#container", {
    //   animDuration: 500,
    //   nav: [],
    // })
    // new fullpage("#fullpage", {
    //   //options here
    //   autoScrolling: true,
    //   scrollHorizontally: true,
    // })
  }, [])
  function copyEmail() {
    const copy = async (text) => await navigator.clipboard.writeText(text)
    copy("darshan@darshandev.tech").then(() => {
      toast.success("Email copied!")
    })
  }
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url
      }
    }
    gtag("event", "conversion", {
      send_to: "AW-348077670/YB3ZCIiiiM0DEOb8_KUB",
      event_callback: callback,
    })
    return false
  }
  return (
    <>
      <Head>
        <title>
          React developer | React/JavaScript developer with 3 years of
          experience | MERN stack | React.js, Node.js, Next.js, Django, Python
        </title>
        <meta
          name="description"
          content="React developer with 3 years of
          experience in MERN stack. Tech stack - React.js, Node.js, Next.js, Django, Python and Firebase. Darshan Dhabale - https://linkedin.com/in/dhabale | Email: darshan@darshandev.tech"
        />

        <svg
          xmlns="//www.w3.org/2000/svg"
          version="1.1"
          class="svg-filters"
          style={{ display: "none" }}
        >
          <defs>
            <filter id="marker-shape">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0 0.15"
                numOctaves="1"
                result="warp"
              />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="30"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
          </defs>
        </svg>
      </Head>
      {/* <h1>About the author</h1> */}{" "}
      <div className={styl.container}>
        <ReactFullpage
          render={() =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                <section className={`${styl.hero} ${styl.fullpage} section`}>
                  <Header />
                  <h1 className={styl.title}>
                    <span className={styl.gradient}>Senior </span>full stack
                    <br /> developer
                  </h1>
                  <p className={styl.sub}>
                    I help business owners develop custom web based solutions{" "}
                    <br />
                    or mobile applications.
                  </p>
                  <Link href="https://calendly.com/dhabale/project-intro-meet">
                    <a target="_blank">
                      <button
                        className={`${styl.cta} ${styl.center}`}
                        onClick={gtag_report_conversion}
                      >
                        Book a consult
                      </button>
                    </a>
                  </Link>
                  <div className={styl.scroll}>
                    <ScrollIcon color="#3f4d67" />
                  </div>
                </section>

                <section className={`${styl.fullpage} section`}>
                  <h2 className={styl.title}>
                    I am <span className={styl.gradient}>Darshan</span>
                  </h2>
                  <p className={styl.bigtxt}>
                    I have built software for multiple businesses and agencies
                    over the years.
                    <br />
                    <span className={`${styl.bigtxt} ${styl.highlight} `}>
                      hotels, colleges, cab companies and ecommerce startups
                    </span>
                  </p>

                  <p className={styl.link}>
                    <Link href="/about#portfolio">
                      <a>
                        My portfolio{" "}
                        <Image src="/img/link.png" height={16} width={16} />
                      </a>
                    </Link>
                  </p>
                </section>
                <section className={`${styl.fullpage} section`}>
                  <h2 className={styl.title}>
                    <span className={styl.gradient}>Prebuilt modules </span> you
                    get if we work together
                  </h2>
                  <p className={styl.bigtxt}>
                    <ol>
                      <li>E-commerce</li>
                      <li>E-mail</li>
                      <li>Google maps</li>
                      <li>Login (Authentication & Authorization)</li>
                      <li>Stripe / Razorpay (Payment gateways)</li>
                    </ol>
                  </p>
                </section>
                <section
                  className={`${styl.fullpage} ${styl.testimonials} section`}
                >
                  <h2 className={`${styl.title} ${styl.gradient}`}>
                    Testimonials
                  </h2>
                  <p className={styl.testimonial}>
                    “Darshan is a very skilled and professional full stack
                    developer. I am very impressed with his ability to listen to
                    my requirements and walk me through the possibilities. I am
                    very happy with Darshan's work and plan on using him in
                    future projects. He covered all the requirements within the
                    timeline he proposed. You will be impressed as well!” -
                    Jesus
                  </p>
                  <p className={styl.testimonial}>
                    “Darshan was very enthusiastic and gave some useful solution
                    for the project. The communication was smooth and work were
                    delivered as required.” - LooYee
                  </p>
                  <p className={styl.testimonial}>
                    “He is very talented and cooperative!” - Mehul
                  </p>
                </section>

                <section
                  className={`${styl.fullpage} ${styl.projects} section`}
                >
                  <h2 className={`${styl.title} ${styl.gradient}`}>Projects</h2>
                  <div className={styl.box}>
                    <h4>Kabbie: The concierge CRM</h4>
                    <p>
                      This is a CRM for concierge businesses. It helps the
                      business owner track cars, bookings, trips, drivers.
                    </p>
                    {/* <a href="#">Know more...</a> */}
                  </div>
                  <div className={styl.box}>
                    <h4>Air3x3: Hotel management system</h4>
                    <p>
                      This is a CRM used by a hotel in Los Angeles. The hotel
                      organizes basketball tournaments and provides tour
                      packages to players.
                    </p>
                    <a href="/portfolio/air3x3">Know more...</a>
                  </div>
                  <div className={styl.box}>
                    <h4>College CRM</h4>
                    <p>This is a CRM used by a college in Pune.</p>
                    {/* <a href="#">Know more...</a> */}
                  </div>
                  <div className={styl.box}>
                    <h4>Babydojo: Parenting application</h4>
                    <p>
                      A parenting application that allows parents to track the
                      growth and activities of their baby/toddler.
                    </p>
                    <a href="/portfolio/babydojo">Know more...</a>
                  </div>
                </section>
                <section className={`${styl.fullpage} section`}>
                  <h2 className={styl.title}>
                    Want to{" "}
                    <span className={styl.gradient}>Discuss a Project </span>
                    with me?
                  </h2>
                  <p className={styl.bigtxt}>Book a spot on my calendar</p>
                  <Link href="https://calendly.com/dhabale/project-intro-meet">
                    <a target="_blank">
                      <button
                        className={styl.cta}
                        onClick={gtag_report_conversion}
                      >
                        Book a consult
                      </button>
                    </a>
                  </Link>
                  <p className={styl.emailLine}>
                    <span>
                      Or drop me a mail at &nbsp;
                      <a href="mailto:darshan@darshandev.tech">
                        darshan@darshandev.tech
                      </a>
                    </span>
                    <span className={styl.copyBtn}>
                      <ButtonIcon onClick={copyEmail}>
                        <Image src="/img/copy.png" height="48" width="48" />
                      </ButtonIcon>
                    </span>
                  </p>
                </section>
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    </>
  )
}

export default ConsultPage
