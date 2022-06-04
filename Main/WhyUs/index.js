import { Fade } from "react-awesome-reveal"
import { MapSales } from "../../../lt-modules/Map/MapSales"
import SliderSmallPics from "../../../lt-modules/Slider/SliderSmallPics"
import style from "../main.module.scss"

export default function MainWhyUs(props) {
  return (
    <>
      <section className={style.why_us}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.title}>
            {props.title}
          </h2>
        </Fade>
        <div className={style.why_us__grid}>
          <Fade direction="up" triggerOnce>
            <div className={style.cell}>
              <h3 className={style.cell_title}>
                {props.firstCellTitle}
              </h3>
              <p className={style.cell_text}>
                {props.firstCellText}
              </p>
            </div>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <div className={style.cell}>
              <h3 className={style.cell_title}>
                {props.secondCellTitle}
              </h3>
              <p className={style.cell_text}>
                {props.secondCellText}
              </p>
            </div>
          </Fade>
          <Fade direction="up" delay={500} triggerOnce>
            <div className={style.cell}>
              <h3 className={style.cell_title}>
                {props.thirdCellTitle}
              </h3>
              <p className={style.cell_text}>
                {props.thirdCellText}
              </p>
            </div>
          </Fade>
        </div>
        <MapSales />
        <SliderSmallPics
          data={props.sliderData}
        />
      </section>
    </>
  )
}