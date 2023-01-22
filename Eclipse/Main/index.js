import styles from './style.module.scss';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { Button, VideoButton } from '../../../lt-modules/Buttons';

const EclipseMain = (props) => {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <Fade flash triggerOnce>
                    <Image
                        src={props.mainBgImg}
                        alt={props.mainBgImgAlt}
                        width={props.mainBgImgWidth}
                        height={props.mainBgImgHeight}
                    />
                </Fade>

                <div className={styles.offset_top}>
                    <Fade direction='up' delay={300} triggerOnce>
                        <Image
                            src={props.secongImg}
                            alt={props.secondImgAlt}
                            width={props.secondImgWidth}
                            height={props.secondImgHeight}
                        />
                    </Fade>
                </div>
                <Fade direction='up' triggerOnce>
                    <div className={`${styles.main_text_wrapp}`}>
                        <p
                            className={`is-size-5-mobile is-size-2-tablet has-text-weight-medium ${styles.has_text_white}`}
                        >
                            {props.text}
                        </p>
                    </div>
                </Fade>
                <div className={styles.general__buttons}>
                    <Fade direction='up' delay={300} triggerOnce>
                        <div className={styles.buttons_price}>
                            <Button
                                type='catalog'
                                style='blueWhite'
                                text={props.buttonText}
                            />
                        </div>
                    </Fade>
                    <Fade direction='up' delay={800} triggerOnce>
                        <div className={styles.buttons_video}>
                            <VideoButton
                                link={props.videoLink}
                                text={props.videoButtonText}
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default EclipseMain;
