import React from 'react'
import style from './imgtitletext.module.scss'

function ImgTitleText(props) {
  return (
    <div className={style.image_text}>
      {props.svg}
      <h3>
        {props.title}
      </h3>
      <div className={style.text}>{props.text}</div>
    </div>
  )
}

export default ImgTitleText