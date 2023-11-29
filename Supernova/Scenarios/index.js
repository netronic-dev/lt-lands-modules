import { Fade } from "react-awesome-reveal";
import { useInView } from "react-hook-inview";
import { Button } from "../../../lt-modules/Buttons";
import style from "../style.module.scss";

export default function SupernovaScenarios (props) {

  const [ref, IsVisible] = useInView({
    unobserveOnEnter: true
  });

  return (
    <section className={style.scenarios}>
      <div className={style.scenarios__top}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.title}>
            {props.title}
          </h2>
        </Fade>
        <Fade delay={300} triggerOnce>
          <div className={style.button}>
            <Button style="black" text="Get catalog" />
          </div>
        </Fade>
      </div>
      <div className={style.grid} ref={ref} key={IsVisible ? 1 : 0}>
        <div className={`${style.grid__cell} zoom-animation`}>
          <img src="/supernova/vector/scenarios-3.svg" alt={props.cell1Title} />
          <h3 className={style.cell__title}>
            {props.cell1Title}
          </h3>
          <p className={style.cell__text}>
            {props.cell1Text}
          </p>
        </div>
        <div className={`${style.grid__cell} zoom-animation animated-second`}>
          <img src="/supernova/vector/scenarios-1.svg" alt={props.gridTitle2} />
          <h3 className={style.cell__title}>
            {props.cell2Title}
          </h3>
          <p className={style.cell__text}>
            {props.cell2Text}
          </p>
        </div>
        <div className={`${style.grid__cell} zoom-animation animated-third`}>
          <img src="/supernova/vector/scenarios-2.svg" alt={props.gridTitle3} />
          <h3 className={style.cell__title}>
            {props.cell3Title}
          </h3>
          <p className={style.cell__text}>
            {props.cell3Text}
          </p>
        </div>
      </div>
    </section>
  );
}