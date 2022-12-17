import Link from "next/link"
import Image from "next/image"
import styl from "styl/Posts.module.scss"
import Air3x3 from "./air3x3"
import Header from "comp/Header"

export default function Portfolio() {
  return (
    <>
      <Header darkmode/>
      <div className={styl.container}>
        <Link href="/portfolio/air3x3">
          <a className={styl.postTitle}>
            <div className={styl.postContainer}>
              <div className={styl.coverImgContainer}>
                <Image
                  src="/img/portfolio/air3x3/hero.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="Air3x3: The basketball tournament application"
                />
              </div>
              <div className={styl.text}>
                <h2>Air3x3: The basketball tournament application</h2>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/portfolio/babydojo">
          <a className={styl.postTitle}>
            <div className={styl.postContainer}>
              <div className={styl.coverImgContainer}>
                <Image
                  src="/img/portfolio/babydojo/babylarge.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Babydojo: The parenting application"
                />
              </div>
              <div className={styl.text}>
                <h2>Babydojo: The parenting application</h2>
              </div>
            </div>
          </a>
        </Link>
        {/* <Link href="/portfolio/exam-manager">
          <a className={styl.postTitle}>
            <div className={styl.postContainer}>
              <div className={styl.coverImgContainer}>
                <Image
                  src="/img/portfolio/babydojo/babylarge.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Exam manager"
                />
              </div>
              <div className={styl.text}>
                <h2>Exam manager</h2>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/portfolio/exam-manager">
          <a className={styl.postTitle}>
            <div className={styl.postContainer}>
              <div className={styl.coverImgContainer}>
                <Image
                  src="/img/portfolio/babydojo/babylarge.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Exam manager"
                />
              </div>
              <div className={styl.text}>
                <h2>Exam manager</h2>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/portfolio/exam-manager">
          <a className={styl.postTitle}>
            <div className={styl.postContainer}>
              <div className={styl.coverImgContainer}>
                <Image
                  src="/img/portfolio/babydojo/babylarge.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Exam manager"
                />
              </div>
              <div className={styl.text}>
                <h2>Exam manager</h2>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/portfolio/exam-manager">
          <a className={styl.postTitle}>
            <div className={styl.postContainer}>
              <div className={styl.coverImgContainer}>
                <Image
                  src="/img/portfolio/babydojo/babylarge.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Exam manager"
                />
              </div>
              <div className={styl.text}>
                <h2>Exam manager</h2>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/portfolio/exam-manager">
          <a className={styl.postTitle}>
            <div className={styl.postContainer}>
              <div className={styl.coverImgContainer}>
                <Image
                  src="/img/portfolio/babydojo/babylarge.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Exam manager"
                />
              </div>
              <div className={styl.text}>
                <h2>Exam manager</h2>
              </div>
            </div>
          </a>
        </Link> */}
      </div>
    </>
  )
}
