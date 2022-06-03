import style from "./style.module.scss";
import Image from "next/image"
import { useInView } from "react-hook-inview";

export function PhoneSection(props) {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true
  })
  return (
    <div className={style.phoneSection} ref={ref} key={isVisible ? 0 : 1}>
      <div className={`${style.firstCard} zoom-animation`}
        style={{ backgroundColor: props.bgColor }}
      >
        <div className={style.card_first_inside} >
          <h3>
            {props.title}
          </h3>
          <div className={style.grid_icon_text}>
            <div className={style.item}>
              <img src="/PhoneSection/icon6.svg" alt="" />
              <p className={`${style.text} paragraph`}>
                {props.first}
              </p>
            </div>
            <div className={style.item}>
              <img src="/PhoneSection/icon5.svg" alt="" />
              <p className={`${style.text} paragraph`}>
                {props.second}
              </p>
            </div>
            <div className={style.item}>
              <img src="/PhoneSection/icon2.svg" alt="" />
              <p className={`${style.text} paragraph`}>
                {props.third}
              </p>
            </div>
            <div className={style.item}>
              <img src="/PhoneSection/icon1.svg" alt="" />
              <p className={`${style.text} paragraph`}>
                {props.fourth}
              </p>
            </div>
            <div>
              <img src="/PhoneSection/icon3.svg" alt="" />
              <p className={`${style.text} paragraph`}>
                {props.fivth}
              </p>
            </div>
            <div>
              <img src="/PhoneSection/icon4.svg" alt="" />
              <p className={`${style.text} paragraph`}>
                {props.sixth}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.secondCard} zoom-animation animated-second`}
        style={{ backgroundColor: props.bgColor }}
      >
        <Image
          layout="responsive"
          src={props.image}
          width={425}
          height={870}
        />
      </div>
    </div>
  );
}
