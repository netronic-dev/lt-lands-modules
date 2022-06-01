import { useFormik } from "formik";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import Image from "next/image"
import { icons } from "../../InputForms/icons/icons"
import { useInView } from "react-hook-inview";
import { FillButton } from "../../Buttons/Buttons";
import Link from "next/link"

const inputsLandTheme = {
  "default": style.input_land,
  "light": style.input_land_light,
}

export function Inputs(props) {
  const router = useRouter();

  let id
  if (props.id) {
    id = props.id
  } else if (props.lp) {
    id = "lp_form_submit"
  } else if (props.en) {
    id = "land_form_submit_en"
  } else {
    id = "land_form_submit"
  }

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      email: "",
      agreement: ""
    },
    validate,
    onSubmit: (values) => {
      setTimeout(() => {
        router.push(props.lp ? "/lp/thanks-catalog" : "/thanks-catalog").then(() => router.reload());
        document.body.style.overflowY = "scroll";
      }, 400);
    },

  });
  function onAgreementChange() {
    formik.setFieldValue("agreement", !formik.values.agreement)
  }
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true
  })


  return (
    <div className={style.input_land_out}>
      <div
        ref={ref}
        key={isVisible ? 1 : 2}
        className={`${style.input_land} swipe-right-animation`}
      >
        <div className={style.left}>
          <form
            id="form-catalog-land"
            onSubmit={formik.handleSubmit}
            className="form_submit_land"
          >
            <div className={style.content}>
              <h2 className={style.title}>{props.title ? props.title : "Получи каталог"}</h2>
              <p className={style.text}>
                {props.text ? props.text : "С готовыми комплектациями для открытия бизнеса!"}
              </p>
              <div className={style.input_out__outer}>
                <div className={style.input_out}>
                  <input
                    className={style.input}
                    type="tel"
                    id="phoneNumberLand"
                    name="phoneNumber"
                    maxLength="30"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    placeholder={props.en ? "Phone number" : "Номер телефона *"}
                  />
                  <div className={style.error_icon}>
                    {formik.errors.phoneNumber ? icons.error : formik.values.phoneNumber === "" ? null : icons.agree}
                  </div>
                </div>
                <div className={style.error}>{formik.errors.phoneNumber}</div>
              </div>
              <div className={style.input_out__outer}>
                <div className={style.input_out}>
                  <input
                    className={style.input}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    maxLength="40"
                    id="emailLand"
                    name="email"
                    type="email"
                    placeholder={props.en ? "Email" : "Почта *"}
                  />
                  <div className={style.error_icon}>
                    {formik.errors.email ? icons.error : formik.values.email === "" ? null : icons.agree}
                  </div>
                </div>
                <div className={style.error}>{formik.errors.email}</div>
              </div>
            </div>
            <Agreement
              onAgreementChange={onAgreementChange}
              agreement={formik.values.agreement}
              error={formik.errors.agreement}
              en={props.en}
            />
            <FillButton
              style="blueWhite"
              id={
                Object.keys(formik.errors).length == 0 ? id : null
              }
              submit
              text={props.buttonText}
            />
          </form>
        </div>
        <div className={style.right}>
          <Image
            src={props.image ? props.image : "/index/catalogs.png"}
            layout="fill"
            objectFit={props.objectFit ? props.objectFit : "contain"}
            priority={true}
            quality={90}
          />
        </div>
      </div>
    </div>
  );
}

export function InputsWName(props) {
  const image = props.image ? props.image : "/index/catalogs.png"
  const router = useRouter();
  let id
  if (props.id) {
    id = props.id
  } else if (props.lp) {
    id = "lp_form_submit"
  } else if (props.en) {
    id = "landwname_form_submit_en"
  } else {
    id = "landwname_form_submit"
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      agreement: ""
    },
    validate,
    onSubmit: (values) => {
      setTimeout(() => {
        router.push(props.lp ? "/lp/thanks-catalog" : "/thanks-catalog").then(() => router.reload());
        document.body.style.overflowY = "scroll";
      }, 400);
    },

  });

  function onAgreementChange() {
    formik.setFieldValue("agreement", !formik.values.agreement)
  }

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true
  })

  return (
    <div className={style.input_land_out}>
      <div
        ref={ref}
        key={isVisible ? 1 : 2}
        className={`${inputsLandTheme[props.theme ? props.theme : "default"]} swipe-right-animation`}
      >
        <div className={style.left}>
          <form
            id="form-catalog-land"
            onSubmit={formik.handleSubmit}
            className="form_submit_land"
          >
            <div className={style.content}>
              <h2 className={style.title}>{props.title ? props.title : "Получи каталог"}</h2>
              <p className={style.text}>
                {props.text ? props.text : "С готовыми комплектациями для открытия бизнеса!"}
              </p>
              <div className={style.input_out__outer}>
                <div className={style.input_out}>
                  <input
                    className={style.input}
                    id="nameLand"
                    name="name"
                    maxLength="30"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder={props.en ? "Name" : "Имя"}
                  />
                  <div className={style.error_icon}>
                    {formik.errors.name ? icons.error : formik.values.name === "" ? null : icons.agree}
                  </div>
                </div>
                <div className={style.error}>{formik.errors.name}</div>
              </div>
              <div className={style.input_out__outer}>
                <div className={style.input_out}>
                  <input
                    className={style.input}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    maxLength="40"
                    id="emailLand"
                    name="email"
                    type="email"
                    placeholder={props.en ? "Email" : "Почта"}
                  />
                  <div className={style.error_icon}>
                    {formik.errors.email ? icons.error : formik.values.email === "" ? null : icons.agree}
                  </div>
                </div>
                <div className={style.error}>{formik.errors.email}</div>
              </div>
              <div className={style.input_out__outer}>
                <div className={style.input_out}>
                  <input
                    className={style.input}
                    type="tel"
                    id="phoneNumberLand"
                    name="phoneNumber"
                    maxLength="30"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    placeholder={props.en ? "Phone number" : "Номер телефона"}
                  />
                  <div className={style.error_icon}>
                    {formik.errors.phoneNumber ? icons.error : formik.values.phoneNumber === "" ? null : icons.agree}
                  </div>
                </div>
                <div className={style.error}>{formik.errors.phoneNumber}</div>
              </div>
            </div>
            <Agreement
              onAgreementChange={onAgreementChange}
              agreement={formik.values.agreement}
              error={formik.errors.agreement}
              en={props.en}
            />
            <FillButton
              style={props.theme == "light" ? "bigBlue" : "blueWhite"}
              id={
                Object.keys(formik.errors).length == 0 ? id : null
              }
              submit={Object.keys(formik.errors).length == 0 ? true : null}
              text={props.buttonText}
            />
          </form>
        </div>
        <div className={style.right}>
          <Image
            src={image}
            layout="fill"
            objectFit={props.objectFit ? props.objectFit : "contain"}
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
            {props.en ? "I agree with conditions of the processing and use of my personal data" : "Подтверждаю, что ознакомился и согласен с условиями"}
          </span>
          {" "}{props.en ?
            <Link href="/privacy-policy">
              <a>
                of my personal data
              </a>
            </Link>
            :
            <Link href="/agreement">
              <a>
                политики конфиденциальности
              </a>
            </Link>
          }
        </p>
      </div>
      <div className={style.error}>{props.error}</div>
    </div>
  )
}

export const validate = (values) => {

  const errors = {};

  if (values.name !== undefined) {
    if (values.name === "") {
      errors.name = "Required";
    }
  }
  if (values.email !== undefined) {
    if (values.email === "") {
      errors.email = "Required";
    }
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Wrong email";
    }
  }
  if (values.phoneNumber !== undefined) {
    if (values.phoneNumber === "") {
      errors.phoneNumber = "Required";
    }
    if (!/^[\+]?[(]?[0-9]{1,3}[)]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{1,13}$/im.test(values.phoneNumber)) {
      errors.phoneNumber = "Wrong phone number";
    }
  }
  if (values.agreement !== undefined) {
    if (!values.agreement) {
      errors.agreement = "Required";
    }
  }
  return errors;
};
const dotIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#212121" />
    <circle
      className={style.dot}
      cx="10"
      cy="10"
      r="6"
      fill="#0090FF"
    />
  </svg>
)