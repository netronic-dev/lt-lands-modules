import style from "../galaxypulse.module.scss";
import Image from "next/image";
import { useInView } from "react-hook-inview";

export default function PulseImpulse(props) {
  const [ref, IsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div
      className={style.impulse}
      ref={ref}
      key={IsVisible ? "impulse-inview" : "impulse"}
    >
      <div className={`${style.impulse_content} fade-up-animation`}>
        <h2>{props.title}</h2>
        <p className="paragraph">{props.text}</p>
      </div>
      <div className={`${style.impulse_image} desktop fade-animation`}>
        <Image
          objectFit="cover"
          src="/GalaxyPulse/twopeopleswblusters.jpg"
          layout="responsive"
          width={1920}
          height={955}
          alt="two people w blusters"
        />
      </div>
      <div className={`${style.impulse_image} mobile fade-animation`}>
        <Image
          objectFit="cover"
          src="/GalaxyPulse/twopeopleswblusters-mob.jpg"
          layout="responsive"
          width={465}
          height={705}
          alt="two people w blusters"
        />
      </div>
    </div>
  );
}
