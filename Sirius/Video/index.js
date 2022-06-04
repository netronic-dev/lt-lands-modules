import VideoBlock from "../../../lt-modules/VideoBlock"
import style from "../sirius.module.scss"

export default function SiriusVideo(props) {
  return (
    <>
      <section className={style.section}>
        <h2 className={style.title_half}>
          {props.title}
        </h2>
        <p className="paragraph">
          {props.text}
        </p>
      </section>
      <div className={style.video_block}>
        <VideoBlock theme="full" videoLink={props.videoLink} />
      </div>
    </>
  )
}
