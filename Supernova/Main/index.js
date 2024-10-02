import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { BreadCrumbs } from '../../../lt-modules/BreadCrumbs';
import style from '../style.module.scss';

export default function SupernovaMain() {
    return (
        <div className={style.main_out}>
            <BreadCrumbs color='white' breadcrumbData={breadcrumbs} />
            <section className={style.main}>
                <Fade triggerOnce>
                    <div className='background desktop'>
                        <Image
                            src='/supernova/main.jpg'
                            layout='fill'
                            objectFit='cover'
                            priority={true}
                            quality={90}
                            alt='supernova-main'
                        />
                    </div>
                    <div className='background mobile'>
                        <Image
                            src='/supernova/main-mob.jpg'
                            layout='fill'
                            objectFit='cover'
                            priority={true}
                            quality={90}
                            alt='main mob'
                        />
                    </div>
                </Fade>
                <div className={style.main__content}>
                    <Fade delay={900} triggerOnce>
                        <img
                            className={style.logo__vector}
                            src='/supernova/vector/supernova-star-logo.svg'
                            alt='supernova-logo'
                        />
                    </Fade>
                    <Fade direction='up' delay={400} triggerOnce>
                        <div className={style.main__text}>
                            <h1 className={style.logo__title}>SUPERNOVA</h1>
                            <p className={style.logo__subtitle}>
                                LASER TAG BOMB
                            </p>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    );
}

const breadcrumbs = [
    {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: '/',
    },
    {
        '@type': 'ListItem',
        position: 2,
        name: 'Equipment',
        item: '/equipment',
    },
    {
        '@type': 'ListItem',
        position: 3,
        name: 'Game-based devices',
        item: '/equipment/game-based-devices',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Supernova',
      item: '/equipment/game-based-devices/lasertag-net-bomb-lite',
  },
];
