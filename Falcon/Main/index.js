import style from "../falcon.module.scss";
import Image from "next/image";
import { BreadCrumbs } from "../../../lt-modules/BreadCrumbs";
import { Button, VideoButton } from "../../../lt-modules/Buttons";
import { useInView } from "react-hook-inview";

export default function FalconMain(props) {
  const [InsideGeneralRef, isInsideGeneralVisible] = useInView({
    unobserveOnEnter: true,
  });

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
          <Image
            src="/falcon/falcon.jpg"
            layout="fill"
            objectFit="cover"
            quality={90}
            alt="falcon"
          />
        </div>
        <div className={style.empty}></div>
        <div className={style.general_bg}></div>
        <section
          ref={InsideGeneralRef}
          key={isInsideGeneralVisible ? 1 : 2}
          className={`${style.inside_general} fade-up-animation`}
        >
          <h1 className={style.title}>
            {props.title}
            <span>{logoFalcon}</span>
          </h1>
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
const logoFalcon = (
  <svg
    className={style.inside_general__logo}
    width="495"
    height="62"
    viewBox="0 0 495 62"
    fill="none"
  >
    <path
      d="M62.1406 26.1113L57.5508 39.832H17.1699V62H0.324219V0.378906H70.0996L65.5098 14.0996H17.1699V26.1113H62.1406ZM87.6289 52.918L82.3555 62H63.3125L100.178 0.378906H118.83L155.695 62H136.213L130.891 52.918H87.6289ZM124.152 41.541L109.26 16.3945L94.416 41.541H124.152ZM229.914 48.084L225.178 62H163.02V0.378906H179.865V48.084H229.914ZM306.428 62H260.09C253.205 62 247.688 59.9492 243.439 55.7988C239.289 51.6484 237.238 46.9121 237.238 41.4922V20.8867C237.238 15.3203 239.289 10.5352 243.391 6.48242C247.541 2.42969 253.107 0.378906 260.09 0.378906H310.969L306.428 13.9043H264.387C261.457 13.9043 258.967 14.7832 256.965 16.4922C255.061 18.2012 254.133 20.4473 254.133 23.2305V38.8555C254.133 41.6387 255.109 43.8848 257.014 45.5449C258.967 47.2051 261.408 48.0352 264.387 48.084H310.969L306.428 62ZM320.246 20.8867C320.246 15.3203 322.297 10.5352 326.398 6.48242C330.549 2.42969 336.115 0.378906 343.098 0.378906H380.646C387.727 0.378906 393.293 2.42969 397.346 6.48242C401.447 10.4863 403.498 15.2227 403.498 20.7402V41.6387C403.498 46.9609 401.447 51.6973 397.297 55.7988C393.146 59.9492 387.629 62 380.646 62H343.098C336.213 62 330.695 59.9492 326.447 55.7988C322.297 51.6484 320.246 46.9121 320.246 41.4922V20.8867ZM376.35 48.084C379.475 48.0352 381.965 47.1562 383.771 45.5449C385.676 43.9336 386.652 41.6875 386.652 38.8555V23.1328C386.604 20.252 385.627 18.0059 383.771 16.3945C381.867 14.6855 379.426 13.8555 376.35 13.8555H347.443C344.416 13.8555 341.975 14.6855 340.07 16.3945C338.264 18.0547 337.287 20.3008 337.189 23.1328V39.002C337.189 41.7363 338.166 43.9336 340.07 45.5449C342.072 47.2539 344.514 48.084 347.443 48.084H376.35ZM494.123 62H477.131L433.186 21.8145V62H416.242V0.378906H433.186L477.131 40.7109V0.378906H494.123V62Z"
      fill="white"
    />
  </svg>
);
