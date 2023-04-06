import Image from 'next/image';
import { Button } from '../../../lt-modules/Buttons';
import style from './style.module.scss';

const Main = (props) => {
    return (
        <section className={style.main}>
            <div className='container'>
                <div className={`background `}>
                    <Image
                        src={props.bg_img}
                        alt='bg_main_img'
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
                <div className={style.content}>
                    <h1 className={style.main_title}>Nebula</h1>
                    <div
                        className={`${style.bg_granade}`}
                    >
                        <Image
                            src={props.bg_granade}
                            alt='bg_main_img'
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                    <div
                        className={`${style.bg_two_clouds} ${style.fade_animation_scale_2}`}
                    >
                        <Image
                            src={props.two_clouds}
                            alt='bg_main_img'
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                    <div
                        className={`${style.bg_big_cloud} ${style.fade_animation_scale}`}
                    >
                        <Image
                            src={props.big_clouds}
                            alt='bg_main_img'
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                    <div
                        className={`${style.right_upper_cloud} ${style.fade_animation_right}`}
                    >
                        <Image
                            src={props.right_upper_cloud}
                            alt='bg_main_img'
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                    <div
                        className={`${style.right_upper_cloud_mob} ${style.fade_animation_right_mob}`}
                    >
                        <Image
                            src={props.right_upper_cloud}
                            alt='bg_main_img'
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                    <div
                        className={`${style.left_upper_cloud} ${style.fade_animation_left}`}
                    >
                        <Image
                            src={props.left_upper_cloud}
                            alt='bg_main_img'
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                    <div
                        className={`${style.left_upper_cloud_mob} ${style.fade_animation_left_mob}`}
                    >
                        <Image
                            src={props.left_upper_cloud}
                            alt='bg_main_img'
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                    <Button
                        style='transparentGranade'
                        type='catalog'
                        text={props.buttonText}
                    />
                </div>
            </div>
            <div className={`${style.bg_asteroid} ${style.fade_animation}`}>
                <Image
                    src={props.asteroid}
                    alt='bg_main_img'
                    objectFit='cover'
                    layout='fill'
                />
            </div>
        </section>
    );
};

export default Main;
