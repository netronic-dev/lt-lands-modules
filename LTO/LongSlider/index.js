import style from "../lto.module.scss"
import { SliderLongCards } from "../../../Slider/SliderLongCards/SliderLongCards"
import { useInView } from "react-hook-inview"

export default function LTOLongSlider(props) {
  const [titleRef, titleIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div className={style.ready_scripts}>
      <section ref={titleRef} key={titleIsVisible ? "long-slider-title-inview" : "long-slider-title"} className="fade-up-animation">
        <h2 className={`${style.lo__title} ${style.orange}`}>
          {props.title}
        </h2>
        <p className="paragraph">
          {props.text}
        </p>
      </section>
      <div>
        <SliderLongCards
          indoorText={props.indoorText}
          outdoorText={props.outdoorText}
          dataIndoor={props.dataIndoor}
          dataOutdoor={props.dataOutdoor}
        />
      </div>
    </div>

  )
}