import style from "../falcon.module.scss"
import SliderTwoButtons from "../../../lt-modules/Slider/SliderTwoButtons"
import { Fade } from "react-awesome-reveal"

export default function FalconModifications(props) {
  return (
    <>
      <div className={style.twoModifications}>
        <Fade direction="up" triggerOnce>
          <h2 className={`${style.title_white} ${style.title}`}>{props.title}</h2>
        </Fade>
        <Fade triggerOnce>
          <SliderTwoButtons
            sliderData={props.sliderData}
            listofTitles={["Falcon F1", "Falcon F2"]}
          />
        </Fade>
      </div>
    </>
  )
}