import Image from "next/image"
import style from "./video.module.scss"

export default function LPVideo(props) {
  return (
    <section
      className={style.video}
      name={props.name}
      id={props.id}
      key={props.key}
      ref={props.ref}
    >
      <div className={`${style.video_in} fade-up-animation`} onClick={props.onClick}>
        <p className={style.text}>{props.text}</p>
        <div className={style.image}>
          <Image
            src={props.image}
            layout="fill"
            objectFit="cover"
            objectPosition="40% 0"
          />
        </div>
        <div className={style.image_responsive}>
          <Image
            src={props.image_responsive}
            layout="fill"
            objectFit="cover"
            objectPosition="40% 0"
          />
        </div>
        <div className={style.play_button}>
          {playBtn}
        </div>
      </div>
    </section>
  )
}
const playBtn = (
  <svg
    width="300"
    height="301"
    viewBox="0 0 300 301"
    fill="none"
    className={style.play_button_vector}
  >
    <circle cx="149.998" cy="150.197" r="149.322" stroke="white" />
    <path d="M181.875 150.197L134.059 177.804L134.059 122.591L181.875 150.197Z" fill="white" />
  </svg>

)