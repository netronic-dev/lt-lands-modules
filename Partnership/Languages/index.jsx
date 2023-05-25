import Image from 'next/image';
import style from './style.module.scss';

const PartnershipLanguages = (props) => {
    return (
        <section className={style.main}>
            <div className='container'>
                <h2 className={style.title}>{props.title}</h2>
                <div className={style.flags_wrapper}>
                    {props.data.map((item, index) => (
                        <div className={style.cell} key={index}>
                            <div className={style.icon_wrapper}>
                                <Image
                                    src={item.src}
                                    alt={item.text}
                                    width={item.width}
                                    height={item.height}
                                    quality={100}
                                />
                            </div>
                            <span className={style.text}>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnershipLanguages;
