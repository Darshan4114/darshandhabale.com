import Header from "comp/Header";

import styl from "./portfolio.module.scss";
import ProjectCard from "comp/ProjectCard";
import { projects } from "staticdata/projects";
import testimonials from "app/testimonials";

const vouchersFor = (slug) =>
  testimonials
    .filter((testimonial) => testimonial.projects?.includes(slug))
    .map((testimonial) => testimonial.name);

export default function Portfolio () {

  return (
    <div className={styl.container}>
      <Header darkmode />
      <div className={styl.projects}>
        {projects.length > 0 && projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            vouchedBy={vouchersFor(project.slug)}
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
    </div>
  )
}
