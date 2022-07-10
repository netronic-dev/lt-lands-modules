import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import { FillButton, Button } from "../../../lt-modules/Buttons"
import style from "../main.module.scss"
import Link from "next/link"

const contentTheme = {
  "light": style.content_light,
  "dark": style.content_dark
}

export default function MainMain(props) {
  return (
    <>
      <section className={style.main}>
        {props.image ?
          <div className="background desktop">
            <Image
              src={props.image}
              layout="fill"
              objectFit="cover"
              objectPosition={props.image_objectPosition}
              quality={90}
              priority={true}
            />
          </div> : ""}
        {props.image_responsive ?
          <div className="background mobile">
            <Image
              src={props.image_responsive}
              layout="fill"
              objectFit={props.image_responsive_objectFit}
              objectPosition={props.image_responsive_objectPosition}
              quality={90}
              priority={true}
            />
          </div> : ""}
        <div className={`${style.content} ${contentTheme[props.theme ? props.theme : "light"]}`}>
          <Fade direction="left" delay={800} triggerOnce>
            <h1 className={style.title} style={{ whiteSpace: "pre-line" }}>
              {props.title}
            </h1>
            <p className={style.text}>
              {props.text}
            </p>
          </Fade>
          <div className={style.buttons}>
            <Fade delay={1200} triggerOnce>
              <div>
                <Button
                  type="catalog"
                  text={props.buttonText}
                />
              </div>
            </Fade>
            {props.eventButtonLink ?
              <Fade delay={1500} triggerOnce>
                <div>
                  <Link href={props.eventButtonLink ? props.eventButtonLink : "/"}>
                    <a>
                      <FillButton
                        className={style.event_button}
                        style="whiteBlack"
                        text={props.eventButtonText}
                      />
                    </a>
                  </Link>
                </div>
              </Fade> : ""}
          </div>
          {props.logo ?
            <div className={style.logo}>
              <Image
                src={props.logo}
                layout="fill"
                objectFit="contain"
              />
            </div>
            : ""}
        </div>
      </section>
    </>
  )
}
