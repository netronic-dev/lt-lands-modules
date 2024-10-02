import Image from "next/image";
import { useInView } from "react-hook-inview";
import style from "../headband.module.scss";

export default function BlastWave(props) {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div
      className={style.blast_wave_grid}
      ref={ref}
      key={isVisible ? "band-blastwave-inview" : "band-blastwave"}
    >
      <div className="fade-up-animation">
        <h2 className={style.h2}>{props.title}</h2>
        <p className="paragraph">{props.text}</p>
        <Image
          src="/bandNetronic/blastwave.jpg"
          layout="responsive"
          width={575}
          height={400}
          priority={true}
          alt="blastwave"
        />
      </div>
      <div className="fade-up-animation animated-second">
        <h2 className={style.h2}>{props.titleTwo}</h2>
        <p className="paragraph">{props.textTwo}</p>
        <Image
          src="/bandNetronic/throughwounds.jpg"
          layout="responsive"
          width={575}
          height={400}
          priority={true}
          alt="throughwounds"
        />
      </div>
    </div>
  );
}
