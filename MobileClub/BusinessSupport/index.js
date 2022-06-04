import Image from "next/image"
import { useInView } from "react-hook-inview"
import { BUTTON } from "../../../lt-modules/Buttons"
import style from "../style.module.scss"

export default function MCBusinessSupport(props) {

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true
  })

  const [cellRef, isCellVisible] = useInView({
    unobserveOnEnter: true
  })

  return (
    <section
      className={style.bis_sup} >
      <h2
        className={`${style.title} fade-up-animation`}
        key={isVisible ? "bis_sup_title" : 0}
        ref={ref}
      >
        {props.title}
      </h2>
      <div
        className={style.grid}>
        <div
          className={`${style.cell} ${style.first} zoom-animation`}

          key={isVisible ? "bis_sup_1" : null}
        >
          <img
            className={style.cell__icon}
            src={props.cell4Image}
          />
          <h3
            className={style.cell__title}>{props.cell1Title}</h3>
          <p
            className={style.cell__text}>{props.cell1Text}</p>
        </div>
        <div
          className={`${style.cell} ${style.second} zoom-animation animated-second`}
          key={isVisible ? "bis_sup_2" : null}
        >
          <img
            className={style.cell__icon}
            src={props.cell3Image}
          />
          <h3
            className={style.cell__title}>{props.cell2Title}</h3>
          <p
            className={style.cell__text}>{props.cell2Text}</p>
        </div>
        <div
          className={`${style.cell} ${style.third} zoom-animation animated-third`}
          key={isVisible ? "bis_sup_3" : null}
        >
          <img
            className={style.cell__icon}
            src={props.cell1Image}
          />
          <h3
            className={style.cell__title}>
            {props.cell3Title}
          </h3>
          <p
            className={style.cell__text}>
            {props.cell3Text}
          </p>
        </div>
        <div
          className={`${style.cell} ${style.fourth} zoom-animation animated-fourth`}
          key={isVisible ? "bis_sup_4" : null}>
          <img
            className={style.cell__icon}
            src={props.cell2Image}
          />
          <h3
            className={style.cell__title}>{props.cell4Title}</h3>
          <p
            className={style.cell__text}>{props.cell4Text}</p>
        </div>
        <div
          className={`${style.long_cell} ${style.long} zoom-animation animated-fivth`}
          key={isVisible ? "bis_sup_4" : null}
        >
          <div
            className={style.long_cell__content}>
            <p
              className={style.long_cell__text}>
              {quotLeft}
              {props.cell5Text}
              {quotRight}
            </p>
            <h3
              className={style.long_cell__title}>{props.cell5Title}</h3>
          </div>
          <div
            className={style.long_cell__image}>
            <Image
              src={props.en ? "/mobileClub/kyle.png" : "/mobileClub/urum.png"}
              layout="responsive"
              width={455}
              height={335}
              priority

            />
          </div>
        </div>
      </div>
      <div
        className={`${style.cta} zoom-animation`} ref={cellRef}
        key={isCellVisible ? "cta" : null}>
        <div
          className={style.cta__text_block}>
          <h3
            className={style.cta__title}>
            {props.cell6Title}
          </h3>
          <p
            className={style.cta__text}>
            {props.cell6Text}
          </p>
          <BUTTON
            text={props.buttonText}
            style="bigBlack"
            type="nameEmail"
            en={props.en}
            id={props.en ? "mobLT-popup-name-email-en" : "mobLT-popup-name-email"
            }
            title={props.formTitle}
            subTitle={props.formSubTitle}
            buttonText={props.formButtonText}
            emailFormID="MOBLT-PU-NE-"
            nameFormID="MOBLT-PU-NE-"
          />
        </div>
        <div
          className={`${style.cta__image}`}>
          <Image
            quality={90}
            src="/mobileClub/form.png"
            layout="responsive"
            width={490}
            height={325}
            priority
          />

        </div>
        <div
          className={`${style.cta__image_res}`}>
          <Image
            quality={90}
            src="/mobileClub/form-mob.png"
            layout="responsive"
            width={297}
            height={190}
            priority
          />
        </div>
      </div>
    </section>
  )
}

const quotLeft = (
  <svg width="16" height="13" viewBox="0 0 16 13" fill="none"
    className={style.quot_left}>
    <path d="M4.64062 0.203125L7.82812 2.05469C6.48438 4.17969 5.78906 6.33594 5.74219 8.52344V12.4375H0.375V8.92188C0.375 7.45312 0.78125 5.89063 1.59375 4.23438C2.42188 2.5625 3.4375 1.21875 4.64062 0.203125ZM12.6797 0.203125L15.8672 2.05469C14.5234 4.17969 13.8281 6.33594 13.7812 8.52344V12.4375H8.41406V8.92188C8.41406 7.45312 8.82031 5.89063 9.63281 4.23438C10.4609 2.5625 11.4766 1.21875 12.6797 0.203125Z" fill="black" />
  </svg>

)
const quotRight = (
  <svg width="16" height="13" viewBox="0 0 16 13" fill="none"
    className={style.quot_right}>
    <path d="M11.3594 12.7969L8.17188 10.9453C9.51563 8.82031 10.2109 6.66406 10.2578 4.47656L10.2578 0.562498L15.625 0.562499L15.625 4.07812C15.625 5.54687 15.2188 7.10937 14.4063 8.76562C13.5781 10.4375 12.5625 11.7812 11.3594 12.7969ZM3.32031 12.7969L0.132813 10.9453C1.47656 8.82031 2.17188 6.66406 2.21875 4.47656L2.21875 0.562497L7.58594 0.562498L7.58594 4.07812C7.58594 5.54687 7.17969 7.10937 6.36719 8.76562C5.53906 10.4375 4.52344 11.7812 3.32031 12.7969Z" fill="black" />
  </svg >

)