import Head from "next/head";
import Image from "next/image";
import Header from "comp/Header";
import Footer from "comp/Footer";
import styl from "./meetloom.module.scss";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    id: 1,
    src: '/img/portfolio/meetloom/meetloom-1.png',
    alt: 'Chat Page',
  },
  {
    id: 2,
    src: '/img/portfolio/meetloom/meetloom-2.png',
    alt: 'Chat Page',
  },
  {
    id: 3,
    src: '/img/portfolio/meetloom/meetloom-3.png',
    alt: 'Chat Page',
  },
  {
    id: 4,
    src: '/img/portfolio/meetloom/meetloom-4.png',
    alt: 'Chat Page',
  },
  {
    id: 5,
    src: '/img/portfolio/meetloom/meetloom-5.png',
    alt: 'Chat Page',
  },
  {
    id: 6,
    src: '/img/portfolio/meetloom/meetloom-6.png',
    alt: 'Chat Page',
  },
  {
    id: 7,
    src: '/img/portfolio/meetloom/meetloom-7.png',
    alt: 'Chat Page',
  },
  {
    id: 8,
    src: '/img/portfolio/meetloom/meetloom-8.png',
    alt: 'Chat Page',
  },
  {
    id: 9,
    src: '/img/portfolio/meetloom/meetloom-9.png',
    alt: 'Chat Page',
  },
  {
    id: 10,
    src: '/img/portfolio/meetloom/meetloom-10.png',
    alt: 'Chat Page',
  },
  {
    id: 11,
    src: '/img/portfolio/meetloom/meetloom-11.png',
    alt: 'Chat Page',
  },
  {
    id: 12,
    src: '/img/portfolio/meetloom/meetloom-12.png',
    alt: 'Chat Page',
  }
];

export default function MeetLoom() {
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
          <title>DarshanDev Project: MeetLoom Chat and Video Conferencing Application</title>
        </Head>
        <Header />
        <section className={styl.hero}>
          <div>
            <div className={styl.cols}>
              <div className={styl.text}>
                <h1>
                  MeetLoom
                </h1>
                <p>Chat and Video Conferencing Application</p>
              </div>
              <div className={styl.heroImage}>
                <Image
                  src="/img/portfolio/meetloom/hero.svg"
                  fill
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styl.summary}>
          <div className="">
            <h2>Summary</h2>
            <p>
              MeetLoom is a responsive and progressive web application that harnesses the power of WebSockets and WebRTC to enable real-time chat and video conferencing. This innovative platform aims to redefine online communication, making it more immersive and engaging.
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
        <Footer />
      </div >
    </>
  )
}
