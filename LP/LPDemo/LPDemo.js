import style from "./style.module.scss"
import Image from "next/image"
import LPButton from "../LPButton/LPButton"

export default function LPDemo(props) {
  return (
    <section
      className={style.demo}
      name={props.name}
      id={props.id}
      key={props.key}
      ref={props.ref}
    >
      <div className={style.content}>
        <h2 className={`${style.title} fade-up-animation`}>
          {props.title}
        </h2>
        <div className={style.bottom}>
          <p className={`${style.text} fade-up-animation`}>
            {props.text}
          </p>
          <LPButton
            hover="black"
            bgcolor="#0090FF"
            style={`${style.button} fade-up-animation`}
            onClick={props.onPopUpFormVisibilityChange}
            full_width
          >
            {props.buttonText}
          </LPButton>
        </div>
      </div>
      <div className={`${style.image} ${style.desktop} fade-animation`}>
        <Image src={props.image} layout="fill" objectFit="cover" />
      </div>
    </section>
  )
}