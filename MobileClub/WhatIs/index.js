import Image from "next/image"
import { useState } from "react"
import { useInView } from "react-hook-inview"
import { VideoPopUp } from "../../../Video/Video"
import style from "../style.module.scss"

export default function MCWhatIs(props) {
  const [isVideoActive, changeVideoView] = useState(false)

  function onVideoViewChange() {
    changeVideoView(!isVideoActive)
    isVideoActive
      ? (document.body.className = "")
      : (document.body.className = "popUp");
  }

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true
  })

  return (
    <>
      {isVideoActive ?
        <VideoPopUp
          link={props.videoLink}
          onClick={onVideoViewChange}
        /> : null}
      <section
        className={`${style.what_is} fade-up-animation`}
        ref={ref}
        key={isVisible ? 2 : 3}
      >
        <div className={style.text_block}>
          <h2 className={style.title}>
            {props.title}
          </h2>
          <p className={style.text}>
            {props.text}
          </p>
        </div>
        <div className={style.image} onClick={onVideoViewChange}>
          <div className="desktop">
            <Image
              src={props.en ? "/mobileClub/video.jpg" : "/mobileClub/video-ru.jpg"}
              layout="responsive"
              width={595}
              height={335}
              priority
              quality={90}
            />
          </div>
          <div className="mobile">
            <Image
              src={props.en ? "/mobileClub/video-mob.jpg" : "/mobileClub/video-mob-ru.jpg"}
              layout="responsive"
              width={302}
              height={312}
              priority
              quality={90}
            />
          </div>
          <div className={style.play_button}>{playBtn}</div>
        </div>
      </section>
    </>
  )
}
const playBtn = (
  <svg opacity="0.55" width="142" height="87" viewBox="0 0 142 87" fill="none">
    <g>
      <rect className={style.group} x="0.829102" y="0.842163" width="140.343" height="86.1368" rx="35" fill="#919191" />
      <path d="M91.0496 45.229L62.7988 21.9369V68.5211L91.0496 45.229Z" fill="#303030" />
    </g>
  </svg>

)