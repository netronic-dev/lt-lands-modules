import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import style from "../about.module.scss"

export default function AboutFinal(props) {
  return (
    <div className={style.final}>
      <div className={style.final_in}>
        <div className={style.final_image}>
          <Fade triggerOnce>
            <Image
              src="/about/final.jpg"
              layout="responsive"
              width={780}
              height={575}
            />
          </Fade>
        </div>
        <div className={style.final_text_block}>

          <div className={style.final_text_block_in}>
            <Fade direction="right" triggerOnce>
              <h3 className={style.final_title}>
                {props.title}
              </h3>
              <p className={style.final_text}>
                {props.text}
              </p>
              <p className={style.final_phrase_res}>
                {props.textTwo}
              </p>
            </Fade>
          </div>
        </div>
        <div className={style.final_phrase_out}>
          <Fade direction="up" triggerOnce>
            <p className={style.final_phrase}>
              {props.textTwo}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  )
}