import style from "./style.module.scss"
import Image from "next/image"
import { nanoid } from "nanoid";
import { useInView } from "react-hook-inview"

export default function SolveProblems(props) {

  const [ref, isVisible] = useInView(
    {
      unobserveOnEnter: true,
    }
  )
  const [cardsRef, cardsIsVisible] = useInView(
    {
      unobserveOnEnter: true,
    }
  )

  return (
    <section
      className={style.section}
    >
      <div className={style.wrapper}>
        <div className={style.title_wrapper}>
          <h2
            className={`${style.title} fade-up-animation`}
            ref={ref}
            key={isVisible ?
              "SolveProblems-title-inview" : "SolveProblems-title"}
          >
            {props.title}
          </h2>
          <p
            className={`${style.text} fade-up-animation`}
            key={isVisible ? "SolveProblems-text-inview" : "SolveProblems-text"}
          >
            {props.text}
          </p>
        </div>
        <ImageSection
          image={props.image}
          objectPosition={props.objectPosition}
        />
        {props.data ?
          <div className={style.grid} ref={cardsRef} key={cardsIsVisible ? "SolveProblems-cards-inview" : "SolveProblems-cards"}>
            {props.data.map((item, index) => (
              <Cell
                key={nanoid()}
                title={item.title}
                data={item.items}
                index={index}
              />
            ))}
          </div> : ""}
      </div>
    </section >
  );
}

function ImageSection(props) {
  const [ref, isVisible] = useInView(
    {
      unobserveOnEnter: true,
    }
  )
  if (!props.image) return null
  return (
    <div
      className={`${style.image} fade-animation`}
      ref={ref}
      key={isVisible ? "image-inview" : "image"}
    >
      <Image
        src={props.image}
        layout="fill"
        objectFit="cover"
        objectPosition={props.objectPosition}
      />
    </div>
  )
}

function Cell(props) {
  return (
    <div
      className={`
        ${style.cell}
        fade-up-animation
      `}
      style={{ animationDuration: (props.index * 2) * 100 + 900 + "ms" }}
    >
      <h3 className={style.cell__title}>
        {props.title}
      </h3>
      {props.data ?
        <div className={style.cell_section__wrapper}>
          {props.data.map((item) => (
            <CellSection
              key={nanoid()}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </div> : ""}
    </div>
  )
}

function CellSection(props) {
  return (
    <div className={style.cell_section}>
      <div className={style.cell_section__icon_wrapper}>
        <img src={props.icon} className={style.cell_section__icon} />
      </div>
      <p className={style.cell_section__text}>
        {props.text}
      </p>
    </div>
  )
}
