import style from './styles.module.scss';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import dot from '../../../../public/accessories/nebula/dot.svg';
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

const ButtonPointer = () => {
    const [content, setContent] = useState(false);

    setTimeout(() => {
        setContent(true);
    }, 2000);

    return (
        <>
            <motion.svg
                width='230'
                height='150'
                viewBox='0 0 230 150'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='6'
                    cy='144'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='6'
                    y1='144'
                    x2='120'
                    y2='6'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='120'
                    y1='6'
                    x2='224'
                    y2='6'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='224'
                    cy='6'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content}>
                    <Image src={dot} alt='dot' width={70} height={70}/>
                    <div className={style.block_descr}>
                        <p className={style.block_text}>FUNCTIONAL BUTTON</p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

const ButtonPointerLaptop = () => {
    const [content, setContent] = useState(false);

    setTimeout(() => {
        setContent(true);
    }, 2000);

    return (
        <>
            <motion.svg
                width='220'
                height='130'
                viewBox='0 0 220 130'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='6'
                    cy='124'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='6'
                    y1='124'
                    x2='140'
                    y2='6'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='140'
                    y1='6'
                    x2='214'
                    y2='6'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='214'
                    cy='6'
                    r='6'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content_laptop_laptop}>
                    <Link
                        href='/equipment/accessories/lasertag-grenade-nebula#button'
                        scroll={false}
                    >
                        <Image src={dot} alt='dot' width={70} height={70} />
                    </Link>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

const ButtonPointerMobile = () => {
    const [content, setContent] = useState(false);

    setTimeout(() => {
        setContent(true);
    }, 2000);

    return (
        <>
            <motion.svg
                width='80'
                height='80'
                viewBox='0 0 80 80'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle_mob}
                    cx='4'
                    cy='76'
                    r='4'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line_mob}
                    x1='4'
                    y1='76'
                    x2='55'
                    y2='4'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line_mob}
                    x1='55'
                    y1='4'
                    x2='74'
                    y2='4'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle_mob}
                    cx='74'
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
                        href='/equipment/accessories/lasertag-grenade-nebula#button'
                        scroll={false}
                    >
                        <Image src={dot} alt='dot' width={50} height={50} />
                    </Link>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export { ButtonPointer, ButtonPointerLaptop, ButtonPointerMobile };
