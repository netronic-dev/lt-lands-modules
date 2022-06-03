import style from "./style.module.scss"

export default function LPSupport(props) {
  return (
    <section
      className={style.support}
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
          icon={props.data[0].icon}
          title={props.data[0].title}
          text={props.data[0].text}
        />
        <Cell
          index={2}
          icon={props.data[1].icon}
          title={props.data[1].title}
          text={props.data[1].text}
        />
        <Cell
          index={3}
          icon={props.data[2].icon}
          title={props.data[2].title}
          text={props.data[2].text}
        />
        <Cell
          index={4}
          icon={props.data[3].icon}
          title={props.data[3].title}
          text={props.data[3].text}
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
      <div className={style.cell__icon}>
        <img src={props.icon} />
      </div>
      <h3 className={style.cell__title}>
        {props.title}
      </h3>
      <p className={style.cell__text}>
        {props.text}
      </p>
    </div>
  )
}