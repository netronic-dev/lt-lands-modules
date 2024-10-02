import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-hook-inview";
import { BlockIconText } from "../../BlockIconText";
import style from "../ms.module.scss";

export default function MSCards(props) {
  const [cardsRef, isCardsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [secondCardsRef, isSecondCardsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <>
      <div className={style.speaker}>
        <Fade direction="up" triggerOnce>
          <h2>{props.title}</h2>
        </Fade>
        <div
          className={style.cards}
          ref={cardsRef}
          key={isCardsVisible ? 0 : 1}
        >
          <div className={`${style.cards__text_block} zoom-animation`}>
            <p className="paragraph">{props.text}</p>
          </div>
          <div className={`${style.cards__img} zoom-animation animated-second`}>
            <Image
              src="/multistation/speaker.jpg"
              layout="responsive"
              width={775}
              height={515}
              alt="speaker"
            />
          </div>
        </div>
      </div>
      <div
        className={style.scenarios_grid}
        ref={secondCardsRef}
        key={isSecondCardsVisible ? 0 : 1}
      >
        <div className={`${style.scenarios_grid__cell} zoom-animation`}>
          <BlockIconText
            icon={
              <img
                src="/multistation/animated-modes.svg"
                alt="animated-modes"
              />
            }
            title={props.bitOneTitle}
            text={props.bitOneText}
            style="black"
          />
        </div>
        <div
          className={`${style.scenarios_grid__cell} zoom-animation animated-second`}
        >
          <BlockIconText
            icon={
              <img
                src="/multistation/Scenario-Options.svg"
                alt="Scenario-Options"
              />
            }
            title={props.bitTwoTitle}
            text={props.bitTwoText}
            style="black"
          />
        </div>
      </div>
    </>
  );
}
