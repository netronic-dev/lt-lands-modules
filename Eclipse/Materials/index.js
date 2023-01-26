import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import styles from './style.module.scss';

const Materials = (props) => {
    return (
        <section className={styles.materials}>
            <div className={styles.title_image}>
                <div>
                    <Image
                        src={props.titleImage}
                        layout='fill'
                        quality={90}
                        objectFit='cover'
                        objectPosition='50% 50%'
                        alt='bg img'
                    />
                </div>
                <div className='container'>
                    <div className={styles.title_content}>
                        <p className={styles.subtitle}>{props.subTitle}</p>
                        <h2 className={styles.title}>{props.title}</h2>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.first_grid_card}>
                    <Fade direction='up' delay={200} triggerOnce>
                        <div className={styles.first_card}>
                            <div
                                className={`${styles.content} ${styles.content_mob}`}
                            >
                                <h3 className={styles.card_title}>
                                    {props.firstCardTitle}
                                </h3>
                                <p className={styles.card_text}>
                                    {props.firstCardText}
                                </p>
                            </div>
                            <Image
                                src={props.firstCardImage}
                                layout='fill'
                                quality={90}
                                objectFit='cover'
                                objectPosition='50% 50%'
                                alt='bg img'
                            />
                        </div>
                    </Fade>
                    <Fade direction='up' delay={500} triggerOnce>
                        <div className={styles.first_card}>
                            <div className={styles.content}>
                                <h3 className={styles.card_title}>
                                    {props.secondCardTitle}
                                </h3>
                                <p className={styles.card_text}>
                                    {props.secondCardText}
                                </p>
                            </div>
                            <div className={styles.card_image}>
                                <Image
                                    src={props.secondCardImage}
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
                <div className={styles.second_grid_card}>
                    <Fade direction='up' delay={200} triggerOnce>
                        <div className={styles.second_card}>
                            <div className={styles.content}>
                                <h3 className={styles.card_title}>
                                    {props.thirdCardTitle}
                                </h3>
                                <p className={styles.card_text}>
                                    {props.thirdCardText}
                                </p>
                            </div>
                            <div className={styles.card_image}>
                                <Image
                                    src={props.thirdCardImage}
                                    layout='fill'
                                    quality={90}
                                    objectFit='cover'
                                    objectPosition='50% 0%'
                                    alt='bg img'
                                />
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={500} triggerOnce>
                        <div className={styles.second_card}>
                            <div
                                className={`${styles.content} ${styles.content_mob}`}
                            >
                                <h3 className={styles.card_title}>
                                    {props.fourthCardTitle}
                                </h3>
                                <p className={styles.card_text}>
                                    {props.fourthCardText}
                                </p>
                            </div>
                            <Image
                                src={props.fourthCardImage}
                                layout='fill'
                                quality={90}
                                objectFit='cover'
                                objectPosition='50% 0%'
                                alt='bg img'
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Materials;
