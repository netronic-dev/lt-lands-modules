import { useInView } from "react-hook-inview";
import { BlockIconText } from "../../BlockIconText";
import style from "../headband.module.scss";

export default function Modes(props) {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [refLine2, line2IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div className={style.modes} ref={ref}>
      <div
        className={`${style.section} fade-up-animation`}
        key={isVisible ? "modes-text" : "modes-text-inview"}
      >
        <h2 className={style.h2}>{props.title}</h2>
        <p className="paragraph">{props.text}</p>
      </div>
      <div className={style.cards_greed}>
        <div
          className={`${style.cards_greed_cell} zoom-animation`}
          key={isVisible ? "modes-card1" : "modes-card1-inview"}
        >
          <BlockIconText
            icon={<img src="/bandNetronic/svg/5modes-1.svg" alt="5modes-1" />}
            title={props.bitTitle1}
            text={props.bitText1}
            style="black"
          />
        </div>
        <div
          className={`${style.cards_greed_cell} zoom-animation animated-second`}
          key={isVisible ? "modes-card2" : "modes-card2-inview"}
        >
          <BlockIconText
            icon={<img src="/bandNetronic/svg/5modes-2.svg" alt="5modes-2" />}
            title={props.bitTitle2}
            text={props.bitText2}
            style="black"
          />
        </div>
        <div
          className={`${style.cards_greed_cell} zoom-animation animated-third`}
          key={isVisible ? "modes-card3" : "modes-card3-inview"}
        >
          <BlockIconText
            icon={<img src="/bandNetronic/svg/5modes-3.svg" alt="5modes-3" />}
            title={props.bitTitle3}
            text={props.bitText3}
            style="black"
          />
        </div>
        <div
          className={`${style.cards_greed_cell} zoom-animation`}
          ref={refLine2}
          key={line2IsVisible ? "modes-card4" : "modes-card4-inview"}
        >
          <BlockIconText
            icon={<img src="/bandNetronic/svg/5modes-4.svg" alt="5modes-4" />}
            title={props.bitTitle4}
            text={props.bitText4}
            style="black"
          />
        </div>
        <div
          className={`${style.cards_greed_cell} zoom-animation animated-second`}
          key={line2IsVisible ? "modes-card5" : "modes-card5-inview"}
        >
          <BlockIconText
            icon={<img src="/bandNetronic/svg/5modes-5.svg" alt="5modes-5" />}
            title={props.bitTitle5}
            text={props.bitText5}
            style="black"
          />
        </div>
      </div>
    </div>
  );
}
