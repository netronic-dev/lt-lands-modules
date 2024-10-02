import { useInView } from "react-hook-inview";
import { BlockIconText } from "../../BlockIconText";
import style from "../ms.module.scss";

export default function MSGridCards(props) {
  const [cardsFirstLineRef, cardsFirstLineIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [cardsSecondLineRef, cardsSecondLineIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [cardsThirdLineRef, cardsThirdLineIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <>
      <div className={style.indication_grid}>
        <div
          className={`${style.indication_grid__cell} zoom-animation`}
          ref={cardsFirstLineRef}
          key={cardsFirstLineIsVisible ? 0 : 1}
        >
          <BlockIconText
            icon={<img src="/multistation/icon1.svg" alt="icon1" />}
            title={props.bitOneTitle}
            text={props.bitOneText}
            style="black"
          />
        </div>
        <div
          className={`${style.indication_grid__cell} zoom-animation animated-second`}
          key={cardsFirstLineIsVisible ? 11 : 12}
        >
          <BlockIconText
            icon={<img src="/multistation/icon2.svg" alt="icon2" />}
            title={props.bitTwoTitle}
            text={props.bitTwoText}
            style="black"
          />
        </div>
        <div
          className={`${style.indication_grid__cell} zoom-animation animated-third`}
          key={cardsFirstLineIsVisible ? 13 : 14}
        >
          <BlockIconText
            icon={<img src="/multistation/icon3.svg" alt="icon3" />}
            title={props.bitThreeTitle}
            text={props.bitThreeText}
            style="black"
          />
        </div>
        <div
          className={`${style.indication_grid__cell} zoom-animation`}
          ref={cardsSecondLineRef}
          key={cardsSecondLineIsVisible ? 2 : 3}
        >
          <BlockIconText
            icon={<img src="/multistation/icon4.svg" alt="icon4" />}
            title={props.bitFourTitle}
            text={props.bitFourText}
            style="black"
          />
        </div>
        <div
          className={`${style.indication_grid__cell} zoom-animation animated-second`}
          key={cardsFirstLineIsVisible ? 21 : 22}
        >
          <BlockIconText
            icon={<img src="/multistation/icon5.svg" alt="icon5" />}
            title={props.bitFiveTitle}
            text={props.bitFiveText}
            style="black"
          />
        </div>
        <div
          className={`${style.indication_grid__cell} zoom-animation animated-third`}
          key={cardsFirstLineIsVisible ? 23 : 24}
        >
          <BlockIconText
            icon={<img src="/multistation/icon6.svg" alt="icon6" />}
            title={props.bitSixTitle}
            text={props.bitSixText}
            style="black"
          />
        </div>
        <div
          className={`${style.indication_grid__cell} zoom-animation`}
          ref={cardsThirdLineRef}
          key={cardsThirdLineIsVisible ? 4 : 5}
        >
          <BlockIconText
            icon={<img src="/multistation/icon7.svg" alt="icon7" />}
            title={props.bitSevenTitle}
            text={props.bitSevenText}
            style="black"
          />
        </div>
      </div>
    </>
  );
}
