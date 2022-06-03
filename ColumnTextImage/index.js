import { useInView } from "react-hook-inview";
import style from "./style.module.scss";

export function ColumnTextImage(props) {
  const [cardsRef, isCardsVisible] = useInView({
    unobserveOnEnter: true
  })
  return (
    <div className={style.columns_block} ref={cardsRef} key={isCardsVisible ? 1 : 2}>
      <div className={`${style.text_block} zoom-animation`}>
        <h3 className={style.text_block__title}>{props.title}</h3>
        <div className={style.items_block}>
          <div className={style.item}>
            <div className={style.icon_svg}>{props.svgOne}</div>
            <p className={style.text}>{props.textOne}</p>
          </div>
          <div className={style.item}>
            <div className={style.icon_svg}>{props.svgTwo}</div>
            <p className={style.text}>{props.textTwo}</p>
          </div>
          <div className={style.item}>
            <div className={style.icon_svg}>{props.svgThree}</div>
            <p className={style.text}>{props.textThree}</p>
          </div>
          <div className={style.item}>
            <div className={style.icon_svg}>{props.svgFour}</div>
            <p className={style.text}>{props.textFour}</p>
          </div>
        </div>
      </div>
      <div className={`${style.image_block} zoom-animation`}>{props.image}</div>
    </div>
  );
}
