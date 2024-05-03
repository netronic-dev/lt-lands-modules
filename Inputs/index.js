"use client";

import { useFormik } from "formik";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import Image from "next/image";
import { useInView } from "react-hook-inview";
import { FillButton } from "../../lt-modules/Buttons";
import Link from "next/link";
import { postData } from "../../lt-modules/functions/postData.ts";
import { useGAEvents } from "../../context/GAEventsProvider";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useModals } from "../../context/ModalsProvider.js";
import axios from "axios";
import Dropdown from "react-dropdown";
import ReactPixel from "react-facebook-pixel";
import { searchParams } from "../../store/searchParamsSlice.js";
import { useSelector } from "react-redux";

const inputsLandTheme = {
    default: style.input_land,
    light: style.input_land_light,
};

export function Inputs(props) {
    const router = useRouter();
    const GAEvents = useGAEvents();
    const [valid, setValid] = useState(null);
    const [phone, setPhone] = useState(null);
    const [regionCode, setRegionCode] = useState();
    const [budgetRange, setBudgetRange] = useState(null);
    const [contactMethod, setContactMethod] = useState(null);
    const [planToUse, setPlanToUse] = useState(null);
    const [comment, setComment] = useState(null);
    const modal = useModals();
    const queryParams = useSelector(searchParams);

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Required";
        } else if (values.name.length < 2) {
            errors.name = "The name must have at least 2 characters";
        }

        if (!values.phone) {
            errors.phone = "Required";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(
                values.email
            )
        ) {
            errors.email = "Invalid email address";
        }

        if (!values.contactMethod) errors.contactMethod = "Required";
        if (!values.budget) errors.budget = "Required";

        return errors;
    };

    const budgetRangeValues = [
        "$10,000 - $25,000",
        "$25,000 - $50,000",
        "more than $50,000",
    ];
    const defaultBudgetRangeOption = budgetRange;

    const contactMethodValues = ["phone / e-mail", "whatsapp / e-mail"];
    const defaultContactMethodOption = contactMethod;

    const planToUseValues = [
        "for an existing business",
        "to start a new business",
    ];
    const defaultPlanToUseOption = planToUse;

    const onSelectBudgetRange = (option) => {
        setBudgetRange(option.value);
        formik.setFieldValue("budget", option.value);
    };
    const onSelectContactMethod = (option) => {
        setContactMethod(option.value);
        formik.setFieldValue("contactMethod", option.value);
    };
    const onSelectPlanToUse = (option) => {
        setPlanToUse(option.value);
        formik.setFieldValue("planToUse", option.value);
    };
    const onChangeComment = (e) => {
        setComment(e.target.value);
        formik.setFieldValue("comment", e.target.value);
    };

    useEffect(() => {
        modal?.region
            ? setRegionCode(modal?.region.toLowerCase())
            : setRegionCode("us");
    }, [modal.region]);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: false,
            email: "",
            agreement: "",
            contactMethod: "",
            // planToUse: "",
            budget: "",
            // comment: "",
        },
        validate,
        onSubmit: (values) => {
            const data = {
                ...values,
                phone: `+${phone}`,
            };

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
                        data,
                        props.destinationURL,
                        props.orderName,
                        props.lang,
                        window.location.href,
                        queryParams || router.query
                    )
                        .then(() => {
                            formik.resetForm();
                            ReactGA.event("generate_lead", {
                                category: "form",
                                action: "submit",
                            });
                            ReactPixel.track("Lead");
                        })
                        .catch(console.log)
                )
                .then(router.push("/thanks-catalog"))
                .catch(console.log);
        },
    });
    function onAgreementChange() {
        formik.setFieldValue("agreement", !formik.values.agreement);
    }
    const [ref, isVisible] = useInView({
        unobserveOnEnter: true,
    });

    useEffect(() => {
        modal?.region
            ? setRegionCode(modal?.region.toLowerCase())
            : setRegionCode("us");
    }, [modal.region]);

    return (
        <div className={style.input_land_out} id="test-drive">
            <div
                ref={ref}
                key={isVisible ? 1 : 2}
                className={`${style.input_land} swipe-right-animation`}
            >
                <div className={style.left}>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="form_submit_land"
                    >
                        <div className={style.content}>
                            <div className={style.grid}>
                                <div className={style.grid_cell}>
                                    <div className={style.input_block_out}>
                                        <div className={style.input_out}>
                                            <input
                                                className={style.input}
                                                name="name"
                                                maxLength="30"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                placeholder={
                                                    props.namePlaceholder ||
                                                    "Name *"
                                                }
                                            />
                                            <div
                                                className={style.error_icon}
                                            ></div>
                                        </div>
                                        <div className={style.error}>
                                            {formik.errors.name}
                                        </div>
                                    </div>
                                    <div
                                        className={`${style.input_block_out} ${
                                            formik.errors.phone
                                                ? "phone__input__error"
                                                : ""
                                        }`}
                                    >
                                        <PhoneInput
                                            containerClass="catalog_input__phone_container"
                                            inputClass={
                                                valid
                                                    ? "input__phone"
                                                    : "input__phone_error"
                                            }
                                            buttonClass={
                                                valid
                                                    ? "drop_down"
                                                    : "drop_down_error"
                                            }
                                            country={regionCode}
                                            enableSearch
                                            excludeCountries={["ru"]}
                                            autoFormat={false}
                                            placeholder={props.phonePlaceholder}
                                            onChange={(
                                                value,
                                                country,
                                                e,
                                                formattedValue
                                            ) => {
                                                const { format, dialCode } =
                                                    country;
                                                setPhone(value);
                                                if (
                                                    value.length > 5 &&
                                                    value.length < 20
                                                ) {
                                                    formik.setFieldValue(
                                                        "phone",
                                                        true
                                                    );
                                                    setValid(true);
                                                } else {
                                                    formik.setFieldValue(
                                                        "phone",
                                                        false
                                                    );
                                                    setValid(false);
                                                }
                                            }}
                                        />
                                        {!valid && (
                                            <span className={style.error}>
                                                Invalid mobile number
                                            </span>
                                        )}
                                    </div>
                                    <div className={style.input_block_out}>
                                        <div className={style.input_out}>
                                            <input
                                                className={style.input}
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                maxLength="40"
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                            />
                                            <div
                                                className={style.error_icon}
                                            ></div>
                                        </div>
                                        <div className={style.error}>
                                            {formik.errors.email}
                                        </div>
                                    </div>
                                </div>
                                <div className={style.grid_cell}>
                                    <div className={style.input_block_out}>
                                        <Dropdown
                                            className={`Dropdown-black_form  ${
                                                formik.errors.budget
                                                    ? "Dropdown-error"
                                                    : ""
                                            }`}
                                            options={budgetRangeValues}
                                            onChange={onSelectBudgetRange}
                                            value={defaultBudgetRangeOption}
                                            placeholder={
                                                props.budgetPlaceholder
                                            }
                                        />
                                        {formik.errors.budget && (
                                            <span className={style.error}>
                                                {formik.errors.budget}
                                            </span>
                                        )}
                                    </div>
                                    <div className={style.input_block_out}>
                                        <Dropdown
                                            className={`Dropdown-black_form  ${
                                                formik.errors.contactMethod
                                                    ? "Dropdown-error"
                                                    : ""
                                            }`}
                                            options={contactMethodValues}
                                            onChange={onSelectContactMethod}
                                            value={defaultContactMethodOption}
                                            placeholder={
                                                props.contactMethodPlaceholder
                                            }
                                        />
                                        {formik.errors.contactMethod && (
                                            <span className={style.error}>
                                                {formik.errors.contactMethod}
                                            </span>
                                        )}
                                    </div>
                                    {/* <div className={style.input_block_out}>
                                        <Dropdown
                                            className={`Dropdown-black_form  ${
                                                formik.errors.planToUse
                                                    ? "Dropdown-error"
                                                    : ""
                                            }`}
                                            options={planToUseValues}
                                            onChange={onSelectPlanToUse}
                                            value={defaultPlanToUseOption}
                                            placeholder={
                                                props.planToUsePlaceholder
                                            }
                                        />
                                        {formik.errors.planToUse && (
                                            <span className={style.error}>
                                                {formik.errors.planToUse}
                                            </span>
                                        )}
                                    </div>
                                    <div className={style.input_block_out}>
                                        <Input
                                            onChange={onChangeComment}
                                            type="text"
                                            value={formik.values.comment}
                                            placeholder={
                                                props.commentPlaceholder
                                            }
                                            name="comment"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <Agreement
                            onAgreementChange={onAgreementChange}
                            agreement={formik.values.agreement}
                            error={formik.errors.agreement}
                        />
                        <FillButton
                            style="blueWhite"
                            submit
                            text={
                                formik.isSubmitting
                                    ? props.submittingText
                                    : props.buttonText
                            }
                            disabled={formik.isSubmitting}
                        />
                    </form>
                </div>
                <div className={style.right}>
                    <Image
                        src={props.image || "/index/catalogs.png"}
                        layout="fill"
                        objectFit={props.objectFit || "contain"}
                        priority={true}
                        quality={90}
                    />
                </div>
            </div>
        </div>
    );
}

export function InputsWName(props) {
    const [valid, setValid] = useState(null);
    const [phone, setPhone] = useState(null);
    const [regionCode, setRegionCode] = useState();
    const image = props.image ? props.image : "/index/catalogs.png";
    const router = useRouter();
    const GAEvents = useGAEvents();
    const queryParams = useSelector(searchParams);

    const modal = useModals();

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Required";
        } else if (values.name.length < 2) {
            errors.name = "The name must have at least 2 characters";
        }

        if (!values.phone) {
            errors.phone = "Required";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(
                values.email
            )
        ) {
            errors.email = "Invalid email address";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: false,
            agreement: "",
        },
        validate,
        onSubmit: (values) => {
            const data = {
                ...values,
                phone: `+${phone}`,
            };
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
                        data,
                        props.destinationURL,
                        props.orderName,
                        props.lang,
                        window.location.href,
                        queryParams || router.query
                    )
                        .then(() => {
                            formik.resetForm();
                            ReactGA.event("generate_lead", {
                                category: "form",
                                action: "submit",
                            });
                            ReactPixel.track("Lead");
                        })
                        .catch(console.log)
                )
                .then(router.push("/thanks-catalog"))
                .catch(console.log);
        },
    });

    function onAgreementChange() {
        formik.setFieldValue("agreement", !formik.values.agreement);
    }

    const [ref, isVisible] = useInView({
        unobserveOnEnter: true,
    });

    useEffect(() => {
        modal?.region
            ? setRegionCode(modal?.region.toLowerCase())
            : setRegionCode("us");
    }, [modal.region]);

    return (
        <div className={style.input_land_out}>
            <div
                ref={ref}
                key={isVisible ? 1 : 2}
                className={`${
                    inputsLandTheme[props.theme ? props.theme : "default"]
                } swipe-right-animation`}
            >
                <div className={style.left}>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="form_submit_land"
                    >
                        <div className={style.content}>
                            <h2 className={style.title}>{props.title}</h2>
                            <p className={style.text}>{props.text}</p>
                            <div className={style.input_out__outer}>
                                <div className={style.input_out}>
                                    <input
                                        className={style.input}
                                        name="name"
                                        maxLength="30"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        placeholder={
                                            props.namePlaceholder || "Name *"
                                        }
                                    />
                                    <div className={style.error_icon}></div>
                                </div>
                                <div className={style.error}>
                                    {formik.errors.name}
                                </div>
                            </div>
                            <div className={style.input_out__outer}>
                                <div className={style.input_out}>
                                    <input
                                        className={style.input}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        maxLength="40"
                                        name="email"
                                        type="email"
                                        placeholder={
                                            props.placeholder || "Email *"
                                        }
                                    />
                                    <div className={style.error_icon}></div>
                                </div>
                                <div className={style.error}>
                                    {formik.errors.email}
                                </div>
                            </div>
                            <div className={style.input_out__outer}>
                                <div
                                    className={`${style.phone__input_block} ${
                                        formik.errors.phone
                                            ? "phone__input__error"
                                            : ""
                                    }`}
                                >
                                    <PhoneInput
                                        containerClass="questions_input__phone_container"
                                        inputClass={
                                            valid
                                                ? "input__phone"
                                                : "input__phone_error"
                                        }
                                        buttonClass={
                                            valid
                                                ? "drop_down"
                                                : "drop_down_error"
                                        }
                                        country={regionCode}
                                        enableSearch
                                        excludeCountries={["ru"]}
                                        autoFormat={false}
                                        placeholder={props.phonePlaceholder}
                                        onChange={(
                                            value,
                                            country,
                                            e,
                                            formattedValue
                                        ) => {
                                            const { format, dialCode } =
                                                country;
                                            setPhone(value);
                                            if (
                                                value.length > 5 &&
                                                value.length < 20
                                            ) {
                                                formik.setFieldValue(
                                                    "phone",
                                                    true
                                                );
                                                setValid(true);
                                            } else {
                                                formik.setFieldValue(
                                                    "phone",
                                                    false
                                                );
                                                setValid(false);
                                            }
                                        }}
                                    />
                                </div>
                                {!valid && (
                                    <div className={style.error}>
                                        {formik.errors.phone}
                                    </div>
                                )}
                            </div>
                        </div>
                        <Agreement
                            onAgreementChange={onAgreementChange}
                            agreement={formik.values.agreement}
                            error={formik.errors.agreement}
                            agreementText={props.agreementText}
                            agreementSpanText={props.agreementSpanText}
                        />
                        <FillButton
                            style={
                                props.theme === "light"
                                    ? "bigBlue"
                                    : "blueWhite"
                            }
                            submit
                            disabled={formik.isSubmitting}
                            text={
                                formik.isSubmitting
                                    ? props.submittingText
                                    : props.buttonText
                            }
                        />
                    </form>
                </div>
                <div className={style.right}>
                    <Image
                        src={image}
                        layout="fill"
                        objectFit={props.objectFit || "contain"}
                        quality={90}
                        priority={true}
                    />
                </div>
            </div>
        </div>
    );
}

function Agreement(props) {
    return (
        <div className={style.input_out__outer}>
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
        <circle cx="10" cy="10" r="10" fill="#212121" />
        <circle className={style.dot} cx="10" cy="10" r="6" fill="#0090FF" />
    </svg>
);

const Input = (props) => {
    return (
        <label className={style.input__label}>
            <input
                name={props.name}
                className={`${style.input} ${
                    props.error ? style.input__error : ""
                }`}
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
            />
            {props.error ? (
                <span className={style.error__message}>{props.error}</span>
            ) : null}
        </label>
    );
};
