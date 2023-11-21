import Image from 'next/image';
import Link from 'next/link';
import styl from './ProjectCard.module.scss';

function ProjectCard ({ id, title, image, description, points, link, website }) {
  return (
    <div className={styl.projectCard}>
      <div className={styl.projectImage}>
        <Image src={image} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styl.projectAbout}>
        <div className={styl.projectText}>
          <h4>{title}</h4>
          {description && (
            <p>
              {description}
            </p>
          )}
          {points && points.length > 0 && (
            <ul className={styl.projectPoints}>
              {points.map((point, idx) => (<li key={`point-${idx}`}>{point}</li>))}
            </ul>
          )}
        </div>
        <div className={styl.projectLinks}>
          {link
            ? (
              <Link href={link}>
                Case study
              </Link>
            ) : (
              <button disabled> Case study in progress</button>
            )}
          {website
            ? (
              <a href={website} target="_blank" key={id}>
                Visit site
              </a>
            ) : (
              <button disabled> Live site not avaiable</button>
            )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;