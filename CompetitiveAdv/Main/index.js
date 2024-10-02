import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-hook-inview";
import { useEffect, useState } from "react";
import { BreadCrumbs } from "../../../lt-modules/BreadCrumbs";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 100}px,${y / 100}px,0)`;

export default function Section(props) {
  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });

  const [offset, setOffset] = useState(null);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(pageYOffset);
    };
  }, []);

  return (
    <section
      className={style.section}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      ref={ref}
      id={isVisible ? "main-inview" : "main"}
    >
      <div className={style.path_outer}>
        <img
          src="/competitiveAdv/main-path.svg"
          className={style.path}
          alt="Main path image"
        />
      </div>

      <div className={style.text_wrapper}>
        <div style={{ transform: "translateY(-90px)" }}>
          <BreadCrumbs breadcrumbData={props.breadCrumbData} color="black" />
        </div>
        <div className="fade-up-animation">
          <h1 className={style.title}>{props.title}</h1>
          <p className={style.text}>{props.text}</p>
          <button
            onClick={props.onClick ? props.onClick : null}
            className={`${style.button} fade-up-animation`}
          >
            {props.link ? (
              <Link href={props.link}>
                <a></a>
              </Link>
            ) : (
              ""
            )}
            {props.buttonText}
          </button>
        </div>
      </div>
      <animated.div
        className={`${style.background} fade-animation`}
        style={{ transform: springProps.xy.interpolate(trans1) }}
      >
        {props.image ? (
          <Image
            src={props.image}
            layout="fill"
            objectFit="cover"
            objectPosition={`50% ${offset / 7 + 15}%`}
            alt="Main background image"
          />
        ) : (
          ""
        )}
      </animated.div>
    </section>
  );
}
