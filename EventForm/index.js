import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { FillButton } from "../../lt-modules/Buttons";
import { postData } from "../../lt-modules/functions/postData";
import { CheckBox, Input } from "../../lt-modules/InputForms/Inputs/Inputs";
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
      postEventData({ values, equipmentTypeValue, modelValue })
      //   .then(
      //   formik.resetForm()
      // ).then(
      //   window.scroll({ top: 0 })
      // ).then(
      //   props.thankYou()
      // )
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

  let modelValue = `${formik.values.isBasic ? "Basic " : ""}${formik.values.isStandard ? "Standard " : ""}${formik.values.isPremium ? "Premium " : ""}${formik.values.isPro ? "Pro " : ""}`


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
        <CheckBox
          title="Indoor"
          active={formik.values.isIndoor}
          onClick={onIndoorChange}
        />
        <CheckBox
          title="Outdoor"
          active={formik.values.isOutdoor}
          onClick={onOutdoorChange}
        />
        <CheckBox
          title="VR"
          active={formik.values.isVR}
          onClick={onVRChange}
        />
        <CheckBox
          title="Bunkers"
          active={formik.values.isBunkers}
          onClick={onBunkersChange}
        />
      </div>
      <h2 className={style.title}>
        Model
      </h2>
      <div className={style.checkboxes}>
        <CheckBox
          title="Basic"
          active={formik.values.isBasic}
          onClick={onBasicChange}
        />
        <CheckBox
          title="Standard"
          active={formik.values.isStandard}
          onClick={onStandardChange}
        />
        <CheckBox
          title="Premium"
          active={formik.values.isPremium}
          onClick={onPremiumChange}
        />
        <CheckBox
          title="Pro"
          active={formik.values.isPro}
          onClick={onProChange}
        />
      </div>
      <Input
        name="quantity"
        type="text"
        theme="bottomBordered"
        noIcons
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
      <FillButton
        submit
        text="Send"
      />
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
async function postEventData(data) {
  postData(
    data.values,
    "lasertag.net/event-form",
    "London IAAPA Managers Form",
    "us",
    "lasertag.net",
    false,
    [
      {
        name: "Model",
        value: data.modelValue
      },
      {
        name: "Country",
        value: data.values.country
      },
      {
        name: "Current business",
        value: data.values.current_business
      },
      {
        name: "Business to open",
        value: data.values.business_to_open
      },
      {
        name: "Equipment type",
        value: data.equipmentTypeValue
      },
      {
        name: "Quantity",
        value: data.values.quantity
      },
      {
        name: "Comments",
        value: data.values.comments
      },
    ],
  )
  axios.post('https://sheet.best/api/sheets/a029e18d-160e-4ece-8e2e-8c8ac93d67ce',
    {
      name: data.values.name,
      email: data.values.email,
      phone: data.values.phone,
      country: data.values.country,
      current_business: data.values.current_business,
      business_to_open: data.values.business_to_open,
      equipment_type: data.equipmentTypeValue,
      model: data.modelValue,
      quantity: data.values.quantity,
      comments: data.values.comments,
    }
  ).then((res) => {
    console.log(res)
  })
}