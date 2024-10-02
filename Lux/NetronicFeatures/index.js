import Image from "next/image";
import style from "../lux.module.scss";

export default function NetronicFeatures(props) {
  return (
    <section className={style.lux_netronic}>
      <div className={style.lux_netronic_head}>
        <Image
          src="/lux/netronic-en.jpg"
          layout="responsive"
          width={940}
          height={500}
          quality={90}
          priority={true}
          alt="netronic-en"
        />
      </div>
      <div className={`${style.lux_netronic_body} desktop`}>
        <Image
          src="/lux/netronic-features-en.jpg"
          layout="responsive"
          width={1475}
          height={830}
          quality={90}
          priority={true}
          alt="netronic-features-en"
        />
      </div>
      <div className={`${style.lux_netronic_body} mobile`}>
        <Image
          src="/lux/netronic-features-mob-en.jpg"
          layout="responsive"
          width={375}
          height={732}
          quality={90}
          priority={true}
          alt="netronic-features-mob-en"
        />
      </div>
    </section>
  );
}
