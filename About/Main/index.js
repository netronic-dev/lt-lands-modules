import style from "../about.module.scss";
import Image from "next/image";

export default function MainScreen(props) {
  return (
    <div className={`${style.main} fade-animation`}>
      <div className="background">
        <Image
          src="/about/main.jpg"
          layout="fill"
          objectFit="cover"
          alt="main"
        />
      </div>
      <div className={style.content}>
        <h1 className={`${style.title} fade-up-animation animated-third`}>
          {props.title}
        </h1>
        <p className={`${style.text} fade-up-animation animated-third`}>
          {props.text}
        </p>
      </div>
    </div>
  );
}
