import { useState } from "react"
import { Button } from "../../../lt-modules/Buttons"
import style from "../lux.module.scss"

export default function LuxSet(props) {

  const [activeCell, changeActiveCell] = useState(0)

  const cellsData = [
    {
      title: "Base",
      firstCell: true,
      secondCell: false,
      thirdCell: false,
      fourthCell: false,
      fivthCell: false,
      sixthCell: false,
    },
    {
      title: "Standart",
      firstCell: true,
      secondCell: true,
      thirdCell: true,
      fourthCell: true,
      fivthCell: false,
      sixthCell: false,
    },
    {
      title: "Premium",
      firstCell: true,
      secondCell: true,
      thirdCell: true,
      fourthCell: true,
      fivthCell: true,
      sixthCell: false,
    },
    {
      title: "Tactical Pro",
      firstCell: true,
      secondCell: true,
      thirdCell: true,
      fourthCell: true,
      fivthCell: true,
      sixthCell: true,
    },
  ]
  function onChangeActiveCell(id) {
    changeActiveCell(id)
  }
  return (
    <section className={style.lux_set}>
      <h2 className={style.title}>
        {props.title}
        <br />
        <span className={style.dark_blue_gradient}>LUX</span>
      </h2>
      <div className={style.table_buttons}>
        {cellsData.map((item, index) => (
          (
            <div
              className={`${style.table_buttons__button} ${activeCell === index ? style.active : null}`}
              key={index}
              onClick={() => { onChangeActiveCell(index) }}
            >
              {item.title}
            </div>
          )
        ))}
      </div>
      <table className={style.set_table_responsive}>
        <tr>
          <td className={style.table_title}>
            {props.tabTitleOne}
          </td>
          <td className={style.plus_blue}>
            {cellsData[activeCell].firstCell ? "+" : ""}
          </td>
        </tr>
        <tr>
          <td className={style.table_title}>
            {props.tabTitleTwo}
          </td>
          <td className={style.plus_blue}>
            {cellsData[activeCell].secondCell ? "+" : ""}
          </td>
        </tr>
        <tr>
          <td className={style.table_title}>
            {props.tabTitleThree}
          </td>
          <td className={style.plus_blue}>
            {cellsData[activeCell].thirdCell ? "+" : ""}
          </td>
        </tr>
        <tr>
          <td className={style.table_title}>
            {props.tabTitleFour}
          </td>
          <td className={style.plus_blue}>
            {cellsData[activeCell].fourthCell ? "+" : ""}
          </td>
        </tr>
        <tr>
          <td className={style.table_title}>
            {props.tabTitleFive}
          </td>
          <td className={style.plus_blue}>
            {cellsData[activeCell].fivthCell ? "+" : ""}
          </td>
        </tr>
        <tr>
          <td className={style.table_title}>
            {props.tabTitleSix}
          </td>
          <td className={style.plus_blue}>
            {cellsData[activeCell].sixthCell ? "+" : ""}
          </td>
        </tr>
      </table>
      <table className={style.set_table}>
        <thead>
          <tr>
            <th>
            </th>
            <th>
              Base
            </th>
            <th>
              Standart
            </th>
            <th>
              Premium
            </th>
            <th>
              Tactical Pro
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.table_title}>
              {props.tabTitleOne}
            </td>
            <td className={style.plus_blue}>
              +
            </td>
            <td className={style.plus_blue}>
              +
            </td>
            <td className={style.plus_blue}>
              +
            </td>
            <td className={style.plus_blue}>
              +
            </td>
          </tr>
          <tr>
            <td className={style.table_title}>
              {props.tabTitleTwo}
            </td>
            <td className={style.plus_blue}>
            </td>
            <td className={style.plus_blue}>
              +
            </td>
            <td className={style.plus_blue}>
              +
            </td>
            <td className={style.plus_blue}>
              +
            </td>
          </tr>
          <tr>
            <td className={style.table_title}>
              {props.tabTitleThree}
            </td>
            <td className={style.plus_blue}>
            </td>
            <td className={style.plus_blue}>
              +
            </td>
            <td className={style.plus_blue}>
              +
            </td>
            <td className={style.plus_blue}>
              +
            </td>
          </tr>
          {props.tabTitleFour ? <tr>
            <td className={style.table_title}>
              {props.tabTitleFour}
            </td>
            <td className={style.plus_blue}>
            </td>
            <td className={style.plus_blue}>
              +
            </td>
            <td className={style.plus_blue}>
              +
            </td>
            <td className={style.plus_blue}>
              +
            </td>
          </tr> : ""}
          <tr>
            <td className={style.table_title}>
              {props.tabTitleFive}
            </td>
            <td className={style.plus_blue}></td>
            <td className={style.plus_blue}></td>
            <td className={style.plus_blue}>+</td>
            <td className={style.plus_blue}>+</td>
          </tr>
          <tr>
            <td className={style.table_title}>
              {props.tabTitleSix}
            </td>
            <td className={style.plus_blue}></td>
            <td className={style.plus_blue}></td>
            <td className={style.plus_blue}></td>
            <td className={style.plus_blue}>+</td>
          </tr>
        </tbody>
      </table>
      <div className={style.button}>
        <Button style="blueBlack" text={props.buttonText} />
      </div>
    </section >
  )
}
