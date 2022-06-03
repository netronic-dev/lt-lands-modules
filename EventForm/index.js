import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { CheckBox, Input } from "../../InputForms/Inputs/Inputs";
import LPButton from "../LPNew/LPButton/LPButton";
import style from "./style.module.scss"

export function EventForm(props) {

  const [isThankYouActive, changeThankYouState] = useState(false)

  function onThankYouView() {
    changeThankYouState(true)
    setTimeout(() => {
      changeThankYouState(false)
    }, 2000);
  }
  return (
    <section className={style.event_form}>
      {isThankYouActive ?
        <ThankYou /> :
        <Form
          thankYou={onThankYouView}
        />}
    </section>
  )
}

function Form(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      current_business: "",
      business_to_open: "",
      isIndoor: false,
      isOutdoor: false,
      isVR: false,
      isBunkers: false,
      isBasic: false,
      isStandard: false,
      isPremium: false,
      isPro: false,
      quantity: "",
      comments: ""
    },
    validate,
    onSubmit: (values) => {
      axios.post('https://sheet.best/api/sheets/dcf57c62-c756-459d-b106-5bb6b2b45545',
        {
          name: formik.values.name,
          email: formik.values.email,
          phone: formik.values.phone,
          country: formik.values.country,
          current_business: formik.values.current_business,
          business_to_open: formik.values.business_to_open,
          equipment_type: equipmentTypeValue,
          model: modelValue,
          quantity: formik.values.quantity,
          comments: formik.values.comments,
        }
      ).then(response => {
        console.log(response);
      }).then(
        formik.resetForm()
      ).then(
        window.scroll({ top: 0 })
      ).then(
        props.thankYou()
      )
    }
  })

  function onIndoorChange(data) {
    formik.setFieldValue("isIndoor", !formik.values.isIndoor)
  }
  function onOutdoorChange(data) {
    formik.setFieldValue("isOutdoor", !formik.values.isOutdoor)
  }
  function onVRChange(data) {
    formik.setFieldValue("isVR", !formik.values.isVR)
  }
  function onBunkersChange(data) {
    formik.setFieldValue("isBunkers", !formik.values.isBunkers)
  }
  function onBasicChange(data) {
    formik.setFieldValue("isBasic", !formik.values.isBasic)
  }
  function onStandardChange(data) {
    formik.setFieldValue("isStandard", !formik.values.isStandard)
  }
  function onPremiumChange(data) {
    formik.setFieldValue("isPremium", !formik.values.isPremium)
  }
  function onProChange(data) {
    formik.setFieldValue("isPro", !formik.values.isPro)
  }

  let equipmentTypeValue = `${formik.values.isOutdoor ? "Outdoor " : ""}${formik.values.isIndoor ? "Indoor " : ""}${formik.values.isVR ? "VR " : ""}${formik.values.isBunkers ? "Bunkers " : ""}`

  let modelValue = `Model:${formik.values.isBasic ? "Basic " : ""}${formik.values.isStandard ? "Standard " : ""}${formik.values.isPremium ? "Premium " : ""}${formik.values.isPro ? "Pro " : ""}`

  let unionOfValuesForRoistat = `
  ${formik.values.current_business ? "current_business: " + formik.values.current_business : ""}
  ${formik.values.business_to_open ? "business_to_open: " + formik.values.business_to_open : ""}
  ${modelValue}
  ${formik.values.quantity ? "quantity: " + formik.values.quantity : ""}
  ${formik.values.comments ? "comments: " + formik.values.comments : ""}
  `

  return (
    <form
      className={style.form}
      onSubmit={formik.handleSubmit}
    >
      <h1 className={style.title}>
        Event form
      </h1>
      <Input
        name="name"
        type="text"
        theme="bottomBordered"
        noIcons
        id="name"
        anotherPlace="Name"
        errorTheme="flat"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.errors.name}
      />
      <Input
        name="email"
        type="text"
        theme="bottomBordered"
        noIcons
        id="email"
        anotherPlace="Email"
        errorTheme="flat"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Input
        name="phone"
        type="text"
        theme="bottomBordered"
        noIcons
        id="phone"
        anotherPlace="Phone number"
        errorTheme="flat"
        onChange={formik.handleChange}
        value={formik.values.phone}
        error={formik.errors.phone}
      />
      <Input
        name="country"
        type="text"
        theme="bottomBordered"
        noIcons
        id="country"
        anotherPlace="Country"
        errorTheme="flat"
        onChange={formik.handleChange}
        value={formik.values.country}
        error={formik.errors.country}
      />
      <Input
        name="current_business"
        type="text"
        theme="bottomBordered"
        noIcons
        id="current_business"
        anotherPlace="Current business"
        errorTheme="flat"
        onChange={formik.handleChange}
        value={formik.values.current_business}
        error={formik.errors.current_business}
      />
      <Input
        name="business_to_open"
        type="text"
        theme="bottomBordered"
        noIcons
        id="business_to_open"
        anotherPlace="Business to open"
        errorTheme="flat"
        onChange={formik.handleChange}
        value={formik.values.business_to_open}
        error={formik.errors.business_to_open}
      />
      <h2 className={style.title}>
        Equipment type
      </h2>
      <div className={style.checkboxes}>
        <input
          className={style.hidden_input}
          id="equipment_type"
          value={equipmentTypeValue}
        />
        <CheckBox
          title="Indoor"
          id="Indoor_"
          active={formik.values.isIndoor}
          onClick={onIndoorChange}
        />
        <CheckBox
          title="Outdoor"
          id="Outdoor_"
          active={formik.values.isOutdoor}
          onClick={onOutdoorChange}
        />
        <CheckBox
          title="VR"
          id="VR_"
          active={formik.values.isVR}
          onClick={onVRChange}
        />
        <CheckBox
          title="Bunkers"
          id="Bunkers_"
          active={formik.values.isBunkers}
          onClick={onBunkersChange}
        />
      </div>
      <h2 className={style.title}>
        Model
      </h2>
      <div className={style.checkboxes}>
        <input
          className={style.hidden_input}
          id="model"
          value={modelValue}
        />
        <input
          className={style.hidden_input}
          id="union"
          value={unionOfValuesForRoistat}
        />
        <CheckBox
          title="Basic"
          id="basic_"
          active={formik.values.isBasic}
          onClick={onBasicChange}
        />
        <CheckBox
          title="Standard"
          id="Standard_"
          active={formik.values.isStandard}
          onClick={onStandardChange}
        />
        <CheckBox
          title="Premium"
          id="Premium_"
          active={formik.values.isPremium}
          onClick={onPremiumChange}
        />
        <CheckBox
          title="Pro"
          id="Pro_"
          active={formik.values.isPro}
          onClick={onProChange}
        />
      </div>
      <Input
        name="quantity"
        type="text"
        theme="bottomBordered"
        noIcons
        id="quantity"
        anotherPlace="Quantity"
        errorTheme="flat"
        onChange={formik.handleChange}
        value={formik.values.quantity}
        error={formik.errors.quantity}
      />
      <Input
        name="comments"
        type="text"
        theme="bottomBordered"
        noIcons
        anotherPlace="Comments"
        errorTheme="flat"
        onChange={formik.handleChange}
        value={formik.values.comments}
        error={formik.errors.comments}
      />
      <LPButton
        id="iaapa-event-form-submit"
        submit
        style={style.submit_button}
        hover="white"
        bgcolor="#0090FF"
      >
        Send
      </LPButton>
    </form>
  )
}
function ThankYou() {
  return (
    <div>
      <h1 className={style.title}>
        Thank you, the request has been sent
      </h1>
    </div>
  )
}
const validate = (values) => {
  const errors = {};
  if (values.name !== undefined) {
    if (values.name === "") {
      errors.name = "Required";
    }
  }
  return errors;
};