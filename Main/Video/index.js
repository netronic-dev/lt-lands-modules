import { Fade, Slide, Zoom } from "react-awesome-reveal"
import VideoBlock from "../../../lt-modules/VideoBlock"
import style from "../main.module.scss"

export default function MainVideo(props) {
  return (
    <>
      <section className={style.video_block}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.video_title}>{props.title}</h2>
        </Fade>
        <Fade direction="up" triggerOnce>
          <h2 className={`${style.video_text} ${style.video_text_top}`}>
            {props.topText}
          </h2>
        </Fade>
        <Slide direction="up" triggerOnce>
          <div className={style.video}>
            <VideoBlock theme="short" videoLink={props.videoLink} />
          </div>
        </Slide>
        <Fade direction="up" triggerOnce>
          <h2 className={`${style.video_text} ${style.video_text_bottom}`}>
            {props.bottomText}
          </h2>
        </Fade>
      </section>
    </>
  );
}