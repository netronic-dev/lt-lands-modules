import { Fade } from "react-awesome-reveal"
import { useInView } from "react-hook-inview"
import { FormWMaterials } from "../../../InputForms/StaticForm/StaticForm"
import style from "../style.module.scss"

export default function SupernovaOpenForm(props) {
  const [ref, IsVisible] = useInView({
    unobserveOnEnter: true
  })
  return (
    <section className={style.open_form} ref={ref} key={IsVisible ? "form-1" : "form:0"}>
      <div className={style.open_form__in}>
        <Fade direction="up" triggerOnce>
          <h2 className={style.title}>
            {props.title}
          </h2>
        </Fade>
        <FormWMaterials
          en={props.en}
          formID="materials-"
          theme="whiteBorder"
          buttonTheme="black"
          buttonActiveTheme="black"
          buttonText={props.en ? "Send" : "Отправить"}
          colorDot="#ffffff"
          errorTheme="white"
          id={props.en ? "form-materials-en" : "form-materials"}
          materialsAgreementText={props.en ? "Receive news and helpful content" : "Получать новости и полезные материалы"}
        />
      </div>
    </section>
  )
}

