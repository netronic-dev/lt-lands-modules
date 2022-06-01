import style from "../falcon.module.scss"
import Image from "next/image"
import { ColumnTextImage } from "../../ColumnTextImage/ColumnTextImage"
import { Fade } from "react-awesome-reveal"

export default function FalconDisplay(props) {
  return (
    <>
      <div className={style.colourfulDisplay}>
        <Fade direction="top" triggerOnce>
          <h2 className={style.title_white}>
            {props.title}
          </h2>
        </Fade>
        <ColumnTextImage
          title={props.columnTitle}
          svgOne={
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
              <path
                d="M36.6663 22.916H32.083V27.4993H36.6663V22.916ZM36.6663 32.0827H32.083V36.666H36.6663V32.0827ZM18.333 22.916H13.7497V27.4993H18.333V22.916ZM27.4997 22.916H22.9163V27.4993H27.4997V22.916ZM45.833 9.16602H9.16634C6.64551 9.16602 4.58301 11.2285 4.58301 13.7493V41.2493C4.58301 43.7702 6.64551 45.8327 9.16634 45.8327H45.833C48.3538 45.8327 50.4163 43.7702 50.4163 41.2493V13.7493C50.4163 11.2285 48.3538 9.16602 45.833 9.16602ZM45.833 41.2493H9.16634V13.7493H45.833V41.2493Z"
                fill="white"
              />
            </svg>
          }
          textOne={props.textOne}
          svgTwo={
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
              <path
                d="M15.492 11.091L11.367 6.98893L8.13574 10.2202L12.2378 14.3223L15.492 11.091ZM9.16699 24.0618H2.29199V28.6452H9.16699V24.0618ZM29.792 1.25977H25.2087V8.02018H29.792V1.25977ZM46.8649 10.2202L43.6337 6.98893L39.5316 11.091L42.7628 14.3223L46.8649 10.2202ZM39.5087 41.616L43.6107 45.741L46.842 42.5098L42.717 38.4077L39.5087 41.616ZM45.8337 24.0618V28.6452H52.7087V24.0618H45.8337ZM27.5003 12.6035C19.9149 12.6035 13.7503 18.7681 13.7503 26.3535C13.7503 33.9389 19.9149 40.1035 27.5003 40.1035C35.0857 40.1035 41.2503 33.9389 41.2503 26.3535C41.2503 18.7681 35.0857 12.6035 27.5003 12.6035ZM25.2087 51.4473H29.792V44.6868H25.2087V51.4473ZM8.13574 42.4869L11.367 45.7181L15.4691 41.5931L12.2378 38.3618L8.13574 42.4869Z"
                fill="white"
              />
            </svg>
          }
          textTwo={props.textTwo}
          svgThree={
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
              <path
                d="M43.5866 22.9167V43.5417H11.4574V11.4583H32.0824V6.875H11.5033C8.98242 6.875 6.91992 8.9375 6.91992 11.4583V43.5417C6.91992 46.0625 8.98242 48.125 11.5033 48.125H43.5866C46.1074 48.125 48.1699 46.0625 48.1699 43.5417V22.9167H43.5866ZM38.9574 22.9167L41.1116 18.1958L45.8324 16.0417L41.1116 13.8875L38.9574 9.16667L36.8033 13.8875L32.0824 16.0417L36.8033 18.1958L38.9574 22.9167ZM30.3637 24.6354L27.4991 18.3333L24.6345 24.6354L18.3324 27.5L24.6345 30.3646L27.4991 36.6667L30.3637 30.3646L36.6658 27.5L30.3637 24.6354Z"
                fill="white"
              />
            </svg>
          }
          textThree={props.textThree}
          image={
            <Image
              src="/falcon/oled-display.jpg"
              alt={props.columnTitle}
              layout="fill"
              objectFit="cover"
            />
          }
        />
      </div>
    </>
  )
}