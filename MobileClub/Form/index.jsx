import { InputsWName } from "../../Inputs";
import style from "./style.module.scss"

function Form(props) {
  return (
    <div className={style.form}>
      <InputsWName
        theme={props.theme}
        image={props.image}
        objectFit={props.objectFit}
        title={props.title}
        text={props.text}
        buttonText={props.buttonText}
        destinationURL={props.destinationURL}
        orderName={props.orderName}
        lang={props.lang}
      />
    </div>
  );
}

export default Form;