import { Fade } from "react-awesome-reveal"
import { PhoneSection } from "../../PhoneSection"
import style from "../ms.module.scss"

export default function MSPhone(props) {
  return (
    <>
      <div className={style.phoneSection}>
        <div className={style.phoneSection_title}>
          <Fade direction="up" triggerOnce>
            <h2>
              {props.title}
            </h2>
          </Fade>
        </div>
        <PhoneSection
          title={props.titlePhone}
          first={props.first}
          second={props.second}
          third={props.third}
          fourth={props.fourth}
          fivth={props.fivth}
          sixth={props.sixth}
          image="/PhoneSection/ms.jpg"
          bgColor="#000000"
        />
      </div>
    </>
  )
}