import style from "./style.module.scss"

const theme = {
  undefined: style.button,
  "normal": style.button,
  "light": style.light_button,
  hover: {
    "black": style.hover_black,
    "white": style.hover_white,
    "blue": style.hover_blue,
    "grey": style.hover_grey,
    "dark_blue": style.hover_dark_blue
  }
}

export default function LPButton(props) {
  return (
    <button
      className={`
      ${theme[props.theme]} 
      ${theme.hover[props.hover]} 
      ${props.style ? props.style : ""}
      ${props.full_width ? style.full_width : ""}
      `}
      onClick={props.onClick}
      style={{ backgroundColor: props.bgcolor }}
      id={props.id}
      type={props.submit ? "submit" : "button"}
    >
      {props.children}
      {props.video ? videoIcon : ""}
    </button>
  )
}
const videoIcon = (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className={style.video_icon}>
    <path d="M10.5 0.458496C4.98 0.458496 0.5 4.9385 0.5 10.4585C0.5 15.9785 4.98 20.4585 10.5 20.4585C16.02 20.4585 20.5 15.9785 20.5 10.4585C20.5 4.9385 16.02 0.458496 10.5 0.458496ZM8.5 14.9585V5.9585L14.5 10.4585L8.5 14.9585Z" fill="#8E8E8E" />
  </svg>

)