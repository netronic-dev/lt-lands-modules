import { Fade } from 'react-awesome-reveal';
import { useInView } from 'react-hook-inview';
import SliderCards from '../../../lt-modules/Slider/SliderCards';
import style from './style.module.scss';

function InDetails(props) {
    const [sliderRef, isSliderVisible] = useInView({
        unobserveOnEnter: true,
    });
    return (
        <div
            className={
                props.dark ? style.toWatchSlider_dark : style.toWatchSlider
            }
            ref={sliderRef}
            key={isSliderVisible ? 1 : 2}
        >
            {props.span ? (
                <Fade direction='up' triggerOnce>
                    <h2 className={style.h2}>
                        <span className={style.blue}>{props.spanTitle}</span>{' '}
                        {props.title}
                    </h2>
                </Fade>
            ) : (
                <Fade direction='up' triggerOnce>
                    <h2 className={style.h2}>{props.title}</h2>
                </Fade>
            )}

            <SliderCards sliderData={props.data} />
        </div>
    );
}

export default InDetails;
