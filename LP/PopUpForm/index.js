import style from "./style.module.scss"
import { useRouter } from "next/router"
import { useState } from "react"
import { useFormik } from "formik"
import { validationRu, validation } from "../ExtendedValidation"
import { InputEmail, InputCall, InputName } from "../../../InputForms/Inputs/Inputs"
import LPButton from "../Button/LPButton"
import Agreement from "../Form/Agreement/Agreement"
import { ExtendedForm } from "../Form/ExtendedForm/ExtendedForm"

export function LPPopUpForm(props) {
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
    <div className={style.pop_up_form}>
      <div className={style.quit_block} onClick={props.onQuitClick}></div>
      <div className={style.wrapper}>
        <div className={style.quit_button_out}>
          <button className={style.quit_button} onClick={props.onQuitClick}>
            {borderedCross}
          </button>
        </div>
        <div className={style.title_cell}>
          <h2 className={style.title}>
            {props.title}
          </h2>
        </div>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <div className={style.input_name_out}>
            <InputName
              en={props.en}
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
              nameFormID="lp-popup-"
              theme="rounded"
              noIcons
              errorTheme="rounded_flat"
            />
          </div>
          <div className={style.input_email_out}>
            <InputEmail
              en={props.en}
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              emailFormID="lp-popup-"
              theme="rounded"
              noIcons
              errorTheme="rounded_flat"
            />
          </div>
          <div className={style.input_call_out}>
            <InputCall
              en={props.en}
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={formik.errors.phoneNumber}
              phoneFormID="lp-popup-"
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
              style={style.agreement}
            />
            <LPButton
              id={isAgreePrivacyPolicy ? Object.keys(formik.errors).length == 0 ?
                `lp${props.sufix ? "-" + props.sufix : ""}-popup-form-submit${props.lang ? "-" + props.lang : ""}`
                : null : null}
              submit
              style={style.button_submit}
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
    </div>
  )
}

export function LPPopUpFormExtended(props) {
  return (
    <div className={style.pop_up_form_ext}>
      <div className={style.quit_block} onClick={props.onQuitClick} />
      <div className={style.wrapper}>
        <button className={style.quit_button} onClick={props.onQuitClick}>
          {borderedCross}
        </button>
        <div className={style.title_cell}>
          <h2 className={style.title}>
            {props.title}
          </h2>
        </div>
        <ExtendedForm
          formType="popup"
          outside={props.outside}
          thank_you_page_url={props.thank_you_page_url}
          sufix={props.sufix + "-popup"}
          lang={props.lang}
          en={props.en}
          buttonText={props.buttonText}
          agreement__text={props.agreement__text}
        />
      </div>
    </div>
  )
}

const arrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={style.arrow}
  >
    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white" />
  </svg>
)
const borderedCross = (
  <svg width="80" height="35" viewBox="0 0 80 35" fill="none" className={style.bordered_cross}>
    <rect x="0.5" y="0.5" width="79" height="34" rx="17" stroke="#8E8E8E" />
    <path d="M47 12.41L45.59 11L40 16.59L34.41 11L33 12.41L38.59 18L33 23.59L34.41 25L40 19.41L45.59 25L47 23.59L41.41 18L47 12.41Z" fill="white" />
  </svg>
)