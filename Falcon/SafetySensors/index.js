import style from "../falcon.module.scss"
import Image from "next/image"
import { ColumnsSvgText } from "../../ColumnsSvgText/ColumnsSvgText"
import { Fade } from "react-awesome-reveal"

export default function FalconSafetySensors(props) {
  return (
    <>
      <div className={style.safety_sensors}>
        <section className={style.section}>
          <Fade direction="up" triggerOnce>
            <h2 className={style.title_white}>{props.title}</h2>
          </Fade>
        </section>
        <ColumnsSvgText
          style="black"
          svgOne={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path
                d="M47.5 47.5H52.5V52.5H47.5V47.5ZM47.5 42.5H52.5V37.5H47.5V42.5ZM7.5 32.5H12.5V27.5H7.5V32.5ZM7.5 42.5H12.5V37.5H7.5V42.5ZM7.5 22.5H12.5V17.5H7.5V22.5ZM7.5 12.5H12.5V7.5H7.5V12.5ZM17.5 12.5H22.5V7.5H17.5V12.5ZM37.5 52.5H42.5V47.5H37.5V52.5ZM27.5 52.5H32.5V47.5H27.5V52.5ZM37.5 52.5H42.5V47.5H37.5V52.5ZM17.5 52.5H22.5V47.5H17.5V52.5ZM7.5 52.5H12.5V47.5H7.5V52.5ZM52.5 20C52.5 13.1 46.9 7.5 40 7.5H27.5V12.5H40C44.125 12.5 47.5 15.875 47.5 20V32.5H52.5V20Z"
                fill="white"
              />
            </svg>
          }
          titleOne={props.titleOne}
          textOne={props.textOne}
          svgTwo={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path
                d="M30 2.5L7.5 12.5V27.5C7.5 41.375 17.1 54.35 30 57.5C42.9 54.35 52.5 41.375 52.5 27.5V12.5L30 2.5ZM27.5 17.5H32.5V22.5H27.5V17.5ZM27.5 27.5H32.5V42.5H27.5V27.5Z"
                fill="white"
              />
            </svg>
          }
          titleTwo={props.titleTwo}
          textTwo={props.textTwo}
          svgThree={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  d="M22.8 12.5L4.85 29.475C3.35 30.875 2.5 32.85 2.5 34.925V50C2.5 54.15 5.85 57.5 10 57.5H25.625H30H44.375C46.1 57.5 47.5 56.1 47.5 54.375C47.5 52.65 46.1 51.25 44.375 51.25H30V48.75H49.375C51.1 48.75 52.5 47.35 52.5 45.625C52.5 43.9 51.1 42.5 49.375 42.5H30V40H51.875C53.6 40 55 38.6 55 36.875C55 35.15 53.6 33.75 51.875 33.75H30V31.25H46.875C48.6 31.25 50 29.85 50 28.125C50 26.4 48.6 25 46.875 25H22.15C23.75 22.225 25.85 18.55 25.875 18.475C26.1 18.075 26.225 17.65 26.225 17.15C26.225 16.5 26 15.9 25.575 15.4C25.55 15.3 22.8 12.5 22.8 12.5Z"
                  fill="white"
                />
                <path
                  d="M26.0724 9.36542L33.7863 1.65153L41.5002 9.36542L39.186 11.6796L35.5065 8.00007L35.3445 18.6067L32.2204 18.599L32.1278 7.93835L28.3866 11.6796L26.0724 9.36542Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          titleThree={props.titleThree}
          textThree={props.textThree}
          svgFour={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path
                d="M17.5 27.5H2.5V32.5H17.5V27.5ZM22.925 19.4L17.625 14.1L14.1 17.625L19.4 22.925L22.925 19.4ZM32.5 2.5H27.5V17.5H32.5V2.5ZM45.9 17.625L42.375 14.1L37.075 19.4L40.6 22.925L45.9 17.625ZM42.5 27.5V32.5H57.5V27.5H42.5ZM30 22.5C25.85 22.5 22.5 25.85 22.5 30C22.5 34.15 25.85 37.5 30 37.5C34.15 37.5 37.5 34.15 37.5 30C37.5 25.85 34.15 22.5 30 22.5ZM37.075 40.6L42.375 45.9L45.9 42.375L40.6 37.075L37.075 40.6ZM14.1 42.375L17.625 45.9L22.925 40.6L19.4 37.075L14.1 42.375ZM27.5 57.5H32.5V42.5H27.5V57.5Z"
                fill="white"
              />
            </svg>
          }
          titleFour={props.titleFour}
          textFour={props.textFour}
        />
        <Fade triggerOnce>
          <div className={`${style.safety_sensors_image} desktop`}>
            <Image
              src="/falcon/falcon-rainbow.jpg"
              alt="falcon-rainbow"
              layout="responsive"
              width={1170}
              height={700}
            />
          </div>
          <div className={`${style.safety_sensors_image} mobile`}>
            <Image
              src="/falcon/falcon-rainbow-mob.jpg"
              alt="falcon-rainbow"
              layout="responsive"
              width={466}
              height={458}
            />
          </div>
        </Fade>
        <div className={style.defeat_sensors}>
          <section className={style.section}>
            <Fade direction="up" triggerOnce>
              <h2 className={style.title_white}>{props.sensorsTitle}</h2>
              <p className="paragraph">
                {props.sensorsText}
              </p>
            </Fade>
          </section>
          <Fade triggerOnce>
            <div className="desktop">
              <Image src="/falcon/falcon-270.jpg"
                alt="falcon-270"
                layout="responsive"
                width={1920}
                height={1225}
                quality={90}
              />
            </div>
            <div className="mobile">
              <Image
                src="/falcon/falcon-270-mob.jpg"
                alt="falcon-270"
                layout="responsive"
                width={466}
                height={469}
                quality={90}
              />
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}