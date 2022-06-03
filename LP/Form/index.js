import style from "./style.module.scss"
import { useState } from "react"
import { useFormik } from "formik"
import { CheckBox, DropDownList, InputEmail, InputCall, InputName } from "../../../InputForms/Inputs/Inputs"
import countriesList from "../../../../Data/countries.json"
import { validationRu, validation } from "../ExtendedValidation"
import Link from "next/link"
import { useRouter } from "next/router"
import { FillButton } from "../../../Buttons/Buttons"
import LPButton from "../Button/LPButton"
import Agreement from "./Agreement"
import { ExtendedForm } from "./ExtendedForm/ExtendedForm"

export function LPForm(props) {
  return (
    <section
      className={style.form_block}
    >
      <div className={style.form_block_inner}>
        <h2 className={style.title} >
          {props.title}
        </h2>
        <ExtendedForm
          outside={props.outside}
          thank_you_page_url={props.thank_you_page_url}
          lang={props.lang}
          en={props.en}
          buttonText={props.buttonText}
          agreement__text={props.agreement__text}
        />
      </div>
    </section>
  )
}

export function LPShortForm(props) {
  let validate = props.ru ? validationRu : validation
  const [isAgreePrivacyPolicy, changeAgreePrivacyPolicy] = useState(false)
  const router = useRouter();
  function onAgreementChange() {
    changeAgreePrivacyPolicy(!isAgreePrivacyPolicy);
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validate,
    onSubmit: (values) => {
      setTimeout(() => {
        if (props.outside) {
          window.location.href = props.thank_you_page_url
        } else {
          router.push(props.thank_you_page_url).then(() => router.reload());
        }
      }, 400);
    },
  });

  return (
    <section
      className={style.short_form_block_out}
      name={props.name}
      id={props.id}
      key={props.key}
      ref={props.ref}
    >
      <div className={style.short_form_block}>
        <div className={style.title_cell}>
          <h2 className={`${style.title} fade-up-animation`}>
            {props.title}
          </h2>
        </div>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <div className={`${style.input_name_out} fade-up-animation`}>
            <InputName
              en={props.en}
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
              nameFormID="lp-"
              theme="rounded"
              noIcons
              errorTheme="rounded_flat"
            />
          </div>
          <div className={`
          ${style.input_email_out}
            fade-up-animation
            animated-second
            `
          }>
            <InputEmail
              en={props.en}
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              emailFormID="lp-"
              theme="rounded"
              noIcons
              errorTheme="rounded_flat"
            />
          </div>
          <div className={`
          ${style.input_call_out}
            fade-up-animation
            animated-third
          `}>
            <InputCall
              en={props.en}
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={formik.errors.phoneNumber}
              phoneFormID="lp-"
              theme="rounded"
              noIcons
              errorTheme="rounded_flat"
            />
          </div>
          <div className={style.submit}>
            <Agreement
              active={isAgreePrivacyPolicy}
              onClick={onAgreementChange}
              text={props.agreement__text}
              style={`${style.agreement} fade-up-animation`}
            />
            <LPButton
              id={isAgreePrivacyPolicy ? Object.keys(formik.errors).length == 0 ?
                `lp-catalog-form-submit${props.lang ? "-" + props.lang : ""}`
                : null : null}
              submit
              style="fade-up-animation animated-second"
              hover="white"
              bgcolor="#0090FF"
              onClick={props.onClick}
              full_width
            >
              {props.buttonText}
            </LPButton>
          </div>
        </form>
      </div>
    </section>
  )
}

