import Image from "next/image";
import { useInView } from "react-hook-inview";
import { ColumnsSvgText } from "../../ColumnsSvgText";
import style from "../headband.module.scss"

export default function Control(props) {
  const [title, titleIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  const [controlImage, controlImageIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div className={style.control_block_outside}>
      <div className={style.control_block}>
        <section ref={title} className={`${style.control_block_section} fade-up-animation`} key={titleIsVisible ? "band-ct-inview" : "band-ct"}>
          <h2 className={style.h2} >
            {props.title}
          </h2>
          <p className="paragraph">
            {props.text}
          </p>
        </section>
        <div ref={controlImage} key={controlImageIsVisible ? "band-ct-image-inview" : "band-ct-image"} className={`${style.control_block__img} fade-animation`}>
          <Image
            src="/bandNetronic/bandblue.jpg"
            layout="responsive"
            width={1170}
            height={385}
            quality={90}
            priority={true}
          />
        </div>
        <div className={style.control_block_columnsvg}>
          <ColumnsSvgText
            style="white"
            svgOne={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M20 47.5H7.5C6.83696 47.5 6.20107 47.2366 5.73223 46.7678C5.26339 46.2989 5 45.663 5 45V15C5 14.337 5.26339 13.7011 5.73223 13.2322C6.20107 12.7634 6.83696 12.5 7.5 12.5H24.0625L21.145 17.5H10V42.5H20V47.5ZM30.9375 47.5L33.855 42.5H45V17.5H35V12.5H47.5C48.163 12.5 48.7989 12.7634 49.2678 13.2322C49.7366 13.7011 50 14.337 50 15V45C50 45.663 49.7366 46.2989 49.2678 46.7678C48.7989 47.2366 48.163 47.5 47.5 47.5H30.9375ZM52.5 22.5H57.5V37.5H52.5V22.5ZM30 27.5H37.5L25 47.5V32.5H17.5L30 12.5V27.5Z"
                  fill="black"
                />
              </svg>
            }
            titleOne={props.titleOne}
            textOne={props.textOne}
            svgTwo={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M10 17.5V42.5H45V17.5H10ZM7.5 12.5H47.5C48.163 12.5 48.7989 12.7634 49.2678 13.2322C49.7366 13.7011 50 14.337 50 15V45C50 45.663 49.7366 46.2989 49.2678 46.7678C48.7989 47.2366 48.163 47.5 47.5 47.5H7.5C6.83696 47.5 6.20107 47.2366 5.73223 46.7678C5.26339 46.2989 5 45.663 5 45V15C5 14.337 5.26339 13.7011 5.73223 13.2322C6.20107 12.7634 6.83696 12.5 7.5 12.5ZM12.5 20H22.5V40H12.5V20ZM52.5 22.5H57.5V37.5H52.5V22.5Z"
                  fill="black"
                />
              </svg>
            }
            titleTwo={props.titleTwo}
            textTwo={props.textTwo}
            svgThree={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M47.675 12.325L44.15 15.85C47.75 19.475 50 24.475 50 30C50 41.05 41.05 50 30 50C18.95 50 10 41.05 10 30C10 19.8 17.625 11.4 27.5 10.175V15.225C20.4 16.425 15 22.575 15 30C15 38.275 21.725 45 30 45C38.275 45 45 38.275 45 30C45 25.85 43.325 22.1 40.6 19.4L37.075 22.925C38.875 24.75 40 27.25 40 30C40 35.525 35.525 40 30 40C24.475 40 20 35.525 20 30C20 25.35 23.2 21.475 27.5 20.35V25.7C26 26.575 25 28.15 25 30C25 32.75 27.25 35 30 35C32.75 35 35 32.75 35 30C35 28.15 34 26.55 32.5 25.7V5H30C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 23.1 52.2 16.85 47.675 12.325Z"
                  fill="black"
                />
              </svg>
            }
            titleThree={props.titleThree}
            textThree={props.textThree}
            svgFour={
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M32.5 7.5H27.5V32.5H32.5V7.5ZM44.575 12.925L41.025 16.475C44.975 19.65 47.5 24.525 47.5 30C47.5 39.675 39.675 47.5 30 47.5C20.325 47.5 12.5 39.675 12.5 30C12.5 24.525 15.025 19.65 18.95 16.45L15.425 12.925C10.575 17.05 7.5 23.15 7.5 30C7.5 42.425 17.575 52.5 30 52.5C42.425 52.5 52.5 42.425 52.5 30C52.5 23.15 49.425 17.05 44.575 12.925Z"
                  fill="black"
                />
              </svg>
            }
            titleFour={props.titleFour}
            textFour={props.textFour}
          />
        </div>
      </div>
    </div>
  )
}