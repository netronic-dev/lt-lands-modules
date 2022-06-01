import { useFormik } from "formik"
import { useRouter } from "next/router";
import { useState } from "react";
import { CheckBox, DropDownList, InputCall, InputEmail, InputName } from "../../../../InputForms/Inputs/Inputs";
import { validationRu, validation } from "../../ExtendedValidation"
import Agreement from "../Agreement/Agreement";
import countriesList from "../../../../../Data/countries.json"
import style from "./style.module.scss"
import LPButton from "../../LPButton/LPButton";

export function ExtendedForm(props) {
  let validate = props.ru ? validationRu : validation
  const [isAgreePrivacyPolicy, changeAgreePrivacyPolicy] = useState(false)

  function onAgreementChange() {
    changeAgreePrivacyPolicy(!isAgreePrivacyPolicy);
  }

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      country: "",
      contactType: "",
      methodOfUse: "",
      hearAboutUs: "",
      comment: "",
      isOutdoor: false,
      isIndoor: false,
      isMobile: false,
      isVR: false,
      isBunkers: false,
      isUndecided: false,
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

  let equipmentTypeValue = `${formik.values.isOutdoor ? "Outdoor " : ""}${formik.values.isIndoor ? "Indoor " : ""}${formik.values.isMobile ? "Mobile " : ""}${formik.values.isVR ? "VR " : ""}${formik.values.isBunkers ? "Bunkers " : ""}${formik.values.isUndecided ? "Undefined " : ""}`

  let equipmentTypeError = false

  function checkEquipmentType() {
    if (equipmentTypeValue) {
      equipmentTypeError = false
    } else { equipmentTypeError = true }
  }

  if (formik.values.name) {
    equipmentTypeError = false
    checkEquipmentType()
  } else if (formik.values.email) {
    equipmentTypeError = false
    checkEquipmentType()
  } else if (formik.values.phoneNumber) {
    equipmentTypeError = false
    checkEquipmentType()
  } else if (formik.values.country) {
    equipmentTypeError = false
    checkEquipmentType()
  } else if (formik.values.contactType) {
    equipmentTypeError = false
    checkEquipmentType()
  } else if (formik.values.methodOfUse) {
    equipmentTypeError = false
    checkEquipmentType()
  } else if (formik.values.hearAboutUs) {
    equipmentTypeError = false
    checkEquipmentType()
  }

  function onCountryChange(data) {
    formik.setFieldValue("country", data.myName)
  }
  function onHearAboutUsChange(data) {
    formik.setFieldValue("hearAboutUs", data.myName)
  }
  function onMethodOfUseChange(data) {
    formik.setFieldValue("methodOfUse", data.myName)
  }

  function onOutdoorChange() {
    formik.setFieldValue("isOutdoor", !formik.values.isOutdoor)
    formik.setFieldValue("isUndecided", false)
  }
  function onIndoorChange() {
    formik.setFieldValue("isIndoor", !formik.values.isIndoor)
    formik.setFieldValue("isUndecided", false)
  }
  function onMobileChange() {
    formik.setFieldValue("isMobile", !formik.values.isMobile)
    formik.setFieldValue("isUndecided", false)
  }
  function onVRChange() {
    formik.setFieldValue("isVR", !formik.values.isVR)
    formik.setFieldValue("isUndecided", false)
  }
  function onBunkersChange() {
    formik.setFieldValue("isBunkers", !formik.values.isBunkers)
    formik.setFieldValue("isUndecided", false)
  }
  function onUndecidedChange() {
    formik.setFieldValue("isUndecided", !formik.values.isUndecided)
    if (formik.values.isUndecided === false) {
      formik.setFieldValue("isOutdoor", false)
      formik.setFieldValue("isIndoor", false)
      formik.setFieldValue("isMobile", false)
      formik.setFieldValue("isVR", false)
      formik.setFieldValue("isBunkers", false)
    }
  }

  return (
    <form className={style.form_ext} onSubmit={formik.handleSubmit} key={props.formType}>
      <div className={style.cell_inputs}>
        <div className={style.input_name_out}>
          <InputName
            en={props.en}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
            nameFormID={props.formType ? props.formType + "-" : "lp-"}
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
            emailFormID={props.formType ? props.formType + "-" : "lp-"}
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
            phoneFormID={props.formType ? props.formType + "-" : "lp-"}
            theme="rounded"
            noIcons
            errorTheme="rounded_flat"
          />
        </div>
        <div className={style.dropdownlist}>
          <DropDownList
            id={props.formType ? props.formType + "-" + "country" : "country"}
            title="Country"
            data={countriesList}
            onClick={(data) => { onCountryChange(data) }}
            value={formik.values.country}
            error={formik.errors.country}
            theme="rounded"
            errorTheme="rounded_flat"
          />
        </div>
        <div className={style.dropdownlist}>
          <DropDownList
            id={props.formType ? props.formType + "-" + "method_of_use" : "method_of_use"}
            title="Method of use"
            data={methodOfUseData}
            onClick={(data) => { onMethodOfUseChange(data) }}
            value={formik.values.methodOfUse}
            error={formik.errors.methodOfUse}
            theme="rounded"
            errorTheme="rounded_flat"
          />
        </div>
        <div className={style.dropdownlist}>
          <DropDownList
            id={props.formType ? props.formType + "-" + "hear_about_us" : "hear_about_us"}
            title="How did you hear about us?"
            data={hearAboutUsData}
            onClick={(data) => { onHearAboutUsChange(data) }}
            value={formik.values.hearAboutUs}
            error={formik.errors.hearAboutUs}
            theme="rounded"
            errorTheme="rounded_flat"
          />
        </div>
      </div>
      <div className={style.cell_checklist}>
        <div className={style.cell_checklist_head}>
          <h3 className={style.form__lil_title}>
            Type of equipment
          </h3>
          <p className={style.cell_checklist_error}>
            {equipmentTypeError ? "Required" : ""}
          </p>
          <input
            className={style.hidden_input}
            value={equipmentTypeValue}
            id={props.formType ? props.formType + "-" + "equipment_type" : "equipment_type"}
          />
        </div>
        <div className={style.type}>
          <CheckBox
            id={props.formType ? props.formType + "-" + "outdoor-" : "outdoor-"}
            onClick={onOutdoorChange}
            title={<>Outdoor laser tag</>}
            active={formik.values.isOutdoor}
            error={equipmentTypeError}
          />
          <CheckBox
            id={props.formType ? props.formType + "-" + "indoor-" : "indoor-"}
            onClick={onIndoorChange}
            title={<>Indoor laser tag</>}
            active={formik.values.isIndoor}
            error={equipmentTypeError}
          />
          <CheckBox
            id={props.formType ? props.formType + "-" + "mobile-" : "mobile-"}
            onClick={onMobileChange}
            title={<>Mobile laser tag</>}
            active={formik.values.isMobile}
            error={equipmentTypeError}
          />
          <CheckBox
            id={props.formType ? props.formType + "-" + "vr-" : "vr-"}
            onClick={onVRChange}
            title="VR"
            active={formik.values.isVR}
            error={equipmentTypeError}
          />
          <CheckBox
            id={props.formType ? props.formType + "-" + "bunkers-" : "bunkers-"}
            onClick={onBunkersChange}
            title={<>Inflatable bunkers</>}
            active={formik.values.isBunkers}
            error={equipmentTypeError}
          />
          <CheckBox
            id={props.formType ? props.formType + "-" + "undecided-" : "undecided-"}
            onClick={onUndecidedChange}
            title={<>Undefined</>}
            active={formik.values.isUndecided}
            error={equipmentTypeError}
          />
        </div>
      </div>
      <div className={style.cell_bottom}>
        <Comment
          id={props.formType}
          en={props.en}
          formType={props.formType}
          value={formik.values.LeaveComment}
          onChange={formik.handleChange}
        />
        <div className={style.submit}>
          <Agreement
            active={isAgreePrivacyPolicy}
            onClick={onAgreementChange}
            text={props.agreement__text}
            style="fade-up-animation"
          />
          <LPButton
            id={isAgreePrivacyPolicy ? Object.keys(formik.errors).length == 0 ?
              `lp${props.sufix ? "-" + props.sufix : ""}-form-submit${props.lang ? "-" + props.lang : ""}`
              : null : null}
            submit
            style={style.button_submit}
            hover="white"
            bgcolor="#0090FF"
            full_width
          >
            {props.buttonText}
          </LPButton>
        </div>
      </div>
    </form>
  )
}
const methodOfUseData = [
  { name: "Existing business" },
  { name: "New business" },
  { name: "Home use" },
]

const hearAboutUsData = [
  { name: "Social networks" },
  { name: "Search engine" },
  {
    name: "Ads on third-party sites"
  },
  { name: "Recommendation of friends" },
]
export function CheckBoxArrow(props) {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      className={`
      ${style.checkbox_arrow} 
      ${props.active ? style.checkbox_arrow_active : ""}
      `}
    >
      <path d="M5.99967 11.1698L1.82967 6.99984L0.409668 8.40984L5.99967 13.9998L17.9997 1.99984L16.5897 0.589844L5.99967 11.1698Z" fill="white" />
    </svg>
  )
}

function Comment(props) {
  return (
    <div className={style.comment}>
      <h3 className={style.form__lil_title}>
        Questions or comments
      </h3>
      <input
        type="text"
        maxLength={150}
        className={style.comment_input}
        id={props.formType ? props.formType + "-" + "comment" : "comment"}
        name="comment"
        placeholder="Tell us about your business, needs, or ask any questions you have"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  )
}
