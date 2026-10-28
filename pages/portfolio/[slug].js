import { Fragment } from "react"
import Head from "next/head"
import Image from "next/image"
import Header from "comp/Header"
import Footer from "comp/Footer"
import CaseStudyExtras from "comp/CaseStudyExtras"
import styl from "styl/caseStudy.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { projects, customPageSlugs, getProject } from "staticdata/projects"
import { getCaseStudyArticle, getScreenshots } from "src/caseStudies"

export default function CaseStudy({ slug, article, screenshots }) {
  const project = getProject(slug)
  const [name, subtitle] = project.title.split(/:\s*/)
  const client =
    project.client && project.clientWebsite ? (
      <a href={project.clientWebsite} target="_blank" rel="noreferrer">
        {project.client}
      </a>
    ) : (
      project.client
    )
  const meta = [client, project.role, project.period].filter(Boolean)

  return (
    <div className={styl.container}>
      <Head>
        <title>{`DarshanDev Project: ${project.title}`}</title>
        {project.summary && (
          <meta name="description" content={project.summary} />
        )}
      </Head>
      <Header />

      <section className={styl.hero}>
        <div>
          <div className={styl.text}>
            <h1>{name}</h1>
            {subtitle && <p>{subtitle}</p>}
            {meta.length > 0 && (
              <p className={styl.meta}>
                {meta.map((item, idx) => (
                  <Fragment key={idx}>
                    {idx > 0 && " · "}
                    <span>{item}</span>
                  </Fragment>
                ))}
              </p>
            )}
          </div>
          {(project.image || project.video) && (
            <div className={styl.heroImage}>
              {project.video ? (
                <video muted autoPlay loop playsInline>
                  <source src={project.video} type="video/webm" />
                </video>
              ) : (
                <Image
                  src={project.image}
                  fill
                  style={{ objectFit: "contain" }}
                  alt={project.title}
                  unoptimized={project.image.endsWith(".gif")}
                />
              )}
            </div>
          )}
        </div>
      </section>

      {project.summary && (
        <section className={styl.summary}>
          <div>
            <h2>Summary</h2>
            <p>{project.summary}</p>
          </div>
        </section>
      )}

      <CaseStudyExtras slug={slug} article={article} />

      {screenshots.length > 0 && (
        <section className={styl.carousel}>
          <div>
            <h2>Screenshots</h2>
            <Carousel showThumbs={false} showStatus={false}>
              {screenshots.map((src, idx) => (
                <div key={src}>
                  <img src={src} alt={`${name} screenshot ${idx + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      )}

      <section className={styl.features}>
        <div>
          <h2>Key Features</h2>
          <ul>
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {project.stack?.length > 0 && (
        <section className={styl.features}>
          <div>
            <h2>Tech Stack</h2>
            <ul className={styl.stack}>
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
    </div>
  )
}

export async function getStaticProps({ params }) {
  const project = getProject(params.slug)
  return {
    props: {
      slug: params.slug,
      article: getCaseStudyArticle(params.slug),
      screenshots: getScreenshots(project.imageDir),
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: projects
      .filter((project) => !customPageSlugs.includes(project.slug))
      .map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  }
}
