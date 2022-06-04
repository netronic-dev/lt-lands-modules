import style from "./style.module.scss"
import SliderReviewsLP from "../../../lt-modules/Slider/SliderReviewsLP";
import { useInView } from "react-hook-inview";

export default function Section(props) {

  const [ref, isVisible] = useInView(
    {
      unobserveOnEnter: true,
    }
  )
  const [firstSliderRef, firstSliderIsVisible] = useInView(
    {
      unobserveOnEnter: true,
    }
  )
  const [secondSliderRef, secondSliderIsVisible] = useInView(
    {
      unobserveOnEnter: true,
    }
  )

  return (
    <section className={style.section}>
      <h2
        className={`${style.title} fade-up-animation animated-second`}
        ref={ref}
        key={isVisible ? "clients-title-inview" : "clients-title"}
      >
        {props.title}
      </h2>
      <div
        className={style.slider}
      >
        <div
          ref={firstSliderRef}
          key={firstSliderIsVisible ? "clients-slider-1-inview" : "clients-slider-1"}
        >
          <SliderReviewsLP
            onVideoOpen={props.onVideoOpen}
            left
            data={props.data.slice(0, props.data.length / 2)}
            theme="reverse"
            className="fade-right-animation"
          />
        </div>
        <div
          ref={secondSliderRef}
          key={secondSliderIsVisible ? "clients-slider-2-inview" : "clients-slider-2"}
        >
          <SliderReviewsLP
            onVideoOpen={props.onVideoOpen}
            data={props.data.slice(props.data.length / 2, props.data.length)}
            rtl
            theme="reverse"
            className="fade-left-animation"
          />
        </div>
      </div>
    </section>
  );
}