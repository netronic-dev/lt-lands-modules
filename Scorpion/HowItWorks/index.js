import { ColumnsSvgText2 } from "../../ColumnsSvgText";
import style from "../scorpion.module.scss";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function HowItWorks(props) {
  return (
    <div className={style.bg}>
      <Fade direction="up" triggerOnce>
        <h2 className={`${style.h2} ${style.title}`}>{props.title}</h2>
      </Fade>
      <div className={style.bg__CSVGT}>
        <ColumnsSvgText2
          style="blackest"
          svgOne={<img src="/scorpion/svg/icon4.svg" alt="icon4" />}
          titleOne={props.titleOne}
          textOne={props.textOne}
          svgTwo={<img src="/scorpion/svg/icon5.svg" alt="icon5" />}
          titleTwo={props.titleTwo}
          textTwo={props.textTwo}
        />
      </div>
      <Fade triggerOnce>
        <div className="desktop">
          <Image
            src="/scorpion/manwithgun.jpg"
            height={715}
            width={1920}
            layout="responsive"
            alt="manwithgun"
          />
        </div>
        <div className="mobile">
          <Image
            src="/scorpion/manwithgun-mob.jpg"
            height={345}
            width={470}
            layout="responsive"
            alt="manwithgun"
          />
        </div>
      </Fade>
    </div>
  );
}
