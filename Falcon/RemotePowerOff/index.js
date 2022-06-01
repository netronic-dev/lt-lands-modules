import style from "../falcon.module.scss"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function RemotePowerOff(props) {
  return (
    <>
      <div className={style.remotePowerOff}>
        <section className={style.section}>
          <Fade triggerOnce>
            <h2 className={style.title_white}>{props.title}</h2>
            <p className="paragraph">
              {props.text}
            </p>
          </Fade>
        </section>
        <Fade direction="right" triggerOnce>
          <Image
            src={props.image ? props.image : "/falcon/falcon-phone.jpg"}
            alt="falcon-phone"
            layout="intrinsic"
            width={620}
            height={530}
          />
        </Fade>
      </div>
    </>
  )
}