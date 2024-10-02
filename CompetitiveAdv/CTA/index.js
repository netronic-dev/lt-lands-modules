import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-hook-inview";

export default function Section(props) {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });

  return (
    <section className={style.section}>
      <div
        className={`${style.wrapper} fade-up-animation`}
        ref={ref}
        key={isVisible ? "cta-inview" : "cta"}
      >
        <div className={style.wrapper_inner}>
          <div className={style.content}>
            <h2 className={style.title}>{props.title}</h2>
            <p className={style.text}>{props.text}</p>
            <button
              onClick={props.onClick ? props.onClick : null}
              className={style.button}
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
          {props.image ? (
            <div className={style.image}>
              <Image
                src={props.image}
                layout="fill"
                objectFit="cover"
                objectPosition={props.objectPosition}
                alt="heroImage"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
