import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import style from "../style.module.scss"

export default function SupernovaMain() {
  return (
    <div className={style.main_out}>
      <section className={style.main}>
        <Fade triggerOnce>
          <div className="background desktop">
            <Image
              src="/supernova/main.jpg"
              layout="fill"
              objectFit="cover"
              priority={true}
              quality={90}
            />
          </div>
          <div className="background mobile">
            <Image
              src="/supernova/main-mob.jpg"
              layout="fill"
              objectFit="cover"
              priority={true}
              quality={90}
            />
          </div>
        </Fade>
        <div className={style.main__content}>
          <Fade delay={900} triggerOnce>
            <img
              className={style.logo__vector}
              src="/supernova/vector/supernova-star-logo.svg"
              alt="supernova-logo"
            />
          </Fade>
          <Fade direction="up" delay={400} triggerOnce>
            <div className={style.main__text}>
              <h1 className={style.logo__title}>
                SUPERNOVA
            </h1>
              <p className={style.logo__subtitle}>
                LASER TAG BOMB
            </p>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  )
}