import style from "../falcon.module.scss"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function FalconСamouflage(props) {
  return (
    <>
      <Fade>
        <div className={style.impulseSimulation}>
          <section className={style.section}>
            <Fade direction="up" triggerOnce>
              <h2 className={style.title_black}>{props.title}</h2>
            </Fade>
            <Fade direction="up">
              <p className="paragraph">
                {props.text}
              </p>
            </Fade>
          </section>
          <div className={`${style.impulseSimulation_image}`}>
            <Image
              src="/falcon/camuflage.jpg"
              alt="camuflage"
              layout="responsive"
              width={1170}
              height={730}
            />
          </div>
        </div>
      </Fade>
    </>
  )
}