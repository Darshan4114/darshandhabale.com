import Image from "next/image"
import styl from "styl/ProfilePic.module.css"

export default function ProfilePic({
  imgSrc,
  size = "large",
  shape = "circle",
}) {
  return (
    <div
      className={`${styl.imgContainer} ${size === "large" && styl.large} ${
        shape === "square" && styl.square
      }`}
    >
      {imgSrc && (
        <Image src={imgSrc} layout="fill" objectFit="cover" alt="profile pic" />
      )}
    </div>
  )
}
