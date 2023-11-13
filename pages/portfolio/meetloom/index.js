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

export default function MeetLoom () {
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
        <section className={styl.about}>
          <div className="">
            <h2>About this project</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae possimus ullam amet illum iure, saepe dolores veritatis nam. Quis rem odio quasi asperiores ex quaerat iure. Consequuntur delectus, enim fugiat a exercitationem assumenda ea commodi sequi. Placeat, aspernatur ipsum. Consequatur unde cupiditate deleniti, aperiam nisi consequuntur quibusdam, animi esse assumenda quasi beatae. Minus, molestias dignissimos! Repellat, eum aliquid consectetur aperiam nulla natus veniam ad incidunt perspiciatis possimus odio ea amet saepe quaerat! Soluta iusto accusantium quod tempore culpa eaque, perferendis fugit, nihil blanditiis omnis beatae deleniti animi porro mollitia impedit neque, explicabo reiciendis recusandae expedita nam veniam praesentium inventore magnam. Nulla ipsam placeat totam nobis molestiae illo nostrum voluptatum?</p>
          </div>
        </section>
        <section className={styl.techStack}>
          <div className="">
            <h2>Tech Stack</h2>
            <p>MeetLoom is built on a robust and versatile tech stack designed to deliver a seamless and reliable user experience:</p>
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
        </section>
        <Footer />
      </div >
    </>
  )
}
