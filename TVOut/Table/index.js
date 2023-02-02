import style from "../tvout.module.scss"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function TVTable(props) {
  return (
    <div className={style.statisticsTable}>
      <Fade direction="up" triggerOnce>
        <h2 className={style.title}>
          {props.title}
        </h2>
      </Fade>
      <div className={style.alldevices_img}>
        <Fade direction="up" triggerOnce>
          <Image src="/tvOut/devices-new.jpg" alt="devices" layout="responsive" width={1170} height={760} />
        </Fade>
      </div>
      <Fade direction="up" triggerOnce>
        <table className={style.table_tv}>
          <thead className={style.table_tv__head}>
            <tr>
              <td>#</td>
              <td>{props.td12}</td>
              <td></td>
            </tr>
          </thead>
          <tbody className={style.table_tv__body}>
            <tr>
              <td>1</td>
              <td className={style.table_tv__color}>
                {props.td22}
              </td>
              <td>{props.td23}</td>
            </tr>
            <tr>
              <td>2</td>
              <td className={style.table_tv__color}>{props.td32}</td>
              <td>{props.td33}</td>
            </tr>
            <tr>
              <td>3</td>
              <td className={style.table_tv__color}>
                {props.td42}
              </td>
              <td>{props.td43}</td>
            </tr>
            <tr>
              <td>4</td>
              <td className={style.table_tv__color}>{props.td52}</td>
              <td>{props.td53}</td>
            </tr>
          </tbody>
        </table>
      </Fade>
    </div>
  )
}