import style from "../galaxypulse.module.scss";
import Image from "next/image";

export default function PulseCards(props) {
  return (
    <div className={style.amounting}>
      <div className={style.grid_equip_mob}>
        <h3>{props.cardTitle}</h3>
        <p>{props.cardText}</p>
        <Image
          src="/GalaxyPulse/cable-mob.jpg"
          layout="responsive"
          width={435}
          height={655}
          alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 16"
        />
      </div>
      <div className={style.grid_equip}>
        <div className="background_image">
          <Image
            objectFit="cover"
            src="/GalaxyPulse/cable.jpg"
            layout="fill"
            alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 17"
          />
        </div>
        <section className={style.cards_content}>
          <h3>{props.cardTitle}</h3>
          <p>{props.cardText}</p>
        </section>
      </div>
      <div className={style.grid_equip_one}>
        <div className={style.grid_equip_cardone_mob}>
          <h3>{props.cardTwoTitle}</h3>
          <p>{props.cardTwoText}</p>
          <Image
            src="/GalaxyPulse/vestcloser.jpg"
            layout="responsive"
            width={595}
            height={885}
            alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 18"
          />
        </div>
        <div className={style.grid_equip_cardone}>
          <div className="background_image">
            <Image
              objectFit="cover"
              src="/GalaxyPulse/vestcloser.jpg"
              layout="fill"
              alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 19"
            />
          </div>
          <section className={style.cards_content}>
            <h3>{props.cardTwoTitle}</h3>
            <p>{props.cardTwoText}</p>
          </section>
        </div>
        <div className={style.grid_equip_cardtwo_mob}>
          <h3>{props.cardThreeTitle}</h3>
          <p>{props.cardThreeText}</p>

          <Image
            src="/GalaxyPulse/sensordisassembled.jpg"
            layout="responsive"
            width={595}
            height={885}
            alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 20"
          />
        </div>
        <div className={style.grid_equip_cardtwo}>
          <div className="background_image">
            <Image
              objectFit="cover"
              src="/GalaxyPulse/sensordisassembled.jpg"
              layout="fill"
              alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 21"
            />
          </div>
          <section className={style.cards_content}>
            <h3>{props.cardThreeTitle}</h3>
            <p>{props.cardThreeText}</p>
          </section>
        </div>
      </div>
      <div className={style.grid_equip_two}>
        <div className={style.grid_equip_cardone_mob}>
          <h3>{props.cardFourTitle}</h3>
          <p>{props.cardFourText}</p>
          <Image
            src="/GalaxyPulse/vestbelt.jpg"
            layout="responsive"
            width={390}
            height={655}
            alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 22"
          />
        </div>
        <div className={style.grid_equip_cardone}>
          <div className="background_image">
            <Image
              objectFit="cover"
              src="/GalaxyPulse/vestbelt.jpg"
              layout="fill"
              alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 23"
            />
          </div>
          <section className={style.cards_content}>
            <h3>{props.cardFourTitle}</h3>
            <p>{props.cardFourText}</p>
          </section>
        </div>
        <div className={style.grid_equip_cardtwo_mob}>
          <h3>{props.cardFiveTitle}</h3>
          <p>{props.cardFiveText}</p>
          <Image
            src="/GalaxyPulse/vest.jpg"
            layout="responsive"
            width={797}
            height={655}
            alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 24"
          />
        </div>
        <div className={style.grid_equip_cardtwo}>
          <div className="background_image">
            <Image
              objectFit="cover"
              src="/GalaxyPulse/vest.jpg"
              layout="fill"
              alt="The world's only indoor laser tag Game-kit with impulse recoil simulation photo 25"
            />
          </div>
          <section className={style.cards_content}>
            <h3>{props.cardFiveTitle}</h3>
            <p>{props.cardFiveText}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
