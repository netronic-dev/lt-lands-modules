import style from "../lux.module.scss";

import dynamic from "next/dynamic";

const InputsWName = dynamic(
    () =>
        import("../../../lt-lands-modules/Inputs/index").then(
            (mod) => mod.Inputs
        ),
    { ssr: false }
);

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
                submittingText={props.submittingText}
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
