import Image from 'next/image';
import styles from './style.module.scss';
import { Fade } from 'react-awesome-reveal';

const Dignitys = (props) => {
    return (
        <section className={styles.dignitys}>
            <div className={styles.container}>
                <div className={styles.columns}>
                    <Fade flash triggerOnce>
                        <div className={styles.cell}>
                            <Image
                                src={props.cell1Icon}
                                alt='icon'
                                width={props.width}
                                height={props.height}
                            />
                            <h3 className={styles.title}>{props.cell1Title}</h3>
                            <p className={styles.text}>{props.cell1text}</p>
                        </div>
                    </Fade>
                    <Fade flash delay={300} triggerOnce>
                        <div className={styles.cell}>
                            <Image
                                src={props.cell2Icon}
                                alt='icon'
                                width={props.width}
                                height={props.height}
                            />
                            <h3 className={styles.title}>{props.cell2Title}</h3>
                            <p className={styles.text}>{props.cell2text}</p>
                        </div>
                    </Fade>
                    <Fade flash delay={500} triggerOnce>
                        <div className={styles.cell}>
                            <Image
                                src={props.cell3Icon}
                                alt='icon'
                                width={props.width}
                                height={props.height}
                            />
                            <h3 className={styles.title}>{props.cell3Title}</h3>
                            <p className={styles.text}>{props.cell3text}</p>
                        </div>
                    </Fade>
                    <Fade flash delay={600} triggerOnce>
                        <div className={styles.cell}>
                            <Image
                                src={props.cell4Icon}
                                alt='icon'
                                width={props.width}
                                height={props.height}
                            />
                            <h3 className={styles.title}>{props.cell4Title}</h3>
                            <p className={styles.text}>{props.cell4text}</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Dignitys;
