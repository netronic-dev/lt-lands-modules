import GridPictureLayout from "../GridPictureLayout/GridPictureLayout";
import style from "./style.module.scss"

export default function LPPlayers(props) {
  return (
    <section
      className={style.players}
      name={props.name}
      id={props.id}
      key={props.key}
      ref={props.ref}
    >
      <GridPictureLayout
        image={props.image}
        image_responsive={props.image_responsive}
        title={props.title}
        cell_1_title={props.cell_1_title}
        cell_1_text={props.cell_1_text}
        cell_1_icon={props.cell_1_icon}
        cell_2_title={props.cell_2_title}
        cell_2_text={props.cell_2_text}
        cell_2_icon={props.cell_2_icon}
        cell_3_title={props.cell_3_title}
        cell_3_text={props.cell_3_text}
        cell_3_icon={props.cell_3_icon}
        cell_4_title={props.cell_4_title}
        cell_4_text={props.cell_4_text}
        cell_4_icon={props.cell_4_icon}
        objectPosition={props.objectPosition}
      />
    </section>
  )
}