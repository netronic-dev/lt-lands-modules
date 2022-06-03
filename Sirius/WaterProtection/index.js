import Image from "next/image"
import { BlockIconText } from "../../BlockIconText/BlockIconText"
import style from "../sirius.module.scss"

export default function SiriusWaterProtection(props) {
  return (
    <>
      <div className={style.waterProtection}>
        <h2>
          {props.title}
        </h2>
        <Image
          src="/sirius/sirius-water.jpg"
          layout="responsive"
          width={1920}
          height={910}
        />
      </div>
      <div className={style.block_half_outside}>
        <div className={style.block_half}>
          <div>
            <h3>{props.cellTitle}</h3>
            <p className="paragraph">
              {props.cellText}
            </p>
          </div>
          <div>
            <h3>{props.cellTwoTitle}</h3>
            <p className="paragraph">
              {props.cellTwoText}
            </p>
          </div>
        </div>
      </div>
      <div className={style.battery}>
        <div className={style.image}>
          <Image
            src="/sirius/sirius-charge.jpg"
            layout="responsive"
            width={1240}
            height={790}
          />
        </div>
        <div className={style.columns}>
          <div className={style.cell}>
            <BlockIconText
              icon={
                <img
                  src="/sirius/battery-charge.svg"
                />
              }
              title={props.bitTitle}
              text={props.bitText}
              style="45"
            />
          </div>
          <div className={style.cell}>
            <BlockIconText
              icon={
                <img src="/sirius/phone.svg" />
              }
              title={props.bitTwoTitle}
              text={props.bitTwoText}
              style="45"
            />
          </div>
        </div>
      </div>
    </>
  )
}
