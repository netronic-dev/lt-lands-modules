import style from "./style.module.scss"
import Image from "next/image"
import LPButton from "../Button/LPButton"

export default function LPDevelopTogether(props) {
  return (
    <section
      className={style.develop}
      name={props.name}
      id={props.id}
      key={props.key}
      ref={props.ref}
    >
      <div>
        <h2 className={`${style.title} fade-up-animation`}>
          {props.title}
        </h2>
        <div className={style.grid}>
          <Cell
            index={1}
            number="1"
            title={props.data[0].title}
            text={props.data[0].text}
          />
          <Cell
            index={2}
            number="2"
            title={props.data[1].title}
            text={props.data[1].text}
          />
          <Cell
            index={3}
            number="3"
            title={props.data[2].title}
            text={props.data[2].text}
          />
        </div>
      </div>
      <div className={style.lil_block}>
        <div className={`${style.lil_image} fade-right-animation animated-fourth`}>
          <Image src={props.lil_image} />
        </div>
        <div className={style.lil_content}>
          <h3 className={`${style.lil_title} fade-right-animation animated-fourth`}>
            {props.lil_title}
          </h3>
          <p className={`${style.lil_text} fade-right-animation animated-fourth`}>
            {props.lil_text}
          </p>
          <LPButton
            hover="black"
            bgcolor="#0090FF"
            onClick={props.onClick}
            full_width
            style="fade-right-animation animated-third"
          >
            {props.lil_button_text}
          </LPButton>
        </div>
      </div>
    </section>
  )
}
function Cell(props) {
  return (
    <div
      className={`${style.cell} fade-up-animation`}
      style={{ animationDelay: props.index * 100 + "ms" }}
    >
      <p className={style.cell__number}>{props.number}</p>
      <h3 className={style.cell__title}>
        {props.title}
      </h3>
      <p className={style.cell__text}>
        {props.text}
      </p>
    </div>
  )
}