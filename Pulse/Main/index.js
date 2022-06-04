import style from "../galaxypulse.module.scss"
import Image from "next/image"
import { ColumnsSvgText } from "../../../lt-lands-modules/ColumnsSvgText"
import { Button, VideoButton } from "../../../lt-modules/Buttons"
import { BreadCrumbs } from "../../../lt-modules/BreadCrumbs"
import { useInView } from "react-hook-inview"

export default function PulseMain(props) {
  const [imageRef, imageIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  const [titleRef, titleIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div className={style.section_general}>
      <div className={style.bgLogo}></div>
      <div className={style.breadCrumbs}>
        <BreadCrumbs
          catalog={true}
          color="grey"
          breadcrumbData={props.breadcrumbData}
        />
      </div>
      <section
        className={style.inside_general}
        ref={imageRef}
        key={imageIsVisible ? "main-img-inview" : "main-img"}
      >
        <div className={`${style.vest_img} fade-up-animation`}>
          <Image objectFit="cover" src="/GalaxyPulse/vestngun.png" layout="responsive" width={1015} height={1205} quality={90} />
        </div>
        <div
          className="fade-up-animation"
          ref={titleRef}
          key={titleIsVisible ? "main-title-inview" : "main-title"}
        >
          <h1>
            {props.title}
          </h1>
          <div className={style.buttons}>
            <div className={style.price_button}>
              <Button
                type="catalog"
                style="pulse"
                text={props.buttonText}
              />
            </div>
            <div className={style.video_button}>
              <VideoButton
                text={props.videoButtonText}
                style="dark"
                link={props.videoLink}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={style.columnsvgGP}>
        <ColumnsSvgText
          style="black"
          svgOne={
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none">
              <path
                d="M30.5 3.11328L8 13.1133V28.1133C8 41.9883 17.6 54.9633 30.5 58.1133C43.4 54.9633 53 41.9883 53 28.1133V13.1133L30.5 3.11328ZM25.5 43.1133L15.5 33.1133L19.025 29.5883L25.5 36.0383L41.975 19.5633L45.5 23.1133L25.5 43.1133Z"
                fill="white"
              />
            </svg>
          }
          titleOne={props.columnCellTitle}
          textOne={props.columnCellText}
          svgTwo={
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none">
              <path
                d="M48 48.1133H53V53.1133H48V48.1133ZM48 43.1133H53V38.1133H48V43.1133ZM8 33.1133H13V28.1133H8V33.1133ZM8 43.1133H13V38.1133H8V43.1133ZM8 23.1133H13V18.1133H8V23.1133ZM8 13.1133H13V8.11328H8V13.1133ZM18 13.1133H23V8.11328H18V13.1133ZM38 53.1133H43V48.1133H38V53.1133ZM28 53.1133H33V48.1133H28V53.1133ZM38 53.1133H43V48.1133H38V53.1133ZM18 53.1133H23V48.1133H18V53.1133ZM8 53.1133H13V48.1133H8V53.1133ZM53 20.6133C53 13.7133 47.4 8.11328 40.5 8.11328H28V13.1133H40.5C44.625 13.1133 48 16.4883 48 20.6133V33.1133H53V20.6133Z"
                fill="white"
              />
            </svg>
          }
          titleTwo={props.columnCellTitleTwo}
          textTwo={props.columnCellTextTwo}
          svgThree={
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  d="M23.3 13.1133L5.35 30.0883C3.85 31.4883 3 33.4633 3 35.5383V50.6133C3 54.7633 6.35 58.1133 10.5 58.1133H26.125H30.5H44.875C46.6 58.1133 48 56.7133 48 54.9883C48 53.2633 46.6 51.8633 44.875 51.8633H30.5V49.3633H49.875C51.6 49.3633 53 47.9633 53 46.2383C53 44.5133 51.6 43.1133 49.875 43.1133H30.5V40.6133H52.375C54.1 40.6133 55.5 39.2133 55.5 37.4883C55.5 35.7633 54.1 34.3633 52.375 34.3633H30.5V31.8633H47.375C49.1 31.8633 50.5 30.4633 50.5 28.7383C50.5 27.0133 49.1 25.6133 47.375 25.6133H22.65C24.25 22.8383 26.35 19.1633 26.375 19.0883C26.6 18.6883 26.725 18.2633 26.725 17.7633C26.725 17.1133 26.5 16.5133 26.075 16.0133C26.05 15.9133 23.3 13.1133 23.3 13.1133Z"
                  fill="white"
                />
                <path
                  d="M26.5724 9.97871L34.2863 2.26481L42.0002 9.97871L39.686 12.2929L36.0065 8.61335L35.8445 19.2199L32.7204 19.2122L32.6278 8.55164L28.8866 12.2929L26.5724 9.97871Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(0.5 0.613281)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
          titleThree={props.columnCellTitleThree}
          textThree={props.columnCellTextThree}
          svgFour={
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none">
              <path
                d="M42.5036 41.4739C44.3592 41.4739 45.8636 39.9696 45.8636 38.1139C45.8636 36.2582 44.3592 34.7539 42.5036 34.7539C40.6479 34.7539 39.1436 36.2582 39.1436 38.1139C39.1436 39.9696 40.6479 41.4739 42.5036 41.4739Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.4983 44.1133C40.3083 44.1133 35.9283 45.1933 35.7783 47.3533C37.2783 49.4833 39.7383 50.8633 42.4983 50.8633C45.2583 50.8633 47.7183 49.4833 49.2183 47.3533C49.0683 45.1933 44.6883 44.1133 42.4983 44.1133Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.5 24.8833V10.4233L23 0.613281L0.5 10.4233V25.1533C0.5 38.7733 10.1 51.5233 23 54.6133C24.65 54.2233 26.24 53.6533 27.8 52.9633C31.04 57.5833 36.41 60.6133 42.5 60.6133C52.43 60.6133 60.5 52.5433 60.5 42.6133C60.5 33.7033 54.02 26.3233 45.5 24.8833ZM24.5 42.6133C24.5 44.2933 24.74 45.9433 25.19 47.4733C24.47 47.8033 23.75 48.1333 23 48.3733C13.49 45.3733 6.5 35.6533 6.5 25.1533V14.3533L23 7.15328L39.5 14.3533V24.8833C30.98 26.3233 24.5 33.7033 24.5 42.6133ZM42.5 54.6133C35.87 54.6133 30.5 49.2433 30.5 42.6133C30.5 35.9833 35.87 30.6133 42.5 30.6133C49.13 30.6133 54.5 35.9833 54.5 42.6133C54.5 49.2433 49.13 54.6133 42.5 54.6133Z"
                fill="white"
              />
            </svg>
          }
          titleFour={props.columnCellTitleFour}
          textFour={props.columnCellTextFour}
        />
      </div>
    </div>
  )
}