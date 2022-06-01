import style from "../tvout.module.scss"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { useInView } from "react-hook-inview"

export default function TVCards(props) {
  const [LongCardRef, LongCardIsVisible] = useInView({
    unobserveOnEnter: true
  })
  const [cardsRef, cardsIsVisible] = useInView({
    unobserveOnEnter: true
  })
  return (
    <div className={style.bigScreenBlock} >
      <Fade direction="up" triggerOnce>
        <h2 className={style.h2}>
          {props.title}
        </h2>
      </Fade>
      <div className={style.grid_big_display}>
        <div
          className={`${style.card_fullWidth} zoom-animation`}
          ref={LongCardRef}
          key={LongCardIsVisible ? 0 : 1}
        >
          <Image
            src="/tvOut/tv.jpg"
            alt="Статистика"
            layout="responsive"
            width={1170}
            height={580}
          />
        </div>
      </div>
      <div
        className={style.grid_easy_game}
        ref={cardsRef}
        key={cardsIsVisible ? 2 : 3}
      >
        <div className={`${style.card} zoom-animation`}>
          <h3>{props.cardTitle}</h3>
          <p className="paragraph">
            {props.cardText}
          </p>
          <div className={style.grid_easy_game__img}>
            <img src={props.secondImage ? props.secondImage : "/tvOut/cell.svg"} alt="cell" />
          </div>
        </div>
        <div className={`${style.card_special} zoom-animation animate_second`}>
          <h3>{props.cardTwoTitle}</h3>
          <p className="paragraph">
            {props.cardTwoText}
          </p>
          <div className={style.grid_easy_game__img}>
            <img src="/tvOut/statistic.svg" alt="statistic" />
          </div>
        </div>
      </div>
    </div>
  )
}