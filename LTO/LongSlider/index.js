import style from "../lto.module.scss"
import { SliderLongCards } from "../../../lt-modules/Slider/SliderLongCards"
import { useInView } from "react-hook-inview"

export default function LongSlider(props) {
  const [titleRef, titleIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div className={`${style.ready_scripts} ${style.screen}`}>
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