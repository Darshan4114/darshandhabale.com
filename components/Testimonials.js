import testimonials from "app/testimonials"
import React from "react"
import Slider from "react-slick"
import Rating from "./Rating"
import TestimonialClient from "./TestimonialClient"
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
                <TestimonialClient testimonial={testimonial} />
                <Rating />
              </li>
            </div>
          ))}
        </Slider>
      </ul>
    </div>
  )
}
