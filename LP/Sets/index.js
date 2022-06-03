import Image from "next/image"
import style from "./style.module.scss"

export default function LPSets(props) {
  return (
    <section
      className={style.sets}
      name={props.name}
      id={props.id}
      key={props.key}
      ref={props.ref}
    >
      <h2 className={`${style.title} fade-up-animation`}>
        {props.title}
      </h2>
      <div className={style.grid}>
        <Cell
          index={1}
          cell_title={props.cell_1_title}
          cell_text={props.cell_1_text}
        />
        <Cell
          index={2}
          cell_title={props.cell_2_title}
          cell_text={props.cell_2_text}
        />
        <Cell
          index={3}
          cell_title={props.cell_3_title}
          cell_text={props.cell_3_text}
        />
        <Cell
          index={4}
          cell_title={props.cell_4_title}
          cell_text={props.cell_4_text}
        />
      </div>
      <div className={`${style.image} fade-animation desktop`}>
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          objectPosition={props.objectPosition}
        />
      </div>
      <div className={`${style.image} mobile`}>
        <Image
          src={props.image_responsive}
          layout="fill"
          objectFit="cover"
          objectPosition={props.objectPosition}
        />
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
      <h3 className={style.cell__title}>
        {props.cell_title}
      </h3>
      <p className={style.cell__text}>
        {props.cell_text}
      </p>
    </div>
  )
}