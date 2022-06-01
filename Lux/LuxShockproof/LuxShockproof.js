import Image from "next/image"
import style from "../lux.module.scss"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function LuxShockproof(props) {
  return (
    <section className={style.shockproof}
    >
      <div className={style.content}>
        <h2 className={style.shockproof__title}>
          {props.title}
        </h2>
        <p className={style.shockproof__text}>
          {props.text}
        </p>
      </div>
      <div id="shockproof" className={`${style.shockproof_bg}`}>
        <Image
          src="/lux/shockproof-bg.jpg"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <Parallax
          pages={1.4}
          scrolling
          vertical
          className={style.shockproof_bg_parallax}
        >
          <ParallaxLayer
            offset={0.9}
            speed={1.1}
            className={style.layer_1}
          >
            <Image
              src="/lux/shockproof-hand.png"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.5}
            speed={0.3}
            className={style.layer_2}
          >
            <Image
              src="/lux/shockproof-rocks-2.png"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.6}
            speed={0.1}
            className={style.layer_3}
          >
            <Image
              src="/lux/shockproof-rocks.png"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </ParallaxLayer>
        </Parallax>
      </div >
    </section >
  )
}
