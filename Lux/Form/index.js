import { InputsWName } from '../../../lt-lands-modules/Inputs/index';
import style from '../lux.module.scss';

function Form(props) {
    return (
        <div className={style.static_form}>
            <InputsWName
                destinationURL={props.destinationURL}
                orderName={props.orderName}
                lang={props.lang}
                image={props.image}
                objectFit={props.objectFit}
                title={props.title}
                text={props.text}
                buttonText={props.buttonText}
                en
                namePlaceholder={props.namePlaceholder}
                emailPlaceholder={props.emailPlaceholder}
                callePlaceholder={props.callePlaceholder}
                agreementText={props.agreementText}
                agreementSpanText={props.agreementSpanText}
            />
        </div>
    );
}

export default Form;
