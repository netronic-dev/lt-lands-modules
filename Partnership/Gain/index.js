import style from './style.module.scss';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import Slider from 'react-slick';

export default function LPGain(props) {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '100px 0 0',
        swipeToSlide: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px 0 0',
                },
            },
        ],
    };
    return (
        <InView triggerOnce>
            {({ inView, ref, entry }) => (
                <div ref={ref}>
                    <section
                        className={style.gain}
                        name={props.name}
                        id={props.id}
                        key={inView ? 'Gain-in-view' : 'Gain'}
                    >
                        <div className={style.top}>
                            <h2 className={`${style.title} fade-up-animation`}>
                                {props.title}
                            </h2>
                        </div>
                        <div className={`${style.slider} fade-up-animation`}>
                            <Slider {...settings}>
                                {props.data.map((data, index) => (
                                    <Cell
                                        key={index}
                                        title={data.title}
                                        subTitle={data.subTitle}
                                        name={data.name}
                                        image={data.image}
                                        width={data.image_width}
                                        height={data.image_height}
                                        flag={data.flag}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </section>
                </div>
            )}
        </InView>
    );
}

function Cell(props) {
    return (
        <div className={style.cell}>
            <div className={style.cell__image}>
                <Image
                    src={props.image}
                    sizes='100vw'
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={props.width}
                    height={props.height}
                    alt=""
                />
            </div>
            <h3 className={style.cell__name}>{props.name}</h3>
            <div className={style.cell__info}>
                <img src={props.flag} className={style.cell__flag} />
                <div className={style.text_block}>
                    <p className={style.cell__title}>{props.title}</p>
                    <p className={style.cell__subtitle}>{props.subTitle}</p>
                </div>
            </div>
        </div>
    );
}
