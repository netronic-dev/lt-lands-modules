import Image from 'next/image';
import style from './style.module.scss';

const PartnershipAdvantages = (props) => {
    return (
        <section className={style.main}>
            <div className='container'>
                <h2 className={style.title}>{props.title}</h2>
                <div className={style.advantages}>
                    {props.data.map((item, index) => (
                        <div
                            className={`${style.cell} ${style.cell + index}`}
                            key={index}
                        >
                            <div className={style.icon}>
                                <Image src={item.icon} alt='icon' />
                            </div>
                            <p className={style.text}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnershipAdvantages;
