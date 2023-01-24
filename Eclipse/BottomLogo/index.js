import Image from 'next/image';
import { Button } from '../../../lt-modules/Buttons';
import styles from './style.module.scss';

const BottomLogo = (props) => {
    return (
        <section className={styles.bottom_logo}>
            <div className='container'>
                <div className={styles.bottom_content}>
                    <div className={styles.bottom_image}>
                        <Image
                            src={props.src}
                            width={props.width}
                            height={props.height}
                            alt='bottom logo'
                        />
                    </div>
                    <div className={styles.buttons_price}>
                        <Button
                            type='catalog'
                            style='blueWhite'
                            text={props.buttonText}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BottomLogo;
