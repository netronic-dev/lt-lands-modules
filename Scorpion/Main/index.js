import style from "../scorpion.module.scss";
import { BreadCrumbs } from "../../../lt-modules/BreadCrumbs";
import Image from "next/image";
import { Button } from "../../../lt-modules/Buttons";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-hook-inview";

export default function ScorpionMain(props) {
  const [InsideGeneralRef, isInsideGeneralVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div className={style.section_general}>
      <Fade triggerOnce>
        <div className={style.section_general_bg}>
          <Image
            src="/scorpion/shockbandbg.jpg"
            layout="fill"
            objectFit="cover"
            alt="shockbandbg"
          />
        </div>
      </Fade>
      <BreadCrumbs color="white" breadcrumbData={props.breadcrumbData} />
      <div className={style.empty} />
      <section
        ref={InsideGeneralRef}
        className={`${style.inside_general} fade-up-animation`}
        key={isInsideGeneralVisible ? 1 : 2}
      >
        <h1>{props.title}</h1>
        <img src="/scorpion/svg/scorpionLogo.svg" alt="Scorpion Logo" />
        <p className={style.text}>{props.text}</p>
        <Button type="catalog" style="blueWhite" text={props.buttonText} />
      </section>
    </div>
  );
}
