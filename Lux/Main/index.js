import Image from "next/image";
import { Button } from "../../../lt-modules/Buttons";
import style from "../lux.module.scss";
import { useSpring, animated } from "react-spring";
import { BreadCrumbs } from "../../../lt-modules/BreadCrumbs";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 150}px,${y / 150}px,0)`;

export default function Main(props) {
  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <section
      className={style.main}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      {props.breadcrumbData ? (
        <div className={style.breadcrumbs}>
          <div className={style.breadcrumbs_inner}>
            <BreadCrumbs color="white" breadcrumbData={props.breadcrumbData} />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="background">
        <Image
          src={props.mainBackgroundImage}
          objectFit="cover"
          layout="fill"
          priority={true}
          alt="lux main background"
        />
      </div>
      <div className={style.main_content}>
        <animated.div
          className={style.logo}
          style={{ transform: springProps.xy.to(trans1) }}
        >
          {props.luxLogo}
        </animated.div>
        <div className={style.main_content__bottom}>
          {props.title ? (
            <h1 className={style.main__title}>{props.title}</h1>
          ) : (
            <h1 className="hidden">{props.hiddenTitle}</h1>
          )}
          <p className={style.main__text}>{props.text}</p>
          <Button style="black" text={props.buttonText} />
        </div>
      </div>
    </section>
  );
}


