import style from "./style.module.scss";
import ReactGA from "react-ga4";
import axios from "axios";

import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useInView } from "react-hook-inview";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../../store/actions/userData";

import { useValidation } from "../../../../context/ValidationProvider";
import { postData } from "../../../../lt-modules/functions/postData.ts";
import { useGAEvents } from "../../../../context/GAEventsProvider";

const inputsLandTheme = {
    default: style.input_land,
    light: style.input_land_light,
};

export function InputsWName(props) {
    const validate = useValidation();
    const router = useRouter();
    const dispatch = useDispatch();
    const GAEvents = useGAEvents();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            agreement: "",
        },
        validate,
        onSubmit: (values) => {
            dispatch(setUserData(values.name));
            const options = {
                method: "POST",
                url: `https://api.netronic.net/send-email`,
                headers: {
                    "content-type": "application/json",
                },
                data: {
                    email: values.email,
                    fromName: props.fromName,
                    letterId: props.letterId,
                },
            };
            axios
                .request(options)
                .then(console.log)
                .then(
                    postData(
                        values,
                        props.destinationURL,
                        props.orderName,
                        props.lang,
                        window.location.href,
                        router.query
                    )
                )
                .catch(console.log);
            ReactGA.event("generate_lead", {
                category: "form",
                action: "submit",
            });
            router.push("/thanks-call");
        },
    });

    function onAgreementChange() {
        formik.setFieldValue("agreement", !formik.values.agreement);
    }

    const [ref, isVisible] = useInView({
        unobserveOnEnter: true,
    });

    return (
        <div className={style.input_land_out}>
            <form onSubmit={formik.handleSubmit} className="form_submit_land">
                <div className={style.content}>
                    <div className={style.input_out__outer}>
                        <div className={style.input_out}>
                            <input
                                className={
                                    formik.errors.name
                                        ? `${style.input} ${style.input_error}`
                                        : style.input
                                }
                                name="name"
                                maxLength="30"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                placeholder={props.namePlaceholder || "Name *"}
                            />
                        </div>
                        <div className={style.error}>{formik.errors.name}</div>
                    </div>
                    <div className={style.input_out__outer}>
                        <div className={style.input_out}>
                            <input
                                className={
                                    formik.errors.email
                                        ? `${style.input} ${style.input_error}`
                                        : style.input
                                }
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                maxLength="40"
                                name="email"
                                type="email"
                                placeholder={props.placeholder || "Email *"}
                            />
                        </div>
                        <div className={style.error}>{formik.errors.email}</div>
                    </div>
                    <div className={style.input_out__outer}>
                        <div className={style.input_out}>
                            <input
                                className={
                                    formik.errors.phone
                                        ? `${style.input} ${style.input_error}`
                                        : style.input
                                }
                                type="tel"
                                name="phone"
                                maxLength="30"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                placeholder={
                                    props.callPlaceholder || "Phone number *"
                                }
                            />
                        </div>
                        <div className={style.error}>{formik.errors.phone}</div>
                    </div>
                </div>
                <Agreement
                    onAgreementChange={onAgreementChange}
                    agreement={formik.values.agreement}
                    error={formik.errors.agreement}
                    agreementText={props.agreementText}
                    agreementSpanText={props.agreementSpanText}
                />
                <button
                    className={style.button}
                    id={props.id ? props.id : ""}
                    type="submit"
                    onClick={props.onClick}
                >
                    {props.buttonText}
                </button>
            </form>
        </div>
    );
}

function Agreement(props) {
    return (
        <div className={style.agreement__outer}>
            <div className={style.agreement}>
                <div
                    className={
                        props.agreement
                            ? style.agreement_dot_button_active
                            : style.agreement_dot_button
                    }
                    onClick={props.onAgreementChange}
                >
                    {dotIcon}
                </div>
                <p className={style.agreement__text}>
                    <span onClick={props.onAgreementChange}>
                        {props.agreementText ||
                            "I agree with conditions of the processing and use"}
                    </span>{" "}
                    <Link href="/privacy-policy">
                        <a>
                            {props.agreementSpanText || "of my personal data"}
                        </a>
                    </Link>
                </p>
            </div>
            <div className={style.error}>{props.error}</div>
        </div>
    );
}

const dotIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="#383838" />
        <circle className={style.dot} cx="10" cy="10" r="8" fill="#F1F4F6" />
    </svg>
);
