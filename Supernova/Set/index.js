import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { useInView } from "react-hook-inview"
import style from "../style.module.scss"

export default function SupernovaSet(props) {

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  })

  return (
    <section className={style.set} >
      <div className="background">
        <Image
          src="/supernova/bomb-set.jpg"
          layout="fill"
          priority={true}
          quality={90}
          objectFit="cover"
        />
      </div>
      <div className={style.content}>
        <div className={style.column}>
          <Fade triggerOnce>
            <div className={style.logo}>
              {logo}
              <span className={style.logo__text}>
                Supernova
            </span>
            </div>
          </Fade>
          <Fade triggerOnce>
            <h2 className={style.title}>
              {props.title}
            </h2>
          </Fade>
          <div className={`${style.cell} ${isVisible ? "zoom-animation" : null}`}>
            <img
              className={style.cell__image}
              src="/supernova/vector/bomb-1.svg"
              alt={props.cell1Title}
            />
            <h3 className={style.cell__title}>
              {props.cell1Title}
            </h3>
            <p className={style.cell__text}>
              {props.cell1Text}
            </p>
          </div>
          <div className={`${style.cell} ${isVisible ? "zoom-animation animated-second" : null}`}>
            <img className={style.cell__image} src="/supernova/vector/bomb-2.svg" alt={props.cell2Title} />
            <h3 className={style.cell__title}>
              {props.cell2Title}
            </h3>
            <p className={style.cell__text} ref={ref}>
              {props.cell2Text}
            </p>
          </div>
        </div>
        <div className={style.column}>
          <div className={`${style.set_image_1} ${isVisible ? style.set_image_active : null}`}>
            <Image
              src="/supernova/bomb-set.png"
              layout="responsive"
              width={950}
              height={667}
              priority={true}
              alt={props.title}
            />
          </div>
          <div className={style.set_image_2}>
            <Image
              src="/supernova/bomb-set-bottom.png"
              layout="responsive"
              width={950}
              height={672}
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className={style.bottom_white}>
      </div>
    </section >
  )
}

const logo = (
  <svg width="46" height="42" viewBox="0 0 46 42" fill="none" className={style.logo_vector}>
    <g clipPath="url(#clip0)">
      <path d="M23.006 0L18.7424 14.0389L23.006 18.3531L27.2695 14.0389L23.006 0Z" fill="white" />
      <path d="M46 16.0093L30.7679 16.1375L27.7069 21.303L33.2337 23.9849L46 16.0093Z" fill="#0074FF" />
      <path d="M0 16.0093L15.2321 16.1375L18.3053 21.303L12.7785 23.9849L0 16.0093Z" fill="#0074FF" />
      <path d="M8.8064 42.0003L14.1146 28.2879L20.2123 27.2734L20.9532 33.1735L8.8064 42.0003Z" fill="#0074FF" />
      <path d="M37.2179 42.0003L31.9097 28.2879L25.812 27.2734L25.071 33.1735L37.2179 42.0003Z" fill="#0074FF" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="46" height="42" fill="white" />
      </clipPath>
    </defs>
  </svg>)
