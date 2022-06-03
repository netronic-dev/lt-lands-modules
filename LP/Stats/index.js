import style from "./stats.module.scss"

export default function LPStats(props) {
  return (
    <div
      className={style.stats}
      name={props.name}
      id={props.id}
      key={props.key}
      ref={props.ref}
    >
      <div className={`${style.cell} fade-up-animation`}>
        <img src="/LPNew/vector/stats-4.svg" className={style.cell_image} />
        <div className={style.cell_content}>
          <h3 className={style.cell_title}>
            {props.cell_1_title}
          </h3>
          <p className={style.cell_text}>
            {props.cell_1_text}
          </p>
        </div>
      </div>
      <div className={`${style.cell} fade-up-animation animated-second`}>
        <img src="/LPNew/vector/stats-1.svg" className={style.cell_image} />
        <div className={style.cell_content}>
          <h3 className={style.cell_title}>
            {props.cell_2_title}
          </h3>
          <p className={style.cell_text}>
            {props.cell_2_text}
          </p>
        </div>
      </div>
      <div className={`${style.cell} fade-up-animation animated-third`}>
        <img src="/LPNew/vector/stats-3.svg" className={style.cell_image} />
        <div className={style.cell_content}>
          <h3 className={style.cell_title}>
            {props.cell_3_title}
          </h3>
          <p className={style.cell_text}>
            {props.cell_3_text}
          </p>
        </div>
      </div>
      <div className={`${style.cell} fade-up-animation animated-fourth`}>
        <img src="/LPNew/vector/stats-2.svg" className={style.cell_image} />
        <div className={style.cell_content}>
          <h3 className={style.cell_title}>
            {props.cell_4_title}
          </h3>
          <p className={style.cell_text}>
            {props.cell_4_text}
          </p>
        </div>
      </div>
    </div>
  )
}