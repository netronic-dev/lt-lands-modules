import { Fade } from "react-awesome-reveal"
import SliderImageCell from "../../../Slider/SliderImageCell/SliderImageCell"
import style from "../style.module.scss"

export default function SupernovaFeatures(props) {

  return (
    <section className={style.features_slider_block}>
      <Fade direction="up" triggerOnce>
        <h2 className={style.title}>
          {props.title}
        </h2>
      </Fade>
      <div className={style.slider}>
        <SliderImageCell en={props.en} data={props.sliderData} />
      </div>
    </section>
  )
}

