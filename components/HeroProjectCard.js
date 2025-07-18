import Image from 'next/image';
import Link from 'next/link';
import styl from './HeroProjectCard.module.scss';

function HeroProjectCard({ id, title, image, video, description, points, link, website }) {
  return (
    <div className={styl.projectCard} key={id}>
      <div className={styl.projectImage}>
        {image && (
          <Image
            src={image}
            fill
            style={{ objectFit: 'cover' }}
            alt={title}
            sizes="(max-width: 768px) 70vw, 20vw"
          />
        )}
        {video && (
          <video
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            muted
            autoPlay
            loop
          >
            <source src={video} type="video/webm" />
          </video>
        )}
      </div>
      <div className={styl.projectAbout}>
        <div className={styl.projectText}>
          <h3>{title}</h3>
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
              <button>
                <Link href={link}>
                  Case study
                </Link>
              </button>
            ) : (
              <button disabled> Case study in progress</button>
            )}
          {website
            ? (
              <button>
                <a href={website} target="_blank" key={id}>
                  Visit site
                </a>
              </button>
            ) : (
              <button disabled> Live site not avaiable</button>
            )}
        </div>
      </div>
    </div>
  );
}

export default HeroProjectCard;