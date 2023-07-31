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
                    <div className={style.advantages_top}>
                        <div className="background">
                            <Image src={props.advantageImage} alt="" layout='fill' />

                        </div>
                        <div className={style.cotent}>
                            <h2 className={style.sectionTitle}>{props.sectionTitle}</h2>
                        </div>
                    </div>
                    {/* <div className={style.cells_wrapper}>
                        {props.data.bottom.map((item, index) => (
                            <div className={style.cell} key={index}>
                                <Image src={item.icon} alt="" width={item.width} height={item.height} />
                                <h3 className={style.cell_title}>
                                    {item.title}
                                </h3>
                                <p className={style.cell_text}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div> */}
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