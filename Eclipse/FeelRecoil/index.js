import styles from './style.module.scss';

const FeelRecoil = (props) => {
    return (
        <section className={styles.feels_recoil}>
            <div className={styles.container}>
                <div className={styles.has_text_centered}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.text}>
                        {props.text}
                    </p>
                </div>
            </div>
            <video className={styles.video} autoPlay muted loop poster={props.image}><source src={props.video} type="video/mp4" /></video>
        </section>
    )
}

export default FeelRecoil;