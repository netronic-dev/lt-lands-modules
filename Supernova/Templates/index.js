import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { useInView } from "react-hook-inview"
import style from "../style.module.scss"

export default function SupernovaTemplates(props) {

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  })

  return (
    <section className={style.templates}>
      <div className="background">
        <Image src="/supernova/bomb-set.jpg" layout="fill" priority={true} />
      </div>
      <div className={style.bottom_white}>
      </div>
      <div className={style.text_block}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.title}>
            {props.title}
          </h2>
          <p className={style.text}>
            {props.text}
          </p>
        </Fade>
      </div>
      <div className={style.grid} ref={ref} key={isVisible ? 1 : 0}>
        <Image
          src="/supernova/scenarios-en-1.png"
          layout="responsive"
          className="zoom-animation"
          width={522}
          height={756}
          priority={true}
          quality={90}
        />
        <Image
          src="/supernova/scenarios-en-3.png"
          layout="responsive"
          className="zoom-animation animated-second"
          width={522}
          height={756}
          priority={true}
          quality={90}
        />
        <Image
          src="/supernova/scenarios-en-2.png"
          layout="responsive"
          className="zoom-animation animated-third"
          width={522}
          height={756}
          priority={true}
          quality={90}
        />
      </div>
    </section >
  )
}