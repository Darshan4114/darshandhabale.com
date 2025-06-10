"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Aldrich } from "next/font/google"

import styl from "./home.module.scss"
import ProjectCard from "comp/ProjectCard"

import { MdEmail } from "react-icons/md"
import { projects } from "staticdata/projects"
import Rating from "comp/Rating"
import technologies from "./technologies"
import testimonials from "./testimonials"
import TestimonialsDesktop from "comp/Testimonials"
import HeroProjectCard from "comp/HeroProjectCard"

const heroFont = Aldrich({ weight: "400", subsets: ["latin"] })

const Home = () => {
  const [techStack] = useState(technologies)
  const [tech, setTech] = useState(technologies[0])

  return (
    <>
      <div className={styl.container}>
        <section className={styl.hero}>
          <div>
            <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none" className={styl.svgArt}>
              <defs>
                <linearGradient id="stripeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ff4500">
                    <animate attributeName="stop-color" values="#ff4500;#ffa500;#ffff00;#ff4500" dur="10s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stop-color="#ffa500">
                    <animate attributeName="stop-color" values="#ffa500;#ffff00;#ff4500;#ffa500" dur="10s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stop-color="#ffff00">
                    <animate attributeName="stop-color" values="#ffff00;#ff4500;#ffa500;#ffff00" dur="10s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#stripeGradient)" />
            </svg>

            <div className={styl.heroLeft}>
              <iframe src="https://player.vimeo.com/video/1087661626?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Darshan Dhabale - Full Stack Developer"></iframe>
              <script src="https://player.vimeo.com/api/player.js"></script>
              <div className={styl.heroProject}>
                <HeroProjectCard
                  id={projects[1].id}
                  title={projects[1].title}
                  image={projects[1].image}
                  video={projects[1].video}
                  description={projects[1].description}
                  points={projects[1].points}
                  link={projects[1].link}
                  website={projects[1].website}
                />
              </div>
              <form className={styl.ctaForm}>
                <label htmlFor='email'>Email</label>
                <input placeholder='spiderman@gmail.com' id='email' />
                <label htmlFor='message'>Message</label>
                <textarea rows={3} placeholder='Hey! I really like your projects!' />
                <button>
                  <input type='submit' value='🕊️ Send' />
                </button>
              </form>
            </div>

            <div className={styl.heroSocials}>
              <a
                target="_blank"
                href="https://www.github.com/darshan4114/"
                className={styl.heroSocial}
              >
                <Image
                  src="/img/github.png"
                  height="48"
                  width="48"
                  priority
                  alt="Github"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/dhabale/"
                className={styl.heroSocial}
              >
                <Image
                  src="/img/linkedin.png"
                  height="48"
                  width="48"
                  priority
                  alt="Linkedin"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/code_darshan/"
                className={styl.heroSocial}
              >
                <Image
                  src="/img/instagram_color.png"
                  height="48"
                  width="48"
                  priority
                  alt="Instagram"
                />
              </a>
              <a
                target="_blank"
                href="mailto:dev@darshandhabale.com"
                className={styl.heroSocial}
              >
                <Image
                  src="/img/email.png"
                  height="48"
                  width="48"
                  priority
                  alt="Email"
                />
              </a>
            </div>
            <section className={styl.testimonials}>
              <div className={styl.testimonialsMobile}>
                <a name="testimonials"></a>
                {/* <h2 className={styl.sectionHeading}>Testimonials</h2> */}
                <ul>
                  {testimonials.slice(0, 3).map((testimonial, idx) => (
                    <li className={styl.testimonial} id={idx}>
                      <Rating />
                      <p className={styl.testimonialText}>
                        “{testimonial.testimonial}”
                      </p>
                      <a href={testimonial.linkedin} target="_blank">
                        <div className={styl.client}>
                          <div className={styl.imageContainer}>
                            <Image
                              src={testimonial.image}
                              fill
                              objectFit="cover"
                              alt={testimonial.name}
                            />
                            <div className={styl.linkedinImageContainer}>
                              <Image
                                src="/img/linkedin.png"
                                height="24"
                                width="24"
                                priority
                                alt="Linkedin"
                              />
                            </div>
                          </div>
                          <p>{testimonial.name}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* <div className={styl.gearOne}>
              <Image src="/img/gear.png" fill objectFit="cover" />
            </div>
            <div className={styl.gearTwo}>
              <Image src="/img/gear2.png" fill objectFit="cover" />
            </div> */}
          </div>
        </section >
        <div className={styl.crimeTape} />

        <section className={styl.projects}>
          <div>
            <h2>Projects</h2>
            <p style={{ margin: "0 0.5rem 0.5rem" }}>
              Listing top 3,{" "}
              <Link href="/portfolio" className={styl.projectPageLink}>
                see all projects
              </Link>
              .{" "}
            </p>
            <p style={{ margin: "0 0.5rem 0.5rem", fontSize: "0.9rem" }}>
              &#40; Prefer case studies, sites linked here are not production
              sites, but still require you to create accounts for full
              experience. &#41;
            </p>
            {projects.length > 0 &&
              projects
                .slice(0, 3)
                .map((project) => (
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    image={project.image}
                    video={project.video}
                    description={project.description}
                    points={project.points}
                    link={project.link}
                    website={project.website}
                  />
                ))}
          </div>
        </section>

        <div className={styl.crimeTape} />

        <section className={styl.ctaForm2}>
          <div>
            <h2>Want to message me about something?</h2>
            <form className={styl.ctaForm}>
              <label htmlFor='email'>Email</label>
              <input placeholder='spiderman@gmail.com' id='email' />
              <label htmlFor='message'>Message</label>
              <textarea rows={3} placeholder='Hey! I really like your projects!' />
              <button>
                <input type='submit' value='🕊️ Send' />
              </button>
            </form>
          </div>
        </section>

        <div className={styl.crimeTape} />

        <section className={styl.testimonials}>
          <div className={styl.testimonialsMobile}>
            <a name="testimonials"></a>
            <h2 className={styl.sectionHeading}>Testimonials</h2>
            <ul>
              {testimonials.map((testimonial, idx) => (
                <li className={styl.testimonial} id={idx}>
                  <Rating />
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
                      <div className={styl.linkedinImageContainer}>
                        <Image
                          src="/img/linkedin.png"
                          height="24"
                          width="24"
                          priority
                          alt="Linkedin"
                        />
                      </div>
                    </div>
                    <p>{testimonial.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className={styl.crimeTape} />

        <section className={styl.wdid}>
          <div>
            <h2 className={styl.sectionHeading}>What do I do?</h2>
            <div className={`${styl.cols}`}>
              <div className={styl.intro}>
                <p>
                  I develop{" "}
                  <span className={styl.highlight}>
                    custom web and mobile applications.
                  </span>
                </p>
                <p>
                  I have worked with -{" "}
                  <span className={styl.highlight}>
                    hotels, colleges, cab companies and ecommerce startups.
                  </span>
                </p>
                <p>
                  Whether it's streamlining hotel operations or optimizing
                  transportation logistics, I'm dedicated to building software
                  that adds tangible value to businesses.
                </p>
                <p>
                  Building valuable software that saves my clients time and
                  money gets me going.
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
                    strokeWidth="14"
                  />

                  <image
                    id={styl.artGroup1Ball}
                    x="230"
                    y="300"
                    width={200}
                    height={200}
                    href="/img/ball.png"
                    clip-path="url(#myCircle)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1312_9"
                      x1="339.5"
                      y1="8"
                      x2="339.5"
                      y2="620.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D196FF" />
                      <stop offset="1" stopColor="#FFA0FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <div className={styl.crimeTape} />

        <section className={styl.stack}>
          <div>
            <h2>Tech stack</h2>
            <div className={styl.stackDisplay}>
              <div className={styl.elementLogo}>
                <Image
                  style={{ marginLeft: "0.25em" }}
                  src={tech.image}
                  height="180"
                  width="180"
                  alt={tech.name}
                />
              </div>
              <div className={styl.stackelements}>
                {techStack.map((_tech, idx) => (
                  <button
                    id={idx}
                    className={`${_tech.name === tech.name && styl.selectedStackElement
                      } ${styl.stackelement}`}
                    onClick={() => {
                      setTech(_tech)
                    }}
                  >
                    <p>{_tech.name}</p>
                  </button>
                ))}
                <p className={styl.techDescription}>{tech.description}</p>
              </div>
            </div>
          </div>
        </section>



        <div className={styl.crimeTape} />

        {/* </div> */}

        <section className={styl.footer}>
          <div>
            <h2>Contact details</h2>
            <div className={styl.footerColumns}>
              <div className={styl.footerLeft}>
                <p>
                  Think you have an exciting project for me? drop me an email at -
                </p>
                <p className={styl.emailLine}>
                  <span className={styl.copyBtn}>
                    <MdEmail
                      color="white"
                      size={24}
                      style={{ marginRight: "0.5em" }}
                    />
                  </span>
                  <span>
                    &nbsp;
                    <a href="mailto:dev@darshandhabale.com">
                      dev@darshandhabale.com
                    </a>
                  </span>
                </p>
                <br />
                <p>
                  Just want a developer friend?
                  Here is my &nbsp;
                  <a target="_blank" href="https://www.instagram.com/code_darshan/">
                    instagram
                  </a>
                </p>
                <a
                  target="_blank"
                  href="https://www.instagram.com/code_darshan/"
                  className={styl.emailLine}
                >
                  <Image
                    style={{ marginLeft: "0.25em" }}
                    src="/img/instagram.png"
                    height="32"
                    width="32"
                    alt="Instagram"
                  />
                  &nbsp;
                  <p>@code_darshan</p>
                </a>
              </div>
              <div className={styl.footerRight}>
                <form className={styl.ctaForm}>
                  <label htmlFor='email'>Email</label>
                  <input placeholder='spiderman@gmail.com' id='email' />
                  <label htmlFor='message'>Message</label>
                  <textarea rows={3} placeholder='Hey! I really like your projects!' />
                  <button>
                    <input type='submit' value='🕊️ Send' />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  )
}

export default Home
