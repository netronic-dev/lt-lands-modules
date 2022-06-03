import style from "../smart.module.scss"
import Image from "next/image"
import { BlockIconText } from "../../BlockIconText/BlockIconText"
import { Fade } from "react-awesome-reveal"
import { useInView } from "react-hook-inview"

export default function KTBottom(props) {
  const [firstCardsRef, firstCardsIsVisible] = useInView({
    unobserveOnEnter: true
  })
  const [secondCardsRef, secondCardsIsVisible] = useInView({
    unobserveOnEnter: true
  })
  return (
    <div className={style.body_bottom} >
      <div className={style.body_bottom__image} >
        <Fade triggerOnce>
          <Image
            src="/smart/falcon-kt.jpg"
            layout="intrinsic"
            width={1920}
            height={1010}
          />
        </Fade>
      </div>
      <div className={style.bottom_BIT_cards}>
        <div
          className={`${style.cell} zoom-animation`}
          ref={firstCardsRef}
          key={firstCardsIsVisible ? 0 : 1}
        >
          <BlockIconText
            icon={<img src="/smart/svg/icon-4.svg" alt="icon" />}
            title={props.cellTitle}
            text={props.cellText}
            style="black"
          />
        </div>
        <div
          className={`${style.cell} zoom-animation animated-second`}
          key={firstCardsIsVisible ? 2 : 3}
        >
          <BlockIconText
            icon={<img src="/smart/svg/icon-3.svg" alt="icon" />}
            title={props.cellTwoTitle}
            text={props.cellTwoText}
            style="black"
          />
        </div>
        <div
          className={`${style.cell} zoom-animation`}
          ref={secondCardsRef}
          key={secondCardsIsVisible ? 4 : 5}
        >
          <BlockIconText
            icon={<img src="/smart/svg/icon-1.svg" alt="icon" />}
            title={props.cellThreeTitle}
            text={props.cellThreeText}
            style="black"
          />
        </div>
        <div
          className={`${style.cell} zoom-animation animated-second`}
          key={secondCardsIsVisible ? 6 : 7}
        >
          <BlockIconText
            icon={<img src="/smart/svg/icon-2.svg" alt="icon" />}
            title={props.cellFourTitle}
            text={props.cellFourText}
            style="black"
          />
        </div>
      </div>
    </div>
  )
}