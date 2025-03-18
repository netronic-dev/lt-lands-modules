import axios from "axios";
import ReactPixel from "react-facebook-pixel";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "react-phone-number-input";
import Image from "next/image";
import { debounce } from "lodash";
import "react-phone-input-2/lib/style.css";
import ReactGA from "react-ga4";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  linkWithCredential,
} from "firebase/auth";
import { authentication } from "../../../../firebase-config";
import style from "./style.module.scss";
import { schema } from "./validate";
import googleLogo from "../../../../public/icons/google__logo.png";

import Link from "next/link";
import { useRouter } from "next/router";
import { useInView } from "react-hook-inview";
import { useDispatch, useSelector } from "react-redux";

import { useGAEvents } from "../../../../context/GAEventsProvider";
import { useValidation } from "../../../../context/ValidationProvider";
import { postData } from "../../../../lt-modules/functions/postData";
import { setUserData } from "../../../../store/actions/userData";
import { searchParams } from "../../../../store/searchParamsSlice.js";
import { sendEventToConversionApi } from "../../../../lt-modules/functions/sendFbPageView.js";
import { useEffect, useState } from "react";
import { useModals } from "../../../../context/ModalsProvider.js";
import { Icon } from "../../../../components/Icon";

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

export function InputsWName(props) {
  const validate = useValidation();
  const router = useRouter();
  const dispatch = useDispatch();
  const GAEvents = useGAEvents();
  const queryParams = useSelector(searchParams);
  const [loggedViaSocials, setLoggedSocials] = useState("");
  const [isDesktop, setIsDesktop] = useState(true);
  const [regionCode, setRegionCode] = useState();
  const modal = useModals();

  const orderName = loggedViaSocials
    ? `(${loggedViaSocials}) ${props.orderName}`
    : `(Noauthorization) ${props.orderName}`;

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1200);
  }, [window.innerWidth]);

  useEffect(() => {
    modal?.region
      ? setRegionCode(modal?.region.toLowerCase())
      : setRegionCode("us");
  }, [modal.region]);

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

  const handleAgreementChange = (e) => {
    setValue("agreement", !getValues("agreement"));
    trigger("agreement");
  };

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

  const facebookAuth = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const { user } = await signInWithPopup(authentication, provider);

      setLoggedSocials("Facebook");
      reset({
        email: user.email
          ? user.email
          : user.reloadUserInfo.providerUserInfo[0].email,
        name: user.displayName,
      });
    } catch (error) {
      if (error.code === "auth/popup-blocked") {
        alert("Please allow pop-ups for this site.");
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        const pendingCred = FacebookAuthProvider.credentialFromError(error);
        const googleProvider = new GoogleAuthProvider();
        const googleUser = await signInWithPopup(
          authentication,
          googleProvider
        );
        const user = await linkWithCredential(googleUser.user, pendingCred);
        reset({
          email: user._tokenResponse.email,
          name: user._tokenResponse.displayName,
        });
        setLoggedSocials("Facebook");
      } else {
        alert("Try again, please!");
      }
    }
  };

  const clearAuth = async () => {
    await signOut(authentication);
    setLoggedSocials("");
    reset({
      email: "",
      name: "",
    });
  };

  const onSubmit = async (values) => {
    dispatch(setUserData(values.name));
    const data = {
      ...values,
      phoneNumber: `+${values.phoneNumber}`,
    };

    const options = {
      method: "POST",
      url: `https://back.netronic.net/send-email`,
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
        router.push("/thanks-call");
      });
    } catch (error) {
      if (error.response.data) {
        handleServerErrors(error.response.data);
      } else {
        await axios.post(
          "https://back.netronic.net/telegram/send-error-message",
          {
            message: `frontend error: FORM SUBMIT ❌ ${window.location.hostname}: ${error}`,
          }
        );
      }
    }
  };

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });

  return (
    <div className={style.input_land_out}>
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
                    loggedViaSocials === "Google" ? googleAuth : facebookAuth
                  }
                >
                  Change account
                </button>
              </>
            ) : (
              <>
                <button className={style.google_button} onClick={googleAuth}>
                  <Image
                    src={googleLogo}
                    alt="google logo"
                    height={15}
                    width={15}
                  />{" "}
                  Authorization via Google
                </button>
                <button
                  className={style.facebook_button}
                  onClick={facebookAuth}
                >
                  <Icon
                    name="icon-facebook_logo"
                    className={style.facebook_icon}
                    width={15}
                    height={15}
                  />{" "}
                  Authorization via Meta (Facebook)
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
      <form onSubmit={handleSubmit(onSubmit)} className="form_submit_land">
        <div className={style.content}>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.name ? "#d22e2e" : "#000",
                }}
                error={errors.name ? "true" : "false"}
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder={props.namePlaceholder || "Name*"}
              />
              <p className={style.error__message}>{errors.name?.message}</p>
            </div>
          </div>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    international
                    inputStyle={{
                      height: "60px",
                      width: "100%",
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: errors.phoneNumber ? "#d22e2e" : "#000",
                      color: "#000",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "140px",
                      outline: "0",
                      backgroundColor: "transparent",
                    }}
                    buttonStyle={{
                      borderColor: errors.phoneNumber ? "#d22e2e" : "#000",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderTopLeftRadius: "8px",
                      borderBottomLeftRadius: "8px",
                      height: "60px",
                    }}
                    country={regionCode}
                    enableSearch
                    excludeCountries={["ru"]}
                    value={value}
                    onChange={onChange}
                    placeholder={props.callPlaceholder || "Phone number*"}
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
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.email ? "#d22e2e" : "#000",
                }}
                error={errors.email ? "true" : "false"}
                {...register("email")}
                placeholder={props.placeholder || "Email*"}
              />
              <p className={style.error__message}>{errors.email?.message}</p>
            </div>
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
        <button
          className={style.button}
          id={props.id ? props.id : ""}
          type="submit"
          onClick={props.onClick}
          disabled={!isValid || isSubmitting}
          style={{
            cursor: !isValid || isSubmitting ? "not-allowed" : "pointer",
            opacity: !isValid || isSubmitting ? 0.5 : 1,
          }}
        >
          {isSubmitting
            ? props.submittingText || "Submitting..."
            : props.buttonText}
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
    <circle cx="10" cy="10" r="10" fill="#383838" />
    <circle className={style.dot} cx="10" cy="10" r="8" fill="#F1F4F6" />
  </svg>
);
