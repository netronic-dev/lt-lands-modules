import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useInView } from "react-hook-inview";
import style from "../main.module.scss";

export default function MainNumbers(props) {
  const [ref, isVisible] = useInView();
  return (
    <>
      <section className={style.numbers} ref={ref}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.title}>{props.title}</h2>
        </Fade>
        <Fade direction="up" triggerOnce>
          <div className={`${style.second_text_box} fade-right-animation`}>
            <p className={`${style.second_text} fade-right-animation`}>
              {props.secondText}
            </p>
            <p className={`${style.second_text} fade-right-animation`}>
              {props.thirdText}
            </p>
          </div>
        </Fade>
        <div className={style.grid}>
          <Fade direction="up" triggerOnce>
            <div className={style.cell}>
              <img
                src="/index/vector/falcon-2.svg"
                className={style.image}
                alt="World leader in mobile laser tag solutions photo 1"
              />
              <h3 className={style.cell_title}>
                {isVisible ? (
                  <CountUp start={0} end={props.firstCellNumber} duration={3} />
                ) : (
                  ""
                )}
                +
              </h3>
              <p className={style.cell_text}>{props.firstCellText}</p>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce delay={300}>
            <div className={style.cell}>
              <img
                src="/index/vector/icon.svg"
                className={style.image}
                alt="World leader in mobile laser tag solutions photo 2"
              />
              <h3 className={style.cell_title}>
                {isVisible ? (
                  <CountUp end={props.secondCellNumber} duration={5} />
                ) : (
                  ""
                )}
                +
              </h3>
              <p className={style.cell_text}>{props.secondCellText}</p>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce delay={500}>
            <div className={style.cell}>
              <img
                src="/index/vector/map.svg"
                className={style.image}
                alt="World leader in mobile laser tag solutions photo 3"
              />
              <h3 className={style.cell_title}>
                {isVisible ? (
                  <CountUp end={props.thirdCellNumber} duration={4} />
                ) : (
                  ""
                )}
                +
              </h3>
              <p className={style.cell_text}>{props.thirdCellText}</p>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce delay={700}>
            <div className={style.cell}>
              <img
                src="/index/vector/cart.svg"
                className={style.image}
                alt="World leader in mobile laser tag solutions photo 4"
              />
              <h3 className={style.cell_title}>
                {isVisible ? (
                  <>
                    <CountUp end={props.fourthCellNumber} duration={5} /> /{" "}
                    <CountUp end={props.fourthCellNumber2} duration={5} />
                  </>
                ) : (
                  ""
                )}
              </h3>
              <p className={style.cell_text}>{props.fourthCellText}</p>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
