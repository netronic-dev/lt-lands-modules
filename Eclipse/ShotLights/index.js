import styles from './style.module.scss';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const ShotLight = (props) => {
    return (
        <section className={styles.shotlight}>
            <div className={styles.container}>
                <div className={props.image}>
                    <Fade flash triggerOnce>
                        <Image
                            layout='fill'
                            src={props.image}
                            quality={90}
                            objectFit='contain'
                            objectPosition='0% 0%'
                            alt='bg img'
                        />
                    </Fade>
                </div>
                <div className={styles.content}>
                    <Fade direction='up' triggerOnce>
                        <h2 className={styles.title}>
                            {props.title1Row}
                            <span className={styles.span_blue}>
                                {' '}
                                {props.titleSpan}
                            </span>{' '}
                            {props.title2Row}
                        </h2>
                    </Fade>
                    <Fade direction='up' delay={200} triggerOnce>
                        <p className={styles.text}>{props.text}</p>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default ShotLight;
