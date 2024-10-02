import Image from "next/image";
import { useInView } from "react-hook-inview";
import style from "../headband.module.scss";

export default function Indication(props) {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div
      className={style.hit_indication}
      ref={ref}
      key={isVisible ? "band-indication" : "band-indication-inview"}
    >
      <div className={style.hit_indication__text}>
        <section className="fade-up-animation">
          <h2 className={style.h2}>{props.title}</h2>
          <p className="paragraph">{props.text}</p>
        </section>
      </div>
      <div className={`${style.hit_indication__image} desktop fade-animation`}>
        <Image
          src="/bandNetronic/girlngun.jpg"
          layout="responsive"
          width={1920}
          height={1190}
          priority={true}
          alt="girl with gun"
        />
      </div>
      <div className={`${style.hit_indication__image} mobile fade-animation`}>
        <Image
          src="/bandNetronic/girlngun-mob.jpg"
          layout="responsive"
          width={466}
          height={612}
          priority={true}
          alt="girl with gun mobile"
        />
      </div>
    </div>
  );
}
