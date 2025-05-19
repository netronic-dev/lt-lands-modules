import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-hook-inview";
import style from "../style.module.scss";

export default function MCFAQ(props) {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <section className={style.faq}>
      <h3
        style={{ color: props.titleColor ? props.titleColor : "#000" }}
        className={`${style.title} fade-up-animation`}
        ref={ref}
        key={isVisible ? "faq_title" : null}
      >
        FAQ
      </h3>
      <div>
        {props.data.map(
          (item, index) => (
            // index === 0 ? (
            <Cell state title={item.question} text={item.answer} key={index} />
          )
          // ) : (
          //   <Cell title={item.question} text={item.answer} key={index} />
          // )
        )}
      </div>
    </section>
  );
}

function Cell(props) {
  const [isTextView, changeTextView] = useState(
    props.state ? props.state : false
  );
  function onTextViewChange() {
    changeTextView(!isTextView);
  }
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div
      className={`${style.cell} zoom-animation`}
      onClick={onTextViewChange}
      ref={ref}
      key={isVisible ? "cell" : null}
    >
      <div className={style.cell_title_block}>
        <div className={style.arrow_block}>
          <Arrow rotate={isTextView ? true : false} />
        </div>
        <h3 className={style.cell_title}>{props.title}</h3>
      </div>
      {isTextView ? (
        <Fade direction="down" duration={500} triggerOnce>
          <div className={style.cell_text}>{props.text}</div>
        </Fade>
      ) : null}
    </div>
  );
}

function Arrow(props) {
  return (
    <svg
      width="37"
      height="23"
      viewBox="0 0 37 23"
      fill="none"
      className={style.arrow}
      style={
        props.rotate
          ? { transform: "rotate(0)" }
          : { transform: "rotate(540deg)" }
      }
    >
      <path d="M35 21L18.5 4L2 21" stroke="#0090FF" strokeWidth="5" />
    </svg>
  );
}
