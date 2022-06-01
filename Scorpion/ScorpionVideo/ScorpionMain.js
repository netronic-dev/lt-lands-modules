import style from "../scorpion.module.scss"
import VideoBlock from "../../../VideoBlock/VideoBlock";

export default function ScorpionVideo(props) {
  return (
    <div className={style.video}>
      <VideoBlock theme="short" videoLink={props.videoLink} />
    </div>
  )
}