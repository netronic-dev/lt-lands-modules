import Image from "next/image"
import { useState } from "react"
import { useInView } from "react-hook-inview"
import style from "../lux.module.scss"

export default function LuxTagers(props) {

  const firstPicActive = "/lux/lux-tagers-4.png"
  const secondPicActive = "/lux/lux-tagers-2.png"
  const thirdPicActive = "/lux/lux-tagers-1.png"
  const fourthPicActive = "/lux/lux-tagers-3.png"

  const firstPic = "/lux/lux-tagers-dark.png"
  const secondPic = "/lux/lux-tagers-2-dark.png"
  const thirdPic = "/lux/lux-tagers-1-dark.png"
  const fourthPic = "/lux/lux-tagers-dark.png"

  const [firstImgActive, changeFirstImg] = useState(false)
  const [secondImgActive, changeSecondImg] = useState(false)
  const [thirdImgActive, changeThirdImg] = useState(false)
  const [fourthImgActive, changeFourthImg] = useState(false)
  function lightOff() {
    changeFirstImg(false)
    changeSecondImg(false)
    changeThirdImg(false)
    changeFourthImg(false)
  }
  function lightning() {
    setTimeout(() => {
      changeFirstImg(true)
    }, 500);
    setTimeout(() => {
      changeFirstImg(false)
    }, 700);
    setTimeout(() => {
      changeSecondImg(true)
    }, 900);
    setTimeout(() => {
      changeSecondImg(false)
    }, 1100);
    setTimeout(() => {
      changeThirdImg(true)
    }, 1300);
    setTimeout(() => {
      changeThirdImg(false)
    }, 1500);
    setTimeout(() => {
      changeFourthImg(true)
    }, 1700);
    setTimeout(() => {
      changeFourthImg(false)
    }, 1900);
    setTimeout(() => {
      changeFirstImg(true)
      changeSecondImg(true)
      changeThirdImg(true)
      changeFourthImg(true)
    }, 2100);
    setTimeout(() => {
      changeFirstImg(false)
      changeSecondImg(false)
      changeThirdImg(false)
      changeFourthImg(false)
    }, 2300);
    setTimeout(() => {
      changeFirstImg(true)
      changeSecondImg(true)
      changeThirdImg(true)
      changeFourthImg(true)
    }, 2500);
  }

  const [ref, isVisible] = useInView({
    onEnter: () => { lightning() },
    unobserveOnEnter: true
  })

  return (
    <section className={style.tagers}>
      <div className={style.content}>
        <h2 className={style.title}>
          {props.title}
        </h2>
        <p className={style.text}>
          {props.text}
        </p>
      </div>
      <div className={style.images_grid}>
        <div className={style.cell}>
          <div className={style.image}>
            <Image
              src={firstPic}
              layout="fill" objectFit="contain"
              priority={true}
            />
          </div>
          <div
            className={style.active_image}
            style={firstImgActive ? { opacity: "1" } : { opacity: "0" }}
          >
            <Image
              src={firstPicActive}
              layout="fill" objectFit="contain"
              priority={true}
            />
          </div>
        </div>
        <div className={style.cell}>
          <div className={style.image}>
            <Image
              src={secondPic}
              layout="fill" objectFit="contain"
              priority={true}
            />
          </div>
          <div
            className={style.active_image}
            style={secondImgActive ? { opacity: "1" } : { opacity: "0" }}
          >
            <Image
              src={secondPicActive}
              layout="fill" objectFit="contain"
              priority={true}
            />
          </div>
        </div>
        <div className={style.cell}>
          <div className={style.image}>
            <Image
              src={thirdPic}
              layout="fill" objectFit="contain"
              priority={true}
            />
          </div>
          <div
            className={style.active_image}
            style={thirdImgActive ? { opacity: "1" } : { opacity: "0" }}
          >
            <Image
              src={thirdPicActive}
              layout="fill" objectFit="contain"
              priority={true}
            />
          </div>
        </div>
        <div className={style.cell} ref={ref}>
          <div className={style.image}>
            <Image
              src={fourthPic}
              layout="fill" objectFit="contain"
              priority={true}
            />
          </div>
          <div
            className={style.active_image}
            style={fourthImgActive ? { opacity: "1" } : { opacity: "0" }}
          >
            <Image
              src={fourthPicActive}
              layout="fill" objectFit="contain"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
