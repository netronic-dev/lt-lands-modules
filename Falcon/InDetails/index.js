import { Fade } from "react-awesome-reveal";
import { useInView } from "react-hook-inview";
import SliderCards from "../../../lt-modules/Slider/SliderCards"
import style from "./style.module.scss"

function InDetails(props) {
  const [sliderRef, isSliderVisible] = useInView({
    unobserveOnEnter: true
  })
  return (
    <div
      className={style.toWatchSlider}
      ref={sliderRef}
      key={isSliderVisible ? 1 : 2}
    >
      <Fade direction="up" triggerOnce>
        <h2 className={style.h2}>{props.title}</h2>
      </Fade>
      <SliderCards sliderData={props.data} />
    </div>
  );
}

export default InDetails;