import style from "../headband.module.scss"
import Image from "next/image"
import { BreadCrumbs } from "../../../lt-modules/BreadCrumbs"
import { Button } from "../../../lt-modules/Buttons"
import { useInView } from "react-hook-inview"

export default function Main(props) {
  const [ref, refVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div className={style.section_general} ref={ref}>
      <div
        className={`${style.section_general__bg} fade-animation`}
        key={refVisible ? "bg" : "bg-inview"}
      >
        <Image
          src="/bandNetronic/band-bg.jpg"
          layout="fill"
          quality={90}
          priority={true}
        />
      </div>
      {props.breadcrumbData &&
        <BreadCrumbs
          color="anotherWhite"
          breadcrumbData={props.breadcrumbData}
        />}
      <section
        className={`${style.inside_general} fade-up-animation`}
        key={refVisible ? "text" : "text-inview"}
      >
        <h1>
          {props.title}
        </h1>
        <p className={style.text}>
          {props.text}
        </p>
        <div className={style.general__button}>
          <Button
            type="catalog"
            style="blueWhite"
            text={props.buttonText}
          />
        </div>
      </section>
      <div className={`${style.general__band} fade-animation`}
        key={refVisible ? "band" : "band-inview"}>
        <Image
          src="/bandNetronic/band.png"
          alt="band"
          layout="responsive"
          width={1100}
          height={405}
          quality={90}
          priority={true}
        />
      </div>
      <div className={style.general__button_new}>
        <Button
          type="catalog"
          style="blueWhite"
          text={props.buttonText}
        />
      </div>
    </div>
  )
}