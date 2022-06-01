import { useInView } from "react-hook-inview"
import VideoBlock from "../../../VideoBlock/VideoBlock"
import style from "../headband.module.scss"

export default function HeadBandVideo(props) {
  const [ref, refVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div
      className={`${style.video} fade-up-animation`}
      ref={ref}
      key={refVisible ? "video" : "video-inview"}
    >
      <VideoBlock theme="short" videoLink={props.videoLink} />
    </div>
  )
}