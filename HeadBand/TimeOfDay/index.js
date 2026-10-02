import Image from "next/image";
import { useInView } from "react-hook-inview";
import style from "../headband.module.scss";

export default function TimeOfDay(props) {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div
      className={style.timeofday}
      ref={ref}
      key={isVisible ? "band-time-of-day-inview" : "band-time-of-day"}
    >
      <section className="fade-up-animation">
        <h2 className={style.h2}>{props.title}</h2>
        <p className="paragraph">{props.text}</p>
      </section>
      <div className={`${style.before_after} fade-animation`}>
        <div className={style.before_after__modes}>
          <img
            src="/bandNetronic/svg/day.svg"
            alt="Headband for outdoor laser tag photo 24"
          />
          <p className="paragraph">{props.defaultModeName}</p>
        </div>
        <div className={style.timeofday_image}>
          <Image
            src="/bandNetronic/band.png"
            layout="responsive"
            width={1100}
            height={405}
            priority={true}
            alt="Headband for outdoor laser tag photo 25"
          />
        </div>
        <div className={style.before_after__modes}>
          <img
            src="/bandNetronic/svg/night.svg"
            alt="Headband for outdoor laser tag photo 26"
          />
          <p className="paragraph">{props.inversionName}</p>
        </div>
      </div>
      <div className={`${style.before_after_image_responsive}`}>
        <Image
          src="/bandNetronic/band_res.png"
          layout="responsive"
          width={775}
          height={355}
          priority={true}
          alt="Headband for outdoor laser tag photo 27"
        />
      </div>
    </div>
  );
}
