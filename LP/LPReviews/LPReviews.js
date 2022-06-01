import style from "./style.module.scss"
import SliderReviewsLP from "../../../Slider/SliderReviewsLP/SliderReviewsLP"
import { useState } from "react"
import { VideoPopUp } from "../../../Video/Video"
import { useInView } from "react-hook-inview"

export default function LPReviews(props) {

  const [titleRef, titleIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <section
      className={style.reviews}
      name={props.name}
      id={props.id}
      key={props.key}
      ref={props.ref}
    >
      <h1
        ref={titleRef}
        key={titleIsVisible ? "review-title-inview" : "review-title"}
        className={`${style.title} fade-up-animation`}>
        {props.title}
      </h1>
      <div>
        <SliderReviewsLP
          onVideoOpen={props.onVideoOpen}
          left
          data={props.data.slice(0, props.data.length / 2)}
        />
        <SliderReviewsLP
          onVideoOpen={props.onVideoOpen}
          data={props.data.slice(props.data.length / 2, props.data.length)}
          rtl
        />
      </div>
    </section>
  )
}
