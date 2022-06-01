import Image from "next/image";
import { useState } from "react";
import style from "../lux.module.scss"

export default function LuxFeaturesSlider(props) {

  let cells = [
    {
      image: "/lux/features.jpg",
    },
    {
      title: "Яркий IPS-дисплей",
      titleEn: "Bright IPS Display",
      text: "Позволяет следить за 20+ показателями даже при игре в солнечную погоду.",
      textEn: "Allows you to monitor 20+ stats even when playing in sunny weather.",
      image: "/lux/feature-4.jpg",
      position: "-400px 50%",
      zoom: { width: "150%", height: "150%" }
    },
    {
      title: "Эластичная передняя часть",
      titleEn: "Rubberized body",
      text: "Поглощает удары и столкновения делая игру безопаснее.",
      textEn: "Absorbs shocks and collisions, enhancing safety of the game.",
      image: "/lux/feature-1.jpg",
    },
    {
      title: "Датчики поражения в корпусе",
      titleEn: "Protected hit sensors",
      text: "Возможность поразить тагер - залог честных и реалистичных сражений.",
      textEn: "The ability to hit a tagger is the key to fair and realistic battles",
      image: "/lux/feature-2.jpg",
      position: "0 50%",
      zoom: { width: "150%", height: "150%" }
    },
    {
      title: "Компактный размер",
      titleEn: "Compact size",
      text: "Тагер длинной 40 см позволяет комфортно играть детям от 5 лет.",
      textEn: "The 40 cm tagger allows children from 5 years old to play in comfort. ",
      image: "/lux/feature-5.jpg",
      position: "",
    },
    {
      title: "Боковая подсветка выстрела",
      titleEn: "Side shot illumination",
      text: "Элементы корпуса подсвечиваются цветом команды синхронно с выстрелом.",
      textEn: "The body elements are lit by the team color when the player is hit",
      image: "/lux/feature-3.jpg",
      position: "-400px -30%",
      zoom: { width: "150%", height: "150%" }
    },
  ]

  const [activeCellNumber, changeActiveCellNumber] = useState(1)
  const [activeImage, changeActiveImage] = useState(cells[1].image)
  const [activeImagePosition, changeActiveImagePosition] = useState(cells[1].position)
  const [activeImageZoom, changeActiveImageZoom] = useState(cells[1].zoom)

  function changeActiveCell(id) {
    if (activeCellNumber === id) {
      changeActiveCellNumber(null)
      changeActiveImageZoom(null)
      changeActiveImagePosition(null)
      setTimeout(() => {
        changeActiveImage(cells[0].image)
      }, 100);
    }
    else {
      setTimeout(() => {
        changeActiveImage(cells[id].image)
      }, 100);
      changeActiveCellNumber(id)
      changeActiveImageZoom(cells[id].zoom)
      changeActiveImagePosition(cells[id].position)
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
          {cells.map((item, index) => (
            item.title ?
              (<Cell
                title={props.en ? item.titleEn : item.title}
                text={props.en ? item.textEn : item.text}
                key={index}
                onClick={() => { changeActiveCell(index) }}
                active={activeCellNumber == index ? true : false}
                activeImage={activeImage}
                activeImagePosition={activeImagePosition}
                activeImageZoom={activeImageZoom}
              />) : null
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
        className={`${style.cell} 
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
