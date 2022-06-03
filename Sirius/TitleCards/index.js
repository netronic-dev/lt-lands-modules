import style from "../sirius.module.scss"
import Image from "next/image"

export default function SiriusTitleCards(props) {
  return (
    <>
      <div className={style.newTechnologies}>
        <p className={style.head_par}>
          {props.text}
        </p>
        <div className={style.cards}>
          <div className={style.cards__text_block}>
            <h2>
              {props.title}
            </h2>
            <p>
              {props.textTwo}
            </p>
          </div>
          <div className={style.cards__image}>
            <Image
              src="/sirius/sirius-hand-up.jpg"
              layout="responsive"
              width={775}
              height={515}
            />
          </div>
        </div>
      </div>
      <div className="desktop">
        <Image
          src="/sirius/sirius-rainbow.jpg"
          layout="responsive"
          width={1920}
          height={825}
        />
      </div>
      <div className="mobile">
        <Image
          src="/sirius/sirius-rainbow-mob.png"
          layout="responsive"
          width={470}
          height={555}
        />
      </div>
    </>
  )
}
