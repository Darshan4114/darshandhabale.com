import Head from "next/head"
import Header from "comp/Header"
import ProfilePic from "comp/ProfilePic"
import styl from "styl/about.module.css"
const AboutPage = () => {
  return (
    <>
      <Head>
        <title>DarshanDev: Blog and Portfolio</title>
        <meta
          name="description"
          content="Blog and code snippets to learn JavaScript, Next.js and Firebase, and other coding stuff. By Darshan D. Darshan D. is a programmer by profession who likes to show his projects online."
        />
      </Head>
      <Header />
      <div className={styl.container}>
        <h1>About Darshan</h1>
        <div className={styl.col2}>
          <div style={{ width: "15rem", margin: "0 auto" }}>
            <ProfilePic
              imgSrc="/img/author1.jpg"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="text">
            <p> A few bullets that describe me</p>
            <ul>
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
            </ul>
            <p>
              Think you have an exciting project for me? drop me a{" "}
              <a href="mailto:darshan@darshandev.tech">mail!</a>
            </p>
            <p>
              {" "}
              Just want a developer friend? I’m very open to that{" "}
              <a href="https://www.instagram.com/code_darshan/">offer</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
