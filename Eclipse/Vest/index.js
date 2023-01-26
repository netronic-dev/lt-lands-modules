import styles from './style.module.scss';
import SliderTwoButtons from '../../../lt-modules/Slider/SliderTwoButtons';
import { Fade } from 'react-awesome-reveal';
import { Button } from '../../../lt-modules/Buttons';

export default function Vest(props) {
    return (
        <>
            <section className={styles.vest}>
                <div className='container'>
                    <Fade direction='up' triggerOnce>
                        <h2 className={styles.title}>
                            {props.title}{' '}
                            <span className={styles.blue}>
                                {props.titleSpan}
                            </span>
                            <br />
                            {props.titleContinue}
                        </h2>
                    </Fade>
                    <Fade direction='up' delay={300} triggerOnce>
                        <div className={styles.buttons_price}>
                            <Button
                                type='catalog'
                                style='blueWhite'
                                text={props.buttonText}
                            />
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce>
                        <SliderTwoButtons
                            downButtons={props.downButtons}
                            sliderData={props.sliderData}
                            listofTitles={
                                props.listTitle || ['Front view', 'Back view']
                            }
                        />
                    </Fade>
                </div>
            </section>
        </>
    );
}
