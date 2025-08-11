import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "react-phone-number-input";
import { debounce } from "lodash";
import "react-phone-input-2/lib/style.css";
import ReactGA from "react-ga4";
import style from "./style.module.scss";
import { schema } from "./validate";

import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { postData } from "../../../../lt-modules/functions/postData";
import { setUserData } from "../../../../store/actions/userData";
import { searchParams } from "../../../../store/searchParamsSlice.js";
import { sendEventToConversionApi } from "../../../../lt-modules/functions/sendFbPageView.js";
import { useEffect, useState } from "react";
import { useModals } from "../../../../context/ModalsProvider.js";
import { generateUUID } from "../../../../lt-modules/functions/generateUUID";

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
  const router = useRouter();
  const dispatch = useDispatch();
  const queryParams = useSelector(searchParams);
  const [regionCode, setRegionCode] = useState();
  const modal = useModals();
  const eventId = generateUUID();

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

  const onSubmit = async (values) => {
    debouncedSubmit("attempt", window.location.hostname);
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
      const sendEmailResponse = await axios.request(options);
      const postToCRMResponse = await postData(
        data,
        props.destinationURL,
        props.orderName,
        window.location.href,
        window.location.hostname,
        queryParams || router.query
      );

      Promise.all([sendEmailResponse, postToCRMResponse]).then(() => {
        debouncedSubmit("success", window.location.hostname);
        reset();
        ReactGA.event("generate_lead", {
          category: "form",
          action: "submit",
        });
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead", {}, { eventID: eventId });
        }
        sendEventToConversionApi(
          window.location.href,
          "Lead",
          {
            email: values.email,
            phone: `+${values.phoneNumber}`,
          },
          eventId
        );
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

  return (
    <div className={style.input_land_out}>
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
