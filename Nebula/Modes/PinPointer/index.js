import style from './styles.module.scss';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import pin from '../../../../public/accessories/nebula/Pin.png';
import pointer from '../../../../public/accessories/nebula/pointer.svg';
import pointer_reverse from '../../../../public/accessories/nebula/pointer_reverse.svg';

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

const PinPointer = () => {
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
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='220'
                    y1='120'
                    x2='110'
                    y2='10'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='110'
                    y1='10'
                    x2='0'
                    y2='10'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='8'
                    cy='10'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content}>
                    <div className={style.icons}>
                        <Image src={pin} alt='pin' className={style.pin} />
                        <div className={style.pointer}>
                            <Image
                                src={pointer}
                                alt='pointer'
                                width='77px'
                                height='77px'
                            />
                        </div>
                    </div>
                    <div className={style.block_descr}>
                        <p className={style.block_text}>
                            This grenade is supplied witha pin. By pulling it
                            you startthe timer before the supposed "explosion".
                        </p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

const PinPointerLaptop = () => {
    const [content, setContent] = useState(false);
    setTimeout(() => {
        setContent(true);
    }, 2000);
    return (
        <>
            <motion.svg
                width='100'
                height='100'
                viewBox='0 0 100 100'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='92'
                    cy='92'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='92'
                    y1='92'
                    x2='60'
                    y2='8'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='60'
                    y1='8'
                    x2='8'
                    y2='8'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='8'
                    cy='10'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content_laptop}>
                    <div className={style.icons}>
                        <div className={style.pin}>
                            <Image src={pin} alt='pin' />
                        </div>
                        <div className={style.pointer}>
                            <Image
                                src={pointer}
                                alt='pointer'
                                width='77px'
                                height='77px'
                            />
                        </div>
                    </div>
                    <div className={style.block_descr}>
                        <p className={style.block_text}>
                            This grenade is supplied witha pin. By pulling it
                            you startthe timer before the supposed "explosion".
                        </p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

const PinPointerMobile = () => {
    const [content, setContent] = useState(false);
    setTimeout(() => {
        setContent(true);
    }, 2000);
    return (
        <>
            <motion.svg
                width='50'
                height='100'
                viewBox='0 0 50 100'
                initial='hidden'
                animate='visible'
            >
                <motion.circle
                    className={style.circle}
                    cx='8'
                    cy='92'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={0}
                />
                <motion.line
                    className={style.line}
                    x1='8'
                    y1='92'
                    x2='8'
                    y2='8'
                    stroke='white'
                    variants={draw}
                    custom={0.2}
                />
                <motion.line
                    className={style.line}
                    x1='8'
                    y1='8'
                    x2='42'
                    y2='8'
                    stroke='white'
                    variants={draw}
                    custom={1.5}
                />
                <motion.circle
                    className={style.circle}
                    cx='42'
                    cy='8'
                    r='8'
                    stroke='white'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            {content ? (
                <div className={style.content_mobile}>
                    <div className={style.icons}>
                        <div className={style.pin}>
                            <Image src={pin} alt='pin' />
                        </div>
                        <div className={style.pointer}>
                            <Image
                                src={pointer}
                                alt='pointer'
                                width='77px'
                                height='77px'
                            />
                        </div>
                    </div>
                    <div className={style.block_descr}>
                        <p className={style.block_text}>
                            This grenade is supplied witha pin. By pulling it
                            you startthe timer before the supposed "explosion".
                        </p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export { PinPointer, PinPointerLaptop, PinPointerMobile };
