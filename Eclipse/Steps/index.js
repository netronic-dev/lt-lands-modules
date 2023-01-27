import styles from './style.module.scss';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const Steps = (props) => {
    return (
        <section className={props.black ? styles.steps_black : styles.steps}>
            <div className='container'>
                <div className={styles.has_text_centered}>
                    <Fade flash delay={300} triggerOnce>
                        <h2 className={styles.title}>
                            <span className={styles.blue}>
                                {props.titleSpan}
                            </span>
                            <br />
                            {props.title}
                        </h2>
                    </Fade>
                    <Fade direction='up' delay={300}>
                        <p className={styles.text}>{props.text}</p>
                    </Fade>
                    {props.icon ? (
                        <Fade flash triggerOnce>
                            <div className={styles.icon_step}>
                                <Image
                                    src={props.iconSrc}
                                    alt='icon'
                                    width={68}
                                    height={68}
                                />
                            </div>
                        </Fade>
                    ) : (
                        ''
                    )}
                    {props.large ? (
                        <div className={styles.image_cont_large}>
                            <Fade direction='up' delay={200} triggerOnce>
                                <div className={styles.image_large}>
                                    <Image
                                        src={props.image}
                                        layout='fill'
                                        quality={90}
                                        objectFit='cover'
                                        objectPosition='50% 0%'
                                        alt='bg img'
                                    />
                                </div>
                            </Fade>
                        </div>
                    ) : (
                        <div className={styles.image_cont}>
                            <Fade direction='up' delay={200} triggerOnce>
                                <div className={styles.image}>
                                    <Image
                                        src={props.image}
                                        layout='fill'
                                        quality={90}
                                        objectFit='cover'
                                        objectPosition='50% 0%'
                                        alt='bg img'
                                    />
                                </div>
                            </Fade>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Steps;
