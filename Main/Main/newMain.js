import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.scss";
import { FillButton, Button } from "../../../lt-modules/Buttons";
import BannerSlide from "../../../components/BannerSlider/BannerSlider";
import { Icon } from "../../../components/Icon";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Icon
      name="icon-slider-main-arrow"
      className={className}
      onClick={onClick}
      size={"0px"}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Icon
      name="icon-slider-main-arrow"
      className={className}
      onClick={onClick}
      size={"0px"}
    />
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dotsClass: `slick-dots ${style.dots}`,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  // autoplay: true,
  // autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 743,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
};

export default function NewMainMain(props) {
  return (
    <>
      <Slider {...settings} className={style.customSlider}>
        <BannerSlide
          logoImg="/blog/iaapa-expo-europe-2024/logo.png"
          spanTitle="Visit NETRONIC"
          title="at Amusement Expo 2025"
          subtitle="Amusement Expo International 2025 - a business event for entertainment professionals"
          dateName="Date"
          date="March 19-20, 2025"
          placeName="Location"
          place="Las Vegas Convention Center, Las Vegas, USA"
          standName="Booth"
          stand="#1549"
          buttonText="Register Now"
          registerLink="https://netronic.net/amusement-expo-international-2025"
        />
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
                alt="image"
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
                alt="image"
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
              {props.eventButtonLink && (
                <div>
                  <a href={props.eventButtonLink}>
                    <FillButton
                      className={style.event_button}
                      style="whiteBlack"
                      text={props.eventButtonText}
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </Slider>
    </>
  );
}
