import Head from "next/head"
import { useContext, useState } from "react"
import Image from "next/image"
import ButtonIcon from "comp/ButtonIcon"
import styl from "./home.module.scss"
import { toast } from "react-toastify"
import { ThemeContext } from "comp/ThemeContext"
import { Aldrich, Inter } from 'next/font/google'
import { MdContentCopy } from 'react-icons/md'
import Link from "next/link"

const heroFont = Aldrich({ weight: '400', subsets: ['latin'] })

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [asteroidClass, setAsteroidClass] = useState(styl.asteroid)

  const copyEmail = () => {
    const copy = async (text) => await navigator.clipboard.writeText(text)
    copy("dev@darshandhabale.com").then(() => {
      toast.success("Email copied!")
    })
  };

  const launchAsteroid = () => {
    const asteroidSound = new Audio("/audio/just-fun/asteroid.wav")
    asteroidSound.play()
    setAsteroidClass(`${styl.asteroid} ${styl.moveAsteroid}`)
    setTimeout(() => setAsteroidClass(styl.asteroid), 2500)
  };

  const projects = [
    {
      id: 1,
      title: 'MeetLoom: Chat and Video Conferencing Application',
      description: 'MeetLoom: Chat and Video Conferencing Application',
      link: '/portfolio/meetloom',
      image: '/img/portfolio/meetloom/meetloom.gif',
      website: 'https://chatarea.vercel.app/'
    },
    {
      id: 2,
      title: 'Mazaclass: Coaching Class Management System',
      description: 'Mazaclass: Coaching Class Management System',
      link: '/portfolio/mazaclass',
      image: '/img/portfolio/mazaclass/mazaclass.gif',
      website: 'https://mazaclass.com/'
    },
    {
      id: 3,
      title: 'Kabbie: The Concierge Management Application',
      description: 'Kabbie: The Concierge Management Application',
      link: '/portfolio/kabbie',
      image: '/img/portfolio/kabbie/kabbie.gif',
      website: 'https://kabbie.darshandhabale.com/'
    }
  ];

  return (
    <>
      <Head>
        <title>
          React developer | React/JavaScript developer with 3.5 years of
          experience | MERN stack | React.js, Node.js, Next.js, Django, Python
        </title>
        <meta
          name="description"
          content="React developer with 3 years of
          experience in MERN stack. Tech stack - React.js, Node.js, Next.js, Django, Python and Firebase. Darshan Dhabale - https://linkedin.com/in/dhabale | Email: dev@darshandhabale.com"
        />
      </Head>
      {/* <Header theme={theme} /> */}
      {/* <Logo /> */}
      <div className={`${styl.container} ${theme === 'dark' ? styl.darkmode : ''}`}>
        <section className={styl.hero}>
          <div className={asteroidClass}>
            <Image
              src="/img/just-fun/asteroid.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div className={styl.pfp}>
              <div className={styl.image}>
                <Image src='/img/darshan6.png' layout='fill' />
              </div>
              <div className={styl.smiley}>
                <Image src='/img/smiley.png' layout='fill' />
              </div>
              <div className={styl.shadow}></div>
              <p className={styl.instruction}>Hover / Touch</p>
            </div>

            <div className={`${styl.text} ${heroFont.className}`}>
              <h1 className={styl.name}>
                <span>D</span>arshan Dhabale
              </h1>
              <div className={styl.desgGrp}>
                <p className={styl.desg}>Developer</p>
              </div>

              <div className={styl.quicknav}>
                <Link href='/portfolio'>
                  Portfolio
                </Link>
                <Link href='/blog'>
                  Blog
                </Link>
                <Link href='#testimonials'>
                  Testimonials
                </Link>
              </div>
              {/* <button onClick={launchAsteroid} className={styl.asteroidButton}>
                <Image
                  src="/img/just-fun/asteroid.png"
                  width={140}
                  height={100}
                />
              </button> */}
              <div className={styl.heroSocials}>
                <a target="_blank" href="https://www.github.com/darshan4114/" className={styl.heroSocial}>
                  <Image
                    src="/img/github.png"
                    height="48"
                    width="48"
                  />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/dhabale/" className={styl.heroSocial}>
                  <Image
                    src="/img/linkedin.png"
                    height="48"
                    width="48"
                  />
                </a>
                <a target="_blank" href="https://www.instagram.com/code_darshan/" className={styl.heroSocial}>
                  <Image
                    src="/img/instagram_color.png"
                    height="48"
                    width="48"
                  />
                </a>
                <a target="_blank" href="mailto:dev@darshandhabale.com" className={styl.heroSocial}>
                  <Image
                    src="/img/email.png"
                    height="48"
                    width="48"
                  />
                </a>
              </div>
            </div>
          </div>
        </section >

        <section className={styl.wdid}>
          <div>
            <h2 className={styl.sectionHeading}>
              What do I do?
            </h2>
            <div className={`${styl.cols}`}>
              <div className={styl.intro}>
                <p>
                  I help business owners develop{" "}
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
                  Whether it's streamlining hotel operations or optimizing transportation logistics,
                  I'm dedicated to building software that adds tangible value to businesses.
                </p>
                <p>
                  Building valuable software that saves my clients time and money
                  gets me going.
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
                    stroke="black"
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
          </div>
        </section>

        <section className={styl.stack}>
          <div>
            <h2>Tech stack</h2>
            <p style={{ margin: '0 0.5rem 0.5rem' }}>Including but not limited to</p>
            <div className={styl.stackelements}>
              <p>React.js</p>
              <p>Next.js</p>
              <p>TailwindCSS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Jest</p>
              <p>Node.js</p>
              <p>Nest.js</p>
              <p>Python</p>
              <p>Django</p>
              <p>WebRTC</p>
              <p>Docker</p>
              <p>WebSockets</p>
              <p>PostgreSQL</p>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>Firestore</p>
              <p>IaC</p>
              <p>Pipelines</p>
              <p>Firebase</p>
              <p>AWS</p>
              <p>EC2</p>
              <p>ECS</p>
              <p>ECR</p>
              <p>Route53</p>
              <p>CloudFormation</p>
              <p>Code Pipelines</p>
              <p>Copilot CLI</p>
              <p>Salesforce</p>
            </div>
          </div>
        </section>

        <section className={styl.projects}>
          <div>
            <h2>Projects</h2>
            <p style={{ margin: '0 0.5rem 0.5rem' }}>Listing top 3, <Link href='/portfolio' className={styl.projectPageLink}>see all projects</Link>. </p>
            <p style={{ margin: '0 0.5rem 0.5rem' }}>&#40; Prefer case studies, sites linked here are not production sites, but still require you to create accounts for full experience. &#41;</p>
            {projects.length > 0 && projects.map((project) => (
              <div className={styl.projectCard}>
                <div className={styl.projectImage}>
                  <Image src={project.image} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styl.projectAbout}>
                  <div className={styl.projectText}>
                    <h4>{project.title}</h4>
                    <p>
                      {project.description}
                    </p>
                  </div>
                  <div className={styl.projectLinks}>
                    {/* <Link href={project.link}>
                      Case study
                    </Link> */}
                    <a href={project.website} target="_blank" key={project.id}>
                      Visit site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styl.testimonials}>
          <div>
            <a name='testimonials'></a>
            <h2>Testimonials</h2>
            <ul>
              <li>
                “Darshan is a very skilled and professional full stack developer. I
                am very impressed with his ability to listen to my requirements and
                walk me through the possibilities. I am very happy with Darshan's
                work and plan on using him in future projects. He covered all the
                requirements within the timeline he proposed. You will be impressed
                as well!” - Jesus
              </li>
              <li>
                “Darshan was very enthusiastic and gave some useful solution for the
                project. The communication was smooth and work were delivered as
                required.” - LooYee
              </li>
              <li>
                “He is very talented and cooperative!” - Vibhanshu
              </li>
            </ul>
          </div>
        </section>

        {/* </div> */}

        <section className={styl.footer}>
          <div>

            <h2>Contact details</h2>

            <p>
              Think you have an exciting project for me? drop me an email at -
            </p>
            <p className={styl.emailLine}>
              <span>
                &nbsp;
                <a href="mailto:dev@darshandhabale.com">
                  dev@darshandhabale.com
                </a>
              </span>
              <span className={styl.copyBtn}>
                <ButtonIcon onClick={copyEmail}>
                  <MdContentCopy color='white' size={24} />
                </ButtonIcon>
              </span>
            </p>
            <br />
            <p>
              Just want a developer friend? I’m very open to that offer. Here is
              my &nbsp;
              <a target="_blank" href="https://www.instagram.com/code_darshan/">
                instagram
              </a>
            </p>
            <p className={styl.emailLine}>
              &nbsp;
              @code_darshan
              <a target="_blank" href="https://www.instagram.com/code_darshan/">
                <Image
                  style={{ marginLeft: "1em" }}
                  src="/img/instagram.png"
                  height="32"
                  width="32"
                />
              </a>
            </p>
          </div>
        </section>
      </div >
    </>
  )
}

export default Home;
