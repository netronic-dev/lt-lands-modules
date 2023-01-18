import Image from 'next/image';
import { useInView } from 'react-hook-inview';
import { ThemeFormAll } from '../../../lt-modules/InputForms/StaticForm';
import style from '../style.module.scss';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`;

export default function MCAllFor(props) {
    const [titleRef, isTitleVisible] = useInView({
        unobserveOnEnter: true,
    });

    const [gridRef, isGridVisible] = useInView({
        unobserveOnEnter: true,
    });

    const [springProps, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 550, friction: 140 },
    }));

    return (
        <section
            className={style.all_for}
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
            }
        >
            <h2
                className={`${style.title} fade-up-animation`}
                ref={titleRef}
                key={isTitleVisible ? 'all_for_title' : null}
            >
                {props.title}
            </h2>
            <div className={style.content}>
                <div className={style.content_in}>
                    <div className={style.bg_img}>
                        <animated.div
                            className={style.logo}
                            style={{
                                transform: springProps.xy.interpolate(trans1),
                            }}
                        >
                            <Image
                                layout='intrinsic'
                                src='/mobileClub/start-bg.png'
                                width={385}
                                height={416}
                            />
                        </animated.div>
                    </div>
                    <div className={style.grid} ref={gridRef}>
                        <div
                            className={`${style.cell} zoom-animation`}
                            key={isGridVisible ? 'all_for_cell_1' : 1}
                        >
                            <div className={style.cell_image}>
                                <Image
                                    src='/mobileClub/start-2.png'
                                    layout='responsive'
                                    width={307}
                                    height={203}
                                    priority
                                />
                            </div>
                            <div className={style.cell_text_block}>
                                <h3 className={style.cell_title}>
                                    {props.cell1Title}
                                </h3>
                                <p className={style.cell_text}>
                                    {props.cell1Text}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${style.cell} zoom-animation animated-second`}
                            key={isGridVisible ? 'all_for_cell_2' : 2}
                        >
                            <div className={style.cell_image}>
                                <Image
                                    src='/mobileClub/start-3.png'
                                    layout='responsive'
                                    width={307}
                                    height={203}
                                    priority
                                />
                            </div>
                            <div className={style.cell_text_block}>
                                <h3 className={style.cell_title}>
                                    {props.cell2Title}
                                </h3>
                                <p className={style.cell_text}>
                                    {props.cell2Text}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${style.cell} zoom-animation animated-third`}
                            key={isGridVisible ? 'all_for_cell_3' : 3}
                        >
                            <div className={style.cell_image}>
                                <Image
                                    src='/mobileClub/start-1.png'
                                    layout='responsive'
                                    width={307}
                                    height={203}
                                    priority
                                />
                            </div>
                            <div className={style.cell_text_block}>
                                <h3 className={style.cell_title}>
                                    {props.cell3Title}
                                </h3>
                                <p className={style.cell_text}>
                                    {props.cell3Text}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${style.cell} zoom-animation animated-fourth`}
                            key={isGridVisible ? 'all_for_cell_4' : 4}
                        >
                            <div className={style.cell_image}>
                                <Image
                                    src='/mobileClub/start-4-en.png'
                                    layout='responsive'
                                    width={307}
                                    height={203}
                                    priority
                                />
                            </div>
                            <div className={style.cell_text_block}>
                                <h3 className={style.cell_title}>
                                    {props.cell4Title}
                                </h3>
                                <p className={style.cell_text}>
                                    {props.cell4Text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${style.form_block} fade-right-animation`}
                        key={isGridVisible ? 'all_for_form' : null}
                    >
                        <h3 className={style.form_title}>{props.form_title}</h3>
                        <p className={style.form_text}>{props.form_text}</p>
                        <ThemeFormAll
                            formTheme='mobile'
                            en={props.en}
                            theme='whiteFill'
                            buttonTheme='bigBlack'
                            buttonActiveTheme='bigBlack'
                            id={
                                props.en
                                    ? 'all-for-static-en'
                                    : 'all-for-static'
                            }
                            formID='MOBLT-all-for-'
                            buttonText={props.buttonText}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
