import style from './styles.module.scss';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import dot from '../../../../public/accessories/nebula/dot.svg';

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
                width='330'
                height='330'
                viewBox='0 0 330 150'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='10'
                    cy='150'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='8'
                    y1='152'
                    x2='220'
                    y2='0'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='220'
                    y1='0'
                    x2='322'
                    y2='0'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='320'
                    cy='0'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content}>
                    <Image src={dot} alt='dot' />
                    <div className={style.block_descr}>
                        <p className={style.block_text}>
                            However, you can also activate the grenade without
                            the pin by simply pressing the function button.
                        </p>
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
                width='180'
                height='140'
                viewBox='0 0 180 140'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='8'
                    cy='8'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='8'
                    y1='8'
                    x2='90'
                    y2='132'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='90'
                    y1='132'
                    x2='142'
                    y2='132'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='142'
                    cy='132'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content_laptop_laptop}>
                    <Image src={dot} alt='dot' />
                    <div className={style.block_descr}>
                        <p className={style.block_text}>
                            However, you can also activate the grenade without
                            the pin by simply pressing the function button.
                        </p>
                    </div>
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
                width='100'
                height='150'
                viewBox='0 0 100 150'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='8'
                    cy='8'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='8'
                    y1='8'
                    x2='92'
                    y2='8'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='92'
                    y1='8'
                    x2='92'
                    y2='142'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='92'
                    cy='142'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content_mobile}>
                    <Image src={dot} alt='dot' width={50} height={50}/>
                    <div className={style.block_descr}>
                        <p className={style.block_text}>
                            However, you can also activate the grenade without
                            the pin by simply pressing the function button.
                        </p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export { ButtonPointer, ButtonPointerLaptop, ButtonPointerMobile };
