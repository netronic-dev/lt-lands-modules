import style from "../lto.module.scss"
import Image from "next/image"
import { BlockIconText } from "../../BlockIconText/BlockIconText"
import { useInView } from "react-hook-inview"

export default function LTOThirdCards(props) {
  const [titleRef, titleIsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  const [card1Ref, card1IsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  const [card2Ref, card2IsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  const [card3Ref, card3IsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  const [card4Ref, card4IsVisible] = useInView(
    {
      unobserveOnEnter: true
    }
  )
  return (
    <>
      <h2
        className={`${style.lo__title} fade-up-animation`}
        ref={titleRef}
        key={titleIsVisible ? "cards-3-title-inview" : "cards-3-title"}
      >
        {props.title}
      </h2>
      <div className={style.grid_ready_chars}>
        <div
          className={`${style.card_left} zoom-animation`}
          ref={card1Ref}
          key={card1IsVisible ? "cards-3-card-1-inview" : "cards-3-card-1"}
        >
          <section>
            <h3>{props.cardTitle}</h3>
            <p className="paragraph">
              {props.cardText}
            </p>
          </section>
        </div>
        <div className={`${style.card} zoom-animation animated-second`} ref={card2Ref} key={card2IsVisible ? "cards-3-card-2-inview" : "cards-3-card-2"}>
          <div>
            <div className={style.grid_ready_chars__img}>
              <img src="/lasertagOperator/svg/char-1.svg" alt={props.characterName} />
            </div>
            <p>{props.characterName}</p>
          </div>
          <div>
            <div className={style.grid_ready_chars__img}>
              <img src="/lasertagOperator/svg/char-2.svg" alt={props.characterTwoName} />
            </div>
            <p>{props.characterTwoName}</p>
          </div>
          <div>
            <div className={style.grid_ready_chars__img}>
              <img src="/lasertagOperator/svg/char-3.svg" alt={props.characterThreeName} />
            </div>
            <p>{props.characterThreeName}</p>
          </div>
          <div>
            <div className={style.grid_ready_chars__img}>
              <img src="/lasertagOperator/svg/char-4.svg" alt={props.characterFourName} />
            </div>
            <p>{props.characterFourName}</p>
          </div>
          <div>
            <div className={style.grid_ready_chars__img}>
              <img src="/lasertagOperator/svg/char-5.svg" alt={props.characterFiveName} />
            </div>
            <p>{props.characterFiveName}</p>
          </div>
          <div>
            <div className={style.grid_ready_chars__img}>
              <img src="/lasertagOperator/svg/char-6.svg" alt={props.characterSixName} />
            </div>
            <p>{props.characterSixName}</p>
          </div>
        </div>
      </div>
      <div className={style.ready_chars}>
        <div className={`${style.card_left} zoom-animation`} ref={card3Ref} key={card3IsVisible ? "cards-3-card-3-inview" : "cards-3-card-3"}>
          <section>
            <h3>{props.cardTwoTitle}</h3>
            <p className="paragraph">
              {props.cardTwoText}
            </p>
          </section>
          <div className={style.ready_chars_bit_grid}>
            <BlockIconText
              style="ltoBlack"
              icon={<img src="/lasertagOperator/svg/char-constr-1.svg" />}
              title={props.cellTitle}
              text={props.cellText}
            />
            <BlockIconText
              style="ltoBlack"
              icon={<img src="/lasertagOperator/svg/char-constr-2.svg" />}
              title={props.cellTwoTitle}
              text={props.cellTwoText}
            />
            <BlockIconText
              style="ltoBlack"
              icon={<img src="/lasertagOperator/svg/char-constr-3.svg" />}
              title={props.cellThreeTitle}
              text={props.cellThreeText}
            />
            <BlockIconText
              style="ltoBlack"
              icon={<img src="/lasertagOperator/svg/char-constr-4.svg" />}
              title={props.cellFourTitle}
              text={props.cellFourText}
            />
            <BlockIconText
              style="ltoBlack"
              icon={<img src="/lasertagOperator/svg/char-constr-6.svg" />}
              title={props.cellFiveTitle}
              text={props.cellFiveText}
            />
            <BlockIconText
              style="ltoBlack"
              icon={<img src="/lasertagOperator/svg/char-constr-5.svg" />}
              title={props.cellSixTitle}
              text={props.cellSixText}
            />
          </div>
        </div>
        <div className={`${style.card} zoom-animation animated-second`} ref={card4Ref} key={card4IsVisible ? "cards-3-card-4-inview" : "cards-3-card-4"}>
          <section>
            <h3>{props.cardThreeTitle}</h3>
            <p className="paragraph">
              {props.cardThreeText}
            </p>
          </section>
          <div className={style.ready_chars__img_long}>
            <Image
              src={props.firstImage ? props.firstImage : "/lasertagOperator/accessToolbar.png"}
              layout="responsive"
              width={310}
              height={620}
            />
          </div>
        </div>
      </div>
    </>
  )
}