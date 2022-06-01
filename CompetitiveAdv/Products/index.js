import style from "./style.module.scss"
import Image from "next/image"
import Link from "next/link"
import { nanoid } from "nanoid";
import { useInView } from "react-hook-inview";

export default function Section(props) {

  const [ref, isVisible] = useInView(
    {
      unobserveOnEnter: true,
    }
  )

  return (
    <section
      className={style.section}
    >
      <div
        className={style.wrapper}
        ref={ref}
        key={isVisible ? "products-title-inview" : "products-title"}
      >
        <h2 className={`${style.title} fade-up-animation`}>
          {props.title}
        </h2>
        <p className={`${style.text} fade-up-animation`}>
          {props.text}
        </p>
      </div>
      <div className={style.cells_content}>
        {props.data ? props.data.map((item) => (
          <CellsBlock
            key={nanoid()}
            title={item.title}
            data={item.items}
          />
        )) : ""}
      </div>

    </section>
  );
}
function CellsBlock(props) {
  return (
    <div className={style.cells_block}>
      <div className={style.wrapper}>
        <h3 className={style.cells_block__title}>
          {props.title}{arrow}
        </h3>
        <div className={style.grid}>
          {props.data.map((item, index) => (
            item.empty ?
              <div className={style.empty_cell} key={nanoid()} /> :
              <Cell
                key={nanoid()}
                text={item.text}
                image={item.image}
                index={index}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

function Cell(props) {

  const [ref, isVisible] = useInView(
    {
      unobserveOnEnter: true,
    }
  )

  return (
    <div
      className={`${style.cell} fade-up-animation`}
      style={{ animationDuration: (props.index * 2) * 100 + 400 + "ms" }}
      ref={ref}
      key={isVisible ? "cell-inview" : "cell"}
    >
      <p className={style.cell__text}>
        {props.text}
      </p>
      {props.image ?
        <div className={style.cell__image}>
          <Image
            src={props.image}
            layout="fill"
            objectFit="cover"
            objectPosition={props.objectPosition}
          />
        </div> : ""}
    </div >
  )
}
const arrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={style.arrow}
  >
    <path
      d="M20 12L18.59 10.59L13 16.17L13 4L11 4L11 16.17L5.41 10.59L4 12L12 20L20 12Z"
      fill="#0090FF"
    />
  </svg>

)