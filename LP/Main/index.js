import style from "./main.module.scss"
import Image from "next/image"
import LPButton from "../Button/LPButton"

export default function LPMain(props) {
  return (
    <section
      className={style.main}
      name={props.name}
      id={props.id}
      key={props.key}
    >
      <div className={style.background_responsive} >
        <Image
          src="/LPNew/main-responsive.jpg"
          layout="responsive"
          width={375}
          height={280}
          quality={90}
        />
      </div>
      <div className={style.content}>
        <h1 className={`${style.title} fade-up-animation`}>
          {props.title}
        </h1>
        <p className={`${style.text} fade-up-animation`}>
          {props.text}
        </p>
        <LPButton
          hover="black"
          bgcolor="#0090FF"
          onClick={props.onButtonClick}
          full_width
          style="fade-up-animation"
        >
          {props.buttonText}
        </LPButton>
      </div>
      <div className={`${style.background} fade-animation`}>
        <Image
          src="/LPNew/main.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="65% 50%"
          quality={90}
        />
      </div>
    </section >
  )
}

