import Head from "next/head";
import Image from "next/image";
import Header from "comp/Header";
import Footer from "comp/Footer";
import styl from "./kabbie.module.scss";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    id: 1,
    src: '/img/portfolio/kabbie/kabbie-1.png',
    alt: 'Chat Page',
  },
  {
    id: 2,
    src: '/img/portfolio/kabbie/kabbie-2.png',
    alt: 'Chat Page',
  },
  {
    id: 3,
    src: '/img/portfolio/kabbie/kabbie-3.png',
    alt: 'Chat Page',
  },
  {
    id: 4,
    src: '/img/portfolio/kabbie/kabbie-4.png',
    alt: 'Chat Page',
  }
];

export default function kabbie() {
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
          <title>DarshanDev Project: Kabbie Chat and Video Conferencing Application</title>
        </Head>
        <Header />
        <section className={styl.hero}>
          <div className={styl.text}>
            <h1>
              Kabbie
            </h1>
            <p>Cab management system</p>
          </div>
          <div className={styl.heroImage}>
            <Image
              src="/img/portfolio/kabbie/hero.svg"
              fill
            />
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
        <Footer />
      </div >
    </>
  )
}
