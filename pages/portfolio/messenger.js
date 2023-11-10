import Head from "next/head"
import Image from "next/image"
import Header from "comp/Header"
import Footer from "comp/Footer"
import styl from "styl/air3x3.module.scss"
import { useState, useEffect } from "react"

export default function Air3x3 () {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    function checkIfDesktop () {
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
          <title>DarshanDev Project: Messenger Chat and Video Conferencing Application</title>
        </Head>
        <Header paddingClass="pr15" />
        <div className={styl.landing}>
          <h1>
            Messenger
            <span>Chat and Video Conferencing Application</span>
          </h1>
          {/* <div className={styl.hero}>
            <Image
              src="/img/portfolio/air3x3/hero.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
        </div>
        <div className="problem">
          <h2>Describing the problem</h2>
          <p>
            The client requires an application to allow him to organise
            basketball tournaments and rent out rooms at his hotel to the
            players.
          </p>
        </div>
        <div className="objectives">
          <h2>Dividing the problem into objectives</h2>
          <ol>
            <li>A dashboard for admin to organize and track tournaments</li>
            <li>
              Booking form for players to book tournaments as individual/team.
            </li>
            <li>Auth system for admin and players + social auth</li>
            <li>Payment gateway to accept payments from players</li>
            <li>Player dashboard to track tournaments and teams</li>
            <li>
              Email service to inform players of booking confirmation and invite
              other players to join team.
            </li>
          </ol>
        </div>
        <div className={styl.techStack}>
          <h2>Coming up with a Tech stack</h2>
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
              </ol>
            </div>
          </div>
          <div className={`${styl.tech} ${styl.col2}`}>
            <div className={styl.text}>
              <h3>Firebase vs AWS</h3>
              <h4>What is Firebase?</h4>
              <p>A BaaS (Backend as a service) based on GCP.</p>
              <h4>What is AWS?</h4>
              <p>Amazon web services, largest cloud services provider.</p>
              <h4>Comparison</h4>
              <ol>
                <li>
                  Both providers provide us with reliable services for
                  authentication, authorization, storage and database. We try to
                  host all the services with a single provider, to keep the
                  project and billing well organized.
                </li>
                <li>The pricing is very similar</li>
                <li>
                  Firebase gets an edge in the developer experience section.
                </li>
              </ol>
              <h4>Service descriptions</h4>
              <li>
                Authentication: Auth with Google, Facebook, email-password
              </li>
              <li>Authorisation: Let’s us give users a profile</li>
              <li>Storage: Profile photos and other media files</li>
              <li>Database: (Firestore) A no-sql database</li>
            </div>
            <div className={`${styl.imgContainer} ${styl.firebaseVsAws}`}>
              <Image
                src="/img/portfolio/air3x3/firebaseVsAws.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={`${styl.tech} ${styl.col2}`}>
            <div className={styl.imgContainer}>
              <Image
                src="/img/portfolio/air3x3/aws.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styl.text}>
              <h3>AWS</h3>
              <p>
                For email service via SES(Simple email service), (yes AWS didn’t
                lose yet, no email solution in Firebase or GCP)
              </p>
            </div>
          </div>
          <div className={`${styl.tech} ${styl.col2}`}>
            <div className={styl.text}>
              <h3>Vercel</h3>
              <p>
                Most convenient server host for Next.js (the firm which develops
                Next.js, however it can be deployed on any server)
              </p>
            </div>
            <div className={styl.imgContainer}>
              <Image
                src="/img/portfolio/air3x3/vercel.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={`${styl.tech} ${styl.col2}`}>
            <div className={styl.imgContainer}>
              <Image
                src="/img/portfolio/air3x3/stripe.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styl.text}>
              <h3>Stripe</h3>
              <p>Popular and reliable payment gateway, (client prefers it)</p>
            </div>
          </div>
        </div>
        <div className="db"></div>
        <div className="cb"></div>

        <div className={styl.features}>
          <h2>Screenshots</h2>
          <section className={styl.feature}>
            <h3>Custom booking system</h3>
            <div className={styl.img}>
              <Image
                src={`/img/portfolio/air3x3/tour_book${isDesktop ? "_desktop" : ""
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
        <Footer />
      </div>
    </>
  )
}
