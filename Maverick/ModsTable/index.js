import { Fade, Zoom } from "react-awesome-reveal";
import { nanoid } from "nanoid";
import style from "../maverick.module.scss";
import { Button } from "../../../lt-modules/Buttons";

export default function MaverickModsTable(props) {
  return (
    <>
      <div className={style.tagerModifications}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.table_title}>{props.title}</h2>
        </Fade>
        <Zoom triggerOnce>
          <table
            className={`${style.table} ${
              props.sets === true ? style.table_sets : null
            }`}
          >
            <thead
              className={`${style.table_head} ${
                props.sets === true ? style.table_sets_head : ""
              }`}
            >
              <tr>
                <td
                  colSpan="2"
                  style={{ textAlign: "center" }}
                >
                  {props.tableHead[1]} 
                </td>
              </tr>
            </thead>
            <tbody
              className={`${style.table_body} ${
                props.sets === true ? style.table_sets_body : null
              }`}
            >
              {props.tableBody.map((item) => (
                <tr key={nanoid()}>
                  {item.items.map((item, index) =>
                    item === "plus" ? (
                      <td key={nanoid()}>+</td>
                    ) : item === "cross" ? (
                      <td key={nanoid()}>{cross}</td>
                    ) : index === 0 ? (
                      <th key={nanoid()}>{item}</th>
                    ) : (
                      <td key={nanoid()}>{item}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Zoom>
        <div className={style.tagerModifications_button_box}>
          <Button type="price" style="blueWhite" text={props.buttonText} />
        </div>
      </div>
    </>
  );
}

const cross = (
  <svg height="15px" viewBox="0 0 24 24" width="15px" fill="#8e8e8e">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);
