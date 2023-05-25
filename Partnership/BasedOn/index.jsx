import Image from 'next/image';
import style from './style.module.scss';

const PartnershipBasedOn = (props) => {
    return (
        <section className={style.main}>
            <div className='container'>
                <div className={style.content_wrapper}>
                    <div className={style.information_cell}>
                        <h2 className={style.title}>{props.title}</h2>
                        <div className={style.based_on_wrapper}>
                            {props.data.map((item, index) => (
                                <div className={style.cell} key={index}>
                                    <span className={style.number}>
                                        {item.number}
                                    </span>
                                    <span className={style.text}>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.image_cell}>
                        <div className={style.image}>
                            <Image
                                src={props.image}
                                alt={props.alt}
                                layout='fill'
                                objectFit='static'
                                objectPosition='0 50%'
                            />
                        </div>
                    </div>
                    {/* <div className={style.image_front}>
                        <Image
                            src={props.image_front}
                            alt={props.alt}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default PartnershipBasedOn;
