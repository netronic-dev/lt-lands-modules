import style from "../galaxypulse.module.scss";
import Image from "next/image";

export default function PulseDisplay(props) {
  return (
    <>
      <div className={style.section_oled}>
        <div className={`background desktop`}>
          <Image
            src="/GalaxyPulse/display.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            alt="display"
          />
        </div>
        <div className={style.empty}></div>
        <div className={style.section_oled_inside}>
          <h2>{props.title}</h2>
          <div className={style.section_oled_grid}>
            <div>
              <img src="/GalaxyPulse/game-indicators.svg" alt="Indicators" />
              <p className="paragraph">{props.cellText}</p>
            </div>
            <div>
              <img src="/GalaxyPulse/screen.svg" alt="Screen" />
              <p className="paragraph">{props.cellTwoText}</p>
            </div>
            <div>
              <img src="/GalaxyPulse/glass.svg" alt="Glass" />
              <p className="paragraph">{props.cellThreeText}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.section_oled_mob}>
        <div className={`${style.section_oled_image_mob}`}>
          <Image
            src="/GalaxyPulse/display-mob.jpg"
            layout="responsive"
            width={466}
            height={918}
            alt="display-mob"
          />
        </div>
        <h2 className={style.section_oled_title}>{props.title}</h2>
        <div className={style.section_oled_grid_mob}>
          <div>
            <img src="/GalaxyPulse/game-indicators.svg" alt="Game-indicators" />
            <p className="paragraph">{props.cellText}</p>
          </div>
          <div>
            <img src="/GalaxyPulse/screen.svg" alt="Screen" />
            <p className="paragraph">{props.cellTwoText}</p>
          </div>
          <div>
            <img src="/GalaxyPulse/glass.svg" alt="Glass" />
            <p className="paragraph">{props.cellThreeText}</p>
          </div>
        </div>
      </div>
    </>
  );
}
