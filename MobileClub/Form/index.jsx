import { InputsWName } from "../../Inputs";
import style from "./style.module.scss"

function Form(props) {
  return (
    <div className={style.form}>
      <InputsWName
        id={props.id}
        theme={props.theme}
        image={props.image}
        objectFit={props.objectFit}
        title={props.title}
        text={props.text}
        buttonText={props.buttonText}
        checkboxText={props.checkboxText}
        checkboxSpanText={props.checkboxSpanText}
      />
    </div>
  );
}

export default Form;