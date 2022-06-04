import { useInView } from "react-hook-inview"
import SliderMobile from "../../../lt-modules/Slider/SliderMobile"
import style from "../style.module.scss"

export default function MCMobileDecision(props) {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true
  })
  return (
    <section className={style.decision}>
      <h2 className={style.title} ref={ref} key={isVisible ? "decision_visible" : null}>
        {props.title}
      </h2>
      <div className={style.slider}>
        <div className={style.slider_in}>
          <SliderMobile
            data={props.data}
            width={props.width}
            height={props.height}
          />
        </div>
        <div className={style.gradient}></div>
      </div>
    </section>
  )
}
