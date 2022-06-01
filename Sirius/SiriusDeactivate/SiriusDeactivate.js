import Image from "next/image"
import style from "../sirius.module.scss"

export default function SiriusDeactivate(props) {
  return (
    <div className={style.deactivateSirius}>
      <section className={style.section}>
        <h2>
          {props.title}
        </h2>
        <p className="paragraph">
          {props.text}
        </p>
      </section>
      <div className={style.cards}>
        <div className={style.cards__text_block}>
          <p className="paragraph">
            {props.cardText}
          </p>
          <br />
          <p className="paragraph">
            {props.cardTextTwo}
          </p>
        </div>
        <div className={style.cards__image}>
          <Image
            src="/sirius/sirius-target.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="0% 100%"
          />
        </div>
      </div>
    </div>
  )
}
