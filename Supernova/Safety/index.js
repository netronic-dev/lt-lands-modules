import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { useInView } from "react-hook-inview"
import style from "../style.module.scss"

export default function SupernovaSafety(props) {

  const [ref, IsVisible] = useInView({
    unobserveOnEnter: true
  })

  return (
    <section className={style.safety}>
      <div className={style.grid} ref={ref}>
        <div className={style.main_cell}>
          <Fade direction="up" triggerOnce>
            <h2 className={style.title}>
              {props.title}
            </h2>
          </Fade>
          <Fade delay={300} triggerOnce>
            <div className={style.logo}>
              {logoStar} <span className={style.logo_text}>Supernova</span>
            </div>
          </Fade>
        </div>
        <div key={IsVisible ? 1 : 0} className={`${style.cell} ${style.cell1} zoom-animation`}>
          <h3 className={style.cell__title}>
            {props.cell1Title}
          </h3>
          <p className={style.cell__text}>
            {props.cell1Text}
          </p>
        </div>
        <div key={IsVisible ? 3 : 2} className={`${style.cell} ${style.cell2} zoom-animation animated-second`}>
          <h3 className={style.cell__title}>
            {props.cell2Title}
          </h3>
          <p className={style.cell__text}>
            {props.cell2Text}
          </p>
        </div>
        <div key={IsVisible ? 5 : 4} className={`${style.cell} ${style.cell3} zoom-animation animated-second`}>
          <h3 className={style.cell__title}>
            {props.cell3Title}
          </h3>
          <p className={style.cell__text}>
            {props.cell3Text}
          </p>
        </div>
      </div>
      <div className={style.image}>
        <Fade triggerOnce>
          <Image
            src="/supernova/safety.jpg"
            layout="responsive"
            width={1314}
            height={1130}
            priority={true}
            quality={90}
          />
        </Fade>
      </div>
    </section >
  )
}

const logoStar = (
  <svg width="46" height="42" viewBox="0 0 46 42" fill="none">
    <g clipPath="url(#clip0)">
      <path d="M23.006 0L18.7425 14.0389L23.006 18.3531L27.2696 14.0389L23.006 0Z" fill="#040E18" />
      <path d="M46 16.0094L30.7679 16.1377L27.7069 21.3031L33.2337 23.985L46 16.0094Z" fill="#0074FF" />
      <path d="M0 16.0094L15.2321 16.1377L18.3053 21.3031L12.7785 23.985L0 16.0094Z" fill="#0074FF" />
      <path d="M8.80643 42.0003L14.1146 28.2879L20.2123 27.2734L20.9532 33.1735L8.80643 42.0003Z" fill="#0074FF" />
      <path d="M37.2178 42.0003L31.9097 28.2879L25.812 27.2734L25.071 33.1735L37.2178 42.0003Z" fill="#0074FF" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="46" height="42" fill="white" />
      </clipPath>
    </defs>
  </svg>

)