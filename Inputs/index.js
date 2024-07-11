"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select, { components } from "react-select";
import { authentication } from "../../firebase-config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { isValidPhoneNumber } from "react-phone-number-input";
import Image from "next/image";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import { useInView } from "react-hook-inview";
import { FillButton } from "../../lt-modules/Buttons";
import Link from "next/link";
import { postData } from "../../lt-modules/functions/postData";
import { useGAEvents } from "../../context/GAEventsProvider";
import ReactGA from "react-ga4";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useModals } from "../../context/ModalsProvider.js";
import axios from "axios";
import ReactPixel from "react-facebook-pixel";
import { searchParams } from "../../store/searchParamsSlice.js";
import { useSelector } from "react-redux";
import { sendEventToConversionApi } from "../../lt-modules/functions/sendFbPageView.js";
import { selectOptions } from "../../constants/globalConstants";
import googleLogo from "../../public/icons/google__logo.png";
import { schema } from "../../Layouts/validate.js";
import { dispatch } from "d3";

const inputsLandTheme = {
  default: style.input_land,
  light: style.input_land_light,
};

const debouncedSubmit = debounce(async (type, siteName) => {
  try {
    await axios.post("https://back.netronic.net/forms/trackSubmit", {
      type: type,
      siteName: siteName,
    });
  } catch (error) {
    console.error("Error tracking submit:", error);
  }
}, 300);

export function Inputs(props) {
  const router = useRouter();
  const GAEvents = useGAEvents();
  const [regionCode, setRegionCode] = useState();
  const modal = useModals();
  const queryParams = useSelector(searchParams);
  const [isDesktop, setIsDesktop] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [loggedViaSocials, setLoggedSocials] = useState("");

  const handleServerErrors = (error) => {
    Object.entries(error).forEach(([key, message]) => {
      if (["name", "email", "phoneNumber"].includes(key)) {
        setError(key, {
          type: "server",
          message,
        });
      }
    });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      boxSizing: "border-box",
      width: "100%",
      height: "55px",
      padding: "16.5px 14px",
      borderRadius: "8px",
      border: "1px solid transparent",
      fontFamily: "Roboto",
      color: "#fff",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "140%",
      outline: 0,
      padding: 0,
      backgroundColor: "#212121",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontFamily: "Roboto",
      fontSize: "14px",
      color: "#fff",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
    }),
    menu: (provided) => ({
      ...provided,
      fontFamily: "Roboto",
      color: "#000",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
    }),
    option: (provided) => ({
      ...provided,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#8f96a3",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "140%",
      fontFamily: "Roboto",
    }),
  };

  const DropdownIndicator = (props) => {
    const { selectProps } = props;
    const isMenuOpen = selectProps.menuIsOpen;
    return (
      <components.DropdownIndicator {...props}>
        {isMenuOpen ? (
          <svg id="icon-arrow-down" viewBox="0 0 37 32" width={12} height={12}>
            <path
              fill="#fff"
              d="M18.667 32l-16.166-28h32.332l-16.166 28z"
            ></path>
          </svg>
        ) : (
          <svg id="icon-arrow-up" viewBox="0 0 37 32" width={12} height={12}>
            <path fill="#fff" d="M18.667 0l16.166 28h-32.332l16.166-28z"></path>
          </svg>
        )}
      </components.DropdownIndicator>
    );
  };

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1200);
  }, [window.innerWidth]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
    setError,
    getValues,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      agreement: true,
    },
  });

  const googleAuth = async () => {
    await signOut(authentication);

    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(authentication, provider);
    setLoggedSocials("Google");
    reset({
      email: user.email,
      name: user.displayName,
    });
  };

  const clearAuth = async () => {
    await signOut(authentication);
    setLoggedSocials("");
    reset({
      email: "",
      name: "",
      contactMethod: "",
    });
  };

  const handleAgreementChange = (e) => {
    setValue("agreement", !getValues("agreement"));
    trigger("agreement");
  };

  const orderName = loggedViaSocials
    ? `(${loggedViaSocials}) ${props.orderName}`
    : `(Noauthorization) ${props.orderName}`;

  const onSubmit = async (values) => {
    dispatch(setUserData(values.name));
    const data = {
      ...values,
      phoneNumber: `+${values.phoneNumber}`,
      budget: values.budget.value,
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
    try {
      debouncedSubmit("attempt", window.location.hostname);

      const sendEmailResponse = await axios.request(options);
      const postToCRMResponse = await postData(
        data,
        props.destinationURL,
        orderName,
        window.location.href,
        window.location.hostname,
        queryParams || router.query
      );

      Promise.all([sendEmailResponse, postToCRMResponse]).then(() => {
        reset();
        ReactGA.event("generate_lead", {
          category: "form",
          action: "submit",
        });
        ReactPixel.track("Lead");
        sendEventToConversionApi(window.location.href, "Lead");
        modal.closeModal();
        router.push(props.thank_you_page);
      });
    } catch (error) {
      handleServerErrors(error.response.data);
    }
  };

  const handleMenuOpen = () => setMenuIsOpen(true);
  const handleMenuClose = () => setMenuIsOpen(false);

  useEffect(() => {
    modal?.region
      ? setRegionCode(modal?.region.toLowerCase())
      : setRegionCode("us");
  }, [modal.region]);

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
          {isDesktop ? (
            <div className={style.auth_block}>
              <div className={style.buttons_row}>
                {loggedViaSocials ? (
                  <>
                    <button className={style.clear_button} onClick={clearAuth}>
                      Clear
                    </button>
                    <button
                      className={style.change_button}
                      onClick={
                        loggedViaSocials === "Google"
                          ? googleAuth
                          : facebookAuth
                      }
                    >
                      Change account
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={style.google_button}
                      onClick={googleAuth}
                    >
                      <Image
                        src={googleLogo}
                        alt="google logo"
                        height={15}
                        width={15}
                      />{" "}
                      Authorization via Google
                    </button>
                  </>
                )}
              </div>
              <div className={style.divider_block}>
                <span
                  className={`${style.divider} ${
                    props.isModal ? "" : style.divider_white
                  }`}
                ></span>
                <span
                  className={`${style.divider_text} ${
                    props.isModal ? "" : style.divider_text_white
                  }`}
                >
                  or
                </span>
                <span
                  className={`${style.divider} ${
                    props.isModal ? "" : style.divider_white
                  }`}
                ></span>
              </div>
            </div>
          ) : null}
          <form onSubmit={handleSubmit(onSubmit)} className="form_submit_land">
            <div className={style.content}>
              <div className={style.grid}>
                <div className={style.grid_cell}>
                  <div className={style.input__label}>
                    <input
                      className={style.input}
                      style={{
                        borderColor: errors.name ? "#d22e2e" : "#000",
                      }}
                      $error={errors.name ? "true" : "false"}
                      {...register("name", {
                        required: "Name is required",
                      })}
                      placeholder={
                        props.namePlaceholder ? props.namePlaceholder : "Name*"
                      }
                    />
                    <p className={style.error__message}>
                      {errors.name?.message}
                    </p>
                  </div>
                </div>
                <div className={style.grid_cell}>
                  <div className={style.input__label}>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          international
                          inputStyle={{
                            height: "55px",
                            width: "100%",
                            boxSizing: "border-box",
                            borderRadius: "8px",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: errors.phoneNumber
                              ? "#d22e2e"
                              : "transparent",
                            color: "#fff",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "140px",
                            outline: "0",
                            backgroundColor: "#212121",
                          }}
                          buttonStyle={{
                            borderColor: errors.phoneNumber
                              ? "#d22e2e"
                              : "#000",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            height: "55px",
                          }}
                          country="ua"
                          enableSearch
                          excludeCountries={["ru"]}
                          value={value}
                          onChange={onChange}
                          error={
                            value
                              ? isValidPhoneNumber(`+${value}`)
                                ? undefined
                                : "Invalid phone number"
                              : "Phone number is required"
                          }
                        />
                      )}
                    />
                    {errors.phoneNumber && (
                      <p className={style.error__message}>
                        {errors.phoneNumber?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className={style.grid_cell}>
                  <div className={style.input__label}>
                    <input
                      className={style.input}
                      style={{
                        borderColor: errors.email ? "#d22e2e" : "#000",
                      }}
                      $error={errors.email ? "true" : "false"}
                      {...register("email")}
                      placeholder={
                        props.emailPlaceholder
                          ? props.emailPlaceholder
                          : "Email*"
                      }
                    />
                    <p className={style.error__message}>
                      {errors.email?.message}
                    </p>
                  </div>
                </div>
                <Controller
                  control={control}
                  name="budget"
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder={props.budgetPlaceholder}
                      options={selectOptions}
                      isSearchable={false}
                      components={{ DropdownIndicator }}
                      onMenuOpen={handleMenuOpen}
                      onMenuClose={handleMenuClose}
                      menuIsOpen={menuIsOpen}
                      styles={customStyles}
                    />
                  )}
                />
                {errors.budget && (
                  <p className={style.error__message}>
                    {errors.budget.value.message}
                  </p>
                )}
              </div>
            </div>
            <Controller
              name="agreement"
              control={control}
              render={({ field }) => (
                <Agreement
                  isModal={props.isModal}
                  agreement={field.value}
                  agreementText={props.agreementText}
                  error={errors.agreement?.message}
                  register={register}
                  onAgreementChange={handleAgreementChange}
                />
              )}
            />
            <FillButton
              style="blueWhite"
              submit
              text={isSubmitting ? props.submittingText : props.buttonText}
              disabled={!isValid || isSubmitting}
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
  const [loggedViaSocials, setLoggedSocials] = useState("");
  const [regionCode, setRegionCode] = useState();
  const image = props.image ? props.image : "/index/catalogs.png";
  const router = useRouter();
  const GAEvents = useGAEvents();
  const queryParams = useSelector(searchParams);

  const [isDesktop, setIsDesktop] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleServerErrors = (error) => {
    Object.entries(error).forEach(([key, message]) => {
      if (["name", "email", "phoneNumber"].includes(key)) {
        setError(key, {
          type: "server",
          message,
        });
      }
    });
  };

  const orderName = loggedViaSocials
    ? `(${loggedViaSocials}) ${props.orderName}`
    : `(Noauthorization) ${props.orderName}`;

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1200);
  }, [window.innerWidth]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
    setError,
    getValues,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      agreement: true,
    },
  });

  const googleAuth = async () => {
    await signOut(authentication);

    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(authentication, provider);
    setLoggedSocials("Google");
    reset({
      email: user.email,
      name: user.displayName,
    });
  };

  const clearAuth = async () => {
    await signOut(authentication);
    setLoggedSocials("");
    reset({
      email: "",
      name: "",
      contactMethod: "",
    });
  };

  const handleAgreementChange = (e) => {
    setValue("agreement", !getValues("agreement"));
    trigger("agreement");
  };

  const onSubmit = async (values) => {
    dispatch(setUserData(values.name));
    const data = {
      ...values,
      phoneNumber: `+${values.phoneNumber}`,
      budget: values.budget.value,
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
    try {
      debouncedSubmit("attempt", window.location.hostname);

      const sendEmailResponse = await axios.request(options);
      const postToCRMResponse = await postData(
        data,
        props.destinationURL,
        orderName,
        window.location.href,
        window.location.hostname,
        queryParams || router.query
      );

      Promise.all([sendEmailResponse, postToCRMResponse]).then(() => {
        reset();
        ReactGA.event("generate_lead", {
          category: "form",
          action: "submit",
        });
        ReactPixel.track("Lead");
        sendEventToConversionApi(window.location.href, "Lead");
        modal.closeModal();
        router.push(props.thank_you_page);
      });
    } catch (error) {
      handleServerErrors(error.response.data);
    }
  };

  const handleMenuOpen = () => setMenuIsOpen(true);
  const handleMenuClose = () => setMenuIsOpen(false);

  const modal = useModals();

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });

  useEffect(() => {
    modal?.region
      ? setRegionCode(modal?.region.toLowerCase())
      : setRegionCode("us");
  }, [modal.region]);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boxSizing: "border-box",
      width: "100%",
      height: "55px",
      padding: "16.5px 14px",
      borderRadius: "8px",
      border: "1px solid transparent",
      fontFamily: "Roboto",
      color: "rgb(118, 118, 118)",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "140%",
      outline: 0,
      padding: 0,
      backgroundColor: state.isFocused ? "#d1d1d1" : "#f0f0f0",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontFamily: "Roboto",
      color: "rgb(118, 118, 118)",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
    }),
    menu: (provided) => ({
      ...provided,
      fontFamily: "Roboto",
      color: "rgb(118, 118, 118)",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
    }),
    option: (provided) => ({
      ...provided,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgb(118, 118, 118)",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "140%",
      fontFamily: "Roboto",
    }),
  };
  const DropdownIndicator = (props) => {
    const { selectProps } = props;
    const isMenuOpen = selectProps.menuIsOpen;
    return (
      <components.DropdownIndicator {...props}>
        {isMenuOpen ? (
          <svg id="icon-arrow-down" viewBox="0 0 37 32" width={12} height={12}>
            <path
              fill="#000"
              d="M18.667 32l-16.166-28h32.332l-16.166 28z"
            ></path>
          </svg>
        ) : (
          <svg id="icon-arrow-up" viewBox="0 0 37 32" width={12} height={12}>
            <path fill="#000" d="M18.667 0l16.166 28h-32.332l16.166-28z"></path>
          </svg>
        )}
      </components.DropdownIndicator>
    );
  };

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
            onSubmit={handleSubmit(onSubmit)}
            className="form_submit_land"
          >
            <div className={style.content}>
              <h2 className={style.title}>{props.title}</h2>
              <p className={style.text}>{props.text}</p>

              <div className={style.input_out__outer}>
                {isDesktop ? (
                  <div className={style.auth_block}>
                    <div className={style.buttons_row}>
                      {loggedViaSocials ? (
                        <>
                          <button
                            className={style.clear_button}
                            onClick={clearAuth}
                          >
                            Clear
                          </button>
                          <button
                            className={style.change_button}
                            onClick={
                              loggedViaSocials === "Google"
                                ? googleAuth
                                : facebookAuth
                            }
                          >
                            Change account
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className={style.google_button}
                            onClick={googleAuth}
                          >
                            <Image
                              src={googleLogo}
                              alt="google logo"
                              height={15}
                              width={15}
                            />{" "}
                            Authorization via Google
                          </button>
                        </>
                      )}
                    </div>
                    <div className={style.divider_block}>
                      <span
                        className={`${style.divider} ${
                          props.isModal ? "" : style.divider
                        }`}
                      ></span>
                      <span
                        className={`${style.divider_text} ${
                          props.isModal ? "" : style.divider_text
                        }`}
                      >
                        or
                      </span>
                      <span
                        className={`${style.divider} ${
                          props.isModal ? "" : style.divider
                        }`}
                      ></span>
                    </div>
                  </div>
                ) : null}
                <input
                  className={style.input}
                  style={{
                    borderColor: errors.name ? "#d22e2e" : "transparent",
                  }}
                  $error={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Name is required",
                  })}
                  placeholder={
                    props.namePlaceholder ? props.namePlaceholder : "Name*"
                  }
                />
                <p className={style.error__message}>{errors.name?.message}</p>
              </div>
              <div
                className={style.input_out__outer}
                style={{ marginBottom: "22px" }}
              >
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      international
                      inputStyle={{
                        height: "55px",
                        width: "100%",
                        boxSizing: "border-box",
                        borderRadius: "8px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: errors.phoneNumber
                          ? "#d22e2e"
                          : "transparent",
                        color: "rgb(118, 118, 118)",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "140%",
                        outline: "0",
                        backgroundColor: "#f0f0f0",
                        "&:focus": {
                          borderColor: "red",
                        },
                      }}
                      buttonStyle={{
                        borderColor: errors.phoneNumber ? "#d22e2e" : "#777",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        backgroundColor: "#f0f0f0",
                        height: "55px",
                        "&:active": {
                          borderColor: "red",
                        },
                      }}
                      country="ua"
                      enableSearch
                      excludeCountries={["ru"]}
                      value={value}
                      onChange={onChange}
                      error={
                        value
                          ? isValidPhoneNumber(`+${value}`)
                            ? undefined
                            : "Invalid phone number"
                          : "Phone number is required"
                      }
                    />
                  )}
                />
                {errors.phoneNumber && (
                  <p className={style.error__phone__message}>
                    {errors.phoneNumber?.message}
                  </p>
                )}
              </div>
              <div className={style.input_out__outer}>
                <input
                  className={style.input}
                  style={{
                    borderColor: errors.email ? "#d22e2e" : "transparent",
                  }}
                  $error={errors.email ? "true" : "false"}
                  {...register("email")}
                  placeholder={
                    props.emailPlaceholder ? props.emailPlaceholder : "Email*"
                  }
                />
                <p className={style.error__message}>{errors.email?.message}</p>
              </div>
              <div className={style.input_out__outer}>
                <Controller
                  control={control}
                  name="budget"
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder={
                        props.budgetPlaceholder
                          ? props.budgetPlaceholder
                          : "Budget*"
                      }
                      options={selectOptions}
                      isSearchable={false}
                      components={{ DropdownIndicator }}
                      onMenuOpen={handleMenuOpen}
                      onMenuClose={handleMenuClose}
                      menuIsOpen={menuIsOpen}
                      styles={customStyles}
                    />
                  )}
                />
                {errors.budget && (
                  <p className={style.error__message}>
                    {errors.budget.value.message}
                  </p>
                )}
              </div>
            </div>
            <Controller
              name="agreement"
              control={control}
              render={({ field }) => (
                <Agreement
                  isModal={props.isModal}
                  agreement={field.value}
                  agreementText={props.agreementText}
                  error={errors.agreement?.message}
                  register={register}
                  onAgreementChange={handleAgreementChange}
                />
              )}
            />
            <FillButton
              style={props.theme === "light" ? "bigBlue" : "blueWhite"}
              submit
              disabled={!isValid || isSubmitting}
              text={isSubmitting ? props.submittingText : props.buttonText}
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
            <a>{props.agreementSpanText || "of my personal data"}</a>
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
        className={`${style.input} ${props.error ? style.input__error : ""}`}
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
