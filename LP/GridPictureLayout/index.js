import style from "./style.module.scss";
import Image from "next/image";

export default function GridPictureLayout(props) {
  return (
    <div className={style.grid_pic_layout}>
      <h2 className={`${style.title} fade-up-animation`}>
        {props.title}
      </h2>
      <div className={style.grid}>
        <Cell
          index={1}
          cell_icon={props.cell_1_icon}
          cell_title={props.cell_1_title}
          cell_text={props.cell_1_text}
        />
        <Cell
          index={2}
          cell_icon={props.cell_2_icon}
          cell_title={props.cell_2_title}
          cell_text={props.cell_2_text}
        />
        <Cell
          index={3}
          cell_icon={props.cell_3_icon}
          cell_title={props.cell_3_title}
          cell_text={props.cell_3_text}
        />
        <Cell
          index={4}
          cell_icon={props.cell_4_icon}
          cell_title={props.cell_4_title}
          cell_text={props.cell_4_text}
        />
      </div>
      <div className={`${style.image} fade-animation`}>
        <Image
          src={props.image}
          layout="responsive"
        />
      </div>
      <div className={style.image_responsive}>
        <Image
          src={props.image_responsive}
          layout="fill"
          objectFit="cover"
          objectPosition={props.objectPosition}
        />
      </div>
    </div>
  )
}
function Cell(props) {
  return (
    <div className={`${style.cell} fade-up-animation`} style={{ animationDelay: props.index * 100 + "ms" }}>
      <img className={style.icon} src={props.cell_icon} />
      <div className={style.text_out}>
        <h3 className={style.cell_title}>{props.cell_title}</h3>
        <p className={style.cell_text}>{props.cell_text}</p>
      </div>
    </div>
  )
}