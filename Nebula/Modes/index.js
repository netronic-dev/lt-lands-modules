import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';

import style from './style.module.scss';
import {
    ButtonPointer,
    ButtonPointerLaptop,
    ButtonPointerMobile,
} from './ButtonPointer';
import { PinPointer, PinPointerLaptop, PinPointerMobile } from './PinPointer';
import stars from '../../../public/accessories/nebula/stars.png';
import ellipse_stars_bg from '../../../public/accessories/nebula/ellipse_stars_bg.png';
import ellipse_stars_bg_laptop from '../../../public/accessories/nebula/ellipse_stars_bg_laptop.png';
import ellipse_stars_bg_mob from '../../../public/accessories/nebula/ellipse_stars_bg_mob.png';

const Modes = (props) => {
    const [inView, setInView] = useState(false);
    const [inViewStars, setInViewStars] = useState(false);

    return (
        <section className={style.modes}>
            <div className='container'>
                <h2 className={style.title}>{props.title}</h2>
                <InView onChange={setInViewStars} triggerOnce>
                    {({ ref, inView }) => (
                        <di className={style.modes_row} ref={ref}>
                            <div className={style.mode_cell}>
                                <div className={style.mode_number}>{one} </div>
                                <p className={style.mode_text}>{props.mode1_text}</p>
                            </div>
                            <div className={style.mode_cell}>
                                <div className={style.mode_number}>{two}</div>
                                <p className={style.mode_text}>{props.mode2_text}</p>
                            </div>
                        </di>
                    )}
                </InView>
                <div className={style.work_description}>
                    <div className={style.description_bg} >
                        <Image
                            src={props.description_bg}
                            alt='description background'
                        />
                    </div>
                    <div className={style.description_granade}>
                        <Image
                            src={props.description_granade}
                            alt='description granade'
                        />
                    </div>
                    <div className={style.button_pointer_wrap}>
                        <InView onChange={setInView} triggerOnce>
                            {({ ref, inView }) => (
                                <>
                                    <div
                                        className={style.button_pointer}
                                        ref={ref}
                                    >
                                        {inView ? <ButtonPointer /> : ''}
                                    </div>
                                </>
                            )}
                        </InView>
                    </div>
                    <div className={style.button_pointer_wrap_laptop}>
                        <InView onChange={setInView} triggerOnce>
                            {({ ref, inView }) => (
                                <>
                                    <div
                                        className={style.pin_pointer}
                                        ref={ref}
                                    >
                                        {inView ? <ButtonPointerLaptop /> : ''}
                                    </div>
                                </>
                            )}
                        </InView>
                    </div>
                    <div className={style.button_pointer_wrap_mobile}>
                        <InView onChange={setInView} triggerOnce>
                            {({ ref, inView }) => (
                                <>
                                    <div
                                        className={style.pin_pointer}
                                        ref={ref}
                                    >
                                        {inView ? <ButtonPointerMobile /> : ''}
                                    </div>
                                </>
                            )}
                        </InView>
                    </div>
                    <div className={style.pin_pointer_wrap}>
                        <InView onChange={setInView} triggerOnce>
                            {({ ref, inView }) => (
                                <>
                                    <div
                                        className={style.pin_pointer}
                                        ref={ref}
                                    >
                                        {inView ? <PinPointer /> : ''}
                                    </div>
                                </>
                            )}
                        </InView>
                    </div>
                    <div className={style.pin_pointer_wrap_mobile}>
                        <InView onChange={setInView} triggerOnce>
                            {({ ref, inView }) => (
                                <>
                                    <div
                                        className={style.pin_pointer}
                                        ref={ref}
                                    >
                                        {inView ? <PinPointerMobile /> : ''}
                                    </div>
                                </>
                            )}
                        </InView>
                    </div>
                    <div className={style.pin_pointer_wrap_laptop}>
                        <InView onChange={setInView} triggerOnce>
                            {({ ref, inView }) => (
                                <>
                                    <div
                                        className={style.pin_pointer}
                                        ref={ref}
                                    >
                                        {inView ? <PinPointerLaptop /> : ''}
                                    </div>
                                </>
                            )}
                        </InView>
                    </div>
                </div>
                <div className={inViewStars
                    ? `${style.stars} ${style.fade_animation}`
                    : style.stars}>
                    <Image src={stars} alt='stars' />
                </div>
                <div className={inViewStars
                    ? `${style.stars_laptop} ${style.fade_animation}`
                    : style.stars_laptop}>
                    <Image src={stars} alt='stars' />
                </div>
                <div className={inViewStars
                    ? `${style.stars_mobile} ${style.fade_animation}`
                    : style.stars_mobile}>
                    <Image src={stars} alt='stars' />
                </div>
                <div className={style.ellipse_stars_bg}>
                    <Image src={ellipse_stars_bg} alt='stars' />
                </div>
                <div className={style.ellipse_stars_bg_laptop}>
                    <Image src={ellipse_stars_bg_laptop} alt='stars' />
                </div>
                <div className={style.ellipse_stars_bg_mobile}>
                    <Image src={ellipse_stars_bg_mob} alt='stars' />
                </div>
            </div>
        </section>
    );
};

export default Modes;

const one = (
    <svg
        width='64'
        height='65'
        viewBox='0 0 64 65'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M32.0184 59.1666C28.3413 59.1666 24.8858 58.4666 21.6517 57.0666C18.4177 55.6666 15.5895 53.7555 13.1673 51.3332C10.7451 48.911 8.83398 46.0812 7.43398 42.8438C6.03398 39.6065 5.33398 36.1474 5.33398 32.4666C5.33398 28.7857 6.03398 25.3267 7.43398 22.0893C8.83398 18.8519 10.7451 16.0333 13.1673 13.6333C15.5895 11.2333 18.4193 9.33325 21.6567 7.93325C24.8941 6.53325 28.3531 5.83325 32.034 5.83325C35.7148 5.83325 39.1739 6.53325 42.4112 7.93325C45.6486 9.33325 48.4673 11.2333 50.8673 13.6333C53.2673 16.0333 55.1673 18.8555 56.5673 22.0999C57.9673 25.3444 58.6673 28.8051 58.6673 32.4822C58.6673 36.1593 57.9673 39.6148 56.5673 42.8489C55.1673 46.0829 53.2673 48.9069 50.8673 51.321C48.4673 53.735 45.6451 55.6461 42.4007 57.0543C39.1562 58.4625 35.6954 59.1666 32.0184 59.1666ZM32.034 55.1666C38.3229 55.1666 43.6673 52.9555 48.0673 48.5332C52.4673 44.111 54.6673 38.7555 54.6673 32.4666C54.6673 26.1777 52.4715 20.8333 48.0798 16.4333C43.6882 12.0333 38.3284 9.83325 32.0006 9.83325C25.734 9.83325 20.3895 12.0291 15.9673 16.4207C11.5451 20.8124 9.33398 26.1721 9.33398 32.4999C9.33398 38.7666 11.5451 44.111 15.9673 48.5332C20.3895 52.9555 25.7451 55.1666 32.034 55.1666ZM31.4673 46.0332H35.4673V18.9666H25.934V22.9666H31.4673V46.0332Z'
            fill='white'
        />
    </svg>
);

const two = (
    <svg
        width='64'
        height='65'
        viewBox='0 0 64 65'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M32.0184 59.1666C28.3413 59.1666 24.8858 58.4666 21.6517 57.0666C18.4177 55.6666 15.5895 53.7555 13.1673 51.3332C10.7451 48.911 8.83398 46.0812 7.43398 42.8438C6.03398 39.6065 5.33398 36.1474 5.33398 32.4666C5.33398 28.7857 6.03398 25.3267 7.43398 22.0893C8.83398 18.8519 10.7451 16.0333 13.1673 13.6333C15.5895 11.2333 18.4193 9.33325 21.6567 7.93325C24.8941 6.53325 28.3531 5.83325 32.034 5.83325C35.7148 5.83325 39.1739 6.53325 42.4112 7.93325C45.6486 9.33325 48.4673 11.2333 50.8673 13.6333C53.2673 16.0333 55.1673 18.8555 56.5673 22.0999C57.9673 25.3444 58.6673 28.8051 58.6673 32.4822C58.6673 36.1593 57.9673 39.6148 56.5673 42.8489C55.1673 46.0829 53.2673 48.9069 50.8673 51.321C48.4673 53.735 45.6451 55.6461 42.4007 57.0543C39.1562 58.4625 35.6954 59.1666 32.0184 59.1666ZM32.034 55.1666C38.3229 55.1666 43.6673 52.9555 48.0673 48.5332C52.4673 44.111 54.6673 38.7555 54.6673 32.4666C54.6673 26.1777 52.4715 20.8333 48.0798 16.4333C43.6882 12.0333 38.3284 9.83325 32.0006 9.83325C25.734 9.83325 20.3895 12.0291 15.9673 16.4207C11.5451 20.8124 9.33398 26.1721 9.33398 32.4999C9.33398 38.7666 11.5451 44.111 15.9673 48.5332C20.3895 52.9555 25.7451 55.1666 32.034 55.1666ZM37.6673 46.0332C38.234 46.0332 38.709 45.8405 39.0923 45.4549C39.4757 45.0693 39.6673 44.5915 39.6673 44.0216C39.6673 43.4516 39.4757 42.9777 39.0923 42.5999C38.709 42.2221 38.234 42.0332 37.6673 42.0332H28.334V34.3666H35.6673C36.734 34.3666 37.6673 33.9666 38.4673 33.1666C39.2673 32.3666 39.6673 31.4333 39.6673 30.3666V22.9666C39.6673 21.8999 39.2673 20.9666 38.4673 20.1666C37.6673 19.3666 36.734 18.9666 35.6673 18.9666H26.334C25.7673 18.9666 25.2923 19.1594 24.909 19.5449C24.5257 19.9305 24.334 20.4083 24.334 20.9783C24.334 21.5483 24.5257 22.0221 24.909 22.3999C25.2923 22.7777 25.7673 22.9666 26.334 22.9666H35.6673V30.3666H28.334C27.2673 30.3666 26.334 30.7666 25.534 31.5666C24.734 32.3666 24.334 33.2999 24.334 34.3666V44.0332C24.334 44.5999 24.5257 45.0749 24.909 45.4582C25.2923 45.8416 25.7673 46.0332 26.334 46.0332H37.6673Z'
            fill='white'
        />
    </svg>
);
