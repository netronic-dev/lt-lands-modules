import { useState } from "react"
import CountUp from "react-countup"
import { useInView } from "react-hook-inview"
import { SliderLeaders } from "../../../lt-modules/Slider/SliderLeaders"
import style from "../about.module.scss"

export default function AboutLeaders(props) {

  const [cellFirstView, changeCellFirstView] = useState(false)
  const [cellSecondView, changeCellSecondView] = useState(false)
  const [cellThirdView, changeCellThirdView] = useState(false)
  const [cellFourthView, changeCellFourthView] = useState(false)

  function onFirstCellCLick() {
    changeCellFirstView(!cellFirstView)
    changeCellSecondView(false)
    changeCellThirdView(false)
    changeCellFourthView(false)
  }

  function onSecondCellCLick() {
    changeCellSecondView(!cellSecondView)
    changeCellFirstView(false)
    changeCellThirdView(false)
    changeCellFourthView(false)
  }

  function onThirdCellCLick() {
    changeCellThirdView(!cellThirdView)
    changeCellFirstView(false)
    changeCellSecondView(false)
    changeCellFourthView(false)
  }

  function onFourthCellCLick() {
    changeCellFourthView(!cellFourthView)
    changeCellFirstView(false)
    changeCellSecondView(false)
    changeCellThirdView(false)
  }
  const [sliderRef, sliderIsVisible] = useInView({
    unobserveOnEnter: true
  })
  const [cellsRef, cellsIsVisible] = useInView({
    unobserveOnEnter: true
  })
  return (
    <div className={style.leaders}>
      <h2 className={`${style.title} fade-up-animation`}>
        {props.title}
      </h2>
      <div
        ref={sliderRef}
        key={sliderIsVisible ? "slider-inview" : "slider"}
        className={style.leaders_slider}
      >
        <SliderLeaders
          slidesToShow={props.slidesToShow}
          data={props.sliderData}
        />
      </div>
      <div className={style.believe}>
        <h2 className={`${style.title} fade-up-animation`}>
          {props.secondTitle}
        </h2>
        <p className={`${style.subtitle} fade-up-animation`}>
          {props.textTwo}
        </p>
        <div
          className={style.believe_cells}
          ref={cellsRef}
          key={cellsIsVisible ? "cell-inview" : "cell"}
        >
          <div
            className={`${cellFirstView ? style.cell_active : style.cell} zoom-animation`}
            onClick={onFirstCellCLick}
          >
            <div className={style.plus_icon}>
              <PlusIcon />
            </div>
            <h3 className={style.cell_title}><CountUp start={0} end={props.cellOneTitle} duration={1} />%</h3>
            <p className={style.cell_text}>
              {props.cellOneSubtitle}
            </p>
            <p className={style.hide_text}>
              {props.cellOneText}
            </p>
          </div>
          <div
            className={`${cellSecondView ? style.cell_active : style.cell} zoom-animation animated-second`}
            onClick={onSecondCellCLick}
          >
            <div className={style.plus_icon}>
              <PlusIcon />
            </div>
            <h3 className={style.cell_title}>
              <CountUp delay={0.5} start={0} end={props.cellTwoTitle} duration={1} />%
            </h3>
            <p className={style.cell_text}>
              {props.cellTwoSubtitle}
            </p>
            <p className={style.hide_text}>
              {props.cellTwoText}
            </p>
          </div>
          <div
            className={`${cellThirdView ? style.cell_active : style.cell} zoom-animation animated-third`}
            onClick={onThirdCellCLick}
          >
            <div className={style.plus_icon}>
              <PlusIcon />
            </div>
            <h3 className={style.cell_title}>
              <CountUp delay={0.7} start={0} end={props.cellThreeTitle} duration={1} />%
            </h3>
            <p className={style.cell_text}>
              {props.cellThreeSubtitle}
            </p>
            <p className={style.hide_text}>
              {props.cellThreeText}
            </p>
          </div>
          <div
            className={`${cellFourthView ? style.cell_active : style.cell} zoom-animation animated-fourth`}
            onClick={onFourthCellCLick}
          >
            <div className={style.plus_icon}>
              <PlusIcon />
            </div>
            <h3 className={style.cell_title}>
              <CountUp delay={0.9} start={0} end={props.cellFourTitle} duration={1} />%
            </h3>
            <p className={style.cell_text}>
              {props.cellFourSubtitle}
            </p>
            <p className={style.hide_text}>
              {props.cellFourText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <rect
        width="28"
        height="28"
        rx="5"
        fill="#0090FF"
        className={style.fill}
      />
      <rect
        x="13"
        y="4"
        width="2"
        height="20"
        fill="#F2F2F2"
        className={style.item_one}
      />
      <rect
        x="24"
        y="13"
        width="2"
        height="20"
        transform="rotate(90 24 13)"
        fill="#F2F2F2"
        className={style.item_two}
      />
    </svg>)
}