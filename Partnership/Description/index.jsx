import style from './style.module.scss';

const PartnershipDescription = (props) => {
    return (
        <section className={style.main}>
            <div className='container'>
                <p className={style.text}>{props.text}</p>
            </div>
        </section>
    );
};

export default PartnershipDescription;
