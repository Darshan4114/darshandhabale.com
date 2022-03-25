import Head from "next/head"
import Image from "next/image"
import Header from "comp/Header"
import Footer from "comp/Footer"
import ScrollIcon from "comp/ScrollIcon"
import styl from "styles/css/babydojo.module.css"
import { useState, useEffect } from "react"

export default function Babydojo() {
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
        <div className={`${styl.col2} ${styl.firstSection}`}>
          <div className={styl.firstCol}>
            <div className={styl.heroContainer}>
              <Image
                src="/img/portfolio/babydojo/babylarge.png"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1>Babydojo</h1> <p>The parenting application</p>
          </div>

          <div className={styl.col2}>
            <ul className={styl.internalNavList}>
              <li>
                <a href="#objective"> # The Objective</a>
              </li>
              <li>
                <a href="#brainstorming"># Describing the situation</a>
              </li>
              <li>
                <a href="#resolution"># Resolution</a>
              </li>
              <li>
                <a href="#result"># Result</a>
              </li>
            </ul>
          </div>
          {/* <div className={styl.hero}>
            <Image
              src="/img/portfolio/air3x3/hero.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
        </div>
        <ScrollIcon color="#3f4d67" />
        <section className="problem">
          <a name="objective"></a>
          <h2>The objective</h2>
          <p>
            The client requires an application to allow a parent to add their
            child and track various factors of the child's life. Like food,
            hygiene, sleep and growth. Regular reminders for each of these
            factors and graphs to track them are required.
          </p>
        </section>
        <section className="objectives">
          <h2>Dividing the objective into requirement list</h2>
          <ol>
            <li>
              A dashboard for parent to navigate the records of their child and
              view the graphs
            </li>
            <li>Forms to enter food, hygiene, sleep and growth details.</li>
            <li>A child profile with image editing functionality.</li>
            <li>Social media features with Image and text capabilities</li>
          </ol>
        </section>
        <section className={styl.techStack}>
          <a name="brainstorming"></a>
          <h2>Describing the situation</h2>
          <p className={styl.tac}>
            <em> Points to describe the situation </em>
          </p>
          <ol>
            <li>
              The current database is in 2 different repositories. Django +
              React.js
            </li>
            <li>There are several difficult to debug, bugs in the codebase.</li>
          </ol>
        </section>
        <section className={styl.techStack}>
          <a name="resolution"></a>
          <h2>Resolution</h2>
          <p className={styl.tac}>
            <em> Finally the decisions:</em>
          </p>
          <p className={styl.tac}>
            <em>
              We discussed with the client and decided to move the whole
              application to Next.js. Doing this would have the following
              advantages-
            </em>
          </p>
          <ol>
            <li>The client will only have to maintain a single repo</li>
            <li>
              The codebase will be clearer and well documented, unlike before
            </li>
            <li>
              Rebuilding the application in Next.js will be a lot faster than
              debugging the react + Django app. Saving the client and us, time
              and cost.
            </li>
          </ol>
        </section>
        <section className={styl.techStack}>
          <a name="tech-stack"></a>

          <h2>Tech stack</h2>
          <div className={`${styl.tech} ${styl.col2}`}>
            <div className={styl.imgContainer}>
              <Image
                src="/img/portfolio/air3x3/nextjs.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styl.text}>
              <h3>Next.js</h3>
              <h4>What is Next.js?</h4>
              <p>An opinionated, intuitive web framework based on react.</p>
              <h4>Why use Next.js</h4>
              <ol>
                <li>
                  This project has high involvement of frontend as well as
                  backend.
                </li>
                <li>
                  Next.js blurs the lines between frontend and backend allowing
                  us to integrate them with ease.{" "}
                </li>
                <li>
                  It has great dev experience and I will use it unless there's a
                  reason not to, honestly the best react framework (I'm yet to
                  try Svelte)
                </li>
              </ol>
            </div>
          </div>
          <div className={`${styl.tech} ${styl.col2}`}>
            <div className={styl.text}>
              <h3>Firebase</h3>
              <h4>What is Firebase?</h4>
              <p>A BaaS (Backend as a service) based on GCP.</p>
              <h4>Service descriptions</h4>
              <li>
                Authentication: Auth with Google, Facebook, email-password
              </li>
              <li>Authorisation: Let’s us give users a profile</li>
              <li>Storage: Profile photos and other media files</li>
              <li>Database: (Firestore) A no-sql database</li>
            </div>
            <div
              className={`${styl.imgContainer} ${styl.firebaseVsAws}`}
              style={{ marginBottom: "1em" }}
            >
              <Image
                src="/img/portfolio/babydojo/firebase.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={`${styl.tech} ${styl.col2}`}>
            <div className={styl.imgContainer}>
              <Image
                src="/img/portfolio/air3x3/vercel.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styl.text}>
              <h3>Vercel</h3>
              <p>
                Most convenient server host for Next.js (the firm which develops
                Next.js, however it can be deployed on any server)
              </p>
            </div>
          </div>
        </section>
        <div className="db"></div>
        <div className="cb"></div>
        <section className={styl.features}>
          <a name="result"></a>
          <h2>Screenshots</h2>
          <section className={styl.feature}>
            <h3>Dashboard</h3>
            <div className={styl.screenshot}>
              <Image
                src="/img/portfolio/babydojo/result1.png"
                width="320.2"
                height="660"
              />
            </div>
          </section>

          <section className={styl.feature}>
            <h3>Child profile</h3>
            <div className={styl.screenshot}>
              <Image
                src="/img/portfolio/babydojo/child_profile.png"
                width="320.2"
                height="660"
              />
            </div>
          </section>
          <section className={styl.feature}>
            <h3>Navigation</h3>
            <div className={styl.screenshot}>
              <Image
                src="/img/portfolio/babydojo/nav.png"
                width="320.2"
                height="660"
              />
            </div>
          </section>
          <section className={styl.feature}>
            <h3>Social module</h3>
            <div className={styl.screenshot}>
              <Image
                src="/img/portfolio/babydojo/social.png"
                width="320.2"
                height="660"
              />
            </div>
          </section>
        </section>
        <Footer />
      </div>
    </>
  )
}
