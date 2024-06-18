
import Link from "next/link";
import Image from "next/image";
import { Aldrich } from 'next/font/google';

import styl from "./home.module.scss";
import ProjectCard from "comp/ProjectCard";

import { MdEmail } from 'react-icons/md';
import { projects } from "staticdata/projects";

const heroFont = Aldrich({ weight: '400', subsets: ['latin'] })

const Home = () => {

  return (
    <>
      <div className={styl.container}>
        <section className={styl.hero}>
          <div>
            <div className={styl.pfp}>
              <div className={styl.image}>
                <Image
                  src='/img/darshan6.png'
                  priority
                  layout='fill'
                  sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
                  alt='Darshan Dhabale Photo'
                />
              </div>
              <div className={styl.smiley}>
                <Image
                  src='/img/smiley.png'
                  priority
                  layout='fill'
                  sizes="(max-width: 768px) 30vw, 20vw"
                  alt='Smile'
                />
              </div>
              <div className={styl.shadow}></div>
              <p className={styl.instruction}>Hover / Touch</p>
            </div>

            <div className={styl.text}>
              <div className="">
                <h1 className={`${styl.name} ${heroFont.className}`}>
                  <span>D</span>arshan Dhabale
                </h1>
                <div className={styl.desgGrp}>
                  <p className={styl.desg}>Developer</p>
                </div>
              </div>
              <ul>
                <li>Building cool software</li>
                <li>Full stack JavaScript</li>
                <li>Since 2018</li>
              </ul>

              <div className={styl.quicknav}>
                <button>
                  <Link href='/portfolio'>
                    Portfolio
                  </Link>
                </button>
                <button>
                  <Link href='/blog'>
                    Blog
                  </Link>
                </button>
                <button>
                  <Link href='#testimonials'>
                    Testimonials
                  </Link>
                </button>
              </div>
              <div className={styl.heroSocials}>
                <a target="_blank" href="https://www.github.com/darshan4114/" className={styl.heroSocial}>
                  <Image
                    src="/img/github.png"
                    height="48"
                    width="48"
                    priority
                    alt='Github'
                  />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/dhabale/" className={styl.heroSocial}>
                  <Image
                    src="/img/linkedin.png"
                    height="48"
                    width="48"
                    priority
                    alt='Linkedin'
                  />
                </a>
                <a target="_blank" href="https://www.instagram.com/code_darshan/" className={styl.heroSocial}>
                  <Image
                    src="/img/instagram_color.png"
                    height="48"
                    width="48"
                    priority
                    alt='Instagram'
                  />
                </a>
                <a target="_blank" href="mailto:dev@darshandhabale.com" className={styl.heroSocial}>
                  <Image
                    src="/img/email.png"
                    height="48"
                    width="48"
                    priority
                    alt='Email'
                  />
                </a>
              </div>
            </div>
            <div className={styl.gearOne}>
              <Image src="/img/gear.png" fill objectFit="cover" />
            </div>
            <div className={styl.gearTwo}>
              <Image src="/img/gear2.png" fill objectFit="cover" />
            </div>
          </div>
        </section>

        <div className={styl.crimeTape} />

        <section className={styl.wdid}>
          <div>
            <h2 className={styl.sectionHeading}>
              What do I do?
            </h2>
            <div className={`${styl.cols}`}>
              <div className={styl.intro}>
                <p>
                  I help business owners develop{" "}
                  <span className={styl.highlight}>
                    custom web based solutions or mobile applications.
                  </span>
                </p>
                <p>
                  Business I have worked with -{" "}
                  <span className={styl.highlight}>
                    hotels, colleges, cab companies and ecommerce startups.
                  </span>
                </p>
                <p>
                  Whether it's streamlining hotel operations or optimizing transportation logistics,
                  I'm dedicated to building software that adds tangible value to businesses.
                </p>
                <p>
                  Building valuable software that saves my clients time and money
                  gets me going.
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
                    stroke-width="14"
                  />

                  <image id={styl.artGroup1Ball}
                    x="230"
                    y="300"
                    width={200} height={200} href="/img/ball.png" clip-path="url(#myCircle)" />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1312_9"
                      x1="339.5"
                      y1="8"
                      x2="339.5"
                      y2="620.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#D196FF" />
                      <stop offset="1" stop-color="#FFA0FB" />
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
            <p style={{ margin: '0 0.5rem 0.5rem' }}>Including but not limited to</p>
            <div className={styl.stackelements}>
              <p>React.js</p>
              <p>Next.js</p>
              <p>TailwindCSS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Go</p>
              <p>Jest</p>
              <p>Node.js</p>
              <p>Nest.js</p>
              <p>Python</p>
              <p>Django</p>
              <p>WebRTC</p>
              <p>Docker</p>
              <p>WebSockets</p>
              <p>PostgreSQL</p>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>Firestore</p>
              <p>IaC</p>
              <p>Pipelines</p>
              <p>Firebase</p>
              <p>AWS</p>
              <p>EC2</p>
              <p>ECS</p>
              <p>ECR</p>
              <p>Route53</p>
              <p>CloudFormation</p>
              <p>Code Pipelines</p>
              <p>Copilot CLI</p>
              <p>Salesforce</p>
            </div>
          </div>
        </section>

        <div className={styl.crimeTape} />

        <section className={styl.projects}>
          <div>
            <h2>Projects</h2>
            <p style={{ margin: '0 0.5rem 0.5rem' }}>Listing top 3, <Link href='/portfolio' className={styl.projectPageLink}>see all projects</Link>. </p>
            <p style={{ margin: '0 0.5rem 0.5rem', fontSize: '0.9rem' }}>&#40; Prefer case studies, sites linked here are not production sites, but still require you to create accounts for full experience. &#41;</p>
            {projects.length > 0 && projects.slice(0, 3).map((project) => (
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

        <section className={styl.testimonials}>
          <div>
            <a name='testimonials'></a>
            <h2>Testimonials</h2>
            <ul>
              <li className={styl.testimonial}>
                <p className={styl.testimonialText}>
                  “Darshan is quite dependable on his development work specially in frontend. working with him has been fluent.
                  Darshan has showcased a remarkable proficiency in developing marketing websites, fintech products, and performance marketing landing pages using Next.js. He has consistently delivered high-quality work that not only meets but often exceeds project requirements. His expertise of Next.js, coupled with a strong foundation in web development, has been instrumental in the success of our projects.
                  He is just a message away when working with him on various projects.”
                </p>
                <a href='https://www.linkedin.com/in/pankaj-dhamane-027ba2147/' target="_blank" >
                  <div className={styl.client}>
                    <Image src='/testimonials/pankaj.jpeg' width={36} height={36} alt='Jesus Mejia' />
                    <p> - Pankaj Dhamane</p>
                  </div>
                </a>
              </li>
              <li className={styl.testimonial}>
                <p className={styl.testimonialText}>
                  “I highly recommend Darshan for Frontend Developer. Darshan is wonderful to work with and he poses great skillset when it comes to frontend development. He always strives to go above and beyond while achieving team's goals and this has helped him to scale up quickly into any new project that he is assigned with. Darshan has a long way ahead in his career and I am sure, he will excel wherever he goes.”
                </p>
                <a href='https://www.linkedin.com/in/kaivalya-mendki/' target="_blank" >
                  <div className={styl.client}>
                    <Image src='/testimonials/kaivalya.jpeg' width={36} height={36} alt='Jesus Mejia' />
                    <p> - Kaivalya Mendki</p>
                  </div>
                </a>
              </li>
              <li className={styl.testimonial}>
                <p className={styl.testimonialText}>
                  “Darshan is a very skilled and professional full stack developer. I
                  am very impressed with his ability to listen to my requirements and
                  walk me through the possibilities. I am very happy with Darshan's
                  work and plan on using him in future projects. He covered all the
                  requirements within the timeline he proposed. You will be impressed
                  as well!”
                </p>
                <a href='https://www.linkedin.com/in/jesus-m-b06739103/' target="_blank" >
                  <div className={styl.client}>
                    <Image src='/testimonials/jesus.jpeg' width={36} height={36} alt='Jesus Mejia' />
                    <p> - Jesus Mejia</p>
                  </div>
                </a>
              </li>
              <li>
                <p className={styl.testimonialText}>
                  “Darshan was very enthusiastic and gave some useful solution for the
                  project. The communication was smooth and work were delivered as
                  required.”
                </p>
                <a href='https://www.linkedin.com/in/looyee-ng/' target="_blank" >
                  <div className={styl.client}>
                    <Image src='/testimonials/looyee.jpeg' width={36} height={36} alt='LooYee NG' />
                    <p> - LooYee NG</p>
                  </div>
                </a>
              </li>
              <li>
                <p className={styl.testimonialText}>
                  “He is very talented and cooperative!”
                </p>
                <a href='https://www.linkedin.com/in/vibhanshurathod/' target="_blank" >
                  <div className={styl.client}>
                    <Image src='/testimonials/vibhanshu.jpeg' width={36} height={36} alt='Vibhanshu Rathod' />
                    <p> - Vibhanshu Rathod</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className={styl.crimeTape} />

        {/* </div> */}

        <section className={styl.footer}>
          <div>

            <h2>Contact details</h2>

            <p>
              Think you have an exciting project for me? drop me an email at -
            </p>
            <p className={styl.emailLine}>
              <span className={styl.copyBtn}>
                <MdEmail color='white' size={24} style={{ marginRight: '0.5em' }} />
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
              Just want a developer friend? I&apos;m very open to that offer. Here is
              my &nbsp;
              <a target="_blank" href="https://www.instagram.com/code_darshan/">
                instagram
              </a>
            </p>
            <a target="_blank" href="https://www.instagram.com/code_darshan/" className={styl.emailLine}>
              <Image
                style={{ marginLeft: "0.25em" }}
                src="/img/instagram.png"
                height="32"
                width="32"
                alt='Instagram'
              />
              &nbsp;
              <p>
                @code_darshan
              </p>
            </a>
          </div>
        </section>
      </div >
    </>
  )
}

export default Home;
