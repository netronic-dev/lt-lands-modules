import Image from "next/image"
import style from "../lux.module.scss"

export default function LuxNetronicFeatures(props) {
  return (
    <section className={style.lux_netronic}>
      <div className={style.lux_netronic_head}>
        <Image
          src={props.en ? "/lux/netronic-en.jpg" : "/lux/netronic.jpg"}
          layout="responsive"
          width={940}
          height={500}
          quality={90}
          priority={true}
        />
      </div>
      <div className={`${style.lux_netronic_body} desktop`}>
        <Image
          src={props.en ? "/lux/netronic-features-en.jpg" : "/lux/netronic-features.jpg"}
          layout="responsive"
          width={1475}
          height={830}
          quality={90}
          priority={true}
        />
      </div>
      <div className={`${style.lux_netronic_body} mobile`}>
        <Image
          src={props.en ? "/lux/netronic-features-mob-en.jpg" : "/lux/netronic-features-mob.jpg"}
          layout="responsive"
          width={375}
          height={732}
          quality={90}
          priority={true}
        />
      </div>
    </section>
  )
}
