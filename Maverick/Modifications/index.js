import { Fade } from "react-awesome-reveal";
import style from "../maverick.module.scss";
import SliderTwoButtons from "../../../lt-modules/Slider/SliderTwoButtons";
import Image from "next/image";
import { MaverickModificationsList } from "../../../constants/globalConstants";
import { Icon } from "../../../components/Icon";

export default function MaverickModifications(props) {
  return (
    <>
      <div
        className={
          props.style
            ? `${style.twoModifications} ${style.twoModifications_black}`
            : `${style.twoModifications}`
        }
      >
        <Fade direction="up" triggerOnce>
          <div>
            <h2 className={`${style.title_white} ${style.title}`}>
              {props.title}
            </h2>
            {props.text && (
              <p className={style.twoModifications_text}>{props.text}</p>
            )}
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <div className={style.twoModifications__img_box}>
            <Image
              className={style.twoModifications__img}
              src={props.image}
              alt={props.title}
              layout="fill"
            />
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <div className={style.twoModifications_bottom_block}>
            <p className={style.twoModifications_bottom_block_title}>
              You can optionally add:
            </p>
            <ul className={style.twoModifications_bottom_block_list}>
              {MaverickModificationsList.map((item) => (
                <li key={item.id} className={style.twoModifications_bottom_block_item}>
                  <Icon
                    name={item.icon}
                    width={item.iconWidth}
                    height={item.iconHeight}
                  />
                  <p className={style.twoModifications_bottom_block_item_title}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Fade>
      </div>
    </>
  );
}
