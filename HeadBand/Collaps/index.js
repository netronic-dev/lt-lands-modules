import Image from "next/image";
import { useInView } from "react-hook-inview";
import style from "../headband.module.scss"

export default function HeadBandCollaps(props) {
  const [ref, isVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <>
      <div className={style.collaps_design_adaptive} ref={ref} key={isVisible ? "band-collaps" : "band-collaps-inview"}>
        <div className={`${style.adaptive__text} fade-up-animation`}>
          <h2 className={style.h2}>
            {props.title}
          </h2>
          <p className="paragraph">
            {props.text}
          </p>
        </div>
        <div className={`${style.adaptive__img} fade-animation`}>
          <Image
            src="/bandNetronic/collapsibledesign.jpg"
            layout="responsive"
            width={992}
            height={505}
            priority={true}
          />
        </div>
      </div>
      <div className={style.collaps_design}>
        <div className={`${style.collaps_design_bg} fade-animation`}>
          <Image src="/bandNetronic/collapsibledesign.jpg" layout="fill" objectFit="cover" />
        </div>
        <section className={`${style.collaps_design_content} fade-up-animation`}>
          <h2 className={`${style.collaps_design_title} ${style.h2}`}>
            {props.title}
          </h2>
          <p className={`${style.collaps_design_text} "paragraph"`}>
            {props.text}
          </p>
        </section>
      </div>
    </>
  )
}