import styl from "styl/AuthorSummary.module.css"
import ProfilePic from "comp/ProfilePic"

export default function AuthorSummary() {
  return (
    <div className={styl.container}>
      <div>
        <ProfilePic imgSrc="/darshan.png" size="small" />
      </div>
      <h2>Darshan D.</h2>
      <subtitle>Author</subtitle>
    </div>
  )
}
