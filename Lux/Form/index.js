import { InputsWName } from "../../../lt-lands-modules/Inputs/index"
import style from "../lux.module.scss"

function Form(props) {
  return (
    <div className={style.static_form}>
      <InputsWName
        image={props.image}
        objectFit={props.objectFit}
        title={props.title}
        text={props.text}
        buttonText={props.buttonText}
        en
      />
    </div>
  );
}

export default Form;