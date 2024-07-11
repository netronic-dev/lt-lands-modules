import style from "./style.module.scss";

import dynamic from "next/dynamic";

const InputsWName = dynamic(
    () => import("../../Inputs").then((mod) => mod.InputsWName),
    { ssr: false }
);

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
                agreementText={props.agreementText}
                agreementSpanText={props.agreementSpanText}
                destinationURL={props.destinationURL}
                orderName={props.orderName}
                lang={props.lang}
                letterId={props.letterId}
                fromName={props.fromName}
                namePlaceholder={props.namePlaceholder}
                callPlaceholder={props.callPlaceholder}
                budgetPlaceholder={props.budgetPlaceholder}
            />
        </div>
    );
}

export default Form;
