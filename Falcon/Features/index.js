import style from "../falcon.module.scss"
import Image from "next/image"
import { ColumnsSvgText } from "../../ColumnsSvgText/ColumnsSvgText"
import { Fade } from "react-awesome-reveal"

export default function FalconFeatures(props) {
  return (
    <>
      <div className={style.falconModifications}>
        <Fade triggerOnce>
          <Image
            src="/falcon/two-falcons.jpg"
            alt="two falcons"
            layout="responsive"
            width={1920}
            height={615}
            quality={90}
          />
        </Fade>
        <div className={style.columnsFalcon}>
          <ColumnsSvgText
            style="black"
            svgOne={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M41.25 30C44.7 30 47.475 27.2 47.475 23.75C47.475 20.3 44.7 17.5 41.25 17.5C37.8 17.5 35 20.3 35 23.75C35 27.2 37.8 30 41.25 30ZM22.5 27.5C26.65 27.5 29.975 24.15 29.975 20C29.975 15.85 26.65 12.5 22.5 12.5C18.35 12.5 15 15.85 15 20C15 24.15 18.35 27.5 22.5 27.5ZM41.25 35C36.675 35 27.5 37.3 27.5 41.875V47.5H55V41.875C55 37.3 45.825 35 41.25 35ZM22.5 32.5C16.675 32.5 5 35.425 5 41.25V47.5H22.5V41.875C22.5 39.75 23.325 36.025 28.425 33.2C26.25 32.75 24.15 32.5 22.5 32.5Z"
                  fill="white"
                />
              </svg>
            }
            titleOne={props.titleOne}
            textOne={props.textOne}
            svgTwo={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M30 2.5L7.5 12.5V27.5C7.5 41.375 17.1 54.35 30 57.5C42.9 54.35 52.5 41.375 52.5 27.5V12.5L30 2.5ZM25 42.5L15 32.5L18.525 28.975L25 35.425L41.475 18.95L45 22.5L25 42.5Z"
                  fill="white"
                />
              </svg>
            }
            titleTwo={props.titleTwo}
            textTwo={props.textTwo}
            svgThree={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M30 27.5C27.25 27.5 25 29.75 25 32.5C25 35.25 27.25 37.5 30 37.5C32.75 37.5 35 35.25 35 32.5C35 29.75 32.75 27.5 30 27.5ZM45 32.5C45 24.225 38.275 17.5 30 17.5C21.725 17.5 15 24.225 15 32.5C15 38.05 18.025 42.875 22.5 45.475L25 41.125C22.025 39.375 20 36.2 20 32.5C20 26.975 24.475 22.5 30 22.5C35.525 22.5 40 26.975 40 32.5C40 36.2 37.975 39.375 35 41.125L37.5 45.475C41.975 42.875 45 38.05 45 32.5ZM30 7.5C16.2 7.5 5 18.7 5 32.5C5 41.75 10.025 49.8 17.475 54.125L19.975 49.8C14.025 46.325 10 39.9 10 32.5C10 21.45 18.95 12.5 30 12.5C41.05 12.5 50 21.45 50 32.5C50 39.9 45.975 46.325 40 49.8L42.5 54.125C49.975 49.8 55 41.75 55 32.5C55 18.7 43.8 7.5 30 7.5Z"
                  fill="white"
                />
              </svg>
            }
            titleThree={props.titleThree}
            textThree={props.textThree}
            svgFour={
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                  d="M50 35V5C50 2.25 47.75 0 45 0H15C12.25 0 10 2.25 10 5V35C10 37.75 12.25 40 15 40H45C47.75 40 50 37.75 50 35ZM22.5 25L27.575 31.775L35 22.5L45 35H15L22.5 25ZM0 10V45C0 47.75 2.25 50 5 50H40V45H5V10H0Z"
                  fill="white"
                />
              </svg>
            }
            titleFour={props.titleFour}
            textFour={props.textFour}
          />
        </div>
      </div>
    </>
  )
}