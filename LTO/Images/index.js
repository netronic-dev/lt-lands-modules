import style from "../lto.module.scss";
import Image from "next/image";
import { useInView } from "react-hook-inview";

export default function Images(props) {
  const [ref, IsVisible] = useInView({
    unobserveOnEnter: true,
  });

  return (
    <section className={style.screen}>
      <div
        className={style.phones_screen}
        ref={ref}
        key={IsVisible ? "phones-inview" : "phones"}
      >
        <div className={style.phones_first}>
          <Image
            src={props.firstImage || "/lasertagOperator/lastScreen1.png"}
            layout="responsive"
            width={300}
            height={600}
            alt="first image"
          />
        </div>
        <div className={style.phones_second}>
          <Image
            src={props.secondImage || "/lasertagOperator/lastScreen2.png"}
            layout="responsive"
            width={300}
            height={600}
            alt="second image"
          />
        </div>
        <div className={style.phones_third}>
          <Image
            src={props.thirdImage || "/lasertagOperator/lastScreenGeneral.png"}
            layout="responsive"
            width={300}
            height={600}
            alt="lastScreenGeneral"
          />
        </div>
        <div className={style.phones_fours}>
          <Image
            src={props.fourthImage || "/lasertagOperator/lastScreen3.png"}
            layout="responsive"
            width={300}
            height={600}
            alt="lastScreen3"
          />
        </div>
        <div className={style.phones_fives}>
          <Image
            src={props.fivthImage || "/lasertagOperator/lastScreen4.png"}
            layout="responsive"
            width={300}
            height={600}
            alt="lastScreen4"
          />
        </div>
      </div>
    </section>
  );
}
