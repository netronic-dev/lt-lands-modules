import styles from './style.module.scss';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const ShotLight = (props) => {
    return (
        <section className={styles.shotlight}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <Fade direction='up' delay={300} triggerOnce>
                            <h2 className={styles.title}>
                                {props.title1Row}
                                <span className={styles.span_blue}>
                                    {' '}
                                    {props.titleSpan}
                                </span>{' '}
                                {props.title2Row}
                            </h2>
                        </Fade>
                        <Fade direction='up' delay={300} triggerOnce>
                            <p className={styles.text}>{props.text}</p>
                        </Fade>
                    </div>
                    <div>
                        <Fade flash delay={300} triggerOnce>
                            <div className={styles.image}>
                                <Image
                                    layout='fill'
                                    src={props.image}
                                    quality={90}
                                    objectFit='cover'
                                    objectPosition='50% 0'
                                    alt='bg img'
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShotLight;
