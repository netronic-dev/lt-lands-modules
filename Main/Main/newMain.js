import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import style from "./style.module.scss"

const contentTheme = {
    "light": style.content_light,
    "dark": style.content_dark
}


export default function NewMainMain(props) {
    return (
        <section className={style.main}>
            {props.image ?
                <div className="background desktop">
                    <Image
                        src={props.image}
                        layout="fill"
                        objectFit="fill"
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
    )
}
