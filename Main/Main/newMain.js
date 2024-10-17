import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.scss";
import { Fade } from "react-awesome-reveal";
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
  autoplay: true,
  autoplaySpeed: 3000,
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
        <section>
          <BannerSlide
            logoImg="/blog/iaapa-expo-europe-2024/logo.png"
            registerLink="/blog/iaapa-orlando-2024/#register"
            title={
              <>
                at IAAPA EXPO <br /> ORLANDO 2024
              </>
            }
            spanTitle="Visit NETRONIC"
            subtitle="The Ultimate Attractions and Leisure Show in Orlando!"
            dateName="Date"
            date={
              <>
                November 19–22, <br /> 2024
              </>
            }
            placeName="Location"
            place={
              <>
                Orange County Convention Center 9400 Universal Blvd., Orlando,
                Florida
              </>
            }
            standName="Booth"
            stand="#4478"
            buttonText="Register Now"
          />
        </section>
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
