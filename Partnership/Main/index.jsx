import Image from 'next/image';
import style from './style.module.scss';
import { Button } from '../../../lt-modules/Buttons';

const PartnershipMain = (props) => {
    return (
        <section className={style.main}>
            <div className='container'>
                <div className={style.content_wrapper}>
                    <h1 className={style.title}>{props.title}</h1>
                    <p className={style.text}>{props.text}</p>
                    <Button
                        text={props.btn_text}
                        type={props.btn_type}
                        style={props.btn_style}
                    />
                </div>
            </div>
            <div className={style.background}>
                <Image
                    className={style.image}
                    src={props.image}
                    alt={props.imageAlt}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={style.background_res}>
                <Image
                    className={style.image}
                    src={props.image_res}
                    alt={props.imageAlt}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={style.background_mob}>
                <Image
                    className={style.image}
                    src={props.image_mob}
                    alt={props.imageAlt}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={style.background_text_wrapper}>
                <span className={style.background_text}>{props.bg_text1}</span>
                <span className={style.background_text}>{props.bg_text2}</span>
                <span className={style.background_text}>{props.bg_text3}</span>
            </div>
        </section>
    );
};

export default PartnershipMain;
