import { Fade, Zoom } from "react-awesome-reveal"
import SliderLand from "../../../lt-modules/Slider/SliderLand"
import style from "../ms.module.scss"

export default function MSSlider(props) {
  return (
    <>
      <div className={style.animatedIndication}>
        <Fade direction="up" triggerOnce>
          <h2>{props.title}</h2>
        </Fade>
        <Fade direction="up" triggerOnce>
          <p className="paragraph">
            {props.text}
          </p>
        </Fade>
        <div className={style.slider}>
          <Zoom triggerOnce>
            <SliderLand
              sliderData={props.sliderData}
              width={805}
              height={585}
            />
          </Zoom>
        </div>
      </div>
    </>
  )
}