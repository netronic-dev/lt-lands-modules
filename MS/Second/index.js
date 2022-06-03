import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import style from "../ms.module.scss"

export default function MSSecond(props) {
  return (
    <>
      <div className={style.ms_screen_two}>
        <Fade direction="up" triggerOnce>
          <p>
            {props.text}
          </p>
        </Fade>
      </div>
      <div className={style.ms_screen_two__image}>
        <Fade direction="up" triggerOnce>
          <Image
            src="/multistation/multistation.jpg"
            layout="responsive"
            width={1920}
            height={1275}
          />
        </Fade>
      </div>
    </>
  )
}