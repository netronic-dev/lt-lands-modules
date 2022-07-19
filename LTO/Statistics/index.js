import SliderThreeButtons from "../../../lt-modules/Slider/SliderThreeButtons"
import { FooterButtons } from "../../../lt-modules/FooterButtons"
import style from "../lto.module.scss"

export default function Statistics(props) {
  return (
    <div className={`${style.statistics} ${style.screen}`}>
      <section>
        <h2 className={style.lo__title}>
          {props.title}
        </h2>
        <p className="paragraph">
          {props.text}
        </p>
      </section>
      <SliderThreeButtons
        sliderData={props.sliderData}
        listofTitles={props.listofTitles}
      />
      <div className={style.footer_buttons}>
        <FooterButtons
          en
          theme="black"
          logoName="ltnet"
          textTop={props.footer_buttons_textTop}
          textBottom={props.footer_buttons_textBottom}
          buttonText={props.footer_buttons_buttonText}
        />
      </div>
    </div>
  );
}
