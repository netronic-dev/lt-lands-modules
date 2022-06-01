import style from "../smart.module.scss"
import Image from "next/image"
import { BreadCrumbs } from "../../../BreadCrumbs/BreadCrumbs"
import { PriceButton } from "../../../Buttons/Buttons"
import { Fade } from "react-awesome-reveal"

export default function KTMain(props) {
  return (
    <div className={style.body_top}>
      <div className={style.body_top_bg}>
        <div className="desktop">
          <Fade triggerOnce>
            <Image
              src="/smart/two-falcons.jpg"
              layout="fill"
              objectFit="contain"
              objectPosition="0 0"
            />
          </Fade>
        </div>
      </div>
      <BreadCrumbs color="black" breadcrumbData={props.breadcrumbData} />
      <div className={style.body_top__content}>
        <Fade direction="down" triggerOnce>
          <h1 className={style.title}>
            {props.title}
          </h1>
        </Fade>
        <Fade direction="down" triggerOnce>
          <p className={style.text}>
            {props.text}
          </p>
        </Fade>
        <Fade direction="down" triggerOnce>
          <div className={style.button}>
            <PriceButton
              catalog={true}
              style="blueBlack"
              text={props.buttonText}
              en={props.en}
            />
          </div>
        </Fade>
      </div>
      <Fade direction="up" triggerOnce>
        <div className={style.body_top__image}>
          <Image
            src="/smart/kt-smart.jpg"
            alt="kt-smart"
            layout="intrinsic"
            width={770}
            height={1040}
          />
        </div>
      </Fade>
    </div>
  )
}