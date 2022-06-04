import style from "../sirius.module.scss"
import { BlockIconText } from "../../BlockIconText"
import SliderLand from "../../../lt-modules/Slider/SliderLand"

export default function SiriusSevenModes(props) {
  return (
    <div className={style.sevenModes_block}>
      <section className={style.section}>
        <h2 className={style.title}>
          {props.title}
        </h2>
        <p className={style.par_bold}>
          {props.text}
        </p>
      </section>
      <div className={style.slider}>
        <SliderLand
          sliderData={props.sliderData}
          width={805}
          height={585}
        />
      </div>
      <div className={style.block_icon_text}>
        <div className={style.bit_sirius_cell}>
          <BlockIconText
            icon={<img src="/sirius/icon1.svg" />}
            title={props.bitOneTitle}
            text={props.bitOneText}
            style="black"
          />
        </div>
        <div className={style.bit_sirius_cell}>
          <BlockIconText
            icon={<img src="/sirius/icon2.svg" />}
            title={props.bitTwoTitle}
            text={props.bitTwoText}
            style="black"
          />
        </div>
        <div className={style.bit_sirius_cell}>
          <BlockIconText
            icon={<img src="/sirius/icon3.svg" />}
            title={props.bitThreeTitle}
            text={props.bitThreeText}
            style="black"
          />
        </div>
        <div className={style.bit_sirius_cell}>
          <BlockIconText
            icon={<img src="/sirius/icon4.svg" />}
            title={props.bitFourTitle}
            text={props.bitFourText}
            style="black"
          />
        </div>
        <div className={style.bit_sirius_cell}>
          <BlockIconText
            icon={<img src="/sirius/icon5.svg" />}
            title={props.bitFiveTitle}
            text={props.bitFiveText}
            style="black"
          />
        </div>
        <div className={style.bit_sirius_cell}>
          <BlockIconText
            icon={<img src="/sirius/icon6.svg" />}
            title={props.bitSixTitle}
            text={props.bitSixText}
            style="black"
          />
        </div>
        <div className={style.bit_sirius_cell}>
          <BlockIconText
            icon={<img src="/sirius/icon7.svg" />}
            title={props.bitSevenTitle}
            text={props.bitSevenText}
            style="black"
          />
        </div>
        <div className={style.bit_sirius_cell}>
          <BlockIconText
            icon={<img src="/sirius/icon8.svg" />}
            title={props.bitEightTitle}
            text={props.bitEightText}
            style="black"
          />
        </div>
      </div>
    </div>
  )
}
