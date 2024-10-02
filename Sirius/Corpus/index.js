import Image from "next/image";
import style from "../sirius.module.scss";

export default function SiriusCorpus(props) {
  return (
    <>
      <div className={style.strongBody}>
        <section className={style.section}>
          <h2 className={style.title_half}>{props.title}</h2>
          <p className="paragraph">{props.text}</p>
        </section>
        <div className={style.siriusDisassembled}>
          <Image
            src="/sirius/sirius-disassembled.jpg"
            layout="responsive"
            width={1170}
            height={900}
            alt="sirius disassembled"
          />
        </div>
        <div className={style.cards}>
          <div className={style.cards__text_block}>
            <h2>{props.titleTwo}</h2>
            <p>{props.textTwo}</p>
          </div>
          <div className={style.cards__image}>
            <Image
              src="/sirius/sirius-electronic.jpg"
              layout="responsive"
              width={775}
              height={515}
              alt="sirius electronic"
            />
          </div>
        </div>
      </div>
    </>
  );
}
