import { useInView } from "react-hook-inview"
import style from "../style.module.scss"

export default function SupernovaHowWorks(props) {

  const [ref, IsVisible] = useInView({
    unobserveOnEnter: true
  })
  const prev = e => {
    const container = document.getElementById("HIW-scroll");
    const containerScrollPosition = document.getElementById("HIW-scroll").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition - 400,
      behaviour: "smooth"
    });
  };
  const next = e => {
    const container = document.getElementById("HIW-scroll");
    const containerScrollPosition = document.getElementById("HIW-scroll").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + 400,
      behaviour: "smooth"
    });
  };

  return (
    <section
      className={style.how_it_works}
    >
      <div className={style.how_it_works__top}>
        <h2 className={style.title}>
          {props.title}
        </h2>
        <div className={style.top__buttons}>
          <button className={style.prev} onClick={prev}>{arrow}<span className={style.button_text}></span></button>
          <button
            className={style.next}
            onClick={next}
          >
            <span className={style.button_text}>
              Next
            </span>
            {arrow}
          </button>
        </div>
      </div>
      <div className={style.how_it_works__grid_out} id="HIW-scroll">
        <div className={style.how_it_works__grid} ref={ref} key={IsVisible ? 1 : 0}>
          {props.data.map((item, index) => (
            <StepCell
              key={index}
              delay={index * 100}
              number={index + 1}
              stepText={props.stepText}
              text={item.text}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCell(props) {
  return (
    <div
      className={`${style.step_cell} zoom-animation`}
      style={{ animationDelay: `${props.delay}ms` }}
    >
      <div className={style.step_cell__top}>
        <p className={style.step_cell__step_number}>{props.number}</p>
        <p className={style.step_cell__step_text}>{props.stepText}</p>
      </div>
      <div className={style.step_cell__bottom}>
        <div className={style.step_cell__img_out}>
          <img className={style.step_cell__img} src={props.img} alt={props.text} />
        </div>
        <p className={style.step_cell__text}>
          {props.text}
        </p>
      </div>
    </div>
  )
}
const arrow = (
  <svg width="31" height="22" viewBox="0 0 31 22" fill="none" className={style.arrow}>
    <path d="M10.85 22L13.0355 19.7843L5.9365 12.5714L31 12.5714L31 9.42857L5.9365 9.42857L13.051 2.21571L10.85 -1.76157e-06L9.61651e-07 11L10.85 22Z" fill="#040e18" />
  </svg>
)