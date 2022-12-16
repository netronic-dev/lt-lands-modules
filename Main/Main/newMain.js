import Image from "next/image";
import style from "./style.module.scss";

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
                <p className={style.text}>{props.text}</p>
            </div>
        </section>
    );
}
