import style from "../falcon.module.scss"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function FalconImpulse(props) {
  return (
    <>
      <div className={style.impulseSimulation}>
        <Fade direction="up" triggerOnce>
          <section className={style.section}>

            <h2 className={style.title_black}>
              {props.title}
            </h2>
            <p className="paragraph">
              {props.text}
            </p>
          </section>
        </Fade>
        <Fade triggerOnce>
          <div className={style.impulseSimulation_image}>
            <Image
              src="/falcon/falcon-impulse.jpg"
              alt={props.title}
              layout="responsive"
              width={1170}
              height={775}
              quality={90}
            />
          </div>
        </Fade>
      </div>
    </>
  )
}