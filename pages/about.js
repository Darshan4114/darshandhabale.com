import Head from "next/head"
import Header from "comp/Header"
import ProfilePic from "comp/ProfilePic"
import styl from "styl/about.module.css"
const AboutPage = () => {
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
      </Head>
      <Header />
      <div className={styl.container}>
        <h1>About the author</h1>
        <div className={styl.col2}>
          <div style={{ width: "15rem", margin: "0 auto" }}>
            <div className={styl.pfp}>
              <ProfilePic
                imgSrc="/img/darshan_c.png"
                objectFit="cover"
                layout="fill"
              />
            </div>

            {/* <div className={styl.text}> */}
            <h3>Testimonials</h3>
            <div className={styl.testimonials}>
              <p>
                “Darshan is a very skilled and professional full stack
                developer. I am very impressed with his ability to listen to my
                requirements and walk me through the possibilities. I am very
                happy with Darshan's work and plan on using him in future
                projects. He covered all the requirements within the timeline he
                proposed. You will be impressed as well!” - Jesus
              </p>
              <p>
                “Darshan was very enthusiastic and gave some useful solution for
                the project. The communication was smooth and work were
                delivered as required.” - LooYee
              </p>
            </div>

            <h3>Tech stack</h3>
            <p>Including but not limited to</p>
            <div className={styl.stack}>
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
            {/* </div> */}
          </div>
          <div className={styl.text}>
            <p className={styl.intro}>
              Darshan Dhabale is a full-stack developer with 3 years of
              experience developing web-applications with the MERN stack.
              <br />
              He has taken multiple projects from idea to MVP and led
              development on the mentioned projects.
              <br />
              He has a passion for teaching and experience mentoring junior
              developers.
              <br />
            </p>
            <h3>Projects</h3>
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
                This is a CRM used by a hotel in Los Angeles. The hotel
                organizes basketball tournaments and provides tour packages to
                players. This CRM is built around this business model.
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
            {/* <ul>
              <li>Full stack developer</li>
              <li>Enthusiastic about</li>
              <ul>
                <li>AR</li> 
                <li>Game development</li>
                <li>Drones</li>
                <li>AI</li>
              </ul>
              <li>Tech stack (The main one)</li>
              <ul>
                <li>Next.js</li>
                <li>Firebase</li>
              </ul>
              <li>Programming languages I know about</li>
              <ul>
                <li>Javascript +=(Typescript)</li>
                <li>Python</li>
                <li>CSS Not a language... but still difficult to master</li>
              </ul>
            </ul> */}
            <p>
              Think you have an exciting project for me? drop me a mail at{" "}
              <a href="mailto:darshan@darshandev.tech">
                darshan@darshandev.tech
              </a>
            </p>
            <p>
              Just want a developer friend? I’m very open to that offer. Here is
              my <a href="https://www.instagram.com/code_darshan/">instagram</a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
