import style from "./style.module.scss"

export default function Agreement(props) {
  return (
    <div className={`${style.agreement} ${props.style}`}>
      <div
        className={`
        ${style.agreement__checkbox} 
        ${props.active ? style.agreement__checkbox_active : ""}
        ${props.checkbox_style}
        `}
        onClick={props.onClick}
      >
        {agreementDot}
      </div>
      <p className={style.agreement__text}>
        {props.text}
      </p>
    </div>
  )
}

const agreementDot = (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" className={style.agreement_dot}>
    <rect x="0.757812" y="0.5" width="23" height="23" rx="11.5" stroke="#8E8E8E" />
    <circle cx="12.2578" cy="12" r="7" fill="#0090FF" />
  </svg>

)