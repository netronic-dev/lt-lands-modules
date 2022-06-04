import style from "../scorpion.module.scss"
import Image from "next/image"
import { ColumnTextImage } from "../../ColumnTextImage"
import { Fade } from "react-awesome-reveal"

export default function Shockfight(props) {
  return (
    <div className={style.bg_shockfight}>
      <Fade direction="up" triggerOnce>
        <h2 className={style.h2}>
          {props.title}
        </h2>
      </Fade>
      <ColumnTextImage
        title={props.columnTitle}
        svgOne={<img src="/scorpion/svg/icon7.svg" />}
        textOne={props.text}
        svgTwo={
          <img src="/scorpion/svg/icon8.svg" />
        }
        textTwo={props.textTwo}
        svgThree={<img src="/scorpion/svg/icon10.svg" />}
        textThree={props.textThree}
        svgFour={
          <img src="/scorpion/svg/icon13.svg" />
        }
        textFour={props.textFour}
        image={
          <Image
            src="/scorpion/gunnshockband.jpg"
            layout="fill"
            objectFit="cover"
          />
        }
      />
    </div>
  )
}