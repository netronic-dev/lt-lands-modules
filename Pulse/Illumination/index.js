import style from "../galaxypulse.module.scss";
import Image from "next/image";
import { useInView } from "react-hook-inview";

export default function PulseIllumination(props) {
  const [ref, IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div
      className={style.dualIllumination}
      ref={ref}
      key={IsVisible ? "illumination-inview" : "illumination"}
    >
      <h2 className="fade-up-animation">{props.title}</h2>
      <div className={style.cards_illumination}>
        <div className={`${style.laserRay_text_mob} zoom-animation`}>
          <h3>{props.cardTitle}</h3>
          <p>{props.cardText}</p>
          <Image
            src="/GalaxyPulse/laser.jpg"
            layout="responsive"
            width={491}
            height={655}
            alt="laser"
          />
        </div>
        <div className={`${style.laserRay} zoom-animation`}>
          <div className="background_image">
            <Image
              objectFit="cover"
              src="/GalaxyPulse/laser.jpg"
              layout="fill"
              alt="laser"
            />
          </div>
          <section className={style.cards_content}>
            <h3>{props.cardTitle}</h3>
            <p>{props.cardText}</p>
          </section>
        </div>
        <div className={`${style.backlightHousing_mob} zoom-animation`}>
          <h3>{props.cardTwoTitle}</h3>
          <p>{props.cardTwoText}</p>
          <Image
            src="/GalaxyPulse/blustercloser-mob.jpg"
            layout="responsive"
            width={433}
            height={491}
            alt="blustercloser-mob"
          />
        </div>
        <div
          className={`${style.backlightHousing} zoom-animation animated-second`}
        >
          <div className="background_image">
            <Image
              objectFit="cover"
              src="/GalaxyPulse/blustercloser.jpg"
              layout="fill"
              alt="blustercloser"
            />
          </div>
          <section className={style.cards_content}>
            <h3>{props.cardTwoTitle}</h3>
            <p>{props.cardTwoText}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
