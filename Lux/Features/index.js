import Image from "next/image";
import style from "../lux.module.scss";

export default function Features(props) {
  return (
    <section className={style.features}>
      <div className="background desktop">
        <Image
          src="/lux/bright-colors.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="0% 0%"
          quality={90}
          priority={true}
          alt="lux bright colors"
        />
      </div>
      <div className="background mobile">
        <Image
          src="/lux/bright-colors-mob.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="40% 0%"
          quality={90}
          priority={true}
          alt="lux bright colors"
        />
      </div>
      <div className={style.content}>
        <div className={style.bright_colors_content}>
          {props.title && (
            <h2 className={`${style.title} ${style.bright_title}`}>
              {props.title}
            </h2>
          )}
          <p className={style.text}>{props.text}</p>
        </div>
        <div className={style.impulse_recoil_content}>
          <h2 className={style.title}>{props.recoilTitle}</h2>
          <p className={style.text}>{props.recoilText}</p>
        </div>
      </div>
    </section>
  );
}
