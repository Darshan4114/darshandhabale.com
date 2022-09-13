import Head from "next/head"
import Image from "next/image"
import Header from "comp/Header"
import ScrollIcon from "comp/ScrollIcon"
import ProfilePic from "comp/ProfilePic"
import ButtonIcon from "comp/ButtonIcon"
import styl from "styl/about.module.css"
import {toast} from "react-toastify"
import {toastOptions} from "comp/constants"

const AboutPage = () => {
  function copyEmail() {
    const copy = async (text) => await navigator.clipboard.writeText(text)
    copy("darshan@darshandev.tech").then(() => {
      toast.success("Email copied!")
    })
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
          style={{display: "none"}}
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
      <Header />

      {/* <h1>About the author</h1> */}
      <div className={styl.container}>
        <section className={styl.hero}>
          <div className={`${styl.cols} ${styl.fullpage}`}>

            <svg className={`${styl.heroArt} ${styl.ringArt}`} width="600" height="600" viewBox="0 0 955 932" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="302.04" cy="613.053" r="235" transform="rotate(-16.7534 302.04 613.053)" fill="#84D3FF" fill-opacity="0.4" stroke="#84D3FF" stroke-width="14" />
              <circle cx="494.653" cy="302.344" r="235" transform="rotate(-16.7534 494.653 302.344)" fill="#FFBDBD" fill-opacity="0.4" stroke="#FFBDBD" stroke-width="14" />
              <circle cx="652.716" cy="629.675" r="235" transform="rotate(-16.7534 652.716 629.675)" fill="#84FFA6" fill-opacity="0.4" stroke="#84FFA6" stroke-width="14" />
            </svg>

            <div className={styl.txt}>
              <h1 className={styl.name}>
                <span>D</span>arshan Dhabale
              </h1>
              <div className={styl.desgGrp}>
                <p className={styl.desg}>Full stack developer</p>
                <p className={styl.desg}>Graphic Designer</p>
                <p className={styl.desg}>Drone Pilot</p>
                <a className={styl.blueLink} href="#">... and a lot of other stuff, but mainly a developer</a>
              </div>

            </div>
            {/* <div className={styl.heroArt}> */}

            {/* </div> */}
          </div>

        </section>

        <section >
          <div className={`${styl.cols} `}>
            <div className={styl.pfp}>
              {/* <ProfilePic imgSrc="/img/darshan_text.jpeg" shape="square" /> */}
              <div className={styl.artGroupContainer}>
                <svg
                  width="320"
                  height="320"
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

            <div className={styl.intro}>
              {/* <p>I am</p>
              <p className={styl.name}>
                <span>D</span>arshan
              </p>
              <p className={styl.desg}>Full stack developer</p> */}
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
                is what gets me going as a developer.
              </p>
              {/* <p> Below are my tech-stack, projects and testimonials.</p> */}
              {/* Darshan Dhabale is a full-stack developer with 3 years of experience
          developing web-applications with the MERN stack.
          <br />
          He has taken multiple projects from idea to MVP and led development on
          the mentioned projects.
          <br />
          He has a passion for teaching and experience mentoring junior
          developers.
          <br /> */}
            </div>
          </div>
          <div className={styl.scroll}>
            <ScrollIcon color="#3f4d67" />
          </div>
        </section>
        {/* <section>
          <div className={styl.artGroupContainer}>
            <svg
              width="320"
              height="320"
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
        </section> */}

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
          <div className={styl.box}>
            <h4>Kabbie: The concierge CRM</h4>
            <p>
              This is a CRM for concierge businesses. It helps the business
              owner track cars, bookings, trips, drivers.
            </p>
            {/* <a href="#">Know more...</a> */}
          </div>
          <div className={styl.box}>
            <h4>Air3x3: Hotel management system</h4>
            <p>
              This is a CRM used by a hotel in Los Angeles. The hotel organizes
              basketball tournaments and provides tour packages to players. This
              CRM is built around this business model.
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
              A parenting application that allows parents to track the growth
              and activities of their baby/toddler.
            </p>
            <a href="/portfolio/babydojo">Know more...</a>
          </div>
        </section>

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
        </section>

        {/* </div> */}

        <footer>
          <p className={styl.emailLine}>
            <span>
              Think you have an exciting project for me? drop me a mail at
              &nbsp;
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
          <p>
            Just want a developer friend? I’m very open to that offer. Here is
            my &nbsp;
            <a target="_blank" href="https://www.instagram.com/code_darshan/">
              instagram
            </a>
            &nbsp;
            <a target="_blank" href="https://www.instagram.com/code_darshan/">
              <Image
                style={{marginLeft: "1em", marginTop: "0.5em"}}
                src="/img/link.png"
                height="16"
                width="16"
              />
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default AboutPage
