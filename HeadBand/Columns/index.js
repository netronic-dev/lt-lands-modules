import { ColumnsSvgText } from "../../ColumnsSvgText";
import style from "../headband.module.scss";

export default function Columns(props) {
  return (
    <div className={style.columnsvgBN}>
      <ColumnsSvgText
        style="black"
        svgOne={<img src="/bandNetronic/svg/icon-1.svg" alt="Columns icon 1" />}
        titleOne={props.titleOne}
        textOne={props.textOne}
        svgTwo={<img src="/bandNetronic/svg/icon-2.svg" alt="Columns icon 2" />}
        titleTwo={props.titleTwo}
        textTwo={props.textTwo}
        svgThree={
          <img src="/bandNetronic/svg/icon-3.svg" alt="Columns icon 3" />
        }
        titleThree={props.titleThree}
        textThree={props.textThree}
        svgFour={
          <img src="/bandNetronic/svg/icon-4.svg" alt="Columns icon 4" />
        }
        titleFour={props.titleFour}
        textFour={props.textFour}
      />
    </div>
  );
}
