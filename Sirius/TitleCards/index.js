import Image from "next/image";
import style from "../sirius.module.scss";
import Video from "../../../blogModules/Video";
import useIsDesktop from "../../../hooks/useIsDesktop";

export default function SiriusTitleCards(props) {
  const isTablet = useIsDesktop({ width: 1201 });
  return (
    <>
      <div className={style.newTechnologies}>
        {props.videoLink && isTablet && <Video src={props.videoLink} />}
        <p className={style.head_par}>{props.text}</p>

        <div className={style.cards}>
          <div className={style.cards__text_block}>
            <h2>{props.title}</h2>
            <p>{props.textTwo}</p>
          </div>
          <div className={style.cards__image}>
            <Image
              src="/sirius/sirius-hand-up.jpg"
              layout="responsive"
              width={775}
              height={515}
              alt="sirius hand up"
            />
          </div>
        </div>
      </div>
      <div className="desktop">
        <Image
          src="/sirius/sirius-rainbow.jpg"
          layout="responsive"
          width={1920}
          height={825}
          alt="sirius rainbow"
        />
      </div>
      <div className="mobile">
        <Image
          src="/sirius/sirius-rainbow-mob.png"
          layout="responsive"
          width={470}
          height={555}
          alt="sirius rainbow"
        />
      </div>
    </>
  );
}
