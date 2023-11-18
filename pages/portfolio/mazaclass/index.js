import Head from "next/head";
import Image from "next/image";
import Header from "comp/Header";
import Footer from "comp/Footer";
import styl from "./mazaclass.module.scss";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    id: 1,
    src: '/img/portfolio/mazaclass/mazaclass-1.png',
    alt: 'Chat Page',
  },
  {
    id: 2,
    src: '/img/portfolio/mazaclass/mazaclass-2.png',
    alt: 'Chat Page',
  },
  {
    id: 3,
    src: '/img/portfolio/mazaclass/mazaclass-3.png',
    alt: 'Chat Page',
  },
  {
    id: 4,
    src: '/img/portfolio/mazaclass/mazaclass-4.png',
    alt: 'Chat Page',
  },
  {
    id: 5,
    src: '/img/portfolio/mazaclass/mazaclass-5.png',
    alt: 'Chat Page',
  }
];

export default function mazaclass() {
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
          <title>DarshanDev Project: mazaclass Chat and Video Conferencing Application</title>
        </Head>
        <Header />
        <section className={styl.hero}>
          <div className={styl.text}>
            <h1>
              MazaClass
            </h1>
            <p>Coaching class management system</p>
          </div>
          <div className={styl.heroImage}>
            <Image
              src="/img/portfolio/mazaclass/hero.svg"
              fill
            />
          </div>
        </section>
        <section className={styl.summary}>
          <div className="">
            <h2>Summary</h2>
            <p>
              MazaClass is a responsive and progressive web application that allows coaching class owners to manage their classes, students, and automate their fee collection with a whatsapp integration.
            </p>
          </div>
        </section>

        <section className={styl.carousel}>
          <Carousel>
            {images.length > 0 && images.map((image) => (
              <div key={image.id}>
                <img src={image.src} />
                <p className="legend">{image.alt}</p>
              </div>
            ))}
          </Carousel>
        </section>
        <section className={styl.features}>
          <div className="">
            <h2>Key Features</h2>
            <ul>
              <li>Student Information Management</li>
              <li>Course Management</li>
              <li>Fees Management and Automated collection</li>
              <li>Whatsapp Integration</li>
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
              <li>AWS</li>
              <li>PostgreSQL</li>
            </ol>
          </div>
        </section>
        <Footer />
      </div >
    </>
  )
}
