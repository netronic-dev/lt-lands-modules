import style from "../tvout.module.scss"
import { Fade } from "react-awesome-reveal"

export default function TVIconsGrid(props) {
  return (
    <Fade triggerOnce>
      <div className={style.icons_grid}>
        <div className={style.column}>
          <Fade triggerOnce>
            <img src="/tvOut/svg/icon1.svg" alt="icon" />
          </Fade>
          <Fade direction="up" triggerOnce>
            <p className="paragraph">
              {props.cellOneText}
            </p>
          </Fade>
        </div>
        <div className={style.column}>
          <Fade delay={300} triggerOnce>
            <img src="/tvOut/svg/icon2.svg" alt="icon" />
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <p className="paragraph">
              {props.cellTwoText}
            </p>
          </Fade>
        </div>
        <div className={style.column}>
          <Fade delay={500} triggerOnce>
            <img src="/tvOut/svg/icon3.svg" alt="icon" />
          </Fade>
          <Fade direction="up" delay={500} triggerOnce>
            <p className="paragraph">
              {props.cellThreeText}
            </p>
          </Fade>
        </div>
        <div className={style.column}>
          <Fade delay={700} triggerOnce>
            <img src="/tvOut/svg/icon4.svg" alt="icon" />
          </Fade>
          <Fade direction="up" delay={700} triggerOnce>
            <p className="paragraph">
              {props.cellFourText}
            </p>
          </Fade>
        </div>
      </div>
    </Fade>
  )
}