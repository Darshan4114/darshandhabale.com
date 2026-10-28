import dynamic from "next/dynamic"
import Rating from "comp/Rating"
import TestimonialClient from "comp/TestimonialClient"
import testimonials from "app/testimonials"
import homeStyl from "app/home.module.scss"
import { getProject } from "staticdata/projects"
import styl from "./CaseStudyExtras.module.scss"

const CaseStudyArticle = dynamic(() => import("comp/CaseStudyArticle"))

export const getProjectTestimonials = (slug) =>
  testimonials.filter((testimonial) => testimonial.projects?.includes(slug))

// The parts every case study shares: talking-head video, testimonials and the article.
// Each section only renders once its content exists.
export default function CaseStudyExtras({ slug, article }) {
  const project = getProject(slug)
  const vouches = getProjectTestimonials(slug)

  return (
    <>
      {project?.talkingHead && (
        <>
          <div className={styl.crimeTape} />
          <section className={`${styl.section} ${styl.video}`}>
            <div>
              <h2>The story, in my words</h2>
              <div className={styl.frame}>
                <iframe
                  src={project.talkingHead}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title={`Darshan on ${project.title}`}
                />
              </div>
            </div>
          </section>
        </>
      )}

      {vouches.length > 0 && (
        <>
          <div className={styl.crimeTape} />
          <section className={`${styl.section} ${styl.testimonials}`}>
            <div>
              <h2>What they said</h2>
              <div
                className={homeStyl.testimonials}
                style={{ padding: 0, background: "transparent" }}
              >
                <ul>
                  {vouches.map((testimonial) => (
                    <li className={styl.testimonial} key={testimonial.name}>
                      <Rating />
                      <p>“{testimonial.testimonial}”</p>
                      <TestimonialClient testimonial={testimonial} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      {article?.content && (
        <>
          <div className={styl.crimeTape} />
          <section className={`${styl.section} ${styl.article}`}>
            <div>
              <h2>{article.title || "Case study"}</h2>
              {article.excerpt && (
                <p className={styl.excerpt}>{article.excerpt}</p>
              )}
              <div className={styl.body}>
                <CaseStudyArticle content={article.content} />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
