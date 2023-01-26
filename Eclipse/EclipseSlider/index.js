import Image from 'next/image';
import { Fade, Zoom } from 'react-awesome-reveal';
import SliderLand from '../../../lt-modules/Slider/SliderLand';
import styles from './style.module.scss';

const EclipseSlider = (props) => {
    return (
        <>
            <div className={styles.superpower}>
                <Fade direction='up' triggerOnce>
                    <h2 className={styles.title}>
                        {props.title}
                        <br />
                        <span className={styles.blue}>{props.stanTitle}</span>
                    </h2>
                </Fade>
                <Fade direction='up' triggerOnce>
                    <p className={styles.text}>{props.text}</p>
                </Fade>
                <div className={styles.image}>
                    <Image
                        src={props.image}
                        layout='fill'
                        quality={90}
                        objectFit='contain'
                        objectPosition='50% 0%'
                        alt='bg img'
                    />
                </div>

                <div className={styles.slider}>
                    <Fade flash triggerOnce>
                        <SliderLand
                            sliderData={props.sliderData}
                            width={140}
                            height={111}
                        />
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default EclipseSlider;
