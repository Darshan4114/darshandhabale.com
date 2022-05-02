import Link from "next/link"
import Image from "next/image"
import styl from "styl/Featured.module.css"
export default function Featured() {
  return (
    <div className={styl.featured}>
      <div className={styl.text}>
        <h1>React Interactive Blog Series</h1>
        <h2>Learn react the best way!</h2>
        <Link href="/react-blog">
          <a>
            <button>Start learning</button>
          </a>
        </Link>
      </div>
      <div className={styl.imgContainer}>
        <div className={styl.image}>
          <Image src="/img/react_white.svg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}
