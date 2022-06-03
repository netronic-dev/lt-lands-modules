import { useInView } from "react-hook-inview"
import { VideoButton } from "../../../Buttons/Buttons"
import style from "../style.module.scss"

export default function MCHowWorks(props) {

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true
  })

  return (
    <section className={style.how_works} ref={ref} key={isVisible ? 4 : 5}>
      <h2 className={`${style.title} fade-up-animation`}>
        {props.title}
      </h2>
      <div className={style.grid_out}>
        <div className={style.line}></div>
        <div className={style.grid}>
          {props.data.map((item, index) => (
            <Cell
              key={index}
              number={index + 1}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className={`${style.button} zoom-animation`}>
        {props.en ? (<VideoButton
          text={props.buttonText}
          style="blueBlack"
          link={props.videoLink}
        />) : null}
      </div>
    </section>
  )
}

function Cell(props) {

  const animationDelay = ((props.number + 1) * 100).toString() + "ms"

  return (
    <div className={style.cell}>
      <div style={{ animationDelay: animationDelay }} className={`${style.icon} zoom-animation`}>
        <img src={props.icon} />
      </div>
      <p style={{ animationDelay: animationDelay }} className={`${style.numbers} fade-up-animation`}>0{props.number}</p>
      <p style={{ animationDelay: animationDelay }} className={`${style.text} fade-up-animation`}>
        {props.text}
      </p>
    </div>
  )
}