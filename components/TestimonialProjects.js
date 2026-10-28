import Link from "next/link"
import { getProject } from "staticdata/projects"
import styl from "../app/home.module.scss"

// "Worked together on: Tredzy, SFDI" — links a testimonial to its case studies.
export default function TestimonialProjects({ testimonial }) {
  const projects = (testimonial.projects || []).map(getProject).filter(Boolean)
  if (projects.length === 0) return null

  return (
    <p className={styl.testimonialProjects}>
      Worked together on:{" "}
      {projects.map((project, idx) => (
        <span key={project.slug}>
          {idx > 0 && ", "}
          <Link href={project.link}>{project.title.split(":")[0]} →</Link>
        </span>
      ))}
    </p>
  )
}
