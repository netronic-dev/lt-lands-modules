import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";
import style from "../about.module.scss";

export default function AboutDevelopment(props) {
  return (
    <div className={style.development}>
      <Fade direction="up" triggerOnce>
        <h2 className={style.title}>{props.title}</h2>
      </Fade>
      <div className={style.vision}>
        <div className={`${style.development_image} background`}>
          <Image
            src="/about/vision.png"
            layout="fill"
            objectFit="contain"
            objectPosition="100% 100%"
            alt="vision"
          />
        </div>
        <div className={`${style.development_image_responsive}`}>
          <Image
            src="/about/vision-res.jpg"
            layout="responsive"
            width={325}
            height={200}
            alt="vision-res"
          />
        </div>
        <Fade direction="left" triggerOnce>
          <div className={style.development_text_block}>
            <h3 className={style.development_title}>{props.subtitleFirst}</h3>
            <p className={style.development_text}>{props.textFirst}</p>
          </div>
        </Fade>
      </div>
      <div className={style.concept}>
        <div className={`${style.development_image} background`}>
          <Fade triggerOnce>
            <Image
              src="/about/concept.png"
              layout="fill"
              objectFit="contain"
              objectPosition="0 100%"
              alt="concept"
            />
          </Fade>
        </div>
        <div className={`${style.development_image_responsive}`}>
          <Fade triggerOnce>
            <Image
              src="/about/concept-res.jpg"
              layout="responsive"
              width={325}
              height={200}
              alt="concept-res"
            />
          </Fade>
        </div>
        <Fade direction="right" triggerOnce>
          <div className={style.development_text_block}>
            <h3 className={style.development_title}>{props.subtitleSecond}</h3>
            <p className={style.development_text}>{props.textSecond}</p>
          </div>
        </Fade>
      </div>
      <div className={style.testing}>
        <div className={`${style.development_image} background`}>
          <Fade triggerOnce>
            <Image
              src="/about/trials.png"
              layout="fill"
              objectFit="contain"
              objectPosition="100% 100%"
              alt="trials"
            />
          </Fade>
        </div>
        <div className={`${style.development_image_responsive}`}>
          <Fade triggerOnce>
            <Image
              src="/about/trials-res.jpg"
              layout="responsive"
              width={325}
              height={200}
              alt="trials-res"
            />
          </Fade>
        </div>
        <Fade direction="left" triggerOnce>
          <div className={style.development_text_block}>
            <h3 className={style.development_title}>{props.subtitleThird}</h3>
            <p className={style.development_text}>{props.textThird}</p>
          </div>
        </Fade>
      </div>
      <div className={style.production}>
        <div className={`${style.development_image} background`}>
          <Fade triggerOnce>
            <Image
              src="/about/production.png"
              layout="fill"
              objectFit="contain"
              objectPosition="0 100%"
              alt="production"
            />
          </Fade>
        </div>
        <div className={`${style.development_image_responsive}`}>
          <Image
            src="/about/production-res.jpg"
            layout="responsive"
            width={325}
            height={200}
            alt="production-res"
          />
        </div>
        <Fade direction="right" triggerOnce>
          <div className={style.development_text_block}>
            <h3 className={style.development_title}>{props.subtitleFourth}</h3>
            <p className={style.development_text}>{props.textFourth}</p>
          </div>
        </Fade>
      </div>
      <div className={style.renewal}>
        <div className={`${style.development_image} background`}>
          <Fade triggerOnce>
            <Image
              src="/about/renewal.png"
              layout="fill"
              objectFit="contain"
              objectPosition="100% 100%"
              alt="renewal"
            />
          </Fade>
        </div>
        <div className={`${style.development_image_responsive}`}>
          <Fade triggerOnce>
            <Image
              src="/about/renewal-res.jpg"
              layout="responsive"
              width={325}
              height={200}
              alt="renewal-res"
            />
          </Fade>
        </div>
        <Fade direction="left" triggerOnce>
          <div className={style.development_text_block}>
            <h3 className={style.development_title}>{props.subtitleFivth}</h3>
            <p className={style.development_text}>{props.textFivth}</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
