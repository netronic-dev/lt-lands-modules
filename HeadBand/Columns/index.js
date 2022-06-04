import { ColumnsSvgText } from "../../ColumnsSvgText"
import style from "../headband.module.scss"

export default function HeadBandColumns(props) {
  return (
    <div className={style.columnsvgBN}>
      <ColumnsSvgText
        style="black"
        svgOne={
          <img
            src="/bandNetronic/svg/icon-1.svg"
          />}
        titleOne={props.titleOne}
        textOne={props.textOne}
        svgTwo={
          <img
            src="/bandNetronic/svg/icon-2.svg"
          />}
        titleTwo={props.titleTwo}
        textTwo={props.textTwo}
        svgThree={
          <img
            src="/bandNetronic/svg/icon-3.svg"
          />}
        titleThree={props.titleThree}
        textThree={props.textThree}
        svgFour={
          <img
            src="/bandNetronic/svg/icon-4.svg"
          />}
        titleFour={props.titleFour}
        textFour={props.textFour}
      />
    </div>
  )
}