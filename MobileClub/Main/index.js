import Image from "next/image";
import { BUTTON } from "../../../lt-modules/Buttons";
import style from "../style.module.scss";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 150}px,${y / 150}px,0)`;

export default function MCMain(props) {
  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <section
      className={`${style.main}`}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="background fade-animation">
        <Image
          src="/mobileClub/main-back.jpg"
          layout="fill"
          objectFit="cover"
          priority
          quality={90}
          alt="main back"
        />
      </div>

      <div className={`${style.image} fade-right-animation`}>
        <div className={`${style.image_in}`}>
          <animated.div
            className={style.logo}
            style={{ transform: springProps.xy.to(trans1) }}
          >
            <Image
              src="/mobileClub/main-front.png"
              layout="responsive"
              width={1455}
              height={550}
              priority
              quality={90}
              alt="main front"
            />
          </animated.div>
        </div>
        <div className={`${style.image_in_res}`}>
          <Image
            src="/mobileClub/main-front-mob.png"
            layout="responsive"
            width={743}
            height={550}
            priority
            quality={90}
            alt="main front mob"
          />
        </div>
      </div>
      <div className={`${style.content} fade-up-animation`}>
        <h1 className={style.title}>
          {props.title}
          <span>{props.title_span}</span>
        </h1>
        <BUTTON type={props.buttonType} text={props.buttonText} />
      </div>
    </section>
  );
}
