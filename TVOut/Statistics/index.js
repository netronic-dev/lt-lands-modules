import style from "../tvout.module.scss"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function TVStatistics(props) {
  return (
    <div className={style.lastgame_statistics}>
      <section>
        <Fade direction="up" triggerOnce>
          <h2 className={style.h2}>
            {props.title}
          </h2>
        </Fade>
        <Fade direction="up" triggerOnce>
          <p className="paragraph">
            {props.text}
          </p>
        </Fade>
      </section >
      <div className={style.lastgame_statistics__img}>
        <Fade direction="up" triggerOnce>
          <Image
            src="/tvOut/tvscore.png"
            alt="tvscore"
            layout="responsive"
            width={1025}
            height={675}
            quality={90}
          />
        </Fade>
      </div>
    </div >
  )
}