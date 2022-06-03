import style from "../galaxypulse.module.scss"
import Image from "next/image"

export default function PulseIndication(props) {
  return (
    <div className={style.light_indication}>
      <section className={style.cards_content}>
        <h2>
          {props.title}
        </h2>
        <p className="paragraph">
          {props.text}
        </p>
      </section>
      <div className={`${style.light_indication_image} desktop`}>
        <Image
          src="/GalaxyPulse/twopeoplessensors.jpg"
          layout="responsive"
          width={1920}
          height={975}
          quality={90}
        />
      </div>
      <div className={`mobile`}>
        <Image
          objectFit="cover"
          src="/GalaxyPulse/twopeoplessensors-mob.jpg"
          layout="responsive"
          quality={90}
          width={475}
          height={970}
        />
      </div>
    </div>
  )
}