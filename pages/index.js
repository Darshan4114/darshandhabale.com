import Head from "next/head"
import { useState, useEffect } from "react"
import Image from "next/image"
import Header from "comp/Header"
import ButtonIcon from "comp/ButtonIcon"
import styl from "./home.module.scss"
import { toast } from "react-toastify"

const Home = () => {
  function copyEmail () {
    const copy = async (text) => await navigator.clipboard.writeText(text)
    copy("dev@darshandhabale.com").then(() => {
      toast.success("Email copied!")
    })
  };

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
          experience in MERN stack. Tech stack - React.js, Node.js, Next.js, Django, Python and Firebase. Darshan Dhabale - https://linkedin.com/in/dhabale | Email: dev@darshandhabale.com"
        />
      </Head>
      <Header theme={'light'} />

      <div className={styl.container}>
        <section className={styl.hero}>
          <div className={styl.pfp}>
            <div className={styl.image}>
              <Image src='/img/darshan6.png' layout='fill' />
            </div>
            <div className={styl.smiley}>
              <Image src='/img/smiley.png' layout='fill' />
            </div>
            <div className={styl.shadow}></div>
          </div>

          <div className={styl.text}>
            <h1 className={styl.name}>
              <span>D</span>arshan Dhabale
            </h1>
            <div className={styl.desgGrp}>
              <p className={styl.desg}>Software Dev</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className={styl.sectionHeading}>
            What do I do?
          </h2>
          <div className={`${styl.cols} ${styl.wdid}`}>
            <div className={styl.intro}>
              <p>
                I work with business owners to develop{" "}
                <span className={styl.highlight}>
                  custom web based solutions or mobile applications.
                </span>
              </p>
              <p>
                Business I have worked with -{" "}
                <span className={styl.highlight}>
                  hotels, colleges, cab companies and ecommerce startups.
                </span>
              </p>
              <p>
                Building valuable software that saves my clients time and money
                gets me going as a developer.
              </p>
              <p>
                Whether it's streamlining hotel operations or optimizing transportation logistics,
                I'm dedicated to building software that adds tangible value to businesses.
              </p>
            </div>
            <div className={styl.artGroupContainer}>
              <svg
                // width="200"
                // height="200"
                viewBox="0 0 667 652"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M660 145.5V570L287 644L7 492.5V63L344 8L660 145.5Z"
                  fill="url(#paint0_linear_1312_9)"
                />
                <path
                  d="M96 145.5V427.5M96 145.5L344 97M96 145.5L7 63M96 427.5L7 492.5M96 427.5L287 525.5M96 427.5L344 392.5M540.5 481.5V205.5M540.5 481.5L660 570M540.5 481.5L344 392.5M540.5 481.5L287 525.5M540.5 205.5L344 97M540.5 205.5L660 145.5M344 97V8M344 97V392.5M660 145.5V570M660 145.5L344 8M660 570L287 644M287 644L7 492.5M287 644V525.5M7 492.5V63M7 63L344 8"
                  stroke="white"
                  stroke-width="14"
                />

                <image id={styl.artGroup1Ball}
                  x="230"
                  y="300"
                  width={200} height={200} href="/img/ball.png" clip-path="url(#myCircle)" />
                <defs>
                  <linearGradient
                    id="paint0_linear_1312_9"
                    x1="339.5"
                    y1="8"
                    x2="339.5"
                    y2="620.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D196FF" />
                    <stop offset="1" stop-color="#FFA0FB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>


        </section>
        <section className={styl.stack}>
          <h2>Tech stack</h2>
          <p>Including but not limited to</p>
          <div className={styl.stackelements}>
            <p>React.js</p>
            <p>Next.js</p>
            <p>Node.js</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Python</p>
            <p>Django</p>
            <p>AWS</p>
            <p>Firebase</p>
            <p>MongoDB</p>
            <p>Salesforce</p>
          </div>
        </section>
        <section className={styl.projects}>
          <h2>Projects</h2>
          <a href="#">
            <div className={styl.projectCard}>
              <div className={styl.card}>
                <h4>Kabbie: The concierge CRM</h4>
                <p>
                  This is a CRM for concierge businesses. It helps the business
                  owner track cars, bookings, trips, drivers.
                </p>
                Know more...
                <div className={styl.shadow}></div>
              </div>
            </div>
          </a>
          <a href="/portfolio/air3x3">
            <div className={styl.projectCard}>
              <div className={styl.card}>
                <h4>Air3x3: Hotel management system</h4>
                <p>
                  This is a CRM used by a hotel in Los Angeles. The hotel organizes
                  basketball tournaments and provides tour packages to players. This
                  CRM is built around this business model.
                </p>
                Know more...
                <div className={styl.shadow}></div>
              </div>
            </div>
          </a>
          <a href="#">
            <div className={styl.projectCard}>
              <div className={styl.card}>
                <h4>College CRM</h4>
                <p>This is a CRM used by a college in Pune.</p>
                Know more...
                <div className={styl.shadow}></div>
              </div>
            </div>
          </a>
          <a href="/portfolio/babydojo">
            <div className={styl.projectCard}>
              <div className={styl.card}>
                <h4>Babydojo: Parenting application</h4>
                <p>
                  A parenting application that allows parents to track the growth
                  and activities of their baby/toddler.
                </p>
                Know more...
                <div className={styl.shadow}></div>
              </div>
            </div>
          </a>
        </section >

        <section className={styl.testimonials}>
          <h2>Testimonials</h2>
          <p>
            “Darshan is a very skilled and professional full stack developer. I
            am very impressed with his ability to listen to my requirements and
            walk me through the possibilities. I am very happy with Darshan's
            work and plan on using him in future projects. He covered all the
            requirements within the timeline he proposed. You will be impressed
            as well!” - Jesus
          </p>
          <p>
            “Darshan was very enthusiastic and gave some useful solution for the
            project. The communication was smooth and work were delivered as
            required.” - LooYee
          </p>
          <p>
            “He is very talented and cooperative!” - Vibhanshu
          </p>
        </section>

        {/* </div> */}

        <footer>
          <p className={styl.emailLine}>
            <span>
              Think you have an exciting project for me? drop me a mail at
              &nbsp;
              <a href="mailto:dev@darshandhabale.com">
                dev@darshandhabale.com
              </a>
            </span>
            <span className={styl.copyBtn}>
              <ButtonIcon onClick={copyEmail}>
                <Image src="/img/copy.png" height="48" width="48" />
              </ButtonIcon>
            </span>
          </p>
          <p>
            Just want a developer friend? I’m very open to that offer. Here is
            my &nbsp;
            <a target="_blank" href="https://www.instagram.com/code_darshan/">
              instagram
            </a>
            &nbsp;
            <a target="_blank" href="https://www.instagram.com/code_darshan/">
              <Image
                style={{ marginLeft: "1em", marginTop: "0.5em" }}
                src="/img/link.png"
                height="16"
                width="16"
              />
            </a>
          </p>
        </footer>
      </div >
    </>
  )
}

export default Home;
