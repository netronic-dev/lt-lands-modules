import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import ButtonDetails from "../../../lt-modules/Buttons/ButtonDetails"
import { ThemeForm } from "../../../lt-modules/InputForms/StaticForm"
import style from "../main.module.scss"

export default function MainEquipment(props) {

  const [firstCellIsActive, changeFirstCellView] = useState(true)
  const [secondCellIsActive, changeSecondCellView] = useState(false)
  const [thirdCellIsActive, changeThirdCellView] = useState(false)

  function onFirstCellChange() {
    changeFirstCellView(true)
    changeSecondCellView(false)
    changeThirdCellView(false)
  }

  function onSecondCellChange() {
    changeFirstCellView(false)
    changeSecondCellView(true)
    changeThirdCellView(false)
  }

  function onThirdCellChange() {
    changeFirstCellView(false)
    changeSecondCellView(false)
    changeThirdCellView(true)
  }
  return (
    <>
      <section className={style.equipment}>
        <Fade direction="up" duration={300} triggerOnce>
          <h2 className={style.title}>
            {props.title}
          </h2>
        </Fade>
        <div className={style.equipment_menu}>
          <Link
            href={props.en ?
              "/mobile-laser-tag-equipment"
              : "/lazertag-biznes/mobilniy-lasertag-business"
            }>
            <div className={
              firstCellIsActive ? style.cellActive : style.cell
            }
              onMouseOver={onFirstCellChange}
            >

              <div className="background">
                <Image
                  src="/index/mobile-equipment.jpg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div className={style.cell_content}>
                <h3 className={style.cell_title}>
                  {props.firstCellTitle}
                </h3>
                <p className={style.cell_text}>
                  {props.firstCellText}
                </p>
                <div className={style.cell_button}>
                  <Fade direction="up" duration={500} triggerOnce>
                    <Link href={props.en ?
                      "/mobile-laser-tag-equipment"
                      : "/lazertag-biznes/mobilniy-lasertag-business"
                    }>
                      <a>
                        <ButtonDetails
                          theme="White"
                          en={props.en}
                        />
                      </a></Link>
                  </Fade>
                </div>
              </div>

            </div>
          </Link>
          <Link href={props.en ?
            "/outdoor-laser-tag" : "/vnearennoe-lasertag-oborudovanie"
          }>
            <div className={secondCellIsActive ? style.cellActive : style.cell
            }
              onMouseOver={onSecondCellChange}
            >
              <div className="background">
                <Image
                  src="/index/outdoor-equipment.jpg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div className={style.cell_content}>
                <h3 className={style.cell_title}>
                  {props.secondCellTitle}
                </h3>
                <p className={style.cell_text}>
                  {props.secondCellText}
                </p>
                <div className={style.cell_button}>
                  <Fade direction="up" duration={500} triggerOnce>
                    <Link
                      href={props.en ?
                        "/outdoor-laser-tag" : "/vnearennoe-lasertag-oborudovanie"
                      }>
                      <a>
                        <ButtonDetails
                          theme="White"
                          en={props.en}
                        />
                      </a></Link>
                  </Fade>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={props.en ?
              "/indoor-laser-tag-equipment"
              : "/arennoe-lasertag-oborudovanie"
            }>
            <div className={
              thirdCellIsActive ? style.cellActive : style.cell
            }
              onMouseOver={onThirdCellChange}
            >
              <div className="background">
                <Image
                  src="/index/indoor-equipment.jpg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div className={style.cell_content}>
                <h3 className={style.cell_title}>
                  {props.thirdCellTitle}
                </h3>
                <p className={style.cell_text}>
                  {props.thirdCellText}
                </p>
                <div className={style.cell_button}>
                  <Fade direction="up" duration={500} triggerOnce>
                    <Link
                      href={props.en ?
                        "/indoor-laser-tag-equipment"
                        : "/arennoe-lasertag-oborudovanie"
                      }><a>
                        <ButtonDetails
                          theme="White"
                          en={props.en}
                        />
                      </a></Link>
                  </Fade>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Fade direction="up" duration={800} triggerOnce>
          <div className={style.individual}>
            <h2 className={style.individual_title}>
              {props.formTitle}
            </h2>
            <p className={style.individual_text}>
              {props.formText}
            </p>
            <div className={style.individual_form}>
              <ThemeForm
                en={props.en}
                theme="whiteFill"
                buttonTheme="black"
                buttonActiveTheme="black"
                name
                phone
                formID="land-"
                id={props.en ? "land-submit-button-en" : "land-submit-button"}
                buttonText={props.buttonText}
              />
            </div>
          </div>
        </Fade>
      </section>
    </>
  )
}