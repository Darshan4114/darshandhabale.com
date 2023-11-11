import Link from "next/link"
import Image from "next/image"
import styl from "./portfolio.module.scss"
import Header from "comp/Header"

export default function Portfolio () {
  const projects = [
    {
      id: 1,
      title: 'MeetLoom: Chat and Video Conferencing Application',
      slug: '/portfolio/meetloom',
      image: '/img/portfolio/meetloom/meetloom.png'
    },
    {
      id: 2,
      title: 'Mazaclass: Coaching Class Management System',
      slug: '/portfolio/mazaclass',
      image: '/img/portfolio/mazaclass/mazaclass2.png'
    },
    {
      id: 3,
      title: 'Air3x3: The Basketball Tournament Application',
      slug: '/portfolio/air3x3',
      image: '/img/portfolio/air3x3/hero.jpg'
    },
    {
      id: 4,
      title: 'Kabbie: The Concierge Management Application',
      slug: '/portfolio/kabbie',
      image: '/img/portfolio/air3x3/hero.jpg'
    },
    {
      id: 5,
      title: 'Tap Academy: Code Education Platform Website',
      slug: '/portfolio/tap-academy',
      image: '/img/portfolio/air3x3/hero.jpg'
    },
    {
      id: 6,
      title: 'Tredzy: Multiparty Letter of Credit Management System',
      slug: '/portfolio/tredzy',
      image: '/img/portfolio/air3x3/hero.jpg'
    },
    {
      id: 7,
      title: 'Uncodez.io website: Web Development Agency Website',
      slug: '/portfolio/uncodez',
      image: '/img/portfolio/uncodez/uncodez.gif'
    },
    {
      id: 8,
      title: 'D.Y. Patil University Exam Management System',
      slug: '/portfolio/dypatil',
      image: '/img/portfolio/uncodez/uncodez.gif'
    },
    {
      id: 9,
      title: 'Babydojo: The Baby Care Application',
      slug: '/portfolio/babydojo',
      image: '/img/portfolio/babydojo/babylarge.png'
    },
    {
      id: 10,
      title: 'Clear Claim: Tax Manager Landing Page',
      slug: '/portfolio/clear-claim',
      image: '/img/portfolio/uncodez/uncodez.gif'
    },
    {
      id: 11,
      title: 'SFDI: School of Fashion Design and Innovation Landing Page',
      slug: '/portfolio/sfdi',
      image: '/img/portfolio/uncodez/uncodez.gif'
    }
  ];

  return (
    <div className={styl.container}>
      <Header darkmode />
      <div className={styl.projects}>
        {projects.length > 0 && projects.map((project) => (
          <div className={styl.postContainer} key={project.id}>
            <div className={styl.card}>
              <Link href={project.slug} className={styl.postTitle}>
                <div className={styl.coverImgContainer}>
                  <Image
                    src={project.image}
                    layout="fill"
                    objectFit="cover"
                    alt={project.title}
                  />
                </div>
                <div className={styl.text}>
                  <h2>{project.title}</h2>
                </div>
              </Link>
            </div>
            <div className={styl.shadow}></div>
          </div>
        ))}
      </div>
    </div>
  )
}
