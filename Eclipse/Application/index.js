import styles from './style.module.scss';
import Image from 'next/image';

const Application = (props) => {
    return (
        <section className={styles.application}>
            <div className='container'>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        <span className={styles.blue}>{props.titleSpan}</span>
                        <br />
                        {props.title}
                    </h2>
                    <p className={styles.text}>{props.text}</p>
                </div>
                <div className={styles.grid_container}>
                    <div className={styles.grid_row_1}>
                        <div className={styles.grid_cell_row1_side}>
                            <div className={styles.image}>
                                <Image
                                    src={props.image2}
                                    layout='fill'
                                    quality={90}
                                    objectFit='contain'
                                    objectPosition='50% 0%'
                                    alt='bg img'
                                />
                            </div>
                            <p className={styles.cell_text}>{props.text2}</p>
                        </div>
                        <div className={styles.grid_cell_row1_center}>
                            <div className={styles.image}>
                                <Image
                                    src={props.image1}
                                    layout='fill'
                                    quality={90}
                                    objectFit='contain'
                                    objectPosition='50% 0%'
                                    alt='bg img'
                                />
                            </div>
                        </div>
                        <div className={styles.grid_cell_row1_side}>
                            <div className={styles.image}>
                                <Image
                                    src={props.image3}
                                    layout='fill'
                                    quality={90}
                                    objectFit='contain'
                                    objectPosition='50% 0%'
                                    alt='bg img'
                                />
                            </div>
                            <p className={styles.cell_text}>{props.text3}</p>
                        </div>
                    </div>
                    <div className={styles.grid_row_2}>
                        <div className={styles.grid_cell_row_2_side}>
                            <div className={styles.image}>
                                <Image
                                    src={props.image5}
                                    layout='fill'
                                    quality={90}
                                    objectFit='contain'
                                    objectPosition='50% 0%'
                                    alt='bg img'
                                />
                            </div>
                            <p className={styles.cell_text}>{props.text5}</p>
                        </div>
                        <div className={styles.grid_cell_row_2}>
                            <div className={styles.grid_cell_row2_center}>
                                <h3 className={styles.cell_row2__title}>
                                    {props.title4}
                                </h3>
                                <p className={styles.cell_row2_text}>
                                    {props.text4}
                                </p>
                                <div className={styles.icons}>
                                    <Image
                                        src={props.icons}
                                        layout='fill'
                                        quality={90}
                                        objectFit='contain'
                                        objectPosition='50% 0%'
                                        alt='bg img'
                                    />
                                </div>
                            </div>
                            <div className={styles.image}>
                                <Image
                                    src={props.image4}
                                    layout='fill'
                                    quality={90}
                                    objectFit='contain'
                                    objectPosition='50% 0%'
                                    alt='bg img'
                                />
                            </div>
                        </div>
                        <div className={styles.grid_cell_row_2_side}>
                            <div className={styles.image}>
                                <Image
                                    src={props.image6}
                                    layout='fill'
                                    quality={90}
                                    objectFit='contain'
                                    objectPosition='50% 0%'
                                    alt='bg img'
                                />
                            </div>
                            <p className={styles.cell_text}>{props.text6}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Application;
