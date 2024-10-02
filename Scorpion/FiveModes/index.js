import style from "../scorpion.module.scss";
import Image from "next/image";
import { BlockIconText } from "../../BlockIconText";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-hook-inview";

export default function FiveModes(props) {
  const [cellsRef, isCellsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div className={style.bg_fivemodes_outside}>
      <div className={style.bg_fivemodes}>
        <section className={style.bg_fivemodes_section}>
          <Fade direction="up" triggerOnce>
            <h2 className={style.h2}>{props.title}</h2>
          </Fade>
          <Fade direction="up" triggerOnce>
            <p className="paragraph">{props.text}</p>
          </Fade>
        </section>
        <div className={style.bg_fivemodes__img}>
          <Fade direction="right" triggerOnce>
            <Image
              src="/scorpion/shockband.jpg"
              height={607}
              width={675}
              layout="intrinsic"
              alt="shockband"
            />
          </Fade>
          <Fade delay={500} triggerOnce>
            <Image
              src="/scorpion/shockband-modes.png"
              height={190}
              width={215}
              layout="intrinsic"
              alt="shockband"
            />
          </Fade>
        </div>
        <div
          ref={cellsRef}
          key={isCellsVisible ? 0 : 1}
          className={style.fivemodes_grid}
        >
          <div className={`${style.fivemodes_grid_cell} zoom-animation`}>
            <BlockIconText
              icon={<img src="/scorpion/svg/icon1.svg" alt="icon" />}
              title={props.blockTitle}
              text={props.blockText}
              style="black"
            />
          </div>
          <div
            className={`${style.fivemodes_grid_cell} zoom-animation animated-second`}
          >
            <BlockIconText
              icon={<img src="/scorpion/svg/icon6.svg" alt="icon" />}
              title={props.blockTitleTwo}
              text={props.blockTextTwo}
              style="black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
