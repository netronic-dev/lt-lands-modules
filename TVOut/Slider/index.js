import style from "../tvout.module.scss"
import SliderLand from "../../../lt-modules/Slider/SliderLand"
import { Fade, Zoom } from "react-awesome-reveal"

export default function TVSlider(props) {
  return (
    <>
      <section className={style.lastgame_statistics__header}>
        <Fade direction="up" triggerOnce>
          <h2>
            {props.title}
          </h2>
        </Fade>
        <Fade direction="up" triggerOnce>
          <p className="paragraph">
            {props.text}
          </p>
        </Fade>
      </section>
      <Zoom triggerOnce>
        <SliderLand
          sliderData={props.sliderData}
          width={1030}
          height={650}
        />
      </Zoom>
    </>
  )
}