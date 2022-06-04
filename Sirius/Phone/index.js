import Image from "next/image"
import { PhoneSection } from "../../PhoneSection"
import style from "../sirius.module.scss"

export default function SiriusPhone(props) {
  return (
    <>
      <div className={style.onlinePhone}>
        <section className={style.section}>
          <h2 className={style.title_half}>
            {props.title}
          </h2>
          <p className="paragraph">
            {props.text}
          </p>
        </section>
        <div className={style.onlinePhone__image}>
          <Image src="/sirius/phone-laptop.jpg" layout="responsive" width={1170} height={665} />
        </div>
      </div>
      <div className={style.flexibleSettings}>
        <section className={style.section}>
          <h2>
            {props.secondTitle}
          </h2>
        </section>
        <PhoneSection
          title={props.titlePhoneSection}
          first={props.first}
          second={props.second}
          third={props.third}
          fourth={props.fourth}
          fivth={props.fivth}
          sixth={props.sixth}
          image="/PhoneSection/sirius.jpg"
          bgColor="#101010"
        />
      </div>
    </>
  )
}
