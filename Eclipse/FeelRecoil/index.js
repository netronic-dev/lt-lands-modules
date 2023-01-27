import styles from './style.module.scss';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const FeelRecoil = (props) => {
    return (
        <section
            className={
                props.black ? styles.feels_recoil_black : styles.feels_recoil
            }
        >
            <div className='container'>
                <div className={styles.has_text_centered}>
                    <Fade flash delay={300} triggerOnce>
                        {props.span ? (
                            <h2 className={styles.title_white}>
                                <span className={styles.blue}>
                                    {props.titleSpan}
                                </span>
                                <br />
                                {props.title}
                            </h2>
                        ) : (
                            <h2 className={styles.title}>{props.title}</h2>
                        )}
                    </Fade>
                    <Fade direction='up' delay={500}>
                        <p className={styles.text}>{props.text}</p>
                    </Fade>
                </div>
            </div>
            <Fade direction='up' delay={200} triggerOnce>
                {props.image ? (
                    <div className='container'>
                        <div className={styles.image}>
                            <Image
                                src={props.imageSrc}
                                layout='fill'
                                quality={90}
                                objectFit='cover'
                                objectPosition='50% 0%'
                                alt='bg img'
                            />
                        </div>
                    </div>
                ) : (
                    <video
                        className={styles.video}
                        autoPlay
                        muted
                        loop
                        poster={props.videoPoster}
                    >
                        <source src={props.video} type='video/mp4' />
                    </video>
                )}
            </Fade>
        </section>
    );
};

export default FeelRecoil;
