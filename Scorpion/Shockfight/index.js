import style from "../scorpion.module.scss";
import Image from "next/image";
import { ColumnTextImage } from "../../ColumnTextImage";
import { Fade } from "react-awesome-reveal";

export default function Shockfight(props) {
  return (
    <div className={style.bg_shockfight}>
      <Fade direction="up" triggerOnce>
        <h2 className={style.h2}>{props.title}</h2>
      </Fade>
      <ColumnTextImage
        title={props.columnTitle}
        svgOne={<img src="/scorpion/svg/icon7.svg" alt="icon7" />}
        textOne={props.text}
        svgTwo={<img src="/scorpion/svg/icon8.svg" alt="icon8" />}
        textTwo={props.textTwo}
        svgThree={<img src="/scorpion/svg/icon10.svg" alt="icon10" />}
        textThree={props.textThree}
        svgFour={<img src="/scorpion/svg/icon13.svg" alt="icon13" />}
        textFour={props.textFour}
        image={
          <Image
            src="/scorpion/gunnshockband.jpg"
            layout="fill"
            objectFit="cover"
            alt="gunnshockband"
          />
        }
      />
    </div>
  );
}
