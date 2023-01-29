import style from "./style.module.scss"

export function FalconTableEn(props) {
  return (
    <>
      <table
        className={`${style.table} ${props.sets === true ? style.table_sets : null
          }`}
      >
        <thead
          className={`${style.table_head} ${props.sets === true ? style.table_sets_head : null
            }`}
        >
          <tr>
            <td></td>
            <td>Standard</td>
            <td>Premium</td>
          </tr>
        </thead>
        <tbody
          className={`${style.table_body} ${props.sets === true ? style.table_sets_body : null
            }`}
        >
          <tr>
            <th>Shockproof body</th>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Protective bumper</th>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Color IPS screen</th>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Built-in hit sensors</th>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Impulse recoil</th>
            <td>{cross}</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Capacitive hand sensor</th>
            <td>{cross}</td>
            <td>+</td>
          </tr>
        </tbody>
      </table>
      <div className={style.tableAddon}>
        <div className={style.text_line_border_bottom}>
          <p>Aquaprint</p>
          <p>Optional</p>
        </div>
        <div className={style.text_line_border_bottom}>
          <p>Red dot sight</p>
          <p>Optional</p>
        </div>
        {/* <div className={style.text_line}>
          <p>
            Capacitive hand sensor
          </p>
          <p>Optional</p>
        </div> */}
      </div>
    </>
  );
}

export function FalconTable(props) {
  return (
    <>
      <table
        className={`${style.table} ${props.sets === true ? style.table_sets : null
          }`}
      >
        <thead
          className={`${style.table_head} ${props.sets === true ? style.table_sets_head : null
            }`}
        >
          <tr>
            <td></td>
            <td>Basic</td>
            <td>Standard</td>
            <td>Premium</td>
          </tr>
        </thead>
        <tbody
          className={`${style.table_body} ${props.sets === true ? style.table_sets_body : null
            }`}
        >
          <tr>
            <th>Ударопрочный корпус</th>
            <td>+</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Защитный бампер</th>
            <td>+</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Датчик второй руки</th>
            <td>{cross}</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Цветной IPS-экран</th>
            <td>{cross}</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Встроенные датчики поражения</th>
            <td>{cross}</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <th>Импульсная отдача</th>
            <td>{cross}</td>
            <td>{cross}</td>
            <td>+</td>
          </tr>
        </tbody>
      </table>
      <div className={style.tableAddon}>
        <div className={style.text_line_border_bottom}>
          <p>Аквапринт</p>
          <p>Опционально</p>
        </div>
        <div className={style.text_line}>
          <p>Коллиматорный прицел </p>
          <p>Опционально</p>
        </div>
      </div>
    </>
  );
}
const cross = (
  <svg height="15px" viewBox="0 0 24 24" width="15px" fill="#8e8e8e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
)