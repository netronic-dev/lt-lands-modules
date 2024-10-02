import Image from "next/image";
import style from "./style.module.scss";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";

const PartnershipChoose = (props) => {
  const [inViewCount, setInViewCount] = useState(false);
  return (
    <section className={style.main}>
      <div className="container">
        <div className={style.content}>
          <h2 className={style.title}>{props.title}</h2>
          <p className={style.text}>{props.text}</p>
          <div className={style.image}>
            <Image
              src={props.image}
              alt={props.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={style.image_res}>
            <Image
              src={props.image_res}
              alt={props.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className={style.advantages}>
            {props.data.map((item, index) => (
              <div className={style.cell} key={index}>
                <div className={style.icon}>
                  <Image
                    className={style.icon_image}
                    src={item.icon}
                    alt="Why choose us icon"
                  />
                </div>
                <div className={style.description}>
                  <span className={style.upper_text}>{item.upper_text}</span>
                  <InView onChange={setInViewCount} triggerOnce>
                    {({ ref, inView }) => (
                      <div className={style.count_wrapper} ref={ref}>
                        {inViewCount ? (
                          item.number1 && item.number2 ? (
                            <div>
                              <CountUp
                                start={0}
                                end={item.number1}
                                duration={3}
                              />{" "}
                              <span>{item.selection_text1}</span>
                              <br />
                              <CountUp
                                start={0}
                                end={item.number2}
                                duration={3}
                              />
                              <span>{item.selection_text2}</span>
                            </div>
                          ) : (
                            <div>
                              <CountUp
                                start={0}
                                end={item.number1}
                                duration={3}
                              />
                              <br />
                              <span>{item.selection_text1}</span>
                            </div>
                          )
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </InView>
                  <span className={style.bottom_text}>{item.bottom_text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipChoose;
