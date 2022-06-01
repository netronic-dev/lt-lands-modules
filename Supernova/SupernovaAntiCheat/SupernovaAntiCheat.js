import { Fade } from "react-awesome-reveal"
import { useInView } from "react-hook-inview"
import style from "../style.module.scss"

export default function SupernovaAntiCheat(props) {

  const [ref, IsVisible] = useInView({
    unobserveOnEnter: true
  })

  return (
    <section className={style.anti_cheat}>
      <div className={style.column}>
        <Fade direction="left" triggerOnce>
          <h2 className={style.title}>
            {props.title}
          </h2>
        </Fade>
        <Fade delay={200} direction="left" triggerOnce>
          <div className={style.subtitle}>
            <img className={style.subtitle__img} src="/supernova/vector/attention.svg" alt="anti-cheat" />
            <p className={style.subtitle__text}>{props.subtitle}</p>
          </div>
        </Fade>
      </div>
      <div className={style.features} ref={ref} key={IsVisible ? "AC-1" : "AC-0"}>
        <div className={`${style.features__cell} zoom-animation`}>
          {arrow}
          <p className={style.cell__text}>
            {props.text1}
          </p>
        </div>
        <div className={`${style.features__cell} zoom-animation animated-second`}>
          {arrow}
          <p className={style.cell__text}>
            {props.text2}
          </p>
        </div>
        <div className={`${style.features__cell} zoom-animation animated-third`}>
          {arrow}
          <p className={style.cell__text}>
            {props.text3}
          </p>
        </div>
      </div>
    </section>
  )
}

const arrow = (
  <svg width="31" height="22" viewBox="0 0 31 22" fill="none" className={style.arrow}>
    <path d="M20.15 3.52314e-06L17.9645 2.21572L25.0635 9.42858L-1.64854e-06 9.42857L-2.19806e-06 12.5714L25.0635 12.5714L17.949 19.7843L20.15 22L31 11L20.15 3.52314e-06Z" fill="#040E18" />
  </svg>
)