import Image from "next/image";
import { useState } from "react";
import style from "../lux.module.scss"

export default function LuxFeaturesSlider(props) {

  const [activeCellNumber, changeActiveCellNumber] = useState(1)
  const [activeImage, changeActiveImage] = useState(props.data[1].image)
  const [activeImagePosition, changeActiveImagePosition] = useState(props.data[1].position)
  const [activeImageZoom, changeActiveImageZoom] = useState(props.data[1].zoom)

  function changeActiveCell(id) {
    if (activeCellNumber === id) {
      changeActiveCellNumber(null)
      changeActiveImageZoom(null)
      changeActiveImagePosition(null)
      setTimeout(() => {
        changeActiveImage(props.data[0].image)
      }, 100);
    }
    else {
      setTimeout(() => {
        changeActiveImage(props.data[id].image)
      }, 100);
      changeActiveCellNumber(id)
      changeActiveImageZoom(props.data[id].zoom)
      changeActiveImagePosition(props.data[id].position)
    }
  }

  return (
    <section
      className={style.features_slider}>
      <h2 className={style.title}>
        {props.title}
      </h2>
      <div className={style.slider}>
        <div className={style.cells} >
          {props.data &&
            props.data.map((item, index) => (
              item.title &&
              (<Cell
                title={item.title}
                text={item.text}
                key={index}
                onClick={() => { changeActiveCell(index) }}
                active={activeCellNumber == index ? true : false}
                activeImage={activeImage}
                activeImagePosition={activeImagePosition}
                activeImageZoom={activeImageZoom}
              />)
            ))}
        </div>
        <div className={style.slider_image}>
          <div className={style.cell_image} style={activeImageZoom} >
            <Image
              src={activeImage}
              layout="fill"
              className={style.image}
              objectFit={activeImagePosition ? "cover" : "contain"}
              objectPosition={activeImagePosition ? activeImagePosition : null}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section >
  )
}

function Cell(props) {
  return (
    <>
      <div
        onClick={props.onClick}
        className={`
          ${style.cell} 
          ${props.active === true ? style.active : null}
        `}
      >
        <h3 className={style.cell_title}>
          {props.title}
        </h3>
        <p className={style.cell_text}>
          {props.text}
        </p>

      </div>
      {props.active ?
        (<div className={style.image_responsive} >
          <Image
            src={props.activeImage}
            layout="responsive"
            className={style.image}
            width={1530}
            height={1070}
            priority={true}
          />
        </div>) : null}
    </>
  )
}
