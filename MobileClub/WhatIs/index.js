import Image from "next/image";
import { useState } from "react";
import { useModals } from "../../../context/ModalsProvider";
import { VideoPopUp } from "../../../lt-modules/Video";
import style from "../style.module.scss";

export default function MCWhatIs(props) {
  const modals = useModals();
  return (
    <section className={`${style.what_is} fade-up-animation`}>
      <div className={style.text_block}>
        <h2 className={style.title}>{props.title}</h2>
        <p className={style.text}>{props.text}</p>
      </div>
      <div
        className={style.image}
        onClick={() => modals.VideoModalOpen(props.videoLink)}
      >
        <div className="desktop">
          <Image
            src="/mobileClub/video.jpg"
            layout="responsive"
            width={595}
            height={335}
            priority
            quality={90}
            alt="video"
          />
        </div>
        <div className="mobile">
          <Image
            src="/mobileClub/video-mob.jpg"
            layout="responsive"
            width={302}
            height={312}
            priority
            quality={90}
            alt="video mob"
          />
        </div>
        <div className={style.play_button}>{playBtn}</div>
      </div>
    </section>
  );
}
const playBtn = (
  <svg opacity="0.55" width="142" height="87" viewBox="0 0 142 87" fill="none">
    <g>
      <rect
        className={style.group}
        x="0.829102"
        y="0.842163"
        width="140.343"
        height="86.1368"
        rx="35"
        fill="#919191"
      />
      <path
        d="M91.0496 45.229L62.7988 21.9369V68.5211L91.0496 45.229Z"
        fill="#303030"
      />
    </g>
  </svg>
);
