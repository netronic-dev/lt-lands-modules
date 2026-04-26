import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import style from "../maverick.module.scss";

export default function FalconTenInOne(props) {
  return (
    <>
      <Fade triggerOnce>
        <div className={style.tenInOne}>
          <div className={`${style.tenInOne_bg} desktop`}>
            <Image
              src="/guns/maverick_5.webp"
              alt={props.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={style.section}>
            <Fade direction="up" triggerOnce>
              <h2 className={style.title_white}>{props.title}</h2>
            </Fade>
            <Fade direction="up" triggerOnce>
              <div className={style.tenInOne__text_box}>
                <p className="paragraph">{props.textTop}</p>
                <p className="paragraph">{props.textBottom}</p>
              </div>
            </Fade>
          </div>
          <div className={style.tenInOne__img}>
            <Image
              src="/guns/maverick_5.webp"
              alt={props.title}
              layout="responsive"
              width={1200}
              height={635}
            />
          </div>
        </div>
      </Fade>
    </>
  );
}
