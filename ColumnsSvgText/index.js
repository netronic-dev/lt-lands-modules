import { useInView } from "react-hook-inview";
import style from "./style.module.scss";

const styles = {
  "black": style.columns_svg_black,
  "blackest": style.columns_svg_blackest,
  "whitest": style.columns_svg_whitest,
  "white": style.columns_svg_white,
};

export function ColumnsSvgText(props) {
  const [cellRef, cellIsVisible] = useInView({
    unobserveOnEnter: true
  })
  return (
    <div
      ref={cellRef}
      className={styles[props.style]}
      key={cellIsVisible ? 1 : 0}>

      <div className={style.cell}>
        <div className={style.image_block}>{props.svgOne}</div>
        <section className={`${style.column_text_block} fade-up-animation`}>
          <h3>{props.titleOne}</h3>
          <p>{props.textOne}</p>
        </section>
      </div>

      <div className={style.cellTwo}>
        <div className={style.image_block}>{props.svgTwo}</div>
        <section className={`${style.column_text_block} fade-up-animation`}>
          <h3>{props.titleTwo}</h3>
          <p>{props.textTwo}</p>
        </section>
      </div>

      <div className={style.cellThree}>
        <div className={style.image_block}>{props.svgThree}</div>
        <section className={`${style.column_text_block} fade-up-animation`}>
          <h3>{props.titleThree}</h3>
          <p>{props.textThree}</p>
        </section>
      </div>

      <div className={style.cellFour}>
        <div className={style.image_block}>{props.svgFour}</div>
        <section className={`${style.column_text_block} fade-up-animation`}>
          <h3>{props.titleFour}</h3>
          <p>{props.textFour}</p>
        </section>
      </div>
    </div>
  );
}
export function ColumnsSvgText2(props) {
  const [cellRef, cellIsVisible] = useInView({
    unobserveOnEnter: true
  })

  return (
    <div
      ref={cellRef}
      key={cellIsVisible ? 1 : 0}
      className={styles[props.style]}>
      <div className={style.cell}>
        <div className={style.image_block}>{props.svgOne}</div>
        <section className={`${style.column_text_block} fade-up-animation`}>
          <h3>{props.titleOne}</h3>
          <p>{props.textOne}</p>
        </section>
      </div>

      <div className={style.cellTwo}>
        <div className={style.image_block}>{props.svgTwo}</div>
        <section className={`${style.column_text_block} fade-up-animation`}>
          <h3>{props.titleTwo}</h3>
          <p>{props.textTwo}</p>
        </section>
      </div>
    </div>
  );
}
