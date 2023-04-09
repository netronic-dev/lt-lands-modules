import style from './style.module.scss';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import speaker from '../../../../public/accessories/nebula/speaker.svg';
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

const SpeakerPointer = () => {
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
                    cx='224'
                    cy='6'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='224'
                    y1='6'
                    x2='110'
                    y2='124'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='110'
                    y1='124'
                    x2='6'
                    y2='124'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='6'
                    cy='124'
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
                            src={speaker}
                            alt='pointer'
                            width='77px'
                            height='77px'
                        />
                    </div>
                    <div className={style.block_descr}>
                        <p className={style.block_text}>SPEAKER</p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

const SpeakerPointerLaptop = () => {
    const [content, setContent] = useState(false);
    setTimeout(() => {
        setContent(true);
    }, 2000);
    return (
        <>
            <motion.svg
                width='160'
                height='90'
                viewBox='0 0 160 90'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='154'
                    cy='6'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='154'
                    y1='6'
                    x2='76'
                    y2='84'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='76'
                    y1='84'
                    x2='6'
                    y2='84'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='6'
                    cy='84'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content_laptop}>
                    <Link
                        href='/equipment/accessories/lasertag-grenade-nebula#speaker'
                        scroll={false}
                    >
                        <div className={style.pointer}>
                            <Image
                                src={speaker}
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

const SpeakerPointerMobile = () => {
    const [content, setContent] = useState(false);
    setTimeout(() => {
        setContent(true);
    }, 2000);
    return (
        <>
            <motion.svg
                width='52'
                height='48'
                viewBox='0 0 52 48'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle_mob}
                    cx='48'
                    cy='4'
                    r='4'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line_mob}
                    x1='48'
                    y1='4'
                    x2='26'
                    y2='44'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line_mob}
                    x1='26'
                    y1='44'
                    x2='4'
                    y2='44'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle_mob}
                    cx='4'
                    cy='44'
                    r='4'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content_mobile}>
                    <Link
                        href='/equipment/accessories/lasertag-grenade-nebula#speaker'
                        scroll={false}
                    >
                        <div className={style.pointer}>
                            <Image
                                src={speaker}
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

export { SpeakerPointer, SpeakerPointerLaptop, SpeakerPointerMobile };
