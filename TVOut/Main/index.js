import style from "../tvout.module.scss"
import Image from "next/image"
import { BreadCrumbs } from "../../../BreadCrumbs/BreadCrumbs"
import { NetronicGalaxyLogos } from "../../NetronicGalaxyLogos/NetronicGalaxyLogos"
import { Fade } from "react-awesome-reveal"

export default function TVMain(props) {
  return (
    <div className={style.section_general_tvout}>
      <div className={style.section_general_tvout_bg}>
        <Fade triggerOnce>
          <Image
            layout="fill"
            src="/tvOut/tvoutbg.jpg"
            objectFit="contain"
            objectPosition="50% 15%"
            priority={true}
          />
        </Fade>
      </div>
      <Fade direction="down" triggerOnce>
        <BreadCrumbs
          color="white"
          breadcrumbData={props.breadcrumbData}
        />
      </Fade>
      <div className={style.inside_general}>
        <Fade direction="up" triggerOnce>
          <h1 className={style.title}>
            {props.title}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce>
          <p className={`${style.text} paragraph`}>
            {props.text}
          </p>
        </Fade>
        <NetronicGalaxyLogos />
      </div>
    </div >
  )
}
