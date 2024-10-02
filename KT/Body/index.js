import style from "../smart.module.scss";
import Image from "next/image";
import { BlockIconText } from "../../BlockIconText";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-hook-inview";
import CountUp from "react-countup";

export default function KTBody(props) {
  const [firstCardsRef, firstCardsIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [bigCardRef, bigCardIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [secondCardsRef, secondCardsIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [thirdCardsRef, thirdCardsIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div className={style.body_middle}>
      <Fade direction="up" triggerOnce>
        <h2 className={style.title_center}>{props.title}</h2>
      </Fade>
      <div
        className={style.cards}
        ref={firstCardsRef}
        key={firstCardsIsVisible ? 0 : 1}
      >
        <div className={`${style.cards__cell} zoom-animation`}>
          <h3>{props.cellTitle}</h3>
          <p className="paragraph">{props.cellText}</p>
        </div>
        <div className={`${style.cards__cell} zoom-animation animated-second`}>
          <h3>{props.cellTitleTwo}</h3>
          <p className="paragraph">{props.cellTextTwo}</p>
        </div>
      </div>
      <div
        className={`${style.middle_card} zoom-animation`}
        ref={bigCardRef}
        key={bigCardIsVisible ? 2 : 3}
      >
        <div className={style.middle_card__cells}>
          <div className={style.cell}>
            <p className={style.number}>
              <CountUp
                delay={0.7}
                start={0}
                end={props.numCellNum}
                duration={1}
              />
            </p>
            <Fade direction="up" triggerOnce>
              <p className={style.cell__text}>{props.numCellText}</p>
            </Fade>
          </div>
          <div className={style.cell}>
            <p className={style.number}>
              <CountUp
                delay={0.7}
                start={0}
                end={props.numCellTwoNum}
                duration={1}
              />
            </p>
            <Fade direction="up" triggerOnce>
              <p className={style.cell__text}>{props.numCellTwoText}</p>
            </Fade>
          </div>
          <div className={style.cell}>
            <p className={style.number}>
              <CountUp
                delay={0.7}
                start={0}
                end={props.numCellThreeNum}
                duration={1}
              />
            </p>
            <Fade direction="up" triggerOnce>
              <p className={style.cell__text}>{props.numCellThreeText}</p>
            </Fade>
          </div>
          <div className={style.cell}>
            <p className={style.number}>
              <CountUp
                delay={0.7}
                start={0}
                end={props.numCellFourNum}
                duration={1}
              />
            </p>
            <Fade direction="up" triggerOnce>
              <p className={style.cell__text}>{props.numCellFourText}</p>
            </Fade>
          </div>
        </div>
        <div className={style.image}>
          <Fade direction="up" triggerOnce>
            <Image
              src="/smart/kt-top.jpg"
              layout="intrinsic"
              width={770}
              height={535}
              alt="kt-top"
            />
          </Fade>
        </div>
        <div className={style.content}>
          <Fade direction="up" triggerOnce>
            <h2 className={style.title_center}>{props.bottomTitle}</h2>
          </Fade>
          <Fade direction="up" triggerOnce>
            <p className="paragraph">{props.bottomtText}</p>
          </Fade>
        </div>
      </div>
      <div className={style.BIT_cards}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.title_center}>{props.cardsBlockTitle}</h2>
        </Fade>
        <div className={style.BIT_cards_grid}>
          <div
            className={`${style.BIT_cards__cell} zoom-animation`}
            ref={secondCardsRef}
            key={secondCardsIsVisible ? 5 : 6}
          >
            <BlockIconText
              icon={<img src="/smart/svg/5-modes-5.svg" alt="icon" />}
              title={props.cardTitle}
              text={props.cardText}
              style="black"
            />
          </div>
          <div
            className={`${style.BIT_cards__cell} zoom-animation animated-second`}
            key={secondCardsIsVisible ? 15 : 16}
          >
            <BlockIconText
              icon={<img src="/smart/svg/5-modes-3.svg" alt="icon" />}
              title={props.cardTwoTitle}
              text={props.cardTwoText}
              style="black"
            />
          </div>
          <div
            className={`${style.BIT_cards__cell} zoom-animation animated-third`}
            key={secondCardsIsVisible ? 17 : 18}
          >
            <BlockIconText
              icon={<img src="/smart/svg/5-modes-1.svg" alt="icon" />}
              title={props.cardThreeTitle}
              text={props.cardThreeText}
              style="black"
            />
          </div>
          <div
            className={`${style.BIT_cards__cell} zoom-animation`}
            ref={thirdCardsRef}
            key={thirdCardsIsVisible ? 7 : 8}
          >
            <BlockIconText
              icon={<img src="/smart/svg/5-modes-4.svg" alt="icon" />}
              title={props.cardFourTitle}
              text={props.cardFourText}
              style="black"
            />
          </div>
          <div
            className={`${style.BIT_cards__cell} zoom-animation animated-second`}
            key={thirdCardsIsVisible ? 27 : 28}
          >
            <BlockIconText
              icon={<img src="/smart/svg/5-modes-2.svg" alt="icon" />}
              title={props.cardFiveTitle}
              text={props.cardFiveText}
              style="black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
