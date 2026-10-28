import Head from "next/head";
import Image from "next/image";
import Header from "comp/Header";
import Footer from "comp/Footer";
import CaseStudyExtras from "comp/CaseStudyExtras"
import { getCaseStudyArticle } from "src/caseStudies"
import { getProject } from "staticdata/projects"
import styl from "./meetloom.module.scss";
import { Fragment, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    id: 1,
    src: '/img/portfolio/meetloom/meetloom-1.png',
    alt: 'VoxRelay screenshot 1',
  },
  {
    id: 2,
    src: '/img/portfolio/meetloom/meetloom-2.png',
    alt: 'VoxRelay screenshot 2',
  },
  {
    id: 3,
    src: '/img/portfolio/meetloom/meetloom-3.png',
    alt: 'VoxRelay screenshot 3',
  },
  {
    id: 4,
    src: '/img/portfolio/meetloom/meetloom-4.png',
    alt: 'VoxRelay screenshot 4',
  },
  {
    id: 5,
    src: '/img/portfolio/meetloom/meetloom-5.png',
    alt: 'VoxRelay screenshot 5',
  },
  {
    id: 6,
    src: '/img/portfolio/meetloom/meetloom-6.png',
    alt: 'VoxRelay screenshot 6',
  },
  {
    id: 7,
    src: '/img/portfolio/meetloom/meetloom-7.png',
    alt: 'VoxRelay screenshot 7',
  },
  {
    id: 8,
    src: '/img/portfolio/meetloom/meetloom-8.png',
    alt: 'VoxRelay screenshot 8',
  },
  {
    id: 9,
    src: '/img/portfolio/meetloom/meetloom-9.png',
    alt: 'VoxRelay screenshot 9',
  },
  {
    id: 10,
    src: '/img/portfolio/meetloom/meetloom-10.png',
    alt: 'VoxRelay screenshot 10',
  },
  {
    id: 11,
    src: '/img/portfolio/meetloom/meetloom-11.png',
    alt: 'VoxRelay screenshot 11',
  },
  {
    id: 12,
    src: '/img/portfolio/meetloom/meetloom-12.png',
    alt: 'VoxRelay screenshot 12',
  }
];

export default function MeetLoom({ article }) {
  const project = getProject("vox-relay")
  const meta = [project.client, project.role, project.period].filter(Boolean)
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
          <title>DarshanDev Project: VoxRelay Chat and Video Conferencing Application</title>
        </Head>
        <Header />
        <section className={styl.hero}>
          <div className="">
            <div className={styl.text}>
              <h1>
                VoxRelay
              </h1>
              <p>Chat and Video Conferencing Application</p>
              {meta.length > 0 && (
                <p className={styl.meta}>
                  {meta.map((item, idx) => (
                    <Fragment key={item}>
                      {idx > 0 && " · "}
                      <span>{item}</span>
                    </Fragment>
                  ))}
                </p>
              )}
            </div>
            <div className={styl.heroImage}>
              <Image
                src="/img/portfolio/meetloom/hero.svg"
                fill
                alt="VoxRelay illustration"
              />
            </div>
          </div>
        </section>
        <section className={styl.summary}>
          <div className="">
            <h2>Summary</h2>
            <p>
              VoxRelay is a responsive and progressive web application that harnesses the power of WebSockets and WebRTC to enable real-time chat and video conferencing. This innovative platform aims to redefine online communication, making it more immersive and engaging.
            </p>
          </div>
        </section>

        <section className={styl.carousel}>
          <div>
            <h2>Screenshots</h2>
            <Carousel showThumbs={false} showStatus={false}>
              {images.map((image) => (
                <div key={image.id}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        <section className={styl.features}>
          <div className="">
            <h2>Key Features</h2>
            <ul>
              <li>1 to 1 chatting</li>
              <li>Media sharing and Document sharing</li>
              <li>Audio and video calling</li>
              <li>Responsive Design</li>
              <li>Progressive Web Application</li>
            </ul>
          </div>
        </section>
        <section className={styl.techStack}>
          <div className="">
            <h2>Tech Stack</h2>
            <ol>
              <li>Next.js</li>
              <li>Tailwind.css</li>
              <li>Node.js</li>
              <li>AWS</li>
              <li>MongoDB</li>
              <li>Mediasoup</li>
              <li>React Query &#40; TanStack Query &#41;</li>
            </ol>
          </div>
        </section>
        <CaseStudyExtras slug="vox-relay" article={article} />
        {project.website && (
          <section className={styl.links}>
            <div>
              <a href={project.website} target="_blank" rel="noreferrer">
                Visit site →
              </a>
            </div>
          </section>
        )}
        <Footer />
      </div >
    </>
  )
}

export async function getStaticProps() {
  return { props: { article: getCaseStudyArticle("vox-relay") } }
}
