import style from "../scorpion.module.scss";
import Image from "next/image";
import { BlockIconText } from "../../BlockIconText";
import { ColumnsSvgText2 } from "../../ColumnsSvgText";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-hook-inview";

export default function Safety(props) {
  const [cellsRef, isCellsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div className={style.safety}>
      <Fade direction="up" triggerOnce>
        <h2 className={style.h2}>{props.title}</h2>
      </Fade>
      <div className={style.safety__CST}>
        <ColumnsSvgText2
          style="whitest"
          svgOne={<img src="/scorpion/svg/icon11.svg" alt="Shock-band photo 10" />}
          titleOne={props.columnTitle}
          textOne={props.columnText}
          svgTwo={<img src="/scorpion/svg/icon12.svg" alt="Shock-band photo 11" />}
          titleTwo={props.columnTitleTwo}
          textTwo={props.columnTextTwo}
        />
      </div>

      <div className={style.safety_img}>
        <Fade triggerOnce>
          <div className="desktop">
            <Image
              src="/scorpion/shockbandwhite.jpg"
              height={565}
              width={1920}
              layout="intrinsic"
              alt="Shock-band photo 12"
            />
          </div>
          <div className="mobile">
            <Image
              src="/scorpion/shockbandwhite-mob.jpg"
              height={564}
              width={1004}
              layout="intrinsic"
              alt="Shock-band photo 13"
            />
          </div>
        </Fade>
      </div>

      <div
        ref={cellsRef}
        key={isCellsVisible ? 0 : 1}
        className={style.safety_grid}
      >
        <div className={`${style.safety_grid_cell} zoom-animation`}>
          <BlockIconText
            icon={<img src="/scorpion/svg/icon2.svg" alt="Shock-band photo 14" />}
            title={props.gridTitle}
            text={props.gridText}
            style="scorpionBlack"
          />
        </div>
        <div
          className={`${style.safety_grid_cell} zoom-animation animated-second`}
        >
          <BlockIconText
            icon={<img src="/scorpion/svg/icon9.svg" alt="Shock-band photo 15" />}
            title={props.gridTitleTwo}
            text={props.gridTextTwo}
            style="scorpionBlack"
          />
        </div>
        <div
          className={`${style.safety_grid_cell} zoom-animation animated-third`}
        >
          <BlockIconText
            icon={<img src="/scorpion/svg/icon3.svg" alt="Shock-band photo 16" />}
            title={props.gridTitleThree}
            text={props.gridTextThree}
            style="scorpionBlack"
          />
        </div>
      </div>
    </div>
  );
}
