import styles from './style.module.scss';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const Display = (props) => {
    return (
        <section className={styles.display}>
            <div className='container'>
                <Fade flash delay={300} triggerOnce>
                    <h2 className={styles.title}>
                        <span className={styles.blue}>{props.spanTitle}</span>
                        <br />
                        {props.title}
                    </h2>
                </Fade>
                <div className={styles.columns}>
                    <div className={styles.two_column}>
                        <Fade direction='left' delay={300} triggerOnce>
                            <div className={styles.infoCell}>
                                <div className={styles.info_block}>
                                    <div className='mb-1_25'>
                                        <svg
                                            width='45'
                                            height='45'
                                            viewBox='0 0 45 45'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M30 18.75H26.25V22.5H30V18.75ZM30 26.25H26.25V30H30V26.25ZM15 18.75H11.25V22.5H15V18.75ZM22.5 18.75H18.75V22.5H22.5V18.75ZM37.5 7.5H7.5C5.4375 7.5 3.75 9.1875 3.75 11.25V33.75C3.75 35.8125 5.4375 37.5 7.5 37.5H37.5C39.5625 37.5 41.25 35.8125 41.25 33.75V11.25C41.25 9.1875 39.5625 7.5 37.5 7.5ZM37.5 33.75H7.5V11.25H37.5V33.75Z'
                                                fill='white'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className={styles.info_block_title}>
                                        {props.leftCell1Title}
                                    </h3>
                                    <p className={styles.info_block_text}>
                                        {props.leftCell1Text}
                                    </p>
                                </div>
                                <div className={styles.info_block}>
                                    <div className='mb-1_25'>
                                        <svg
                                            width='45'
                                            height='45'
                                            viewBox='0 0 45 45'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M35.625 22.5H31.875V28.125H26.25V31.875H35.625V22.5ZM13.125 16.875H18.75V13.125H9.375V22.5H13.125V16.875ZM39.375 5.625H5.625C3.5625 5.625 1.875 7.3125 1.875 9.375V35.625C1.875 37.6875 3.5625 39.375 5.625 39.375H39.375C41.4375 39.375 43.125 37.6875 43.125 35.625V9.375C43.125 7.3125 41.4375 5.625 39.375 5.625ZM39.375 35.6438H5.625V9.35625H39.375V35.6438Z'
                                                fill='white'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className={styles.info_block_title}>
                                        {props.leftCell2Title}
                                    </h3>
                                    <p className={styles.info_block_text}>
                                        {props.leftCell2Text}
                                    </p>
                                </div>
                                <div className={styles.info_block}>
                                    <div className='mb-1_25'>
                                        <svg
                                            width='45'
                                            height='45'
                                            viewBox='0 0 45 45'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M35.6625 18.75V35.625H9.37498V9.375H26.25V5.625H9.41248C7.34998 5.625 5.66248 7.3125 5.66248 9.375V35.625C5.66248 37.6875 7.34998 39.375 9.41248 39.375H35.6625C37.725 39.375 39.4125 37.6875 39.4125 35.625V18.75H35.6625ZM31.875 18.75L33.6375 14.8875L37.5 13.125L33.6375 11.3625L31.875 7.5L30.1125 11.3625L26.25 13.125L30.1125 14.8875L31.875 18.75ZM24.8437 20.1562L22.5 15L20.1562 20.1562L15 22.5L20.1562 24.8438L22.5 30L24.8437 24.8438L30 22.5L24.8437 20.1562Z'
                                                fill='white'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className={styles.info_block_title}>
                                        {props.leftCell3Title}
                                    </h3>
                                    <p className={styles.info_block_text}>
                                        {props.leftCell3Text}
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction='right' delay={300} triggerOnce>
                            <div className={styles.right_cell_image}>
                                <Image
                                    src={props.rightCellImage}
                                    layout='fill'
                                    quality={90}
                                    objectFit='cover'
                                    objectPosition='50% 50%'
                                    alt='bg img'
                                    className={styles.img_br}
                                />
                            </div>
                        </Fade>
                    </div>
                    <Fade direction='up' delay={300} triggerOnce>
                        <div className={styles.one_column}>
                            <div className={styles.one_column_content}>
                                <h2 className={styles.one_column_title}>
                                    <span className={styles.blue}>
                                        {props.downCellTitleSpan}
                                    </span>{' '}
                                    {props.downCellTitle}
                                </h2>
                                <p className={styles.one_culumn_text}>
                                    {props.downCellText}
                                </p>
                            </div>
                            <div className={styles.one_cell_image}>
                                <Image
                                    src={props.downCellImage}
                                    layout='fill'
                                    quality={90}
                                    objectFit='cover'
                                    objectPosition='50% 50%'
                                    alt='bg img'
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Display;
