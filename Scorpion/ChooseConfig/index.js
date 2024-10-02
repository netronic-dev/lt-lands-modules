import style from "../scorpion.module.scss";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function ChooseConfig(props) {
  return (
    <div className={style.choose_config}>
      <div className={style.choose_config_content}>
        <section>
          <Fade direction="up" triggerOnce>
            <h2 className={style.h2}>{props.title}</h2>
            <p className="paragraph">{props.text}</p>
          </Fade>
        </section>
        <div className={style.choose_config_img}>
          <Fade direction="right" triggerOnce>
            <Image
              src="/scorpion/vestnshockband.jpg"
              height={765}
              width={775}
              layout="responsive"
              alt="vestnshockband"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
