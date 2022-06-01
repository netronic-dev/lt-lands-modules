import Image from "next/image"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { useInView } from "react-hook-inview"
import style from "../main.module.scss"

export default function MainSupport(props) {
  const [ref, cardsIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  const [longCardRef, longCardIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <>
      <section className={style.support}>
        <Fade cascade direction="up" triggerOnce>
          <h2 className={style.title}>
            {props.title}
          </h2>
        </Fade>
        <div className={style.support_grid} ref={ref}>
          <div
            className={`
            ${style.support_card} 
            ${style.picture_bottom} 
            zoom-animation
            `}
            key={cardsIsVisible ? 1 : 11}
          >
            <div className={style.card_content}>
              <h3 className={style.card_title}>
                {props.firstCardTitle}
              </h3>
              <p className={style.card_text}>
                {props.firstCardText}
              </p>
            </div>
            <Image
              src="/index/support-business.jpg"
              layout="responsive"
              height={270}
              width={575}
              priority={true}
            />
          </div>
          <div
            key={cardsIsVisible ? 2 : 22}
            className={`
            ${style.support_card} 
            ${style.picture_bottom} 
            ${style.support_card__2}
            zoom-animation
            `}>
            <div className={style.card_content}>
              <h3 className={style.card_title}>
                {props.secondCardTitle}
              </h3>
              <p className={style.card_text}>
                {props.secondCardText}
              </p>
            </div>
            <Image
              src="/index/support-materials.jpg"
              layout="responsive"
              height={270}
              width={575}
              priority={true}
            />
          </div>
        </div>
        <div
          ref={longCardRef}
          key={longCardIsVisible ? 3 : 33}
          className={`
           ${style.support_card}
           ${style.picture_right}
            zoom-animation
            `}>
          <div className={style.card_content}>
            <h3 className={style.card_title}>
              {props.thirdCardTitle}
            </h3>
            <p className={style.card_text}>
              {props.thirdCardText}
            </p>
          </div>
          <div className={style.support_card_image_right}>
            <Image
              src="/index/managers-en.png"
              layout="responsive"
              height={130}
              width={330}
              quality={90}
              priority={true}
            />
          </div>
        </div>
      </section>
    </>
  )
}