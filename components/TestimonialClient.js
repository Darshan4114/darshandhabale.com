import Image from "next/image"
import styl from "../app/home.module.scss"

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")

export default function TestimonialClient({ testimonial }) {
  const content = (
    <div className={styl.client}>
      <div className={styl.imageContainer}>
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            fill
            objectFit="cover"
            alt={testimonial.name}
          />
        ) : (
          <span className={styl.initials}>{initials(testimonial.name)}</span>
        )}
        {testimonial.linkedin && (
          <div className={styl.linkedinImageContainer}>
            <Image
              src="/img/linkedin.png"
              height="24"
              width="24"
              priority
              alt="Linkedin"
            />
          </div>
        )}
      </div>
      <div>
        <p>{testimonial.name}</p>
        {testimonial.title && (
          <p className={styl.clientTitle} title={testimonial.title}>
            {testimonial.title}
          </p>
        )}
      </div>
    </div>
  )

  return testimonial.linkedin ? (
    <a href={testimonial.linkedin} target="_blank">
      {content}
    </a>
  ) : (
    content
  )
}
