import styles from './style.module.scss';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { Button, VideoButton } from '../../../lt-modules/Buttons';
import { BreadCrumbs } from '../../../lt-modules/BreadCrumbs';

const EclipseMain = (props) => {
    return (
        <section className={styles.main}>
            {props.breadcrumbData ? (
                <div className={styles.breadcrumbs}>
                    <div className={styles.breadcrumbs_inner}>
                        <BreadCrumbs
                            color='white'
                            breadcrumbData={props.breadcrumbData}
                        />
                    </div>
                </div>
            ) : (
                ''
            )}
            <div className='container'>
                <div className={styles.bg_image}>
                    <Fade flash triggerOnce>
                        <Image
                            src={props.mainBgImg}
                            alt={props.mainBgImgAlt}
                            width={props.mainBgImgWidth}
                            height={props.mainBgImgHeight}
                        />
                    </Fade>
                </div>
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

                <div className={styles.main_text_wrapp}>
                    <Fade direction='up' triggerOnce>
                        <p className={styles.has_text_white}>{props.text}</p>
                    </Fade>
                </div>

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
