import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";

import { setUserData } from "../../../../store/actions/userData";
import { sendEventToConversionApi } from "../../../../lt-modules/functions/sendFbPageView.js";
import { useModals } from "../../../../context/ModalsProvider.js";
import { generateUUID } from "../../../../lt-modules/functions/generateUUID";
import { companyOptions } from "../../../../constants/globalConstants.js";
import { handleServerErrors } from "../../../../lt-modules/functions/handleServerErrors.js";
import { getLocationData } from "../../../../lt-modules/functions/postData.js";
import { getName } from "country-list";

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
      firstName: "",
      email: "",
      companyType: [],
      agreement: true,
    },
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#become_a_partner") {
      setTimeout(() => {
        const el = document.getElementById("become_a_partner");
        if (el) {
          const offset = 60;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  const handleAgreementChange = () => {
    setValue("agreement", !getValues("agreement"));
    trigger("agreement");
  };

  const onSubmit = async (values) => {
    debouncedSubmit("attempt", window.location.hostname);
    dispatch(setUserData(values.fullName));
    let locationInfo = await getLocationData();
    let countryNameRaw =
      getName(locationInfo.country) || locationInfo.country || "";
    let countryName =
      typeof countryNameRaw === "string" ? countryNameRaw.trim() : "";

    countryName = countryName.replace(/\s*\(the\)$/i, "").trim();

    const countryFixes = {
      "Netherlands (Kingdom of the)": "Netherlands",
      Moldova: "Moldova, Republic of",
      "Korea (the Republic of)": "Korea, Republic of",
    };

    if (countryFixes[countryName]) {
      countryName = countryFixes[countryName];
    }

    const options = companyOptions(t);

    const selectedLabels = Array.isArray(values.companyType)
      ? values.companyType
          .map((val) => options.find((opt) => opt.value === val)?.label || val)
          .join(", ")
      : values.companyType;

    const data = {
      ...values,
      phoneNumber: `+${values.phoneNumber}`,
      companyType: selectedLabels,
      pageUrl: window.location.href,
      country: countryName || "",
      city: locationInfo.city || "",
    };

    try {
      const postToPRMResponse = await axios.post(
        "https://back.netronic.net/partners",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      Promise.all([postToPRMResponse]).then(() => {
        debouncedSubmit("success", window.location.hostname);
        reset();
        ReactGA.event("generate_lead", {
          event_category: "form",
          event_label: "submit",
          page_path: router.pathname,
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
            first_name: values.firstName,
          },
          eventId,
        );
        router.push("/thanks-call");
      });
    } catch (error) {
      await axios.post(
        "https://back.netronic.net/telegram/send-error-message",
        {
          message: `CREATE PARTNER FORM SUBMIT ❌ ${window.location.hostname}: ${error}`,
        },
      );

      const serverData = error.response?.data;
      const errorMessage = serverData?.errorMessage;

      if (errorMessage) {
        toast.error(errorMessage);
      }
      handleServerErrors(error, setError);
    }
  };

  return (
    <div className={style.input_land_out} id="become_a_partner">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.content}>
          <p className={style.note}>
            Interested in becoming a NETRONIC distributor, reseller, or business
            partner? Leave your contact details, and our Partnerships team will
            get in touch.
          </p>

          <h3>Contact information</h3>

          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.firstName ? "#d22e2e" : "#c4c4c4",
                }}
                {...register("firstName", {
                  required: "Full name is required",
                })}
                placeholder={props.firstName || "Full name*"}
              />
              <p className={style.error__message}>
                {errors.firstName?.message}
              </p>
            </div>
          </div>

          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.email ? "#d22e2e" : "#c4c4c4",
                }}
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder={props.email || "Email*"}
              />
              <p className={style.error__message}>{errors.email?.message}</p>
            </div>
          </div>

          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field: { onChange, value } }) => (
                  <div style={{ position: "relative", width: "100%" }}>
                    <PhoneInput
                      international
                      inputStyle={{
                        height: "40px",
                        width: "100%",
                        boxSizing: "border-box",
                        borderRadius: "10px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: errors.phoneNumber ? "#d22e2e" : "#c4c4c4",
                        color: "#000",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        outline: "0",
                        backgroundColor: "transparent",
                      }}
                      buttonStyle={{
                        borderColor: errors.phoneNumber ? "#d22e2e" : "#c4c4c4",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        height: "40px",
                        backgroundColor: "transparent",
                      }}
                      country={regionCode}
                      enableSearch
                      excludeCountries={["ru"]}
                      value={value}
                      onChange={onChange}
                      placeholder={props.callPlaceholder || "Phone number*"}
                    />
                    {errors.phoneNumber && (
                      <p className={style.error__message}>
                        {errors.phoneNumber?.message}
                      </p>
                    )}
                    {!errors.phoneNumber &&
                      value &&
                      !isValidPhoneNumber(`+${value}`) && (
                        <p className={style.error__message}>
                          Invalid phone number
                        </p>
                      )}
                  </div>
                )}
              />
            </div>
          </div>

          <h3>Company Type & Motivation</h3>
          <div className={style.input_out__outer}>
            <Controller
              control={control}
              name="companyType"
              rules={{
                validate: (value) =>
                  (value && value.length > 0) || "Company type required",
              }}
              render={({ field: { value = [], onChange } }) => {
                const selectedValues = Array.isArray(value) ? value : [];

                const handleToggle = (optionValue) => {
                  if (selectedValues.includes(optionValue)) {
                    onChange(
                      selectedValues.filter((item) => item !== optionValue),
                    );
                  } else {
                    onChange([...selectedValues, optionValue]);
                  }
                };

                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {companyOptions.map((option) => {
                      const isChecked = selectedValues.includes(option.value);

                      return (
                        <label
                          key={option.value}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            cursor: "pointer",
                            fontFamily: "Manrope",
                            fontSize: "14px",
                            color: "#000",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggle(option.value)}
                            style={{
                              width: "16px",
                              height: "16px",
                              cursor: "pointer",
                            }}
                          />
                          <span>{option.label}</span>
                        </label>
                      );
                    })}
                  </div>
                );
              }}
            />
            {errors.companyType && (
              <p className={style.error__message}>
                {errors.companyType?.message}
              </p>
            )}
          </div>

          <Controller
            name="agreement"
            control={control}
            render={({ field }) => (
              <Agreement
                isModal={props.isModal}
                agreement={field.value}
                agreementText={props.agreementText}
                agreementSpanText={props.agreementSpanText}
                error={errors.agreement?.message}
                onAgreementChange={handleAgreementChange}
              />
            )}
          />

          <button
            className={style.button}
            type="submit"
            disabled={!isValid || isSubmitting}
            style={{
              cursor: !isValid || isSubmitting ? "not-allowed" : "pointer",
              opacity: !isValid || isSubmitting ? 0.5 : 1,
            }}
          >
            {isSubmitting
              ? props.submittingText || "Submitting..."
              : props.buttonText || "Become a NETRONIC Partner"}
          </button>

          <small className={style.bottomNote}>
            This application is intended for businesses interested in
            distributing, reselling, or promoting NETRONIC products, not for
            purchasing equipment for their own use.
          </small>
        </div>
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
