import style from "../about.module.scss";
import Image from "next/image";
import { SliderRoadmap } from "../../../lt-modules/Slider/SliderRoadmap";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-hook-inview";
import CountUp from "react-countup";

export default function AboutRoad(props) {
  const [longCardRef, longCardIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [cardsRef, cardsIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [secondLongCardRef, secondLongCardIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  const [numbersRef, numbersIsVisible] = useInView({
    unobserveOnEnter: true,
  });
  return (
    <div className={style.road}>
      <Fade direction="up" triggerOnce>
        <p className={style.road_text}>{props.text}</p>
      </Fade>
      <div className={style.road_slider}>
        <SliderRoadmap data={props.sliderData} />
      </div>
      <Fade direction="up" triggerOnce>
        <h2 className={style.road_title}>{props.title}</h2>
      </Fade>
      <div ref={numbersRef} key={numbersIsVisible ? 1 : 2}>
        <div
          ref={longCardRef}
          key={longCardIsVisible ? 1 : 2}
          className={`${style.clubs} zoom-animation`}
        >
          <div className={`${style.clubs_image} background`}>
            <Image
              src="/about/clubs.png"
              layout="fill"
              objectFit="contain"
              objectPosition="0 100%"
              alt="clubs"
            />
          </div>
          <div className={`${style.clubs_image_res} background`}>
            <Image
              src="/about/clubs-res.png"
              layout="fill"
              objectFit="contain"
              objectPosition="0 100%"
              alt="clubs-res"
            />
          </div>
          <p className={style.grid_title}>
            <CountUp
              start={0}
              end={props.cellTitle}
              separator=" "
              duration={3}
            />
            +
          </p>
          <p className={style.grid_text}>{props.cellText}</p>
        </div>
        <div className={style.grid_columns} ref={cardsRef}>
          <div
            className={`${style.standard_cell} zoom-animation`}
            key={cardsIsVisible ? 1 : 2}
          >
            <img src="/about/vector/world.svg" alt="World image" />
            <p className={style.grid_title}>
              <CountUp delay={1} start={0} end={props.cellTwoTitle} />
            </p>
            <p className={style.grid_text}>{props.cellTwoText}</p>
          </div>
          <div
            className={`${style.standard_cell} zoom-animation animated-second`}
            key={cardsIsVisible ? 3 : 4}
          >
            <img src="/about/vector/stars.svg" alt="Stars image" />
            <p className={style.grid_title}>
              <CountUp
                delay={1}
                start={0}
                end={props.cellThreeTitle}
                duration={1}
              />
            </p>
            <p className={style.grid_text}>{props.cellThreeText}</p>
          </div>
          <div
            className={`${style.standard_cell} zoom-animation animated-third`}
            key={cardsIsVisible ? 5 : 6}
          >
            <img src="/about/vector/dealers.svg" alt="Dealers image" />
            <p className={style.grid_title}>
              <CountUp
                delay={1}
                start={0}
                end={props.cellFourTitle}
                duration={1}
              />
            </p>
            <p className={style.grid_text}>{props.cellFourText}</p>
          </div>
        </div>
        <div
          className={`${style.falcons} zoom-animation`}
          ref={secondLongCardRef}
          key={secondLongCardIsVisible ? 7 : 8}
        >
          <div className={`${style.clubs_image} background`}>
            <Image
              src="/about/falcons.png"
              layout="fill"
              objectFit="contain"
              objectPosition="100% 100%"
              alt="falcons"
            />
          </div>
          <div className={`${style.clubs_image_res} background `}>
            <Image
              src="/about/falcons-res.png"
              layout="fill"
              objectFit="contain"
              objectPosition="0% 100%"
              alt="falcons-res"
            />
          </div>
          <p className={style.grid_title}>
            <CountUp
              start={0}
              end={props.cellFiveTitle}
              separator=" "
              duration={5}
            />
            +
          </p>
          <p className={style.grid_text}>{props.cellFiveText}</p>
        </div>
      </div>
    </div>
  );
}
