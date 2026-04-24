import { useInView } from "react-hook-inview";
import Image from "next/image";
import { BreadCrumbs } from "../../../lt-modules/BreadCrumbs";
import { Button, VideoButton } from "../../../lt-modules/Buttons";
import style from "../maverick.module.scss";
import useIsDesktop from "../../../hooks/useIsDesktop";

export default function FalconMain(props) {
  const [InsideGeneralRef, isInsideGeneralVisible] = useInView({
    unobserveOnEnter: true,
  });
  const isDesktop = useIsDesktop(1024);

  return (
    <>
      <div className={style.section_general}>
        {props.breadcrumbData ? (
          <div className={style.breadcrumbs}>
            <div className={style.breadcrumbs_inner}>
              <BreadCrumbs
                color="white"
                breadcrumbData={props.breadcrumbData}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={`${style.section_general_bg}`}>
          {isDesktop ? (
            <Image
              src="/guns/maverick.webp"
              layout="fill"
              objectFit="cover"
              quality={90}
              alt="AR-15 MAVERICK photo"
            />
          ) : (
            <Image
              src="/guns/maverick_tablet.webp"
              layout="fill"
              objectFit="cover"
              quality={90}
              alt="AR-15 MAVERICK photo"
            />
          )}
        </div>
        <div className={style.empty}></div>
        <div className={style.general_bg}></div>
        <section
          ref={InsideGeneralRef}
          key={isInsideGeneralVisible ? 1 : 2}
          className={`${style.inside_general} fade-up-animation`}
        >
          <p className={style.subtitle}>{props.subtitle}</p>
          <h1 className={style.title}>{props.title}</h1>
          <p className={style.text}>{props.text}</p>
          <div className={style.general__buttons}>
            <div className={style.buttons_price}>
              <Button
                type="catalog"
                style="blueWhite"
                text={props.buttonText}
              />
            </div>
            <div className={style.buttons_video}>
              <VideoButton
                link={props.videoLink}
                text={props.videoButtonText}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
