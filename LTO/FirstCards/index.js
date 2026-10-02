import style from "../lto.module.scss";
import Image from "next/image";
import { useInView } from "react-hook-inview";

export default function FirstCards(props) {
  const [titleRef, titleIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [iconsGridRef, iconsGridIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [refCard1, card1IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [refCard2, card2IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [refCard3, card3IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [refCard4, card4IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <section className={style.screen}>
      <div
        ref={titleRef}
        key={titleIsVisible ? "lto-title-inview" : "lto-title"}
        className={`${style.icons_grid__title} fade-up-animation`}
      >
        <h2 className={style.lo__title}>{props.title}</h2>
      </div>
      <div
        className={style.icons_grid}
        ref={iconsGridRef}
        key={iconsGridIsVisible ? "lto-icons-grid-inview" : "lto-icons-grid"}
      >
        <div className={style.column}>
          <img
            src="/lasertagOperator/svg/lo-easy-2.svg"
            alt={props.cellText}
            className="Lasertag Operator photo 4"
          />
          <p className="paragraph fade-up-animation">{props.cellText}</p>
        </div>
        <div className={style.column}>
          <img
            src="/lasertagOperator/svg/lo-easy-1.svg"
            alt={
              props.cellTwoText
                ? props.cellTwoText
                : "Lasertag Operator photo 5"
            }
            className="zoom-animation"
          />
          <p className="paragraph fade-up-animation">{props.cellTwoText}</p>
        </div>
        <div className={style.column}>
          <img
            src="/lasertagOperator/svg/lo-easy-3.svg"
            alt={
              props.cellThreeText
                ? props.cellThreeText
                : "Lasertag Operator photo 6"
            }
            className="zoom-animation"
          />
          <p className="paragraph fade-up-animation">{props.cellThreeText}</p>
        </div>
        <div className={style.column}>
          <img
            src="/lasertagOperator/svg/lo-easy-4.svg"
            alt={
              props.cellFourText
                ? props.cellFourText
                : "Lasertag Operator photo 7"
            }
            className="zoom-animation"
          />
          <p className="paragraph fade-up-animation">{props.cellFourText}</p>
        </div>
      </div>
      <div className={style.grid_easy_game}>
        <div
          className={style.card}
          ref={refCard1}
          key={card1IsVisible ? "eg-card1-inview" : "eg-card1"}
        >
          <section className="fade-up-animation">
            <h3>{props.cardFirstTitle}</h3>
            <p className="paragraph">{props.cardFirstText}</p>
          </section>
          <div className={`${style.image} zoom-animation`}>
            <Image
              src={
                props.firstImage
                  ? props.firstImage
                  : "/lasertagOperator/3clicks.png"
              }
              layout="responsive"
              width={310}
              height={620}
              alt="Lasertag Operator photo 8"
            />
          </div>
        </div>
        <div
          className={style.card}
          ref={refCard2}
          key={card2IsVisible ? "eg-card2-inview" : "eg-card2"}
        >
          <section className="fade-up-animation">
            <h3>{props.cardTwoTitle}</h3>
            <p className="paragraph">{props.cardTwoText}</p>
          </section>
          <div className={`${style.image} zoom-animation`}>
            <Image
              src={
                props.secondImage
                  ? props.secondImage
                  : "/lasertagOperator/autoending.png"
              }
              layout="responsive"
              width={310}
              height={620}
              alt="Lasertag Operator photo 9"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
