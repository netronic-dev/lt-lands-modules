import style from "../lto.module.scss";
import Image from "next/image";
import { useInView } from "react-hook-inview";

export default function SecondCards(props) {
  const [titleRef, titleIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [card1Ref, card1IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [card2Ref, card2IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [card3Ref, card3IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <section className={style.screen}>
      <h2
        className={`${style.lo__title} fade-up-animation`}
        ref={titleRef}
        key={titleIsVisible ? "cards-2-title-inview" : "cards-2-title"}
      >
        {props.title}
      </h2>
      <div className={style.grid_personal_statistics}>
        <div
          className={style.card_left}
          ref={card1Ref}
          key={card1IsVisible ? "cards2-card1-inview" : "cards2-card1"}
        >
          <section className="fade-up-animation">
            <h3>{props.cardTitle}</h3>
            <p className="paragraph">{props.cardText}</p>
          </section>
          <div className={`${style.card_left__img} zoom-animation`}>
            <div className={style.empty}></div>
            <div className={style.image}>
              <Image
                src={
                  props.firstImage
                    ? props.firstImage
                    : "/lasertagOperator/statistics.png"
                }
                layout="responsive"
                width={365}
                height={375}
                alt="statistics"
              />
            </div>
          </div>
        </div>
        <div
          className={style.card}
          ref={card2Ref}
          key={card2IsVisible ? "cards2-card2-inview" : "cards2-card2"}
        >
          <div className={`${style.image} zoom-animation`}>
            <Image
              src={
                props.secondImage
                  ? props.secondImage
                  : "/lasertagOperator/aloneimage.png"
              }
              layout="responsive"
              width={310}
              height={620}
              alt="alone image"
            />
          </div>
        </div>
      </div>
      <div className={style.nonGrid}>
        <div
          className={style.card}
          ref={card3Ref}
          key={card3IsVisible ? "cards2-card3-inview" : "cards2-card3"}
        >
          <p className="paragraph fade-up-animation">{props.cardTwoText}</p>
          <div className={`${style.nonGrid__img} zoom-animation`}>
            <div className={style.nonGrid__img_in}>
              <Image
                src={
                  props.thirdImage
                    ? props.thirdImage
                    : "/lasertagOperator/performanceIndicators.png"
                }
                layout="responsive"
                width={1200}
                height={390}
                alt="performanceIndicators"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
