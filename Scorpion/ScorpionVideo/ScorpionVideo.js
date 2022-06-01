import style from "../scorpion.module.scss"
import VideoBlock from "../../../VideoBlock/VideoBlock";
import { Fade } from "react-awesome-reveal";

export default function ScorpionVideo(props) {
  return (
    <div className={style.video}>
      <Fade direction="right" triggerOnce>
        <VideoBlock theme="short" videoLink={props.videoLink} />
      </Fade>
    </div>
  )
}