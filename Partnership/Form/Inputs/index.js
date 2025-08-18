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
import { CountryDropdown } from "../../../../components/CountryDropdown";
import { ChangeOptions } from "../../../../components/ChangeOptions";
import { companyOptions } from "../../../../constants/globalConstants.js";

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

    try {
      const postToPRMResponse = await axios.post(
        "https://back.netronic.net/partners",
        // "http://localhost:5002/partners",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Promise.all([postToPRMResponse]).then(() => {
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
      {/* <form onSubmit={handleSubmit(onSubmit)} className="form_submit_land">
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
      </form> */}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* 1. Company details */}
        <h3>Company details</h3>

        <div className={style.content}>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.companyLegalName ? "#d22e2e" : "#000",
                }}
                error={errors.companyLegalName ? "true" : "false"}
                {...register("companyLegalName", {
                  required: "Company Legal Name is required",
                })}
                placeholder={
                  props.companyLegalNamePlaceholder || "Company Legal Name*"
                }
              />
              <p className={style.error__message}>
                {errors.companyLegalName?.message}
              </p>
            </div>
          </div>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.businessAddress ? "#d22e2e" : "#000",
                }}
                error={errors.businessAddress ? "true" : "false"}
                {...register("businessAddress", {
                  required: "Registered Business Address is required",
                })}
                placeholder={
                  props.businessAddressPlaceholder ||
                  "Registered Business Address*"
                }
              />
              <p className={style.error__message}>
                {errors.businessAddress?.message}
              </p>
            </div>
          </div>
          <CountryDropdown
            control={control}
            name="country"
            countryPlaceholder={props.country || "Country*"}
            error={errors.country?.message}
          />
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.city ? "#d22e2e" : "#000",
                }}
                error={errors.city ? "true" : "false"}
                {...register("city", {
                  required: "City is required",
                })}
                placeholder={props.city || "City*"}
              />
              <p className={style.error__message}>{errors.city?.message}</p>
            </div>
          </div>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.vatNumber ? "#d22e2e" : "#000",
                }}
                error={errors.vatNumber ? "true" : "false"}
                {...register("vatNumber", {
                  required: "VAT / Tax ID is required",
                })}
                placeholder={
                  props.vatNumber || "VAT / Tax Identification Number*"
                }
              />
              <p className={style.error__message}>
                {errors.vatNumber?.message}
              </p>
            </div>
          </div>
          <small className={style.note}>
            * Please provide your official VAT number (or equivalent national
            Tax ID). This information is used for company identification,
            invoicing, and financial settlements within the NETRONIC Partner
            Program. By submitting your VAT/Tax ID, you confirm that your
            company is a legally registered business entity eligible for
            commercial cooperation.
          </small>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.website ? "#d22e2e" : "#000",
                }}
                error={errors.website ? "true" : "false"}
                {...register("website")}
                placeholder={props.website || "Website (optional)"}
              />
              <p className={style.error__message}>{errors.website?.message}</p>
            </div>
          </div>
          {/* 2. Contact info */}
          <h3>Contact information</h3>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.firstName ? "#d22e2e" : "#000",
                }}
                error={errors.firstName ? "true" : "false"}
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder={props.firstName || "First name*"}
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
                  borderColor: errors.lastName ? "#d22e2e" : "#000",
                }}
                error={errors.lastName ? "true" : "false"}
                {...register("lastName", {
                  required: "Last name is required",
                })}
                placeholder={props.lastName || "Last name*"}
              />
              <p className={style.error__message}>{errors.lastName?.message}</p>
            </div>
          </div>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <input
                className={style.input}
                style={{
                  borderColor: errors.position ? "#d22e2e" : "#000",
                }}
                error={errors.position ? "true" : "false"}
                {...register("position", {
                  required: "Position is required",
                })}
                placeholder={props.position || "Position*"}
              />
              <p className={style.error__message}>{errors.position?.message}</p>
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
                      height: "40px",
                      width: "100%",
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: errors.phoneNumber ? "#d22e2e" : "#000",
                      color: "#000",
                      fontSize: "14px",
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
                      height: "40px",
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
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder={props.email || "Email*"}
              />
              <p className={style.error__message}>{errors.email?.message}</p>
            </div>
          </div>
          {/* 3. Company type */}
          <h3>Company Type & Motivation</h3>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <ChangeOptions
                options={companyOptions}
                isMulti
                control={control}
                name="companyType"
                error={errors.companyType?.message}
                placeholder={
                  props.companyTypePlaceholder ||
                  "Please select your company type:*"
                }
                rules={{
                  validate: (value) =>
                    (value && value.length > 0) || "Company type required",
                }}
              />
              <p className={style.error__message}>
                {errors.companyType?.message}
              </p>
            </div>
          </div>
          <textarea
            className={style.textarea}
            placeholder="Briefly describe why you are interested in partnering with NETRONIC:"
            {...register("motivation")}
          />
          <p className={style.error__message}>{errors.motivation?.message}</p>

          {/* 4. Experience */}
          <h3>Experience & Current Projects</h3>
          <p className={style.radioTitle}>
            Have you previously worked with laser tag equipment?
          </p>
          <label>
            <input type="radio" value="yes" {...register("experience")} /> Yes
          </label>
          <label>
            <input type="radio" value="no" {...register("experience")} /> No
          </label>
          <p className={style.error__message}>{errors.experience?.message}</p>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <textarea
                className={style.textarea}
                placeholder="If yes – which brand(s)?"
                {...register("brands")}
              />
              <p className={style.error__message}>{errors.brands?.message}</p>
            </div>
          </div>
          <p className={style.radioTitle}>
            Do you currently have any active projects or venues?
          </p>
          <label>
            <input type="radio" value="yes" {...register("projects")} /> Yes
          </label>
          <label>
            <input type="radio" value="no" {...register("projects")} /> No
          </label>
          <div className={style.input_out__outer}>
            <div className={style.input__label}>
              <textarea
                className={style.textarea}
                placeholder="Brief description:"
                {...register("projectsDesc")}
              />
              <p className={style.error__message}>
                {errors.projectsDesc?.message}
              </p>
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
                agreementSpanText={props.agreementSpanText}
                error={errors.agreement?.message}
                register={register}
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
              : props.buttonText}
          </button>
          <small className={style.note}>
            After submission, you will receive a confirmation email and an
            invitation to access the PRM platform.
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
