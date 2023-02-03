import { useState } from 'react';
import { Button } from '../../../lt-modules/Buttons';
import style from '../lux.module.scss';

export default function Set(props) {
    const [activeCell, changeActiveCell] = useState(0);

    function onChangeActiveCell(id) {
        changeActiveCell(id);
    }
    return (
        <section className={style.lux_set_out}>
            <div className={style.lux_set}>
                <h2 className={style.title}>
                    {props.title}
                    <br />
                    <span className={style.dark_blue_gradient}>LUX</span>
                </h2>
                {props.only_premium ? (
                    ''
                ) : (
                    <div className={style.table_buttons}>
                        {props.data.map((item, index) => (
                            <div
                                className={`${style.table_buttons__button} ${
                                    activeCell === index ? style.active : ''
                                }`}
                                key={index}
                                onClick={() => {
                                    onChangeActiveCell(index);
                                }}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                )}
                <table className={style.set_table_responsive}>
                    <tr>
                        <td className={style.table_title}>
                            {props.tabTitleOne}
                        </td>
                        <td className={style.plus_blue}>
                            {props.data[activeCell].firstCell ? '+' : ''}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.table_title}>
                            {props.tabTitleTwo}
                        </td>
                        <td className={style.plus_blue}>
                            {props.data[activeCell].secondCell ? '+' : ''}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.table_title}>
                            {props.tabTitleThree}
                        </td>
                        <td className={style.plus_blue}>
                            {props.data[activeCell].thirdCell ? '+' : ''}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.table_title}>
                            {props.tabTitleFour}
                        </td>
                        <td className={style.plus_blue}>
                            {props.data[activeCell].fourthCell ? '+' : ''}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.table_title}>
                            {props.tabTitleFive}
                        </td>
                        <td className={style.plus_blue}>
                            {props.data[activeCell].fivthCell ? '+' : ''}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.table_title}>
                            {props.tabTitleSix}
                        </td>
                        <td className={style.plus_blue}>
                            {props.data[activeCell].sixthCell ? '+' : ''}
                        </td>
                    </tr>
                </table>
                <table className={style.set_table}>
                    <thead>
                        {props.only_premium ? (
                            <tr>
                                <th></th>
                                <th>{props.data[0].title}</th>
                            </tr>
                        ) : (
                            <tr>
                                <th></th>
                                <th>{props.data[0].title}</th>
                                <th>{props.data[1].title}</th>
                                <th>{props.data[2].title}</th>
                                <th>{props.data[3].title}</th>
                            </tr>
                        )}
                    </thead>
                    <tbody>
                        {props.only_premium ? (
                            <tr>
                                <td className={style.table_title}>
                                    {props.tabTitleOne}
                                </td>
                                <td className={style.plus_blue}>+</td>
                            </tr>
                        ) : (
                            <tr>
                                <td className={style.table_title}>
                                    {props.tabTitleOne}
                                </td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                            </tr>
                        )}
                        {props.only_premium ? (
                            <tr>
                                <td className={style.table_title}>
                                    {props.tabTitleTwo}
                                </td>
                                <td className={style.plus_blue}>+</td>
                            </tr>
                        ) : (
                            <tr>
                                <td className={style.table_title}>
                                    {props.tabTitleTwo}
                                </td>
                                <td className={style.plus_blue}></td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                            </tr>
                        )}
                        {props.only_premium ? (
                            <tr>
                                <td className={style.table_title}>
                                    {props.tabTitleThree}
                                </td>
                                <td className={style.plus_blue}>+</td>
                            </tr>
                        ) : (
                            <tr>
                                <td className={style.table_title}>
                                    {props.tabTitleThree}
                                </td>
                                <td className={style.plus_blue}></td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                            </tr>
                        )}
                        {props.tabTitleFour ? (
                            <tr>
                                <td className={style.table_title}>
                                    {props.tabTitleFour}
                                </td>
                                <td className={style.plus_blue}></td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                            </tr>
                        ) : (
                            ''
                        )}
                        {props.only_premium ? (
                            <tr>
                                <td className={style.table_title}>
                                    {props.tabTitleFive}
                                </td>
                                <td className={style.plus_blue}>+</td>
                            </tr>
                        ) : (
                            <tr>
                                <td className={style.table_title}>
                                    {props.tabTitleFive}
                                </td>
                                <td className={style.plus_blue}></td>
                                <td className={style.plus_blue}></td>
                                <td className={style.plus_blue}>+</td>
                                <td className={style.plus_blue}>+</td>
                            </tr>
                        )}
                        {props.tabTitleSix ? (
                            <tr>
                            <td className={style.table_title}>
                                {props.tabTitleSix}
                            </td>
                            <td className={style.plus_blue}></td>
                            <td className={style.plus_blue}></td>
                            <td className={style.plus_blue}></td>
                            <td className={style.plus_blue}>+</td>
                        </tr>
                        ) : (
                            ""
                        )}
                    </tbody>
                </table>
                <div className={style.button}>
                    <Button style='blueBlack' text={props.buttonText} />
                </div>
            </div>
        </section>
    );
}
