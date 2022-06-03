import style from "./style.module.scss"
import Image from "next/image"

export default function LPManufacturer(props) {
  return (
    <section
      className={style.manufacturer}
      name={props.name}
      id={props.id}
      key={props.key}
      ref={props.ref}
    >
      <div className={style.top}>
        <h2 className={`${style.title} fade-up-animation`}>
          {props.title}
        </h2>
        <p className={`${style.text} fade-up-animation`}>
          {props.text}
        </p>
      </div>
      <div className={`${style.image} fade-up-animation desktop`}>
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          objectPosition={props.objectPosition}
        />
      </div>
      <div className={`${style.image} fade-up-animation mobile`}>
        <Image
          src={props.image_responsive}
          layout="fill"
          objectFit="cover"
          objectPosition={props.objectPosition}
        />
      </div>
    </section>
  )
}