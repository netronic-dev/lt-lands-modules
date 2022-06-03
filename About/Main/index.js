import style from "../about.module.scss"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function ABoutMain(props) {
  return (
    <Fade triggerOnce>
      <div className={style.main}>
        <div className="background">
          <Image
            src="/about/main.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={style.content}>
          <Fade direction="up" delay={300} triggerOnce>
            <h1 className={style.title}>
              {props.title}
            </h1>
            <p className={style.text}>
              {props.text}
            </p>
          </Fade>
        </div>
      </div>
    </Fade>
  )
}