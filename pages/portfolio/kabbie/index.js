import Head from "next/head";
import Image from "next/image";
import Header from "comp/Header";
import Footer from "comp/Footer";
import CaseStudyExtras from "comp/CaseStudyExtras"
import { getCaseStudyArticle } from "src/caseStudies"
import { getProject } from "staticdata/projects"
import styl from "./kabbie.module.scss";
import { Fragment, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    id: 1,
    src: '/img/portfolio/kabbie/kabbie-1.png',
    alt: 'Kabbie screenshot 1',
  },
  {
    id: 2,
    src: '/img/portfolio/kabbie/kabbie-2.png',
    alt: 'Kabbie screenshot 2',
  },
  {
    id: 3,
    src: '/img/portfolio/kabbie/kabbie-3.png',
    alt: 'Kabbie screenshot 3',
  },
  {
    id: 4,
    src: '/img/portfolio/kabbie/kabbie-4.png',
    alt: 'Kabbie screenshot 4',
  }
];

export default function kabbie({ article }) {
  const project = getProject("kabbie")
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
          <title>DarshanDev Project: Kabbie - Cab management system</title>
        </Head>
        <Header />
        <section className={styl.hero}>
          <div className="">
            <div className={styl.text}>
              <h1>
                Kabbie
              </h1>
              <p>Cab management system</p>
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
                src="/img/portfolio/kabbie/hero.svg"
                fill
                alt="Kabbie illustration"
              />
            </div>
          </div>
        </section>
        <section className={styl.summary}>
          <div className="">
            <h2>Summary</h2>
            <p>
              Kabbie is an application that allows a cab company to manage its drivers, customers, trips. Collect fees and also set custom rates based on location and vehicle type.
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
              <li>Vehicle Management</li>
              <li>Driver and Customer Management</li>
              <li>Booking and admin approval process</li>
              <li>Payment integration</li>
              <li>Custom location dependent pricing engine with Google Maps API and Google Maps Drawing API</li>
            </ul>
          </div>
        </section>
        <section className={styl.techStack}>
          <div className="">
            <h2>Tech Stack</h2>
            <ol>
              <li>Next.js</li>
              <li>SCSS</li>
              <li>Firebase - Firestore</li>
              <li>Firebase - Auth</li>
              <li>Firebase - Storage</li>
            </ol>
          </div>
        </section>
        <CaseStudyExtras slug="kabbie" article={article} />
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
  return { props: { article: getCaseStudyArticle("kabbie") } }
}
