import Head from "next/head";
import Image from "next/image";
import Header from "comp/Header";
import Footer from "comp/Footer";
import CaseStudyExtras from "comp/CaseStudyExtras"
import { getCaseStudyArticle } from "src/caseStudies"
import { getProject } from "staticdata/projects"
import styl from "./mazaclass.module.scss";
import { Fragment, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    id: 1,
    src: '/img/portfolio/mazaclass/mazaclass-1.png',
    alt: 'MazaClass screenshot 1',
  },
  {
    id: 2,
    src: '/img/portfolio/mazaclass/mazaclass-2.png',
    alt: 'MazaClass screenshot 2',
  },
  {
    id: 3,
    src: '/img/portfolio/mazaclass/mazaclass-3.png',
    alt: 'MazaClass screenshot 3',
  },
  {
    id: 4,
    src: '/img/portfolio/mazaclass/mazaclass-4.png',
    alt: 'MazaClass screenshot 4',
  },
  {
    id: 5,
    src: '/img/portfolio/mazaclass/mazaclass-5.png',
    alt: 'MazaClass screenshot 5',
  }
];

export default function mazaclass({ article }) {
  const project = getProject("mazaclass")
  const meta = [project.client, project.role, project.period].filter(Boolean)
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
          <title>DarshanDev Project: MazaClass - Coaching class management system</title>
        </Head>
        <Header />
        <section className={styl.hero}>
          <div className="">
            <div className={styl.text}>
              <h1>
                MazaClass
              </h1>
              <p>Coaching class management system</p>
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
                src="/img/portfolio/mazaclass/hero.svg"
                fill
                alt="MazaClass illustration"
              />
            </div>
          </div>
        </section>
        <section className={styl.summary}>
          <div className="">
            <h2>Summary</h2>
            <p>
              MazaClass is payment and admin software for coaching centres. Students pay through WhatsApp payment links in about 30 seconds, payment reminders go out automatically, and one dashboard replaces the spreadsheets for fees, attendance and student records. I built it after talking to 50+ educators. One centre went from 3 hours a week chasing payments to about 10 minutes.
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
              <li>WhatsApp payment links</li>
              <li>Automated payment reminders</li>
              <li>Attendance tracking</li>
              <li>Student records and fee tracking in one dashboard</li>
              <li>Cloud backup</li>
              <li>Progressive Web Application</li>
            </ul>
          </div>
        </section>
        <section className={styl.techStack}>
          <div className="">
            <h2>Tech Stack</h2>
            <ol>
              <li>Go</li>
              <li>React</li>
            </ol>
          </div>
        </section>
        <CaseStudyExtras slug="mazaclass" article={article} />
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
  return { props: { article: getCaseStudyArticle("mazaclass") } }
}
