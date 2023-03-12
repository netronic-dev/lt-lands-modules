import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ButtonDetails from '../../../lt-modules/Buttons/ButtonDetails';
import { ThemeForm } from '../../../lt-modules/InputForms/StaticForm';
import style from '../main.module.scss';

export default function MainEquipment(props) {
    const [firstCellIsActive, changeFirstCellView] = useState(true);
    const [secondCellIsActive, changeSecondCellView] = useState(false);
    const [thirdCellIsActive, changeThirdCellView] = useState(false);

    function onFirstCellChange() {
        changeFirstCellView(true);
        changeSecondCellView(false);
        changeThirdCellView(false);
    }

    function onSecondCellChange() {
        changeFirstCellView(false);
        changeSecondCellView(true);
        changeThirdCellView(false);
    }

    function onThirdCellChange() {
        changeFirstCellView(false);
        changeSecondCellView(false);
        changeThirdCellView(true);
    }
    return (
        <>
            <section className={style.equipment}>
                <Fade direction='up' duration={300} triggerOnce>
                    <h2 className={style.title}>{props.title}</h2>
                </Fade>
                <div className={style.equipment_menu}>
                    <Link
                        href={
                            props.linkFirstActiveCell ||
                            '/mobile-laser-tag-equipment'
                        }
                    >
                        <div
                            className={
                                firstCellIsActive
                                    ? style.cellActive
                                    : style.cell
                            }
                            onMouseOver={onFirstCellChange}
                        >
                            <div className='background'>
                                <Image
                                    src='/index/mobile-equipment.jpg'
                                    layout='fill'
                                    objectFit='cover'
                                    priority={true}
                                />
                            </div>
                            <div className={style.cell_content}>
                                <h3 className={style.cell_title}>
                                    {props.firstCellTitle}
                                </h3>
                                <p className={style.cell_text}>
                                    {props.firstCellText}
                                </p>
                                <div className={style.cell_button}>
                                    <Fade
                                        direction='up'
                                        duration={500}
                                        triggerOnce
                                    >
                                        <Link
                                            href={
                                                props.linkFirstActiveCell ||
                                                '/mobile-laser-tag-equipment'
                                            }
                                        >
                                            <a>
                                                <ButtonDetails
                                                    theme='White'
                                                    text={props.buttonText}
                                                />
                                            </a>
                                        </Link>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={
                            props.linkSecondActiveCell || '/outdoor-laser-tag'
                        }
                    >
                        <div
                            className={
                                secondCellIsActive
                                    ? style.cellActive
                                    : style.cell
                            }
                            onMouseOver={onSecondCellChange}
                        >
                            <div className='background'>
                                <Image
                                    src='/index/outdoor-equipment.jpg'
                                    layout='fill'
                                    objectFit='cover'
                                    priority={true}
                                />
                            </div>
                            <div className={style.cell_content}>
                                <h3 className={style.cell_title}>
                                    {props.secondCellTitle}
                                </h3>
                                <p className={style.cell_text}>
                                    {props.secondCellText}
                                </p>
                                <div className={style.cell_button}>
                                    <Fade
                                        direction='up'
                                        duration={500}
                                        triggerOnce
                                    >
                                        <Link
                                            href={
                                                props.linkSecondActiveCell ||
                                                '/outdoor-laser-tag'
                                            }
                                        >
                                            <a>
                                                <ButtonDetails
                                                    theme='White'
                                                    text={props.buttonText}
                                                />
                                            </a>
                                        </Link>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={
                            props.linkThirdActiveCell ||
                            '/indoor-laser-tag-equipment'
                        }
                    >
                        <div
                            className={
                                thirdCellIsActive
                                    ? style.cellActive
                                    : style.cell
                            }
                            onMouseOver={onThirdCellChange}
                        >
                            <div className='background'>
                                <Image
                                    src='/index/indoor-equipment.jpg'
                                    layout='fill'
                                    objectFit='cover'
                                    priority={true}
                                />
                            </div>
                            <div className={style.cell_content}>
                                <h3 className={style.cell_title}>
                                    {props.thirdCellTitle}
                                </h3>
                                <p className={style.cell_text}>
                                    {props.thirdCellText}
                                </p>
                                <div className={style.cell_button}>
                                    <Fade
                                        direction='up'
                                        duration={500}
                                        triggerOnce
                                    >
                                        <Link
                                            href={
                                                props.linkThirdActiveCell ||
                                                '/indoor-laser-tag-equipment'
                                            }
                                        >
                                            <a>
                                                <ButtonDetails
                                                    theme='White'
                                                    text={props.buttonText}
                                                />
                                            </a>
                                        </Link>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <Fade direction='up' duration={800} triggerOnce>
                    <div className={style.individual}>
                        <h2 className={style.individual_title}>
                            {props.formTitle}
                        </h2>
                        <p className={style.individual_text}>
                            {props.formText}
                        </p>
                        <div className={style.individual_form}>
                            <ThemeForm
                                destinationURL={props.destinationURL}
                                orderName={props.orderName}
                                lang={props.lang}
                                theme='whiteFill'
                                buttonTheme='black'
                                buttonActiveTheme='black'
                                name
                                phone
                                buttonText={props.buttonText}
                                namePlaceholder={props.namePlaceholder}
                                callPlaceholder={props.callPlaceholder}
                            />
                        </div>
                    </div>
                </Fade>
            </section>
        </>
    );
}
