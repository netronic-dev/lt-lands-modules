import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { ColumnsSvgText } from "../../ColumnsSvgText";
import style from "../maverick.module.scss";

export default function MaverickFeaturesTwo(props) {
  return (
    <>
      <div className={style.falconModifications}>
        <Fade direction="up" triggerOnce>
          <div className={style.falconModifications_two_text_box}>
            <h2 className={style.falconModifications_two_title}>
              {props.mainTitle}
            </h2>
            <p className={style.falconModifications_two_text}>{props.text}</p>
          </div>
        </Fade>
        <Fade triggerOnce>
          <Image
            src="/guns/maverick_6.webp"
            alt="Maverick photo"
            layout="responsive"
            width={1600}
            height={702}
          />
        </Fade>
        <div className={style.columnsFalcon}>
          <ColumnsSvgText
            style="black"
            svgOne={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g clip-path="url(#clip0_16_1162)">
                  <mask
                    id="mask0_16_1162"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                  >
                    <rect width="60" height="60" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_16_1162)">
                    <path
                      d="M30 53.75C24.4583 53.75 19.7396 51.8333 15.8438 48C11.9479 44.1667 10 39.5 10 34C10 31.375 10.5104 28.8646 11.5312 26.4688C12.5521 24.0729 14 21.9583 15.875 20.125L30 6.25L44.125 20.125C46 21.9583 47.4479 24.0729 48.4688 26.4688C49.4896 28.8646 50 31.375 50 34C50 39.5 48.0521 44.1667 44.1562 48C40.2604 51.8333 35.5417 53.75 30 53.75ZM15 34H45C45 32.0417 44.625 30.1771 43.875 28.4062C43.125 26.6354 42.0417 25.0833 40.625 23.75L30 13.25L19.375 23.75C17.9583 25.0833 16.875 26.6354 16.125 28.4062C15.375 30.1771 15 32.0417 15 34Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_16_1162">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            titleOne={props.titleOne}
            textOne={props.textOne}
            svgTwo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g clip-path="url(#clip0_16_1156)">
                  <mask
                    id="mask0_16_1156"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="61"
                    height="60"
                  >
                    <rect x="0.15625" width="60" height="60" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_16_1156)">
                    <path
                      d="M21.3125 51.3438C18.875 48.9062 17.6562 45.9583 17.6562 42.5C17.6562 40.5 18.0938 38.6354 18.9688 36.9062C19.8438 35.1771 21.0729 33.7083 22.6562 32.5V12.5C22.6562 10.4167 23.3854 8.64583 24.8438 7.1875C26.3021 5.72917 28.0729 5 30.1562 5C32.2396 5 34.0104 5.72917 35.4688 7.1875C36.9271 8.64583 37.6562 10.4167 37.6562 12.5V32.5C39.2396 33.7083 40.4688 35.1771 41.3438 36.9062C42.2188 38.6354 42.6562 40.5 42.6562 42.5C42.6562 45.9583 41.4375 48.9062 39 51.3438C36.5625 53.7812 33.6146 55 30.1562 55C26.6979 55 23.75 53.7812 21.3125 51.3438ZM27.6562 27.5H32.6562V25H30.1562V22.5H32.6562V17.5H30.1562V15H32.6562V12.5C32.6562 11.7917 32.4167 11.1979 31.9375 10.7188C31.4583 10.2396 30.8646 10 30.1562 10C29.4479 10 28.8542 10.2396 28.375 10.7188C27.8958 11.1979 27.6562 11.7917 27.6562 12.5V27.5Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_16_1156">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            titleTwo={props.titleTwo}
            textTwo={props.textTwo}
            svgThree={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g clip-path="url(#clip0_16_1148)">
                  <mask
                    id="mask0_16_1148"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="-1"
                    width="60"
                    height="61"
                  >
                    <rect y="-0.117188" width="60" height="60" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_16_1148)">
                    <path
                      d="M10 44.8828C7.91667 44.8828 6.14583 44.1536 4.6875 42.6953C3.22917 41.237 2.5 39.4661 2.5 37.3828V22.3828C2.5 20.2995 3.22917 18.5286 4.6875 17.0703C6.14583 15.612 7.91667 14.8828 10 14.8828H45.125L41.125 19.8828H10C9.29167 19.8828 8.69792 20.1224 8.21875 20.6016C7.73958 21.0807 7.5 21.6745 7.5 22.3828V37.3828C7.5 38.0911 7.73958 38.6849 8.21875 39.1641C8.69792 39.6432 9.29167 39.8828 10 39.8828H39.5625L38.625 44.8828H10ZM44.1875 42.3828L45.9375 32.3828H37.5L49.5 17.3828H50.8125L49.0625 27.3828H57.5L45.5 42.3828H44.1875ZM10 37.3828V22.3828H39.125L27.125 37.3828H10Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_16_1148">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            titleThree={props.titleThree}
            textThree={props.textThree}
          />
        </div>
      </div>
    </>
  );
}
