import Image from 'next/image';
import { InView } from 'react-intersection-observer';

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