import style from "./style.module.scss"
import Image from "next/image"
import { useInView } from "react-hook-inview"
import LPButton from "../Button/LPButton"

export default function LPEmotions(props) {
  return (
    <section
      className={style.emotions}
      name={props.name}
      id={props.id}
      key={props.key}
    >
      <h2 className={`${style.title} fade-up-animation`}>
        {props.title}
      </h2>
      <div>
        {props.data.map((item, index) => (
          <Cell
            index={index}
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
            image_responsive={item.image_responsive}
            iconsData={item.iconsData}
            color={item.color}
            light={item.light}
            videoLink={item.videoLink}
            objectPosition={item.objectPosition}
            buttonText={props.buttonText}
            videoButtonText={props.videoButtonText}
            onButtonClick={() => {
              props.onButtonClick(item.sectionName)
            }}
            onVideoButtonClick={() => {
              props.onVideoButtonClick(item.additional_scripts ? item.videoLink + item.additional_scripts : item.videoLink)
            }}
            inView={() => {
              props.inView(item.sectionName)
            }}
          />
        ))}
      </div>
    </section>
  )
}

function Cell(props) {

  const [ref, cardsIsVisible] = useInView(
    {
      unobserveOnEnter: true,
      onEnter: () => props.inView()
    }
  )

  return (
    <div
      className={style.cell}
      style={{ backgroundColor: "#" + props.color }}
      ref={ref}
      key={cardsIsVisible ? `emotions-cell-${props.index}-inview` : ""}
    >
      <div
        className={`
      ${props.light ? style.content_light : style.content_dark}
      ${style.content}
      `}>
        <div className={style.top}>
          <h3 className={`${style.cell__title} fade-up-animation`}>
            {props.title}
          </h3>
          <p className={`${style.cell__text} fade-up-animation`}>
            {props.text}
          </p>
          <div className={style.image_responsive}>
            {props.image ?
              <Image
                src={props.image_responsive}
                layout="fill"
                objectFit="cover"
                objectPosition={props.objectPosition}
                quality={90}
              /> : null}
          </div>
          <div className={style.icons_grid}>
            {props.iconsData ? props.iconsData.map((item, index) => (
              <div
                className={`${style.icons_cell} fade-up-animation`}
                key={index}
                style={{ animationDelay: (index * 100) + "ms" }}
              >
                <div className={style.icons_cell__img_out}>
                  <img
                    className={style.icons_cell__img}
                    src={item.icon}
                  />
                </div>
                <p
                  className={style.icons_cell__text}>
                  {item.text}
                </p>
              </div>
            )) : null}
          </div>
        </div>
        <div className={style.buttons}>
          <div className={`${style.button_1} fade-up-animation`}>
            <LPButton
              hover={props.light ? "dark_blue" : "dark_blue"}
              bgcolor="#0090FF"
              style={style.button}
              onClick={props.onButtonClick}
              full_width
            >
              {props.buttonText}
            </LPButton>
          </div>
          <div className={`${style.button_2} fade-up-animation animated-second`}>
            <LPButton
              hover="grey"
              bgcolor={props.light ? "#000000" : "#ffffff"}
              style={style.button}
              theme={props.light ? "normal" : "light"}
              onClick={props.onVideoButtonClick}
              video
              full_width
            >
              {props.videoButtonText}
            </LPButton>
          </div>
        </div>
      </div>
      {props.image ?
        <div className={style.cell__image}>
          <Image
            src={props.image}
            layout="fill"
            objectFit="cover"
            objectPosition={props.objectPosition}
            quality={90}
            priority
          />
        </div>
        : null}
    </div>
  )
}