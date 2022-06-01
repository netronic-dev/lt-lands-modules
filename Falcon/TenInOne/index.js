import style from "../falcon.module.scss"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function FalconTenInOne(props) {
  return (
    <>
      <Fade triggerOnce>
        <div className={style.tenInOne}>
          <div className={`${style.tenInOne_bg} desktop`}>
            <Image
              src="/falcon/man-red.jpg"
              alt={props.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={style.section}>
            <Fade direction="up" triggerOnce>
              <h2 className={style.title_white}>
                {props.title}
              </h2>
            </Fade>
            <Fade direction="up" triggerOnce>
              <p className="paragraph">
                {props.text}
              </p>
            </Fade>
          </div>
          <div className={style.tenInOne__img}>
            <Image
              src="/falcon/man-red.jpg"
              alt={props.title}
              layout="responsive"
              width={1200}
              height={635}
            />
          </div>
        </div>
      </Fade>
    </>
  )
}