import testimonials from "app/testimonials"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import Rating from "./Rating"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styl from "../app/home.module.scss"

export default function TestimonialsDesktop() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    pauseOnHover: true,
    className: styl.testimonialDesktopSlider,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div
      className={`slider-container ${styl.testimonials} ${styl.testimonialsDesktop}`}
    >
      <a name="testimonials"></a>
      {/* <h2 className={styl.sectionHeading}>Testimonials</h2> */}
      <ul>
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => (
            <div className="">
              <li className={styl.testimonial} id={idx}>
                <p className={styl.testimonialText}>
                  “{testimonial.testimonial}”
                </p>
                <div className={styl.client}>
                  <div className={styl.imageContainer}>
                    <Image
                      src={testimonial.image}
                      fill
                      objectFit="cover"
                      alt={testimonial.name}
                    />
                  </div>
                  <a href={testimonial.linkedin} target="_blank">
                    <Image
                      src="/img/linkedin.png"
                      height="24"
                      width="24"
                      priority
                      alt="Linkedin"
                    />
                  </a>
                  <p>{testimonial.name}</p>
                  <Rating />
                </div>
              </li>
            </div>
          ))}
        </Slider>
      </ul>
    </div>
  )
}
