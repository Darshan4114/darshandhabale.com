import Header from "comp/Header";

import styl from "./portfolio.module.scss";
import ProjectCard from "comp/ProjectCard";
import { projects } from "staticdata/projects";

export default function Portfolio () {

  return (
    <div className={styl.container}>
      <Header darkmode />
      <div className={styl.projects}>
        {projects.length > 0 && projects.map((project) => (
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
    </div>
  )
}
