import { useInView } from "react-hook-inview";
import Image from "next/image";
import style from "../maverick.module.scss";
import image from "../../../public/guns/maverick_7.webp";
import { Icon } from "../../../components/Icon";
import AnimatedListItem  from "./AnimatedListItem";

export default function MaverickMechanicalArStyleReloading(props) {
  const [InsideGeneralRef, isInsideGeneralVisible] = useInView({
    unobserveOnEnter: true,
  });

  return (
    <section className={style.mechanicalArStyleReloading_section}>
      <div
        ref={InsideGeneralRef}
        key={isInsideGeneralVisible ? 1 : 2}
        className={`${style.mechanicalArStyleReloading_container} fade-up-animation`}
      >
        <div className={style.mechanicalArStyleReloading_container_inside_top}>
          <div className={style.mechanicalArStyleReloading_title_box}>
            <h2 className={style.mechanicalArStyleReloading_title}>
              Mechanical AR-style <br /> reloading
            </h2>
            <div className={style.mechanicalArStyleReloading_text_box}>
              <p className={style.mechanicalArStyleReloading_text}>
                Realistic reloading and fire mode control <br />
                We have brought the reloading process as close as possible to a
                real AR-15. Players can now reload using a mechanical charging
                handle located in the standard position for this platform.
              </p>
              <p className={style.mechanicalArStyleReloading_text}>
                The internal reloading mechanism is based on modern non-contact
                Hall-effect sensor technology, eliminating mechanical contact
                wear and ensuring reliable, maintenance-free operation of the
                module throughout the entire service life of the tagger.
              </p>
              <p className={style.mechanicalArStyleReloading_text}>
                Fire modes are controlled by a convenient button on the left
                side of the body, placed in an anatomically optimal position for
                quick access with the thumb.
              </p>
            </div>
          </div>
          <ul className={style.mechanicalArStyleReloading_list}>
            {list.map((item) => (
              <li
                key={item.id}
                className={style.mechanicalArStyleReloading_item}
              >
                <Icon
                  className={style.mechanicalArStyleReloading_item_icon}
                  name={item.icon}
                  width={60}
                  height={60}
                ></Icon>
                <p className={style.mechanicalArStyleReloading_item_title}>
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={style.mechanicalArStyleReloading_container_inside_bottom}
        >
          <p className={style.mechanicalArStyleReloading_text_bottom}>
            This combination delivers maximum realism of tactical actions while
            preserving high reliability and durability of all key controls.
          </p>
          <div className={style.mechanicalArStyleReloading_img_box}>
            <Image
              className={style.mechanicalArStyleReloading_img}
              src={image}
              layout="fill"
              alt="Maverick Mechanical Ar Style Reloading photo"
            />
          </div>
        </div>
      </div>
      <ul className={style.mechanicalArStyleReloading_list_bottom}>
        {list_bottom.map((item) => (
          <AnimatedListItem
            key={item.id}
            item={item}
            index={item.id}
            style={style}
          />
        ))}
      </ul>
    </section>
  );
}

const list = [
  {
    id: 0,
    icon: "icon-fully-automatic",
    title: "Fully automatic",
  },
  {
    id: 1,
    icon: "icon-three-round-burst",
    title: "Three-round burst",
  },
  {
    id: 2,
    icon: "icon-single-shot",
    title: "Single shot",
  },
];

const list_bottom = [
  {
    id: 0,
    title: "Side LED lighting",
    textTop:
      "On both sides of the tagger in the handguard area, there is a bright, dynamic shot indicator in the team color. This allows players on the field to easily distinguish teammates from opponents.",
    textBottom:
      "When a player is “tagged out”, the tagger lights up white, indicating that this player is inactive.",
    image: "/guns/maverick_8.webp",
  },
  {
    id: 1,
    title: "Modern contactless trigger",
    textTop:
      "The new tagger is equipped with a trigger featuring a contactless Hall-effect sensor — the most reliable solution in its class. The complete absence of mechanical elements eliminates the risk of wear or failure and removes the need for any maintenance throughout the entire service life. The trigger design combines a modern look with a very soft, pleasant pull, providing comfortable and precise control even during long games.",
    image: "/guns/maverick_9.webp",
  },
  {
    id: 2,
    title: "Color IPS display",
    textTop:
      "Just like the FALCON series taggers, the new tagger features a high-quality IPS display showing key game stats and service information: tagger battery level, status of connected headbands, vests, and the Scorpion shock bracelet. The display is protected by 5 mm tempered glass, which completely eliminates the risk of damage during intense games.",
    textBottom:
      "A new convenient feature: even when the tagger is powered off and placed on charge, the current charge level indicator remains visible on the screen — laser tag arena staff can always see whether the tagger is ready for the next game.",
    image: "/guns/maverick_10.webp",
  },
  {
    id: 3,
    title: "Additional hit sensors",
    textTop: (
      <>
        To expand the hit zone and ensure fairer gameplay (when a player hides
        the headband or vest behind cover), the AR-15 MAVERICK tagger is
        equipped with three additional hit sensors: <br /> - two side sensors
        integrated into the side shot indicator module <br /> -one top sensor
        located above the muzzle <br /> This way, hits to the tagger itself are
        now also counted as damage. This makes the game fairer and more dynamic,
        preventing situations when a player hides completely behind cover while
        only exposing the weapon.
      </>
    ),
    image: "/guns/maverick_11.webp",
  },
  {
    id: 4,
    title: "Advanced NFC bonding system",
    textTop:
      "The new tagger uses an NFC-based system for pairing hit sensors and the shock bracelet. When you need to add a new device to the game set, simply switch the tagger to service mode and bring the desired headband, vest, or Scorpion shock bracelet close to it.",
    image: "/guns/maverick_12.webp",
  },
];
