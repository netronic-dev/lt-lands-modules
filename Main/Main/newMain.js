import Image from "next/image";
import style from "./style.module.scss";
import { Fade } from "react-awesome-reveal"
import { FillButton, Button } from "../../../lt-modules/Buttons"

export default function NewMainMain(props) {
    return (
        <section className={style.main}>
            {props.image && (
                <div className="background desktop">
                    <Image
                        src={props.image}
                        layout="fill"
                        objectFit="cover"
                        objectPosition={props.image_objectPosition}
                        quality={90}
                        priority={true}
                    />
                </div>
            )}
            {props.image_responsive && (
                <div className="background mobile">
                    <Image
                        src={props.image_responsive}
                        layout="fill"
                        objectFit={props.image_responsive_objectFit}
                        objectPosition={props.image_responsive_objectPosition}
                        quality={90}
                        priority={true}
                    />
                </div>
            )}
            <div className={style.content}>
                <h1 className={`${style.title} fade-right-animation`}>
                    {props.title}
                </h1>
                <p className={`${style.text} fade-right-animation`}>{props.text}</p>
                <div className={`${style.buttons} fade-right-animation`}>
                    <Button
                        type="catalog"
                        text={props.buttonText}
                        style="blueBlackMainBannerWithGirl"
                    />
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
            </div>
        </section>
    );
}
