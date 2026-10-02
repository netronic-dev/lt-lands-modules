import style from "../falcon.module.scss";
import SliderTwoButtons from "../../../lt-modules/Slider/SliderTwoButtons";
import { Fade } from "react-awesome-reveal";

export default function FalconModifications(props) {
  return (
    <>
      <div
        className={
          props.style
            ? `${style.twoModifications} ${style.twoModifications_black}`
            : `${style.twoModifications}`
        }
      >
        <Fade direction="up" triggerOnce>
          <div>
            <h2 className={`${style.title_white} ${style.title}`}>
              {props.title}
            </h2>
            {props.subtitle && (
              <h3 className={`${style.title_white} ${style.title}`}>
                {props.subtitle}
              </h3>
            )}
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <SliderTwoButtons
            downButtons={props.downButtons}
            sliderData={props.sliderData}
            listofTitles={props.listTitle || ["Falcon F1", "Falcon F2"]}
          />
        </Fade>
      </div>
    </>
  );
}
