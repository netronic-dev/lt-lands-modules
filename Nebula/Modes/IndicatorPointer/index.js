import style from './style.module.scss';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import indicator from '../../../../public/accessories/nebula/indicator.svg';
import Link from 'next/link';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 0.5 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
                opacity: { delay, duration: 0.1 },
            },
        };
    },
};

const IndicatorPointer = () => {
    const [content, setContent] = useState(false);
    setTimeout(() => {
        setContent(true);
    }, 2000);
    return (
        <>
            <motion.svg
                width='230'
                height='130'
                viewBox='0 0 230 130'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='220'
                    cy='120'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='220'
                    y1='120'
                    x2='110'
                    y2='6'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='110'
                    y1='6'
                    x2='0'
                    y2='6'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='6'
                    cy='6'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content}>
                    <div className={style.pointer}>
                        <Image
                            src={indicator}
                            alt='pointer'
                            width='77px'
                            height='77px'
                        />
                    </div>
                    <div className={style.block_descr}>
                        <p className={style.block_text}>LIGHT INDICATION.</p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

const IndicatorPointerLaptop = () => {
    const [content, setContent] = useState(false);
    setTimeout(() => {
        setContent(true);
    }, 2000);
    return (
        <>
            <motion.svg
                width='190'
                height='90'
                viewBox='0 0 190 90'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='184'
                    cy='84'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='184'
                    y1='84'
                    x2='70'
                    y2='6'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='70'
                    y1='6'
                    x2='6'
                    y2='6'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='6'
                    cy='6'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content_laptop}>
                    <Link
                        href='/equipment/accessories/lasertag-grenade-nebula#indicator'
                        scroll={false}
                    >
                        <div className={style.pointer}>
                            <Image
                                src={indicator}
                                alt='pointer'
                                width='77px'
                                height='77px'
                            />
                        </div>
                    </Link>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

const IndicatorPointerMobile = () => {
    const [content, setContent] = useState(false);
    setTimeout(() => {
        setContent(true);
    }, 2000);
    return (
        <>
            <motion.svg
                width='95'
                height='50'
                viewBox='0 0 95 50'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle_mob}
                    cx='91'
                    cy='46'
                    r='4'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line_mob}
                    x1='91'
                    y1='46'
                    x2='40'
                    y2='4'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line_mob}
                    x1='40'
                    y1='4'
                    x2='4'
                    y2='4'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle_mob}
                    cx='4'
                    cy='4'
                    r='4'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content_mobile}>
                    <Link
                        href='/equipment/accessories/lasertag-grenade-nebula#light indicator'
                        scroll={false}
                    >
                        <div className={style.pointer}>
                            <Image
                                src={indicator}
                                alt='pointer'
                                width='77px'
                                height='77px'
                            />
                        </div>
                    </Link>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export { IndicatorPointer, IndicatorPointerLaptop, IndicatorPointerMobile };
