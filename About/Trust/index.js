import Image from "next/image";
import style from "../about.module.scss";
import SliderReviews from "../../../lt-modules/Slider/SliderReviews";
import { Fade } from "react-awesome-reveal";

export default function AboutTrust(props) {
  return (
    <div className={style.trust}>
      <div className={style.text_block}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.title}>{props.title}</h2>
          <p className={style.text}>{props.text}</p>
        </Fade>
      </div>
      <div className={style.trust_map}>
        <div className={style.trust_map_in}>
          <Image
            src={props.image}
            layout="fill"
            objectFit="contain"
            alt="trust"
          />
        </div>
      </div>
      <SliderReviews data={props.sliderData} />
    </div>
  );
}
