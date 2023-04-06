import Image from 'next/image';
import { InView, useInView } from 'react-intersection-observer';

import style from './style.module.scss';
import CountUp from 'react-countup';
import { useState } from 'react';

const Description = (props) => {
    const [inView, setInView] = useState(false);
    const [inViewCount, setInViewCount] = useState(false);

    return (
        <section className={style.main}>
            <div className={`container ${style.container}`}>
                <div className={style.content}>
                    <h2 className={style.title}>{props.title}</h2>
                    <p className={style.subtitle}>{props.subtitle}</p>
                    <div className={style.cells_wrapper}>
                        <div className={style.cell}>
                            <InView onChange={setInView} triggerOnce>
                                {({ ref, inView }) => (
                                    <h3 className={style.cell_title} ref={ref}>
                                        {props.cell1_title}
                                    </h3>
                                )}
                            </InView>
                            <p className={style.cell_text}>
                                {props.cell1_text}
                            </p>
                        </div>
                        <div className={style.cell}>
                            <h3 className={style.cell_title}>
                                {props.cell2_title}
                            </h3>
                            <p className={style.cell_text}>
                                {props.cell2_text}
                            </p>
                        </div>
                        <div className={style.cell}>
                            <div>
                                <h3 className={style.cell_title}>
                                    {props.cell3_title}
                                </h3>
                                <p
                                    className={`${style.cell_text} ${style.last_cell_text}`}
                                >
                                    {props.cell3_text}
                                </p>
                            </div>
                            <div className={style.downstairs_text}>
                                <h3 className={style.cell_title}>
                                    {props.cell3_2_title}
                                </h3>
                                <p
                                    className={`${style.cell_text} ${style.last_cell_text}`}
                                >
                                    {props.cell3_2_text}
                                </p>
                            </div>
                        </div>
                        <div className={`${style.cell} ${style.last_cell}`}>
                            <div className={style.cell_icons}>
                                <div
                                    className={`${style.icon_wrapper} ${style.timer_icon}`}
                                >
                                    <Image src={props.timer_icon} alt='icon' />
                                </div>
                                <div className={style.text_wrapper}>
                                    <InView
                                        onChange={setInViewCount}
                                        triggerOnce
                                    >
                                        {({ ref, inView }) => (
                                            <div
                                                className={style.count_wrapper}
                                                ref={ref}
                                            >
                                                {inViewCount ? (
                                                    props.hoursNumber ? (
                                                        <CountUp
                                                            start={0}
                                                            end={
                                                                props.hoursNumber
                                                            }
                                                            duration={3}
                                                        />
                                                    ) : (
                                                        props.hoursNumber
                                                    )
                                                ) : (
                                                    ''
                                                )}
                                                <span>hours</span>
                                            </div>
                                        )}
                                    </InView>
                                    <div className={style.count_wrapper}>
                                        {inViewCount ? (
                                            props.timesNumber ? (
                                                <CountUp
                                                    start={0}
                                                    end={props.timesNumber}
                                                    duration={3}
                                                />
                                            ) : (
                                                props.timesNumber
                                            )
                                        ) : (
                                            ''
                                        )}
                                        <span>times</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cell_icons}>
                                <div className={style.icon_wrapper}>
                                    <Image
                                        src={props.granede_icon}
                                        alt='icon'
                                    />
                                </div>
                                <div className={style.text_wrapper}>
                                    <div className={style.count_wrapper}>
                                        {inViewCount ? (
                                            props.gramsNumber ? (
                                                <CountUp
                                                    start={0}
                                                    end={props.gramsNumber}
                                                    duration={3}
                                                />
                                            ) : (
                                                props.gramsNumber
                                            )
                                        ) : (
                                            ''
                                        )}
                                        <span>grams</span>
                                    </div>
                                    <div className={style.count_wrapper}>
                                        {inViewCount ? (
                                            props.throwsNumber ? (
                                                <CountUp
                                                    start={0}
                                                    end={props.throwsNumber}
                                                    duration={3}
                                                />
                                            ) : (
                                                props.throwsNumber
                                            )
                                        ) : (
                                            ''
                                        )}
                                        <span>throws</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        inView
                            ? `${style.bg_eclipse} ${style.fade_animation_right}`
                            : style.bg_eclipse
                    }
                >
                    <Image src={props.back} alt='bacground eclipse swadow' />
                </div>
                <div
                    className={
                        inView
                            ? `${style.bg_eclipse_mob} ${style.fade_animation_right_mob}`
                            : style.bg_eclipse_mob
                    }
                >
                    <Image src={props.back} alt='bacground eclipse swadow' />
                </div>
            </div>
        </section>
    );
};

export default Description;

// const back = (
//     <svg
//         width='1103'
//         height='612'
//         viewBox='0 0 1103 612'
//         fill='none'
//         xmlns='http://www.w3.org/2000/svg'
//     >
//         <g filter='url(#filter0_f_380_454)'>
//             <ellipse
//                 cx='551.594'
//                 cy='164.984'
//                 rx='107.193'
//                 ry='232.925'
//                 transform='rotate(-73.7812 551.594 164.984)'
//                 fill='url(#paint0_linear_380_454)'
//             />
//         </g>
//         <defs>
//             <filter
//                 id='filter0_f_380_454'
//                 x='0.917969'
//                 y='-281.795'
//                 width='1101.35'
//                 height='893.559'
//                 filterUnits='userSpaceOnUse'
//                 color-interpolation-filters='sRGB'
//             >
//                 <feFlood flood-opacity='0' result='BackgroundImageFix' />
//                 <feBlend
//                     mode='normal'
//                     in='SourceGraphic'
//                     in2='BackgroundImageFix'
//                     result='shape'
//                 />
//                 <feGaussianBlur
//                     stdDeviation='162.5'
//                     result='effect1_foregroundBlur_380_454'
//                 />
//             </filter>
//             <linearGradient
//                 id='paint0_linear_380_454'
//                 x1='551.594'
//                 y1='-67.9407'
//                 x2='551.594'
//                 y2='397.909'
//                 gradientUnits='userSpaceOnUse'
//             >
//                 <stop stop-color='#0090FF' />
//                 <stop
//                     offset='0.523958'
//                     stop-color='#1B97F7'
//                     stop-opacity='0.41'
//                 />
//                 <stop offset='1' stop-color='#0090FF' stop-opacity='0.04' />
//             </linearGradient>
//         </defs>
//     </svg>
// );
