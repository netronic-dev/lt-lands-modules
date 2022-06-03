import SliderCards from "../../Slider/SliderCards/SliderCards";
import { FooterButtons } from "../../FooterButtons/FooterButtons";
import style from "./style.module.scss";

export default function Gallery(props) {
  return (
    <div className={style.gallery_out}>
      <div className={style.gallery_in}>
        <h2 className={style.gallery_title}>{props.title}</h2>
        <div className={style.gallery_slider}>
          <SliderCards sliderData={props.sliderData} />
        </div>
        <FooterButtons
          en={props.en}
          catalog={props.catalog}
          call={props.call}
          theme={props.theme}
          logoName={props.logoName}
          textTop={props.textTop}
          textBottom={props.textBottom}
          buttonText={props.buttonText}
        />
      </div>
    </div>
  );
}
