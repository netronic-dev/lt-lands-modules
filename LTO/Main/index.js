import style from "../lto.module.scss"
import Image from "next/image"
import { BreadCrumbs } from "../../../BreadCrumbs/BreadCrumbs"
import { NetronicGalaxyLogos } from "../../NetronicGalaxyLogos"
import { useInView } from "react-hook-inview"

export default function LTOMain(props) {
  const [ref, cardsIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <div className={style.section_general} ref={ref} key={cardsIsVisible ? "lto-main-inview" : "lto-main"}>
      <BreadCrumbs color="grey" breadcrumbData={props.breadcrumbData} />
      <div className={`${style.bg_first} desktop fade-animation`}>
        <Image
          layout="fill"
          src="/lasertagOperator/lasertagOperator.png"
          quality={90}
          objectFit="contain"
          objectPosition="0% 0%"
        />
      </div>
      <div className={`${style.bg_first} mobile`}>
        <Image
          layout="fill"
          src="/lasertagOperator/lasertagOperator-mob.png"
          quality={90}
          objectFit="contain"
          objectPosition="0% 0%"
        />
      </div>
      <div className={style.inside_general}>
        <div className={`${style.general__phone} fade-up-animation`}>
          <Image
            layout="responsive"
            src={props.phoneImage ? props.phoneImage : "/lasertagOperator/generalPhone.png"}
            width={355}
            height={720}
            quality={90}
          />
        </div>
        <div className={`${style.general_content} fade-up-animation`}>
          <h1>
            {props.title}
          </h1>
          <p className="paragraph">
            {props.text}
          </p>
          <div className={style.logoButtons__logo}>
            <NetronicGalaxyLogos />
          </div>
        </div>
      </div>
    </div>
  )
}