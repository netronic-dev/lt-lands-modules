import style from './style.module.scss';
import Image from 'next/image';
import CountUp from 'react-countup';

const Description = (props) => {
    return (
        <section className={style.main}>
            <div className={`container ${style.container}`}>
                <div className={style.content}>
                    <h2 className={style.title}>{props.title}</h2>
                    <p className={style.subtitle}>{props.subtitle}</p>
                    <div className={style.cells_wrapper}>
                        <div className={style.cell}>
                            <h3 className={style.cell_title}>
                                {props.cell_title}
                            </h3>
                            <p className={style.cell_text}>{props.cell_text}</p>
                        </div>
                        <div className={style.cell}>
                            <h3 className={style.cell_title}>
                                {props.cell_title}
                            </h3>
                            <p className={style.cell_text}>{props.cell_text}</p>
                        </div>
                        <div className={style.cell}>
                            <h3 className={style.cell_title}>
                                {props.cell_title}
                            </h3>
                            <p className={style.cell_text}>{props.cell_text}</p>
                        </div>
                        <div className={`${style.cell} ${style.last_cell}`}>
                            <div className={style.cell_icons}>
                                <div className={style.icon_wrapper}>
                                    <Image src={props.timer_icon} alt='icon' />
                                </div>
                                <div className={style.text_wrapper}>
                                    <div className={style.count_wrapper}>
                                        <CountUp
                                            start={0}
                                            end={props.hoursNumber}
                                            duration={3}
                                        />
                                        <span>hours</span>
                                    </div>
                                    <div className={style.count_wrapper}>
                                        <CountUp
                                            start={0}
                                            end={props.timesNumber}
                                            duration={3}
                                        />
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
                                        <CountUp
                                            start={0}
                                            end={props.gramsNumber}
                                            duration={3}
                                        />
                                        <span>grams</span>
                                    </div>
                                    <div className={style.count_wrapper}>
                                        <CountUp
                                            start={0}
                                            end={props.throwsNumber}
                                            duration={3}
                                        />{' '}
                                        <span>throws</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.bg_eclipse}>
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
