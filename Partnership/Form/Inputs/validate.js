import * as yup from "yup";
import {
  parsePhoneNumberFromString,
  isPossiblePhoneNumber,
} from "libphonenumber-js";
import BadWordsNext from "bad-words-next";
import en from "bad-words-next/data/en.json";
import ru from "bad-words-next/data/ru.json";
import uk from "bad-words-next/data/ua.json";
import rl from "bad-words-next/data/ru_lat.json";

const phoneNumberValidator = (value) => {
  if (!value) return false;
  const phoneNumber = parsePhoneNumberFromString(`+${value}`);
  return phoneNumber ? phoneNumber.isValid() : false;
};

const possiblePhoneNumberValidator = (value) => {
  if (!value) return false;
  return isPossiblePhoneNumber(`+${value}`);
};

const badWordsValidator = (value) => {
  const badwords = new BadWordsNext();
  badwords.add(en);
  badwords.add(ru);
  badwords.add(uk);
  badwords.add(rl);
  return !badwords.check(value);
};

export const schema = yup
  .object({
    // 1. Company details
    companyLegalName: yup
      .string()
      .trim()
      .required("Company Legal Name is required")
      .test("no-profanity", "Invalid words detected", badWordsValidator),
    businessAddress: yup
      .string()
      .trim()
      .required("Registered Business Address is required"),
    country: yup.string().trim().required("Country is required"),
    city: yup.string().trim().required("City is required"),
    vatNumber: yup.string().trim().required("VAT / Tax ID is required"),
    website: yup.string().url("Invalid website URL").nullable(),

    // 2. Contact info
    firstName: yup
      .string()
      .trim()
      .required("First name is required")
      .test(
        "no-profanity",
        "First name contains swear words",
        badWordsValidator
      ),
    lastName: yup
      .string()
      .trim()
      .required("Last name is required")
      .test("no-profanity", "Last name swear words", badWordsValidator),
    position: yup
      .string()
      .trim()
      .required("Position is required")
      .test("no-profanity", "Invalid words detected", badWordsValidator),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .test("is-valid-phone", "Phone number is not valid", phoneNumberValidator)
      .test(
        "is-possible-phone",
        "Phone number is not possible",
        possiblePhoneNumberValidator
      ),
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .email("Invalid email"),

    // 3. Company type & Motivation
    companyType: yup
      .array()
      .of(
        yup
          .mixed()
          .transform((val) => {
            if (typeof val === "string") return val;
            if (val && typeof val === "object") return val.label || val.value;
            return val;
          })
          .required("Company type is required")
      )
      .min(1, "Company type is required"),
    motivation: yup
      .string()
      .nullable()
      .test("no-profanity", "Invalid words detected", (val) =>
        val ? badWordsValidator(val) : true
      ),
    experience: yup.string().required("Please select your experience"),
    brands: yup
      .string()
      .nullable()
      .when("experience", {
        is: "yes",
        then: (schema) =>
          schema
            .required("Please list the brands you sell")
            .test("no-profanity", "Invalid words detected", (val) =>
              val ? badWordsValidator(val) : true
            ),
        otherwise: (schema) => schema.nullable(),
      }),
    projects: yup.string().required("Please select your project status"),
    projectsDesc: yup
      .string()
      .nullable()
      .when("projects", {
        is: "yes",
        then: (schema) =>
          schema
            .required("Please describe your current projects")
            .test("no-profanity", "Invalid words detected", (val) =>
              val ? badWordsValidator(val) : true
            ),
        otherwise: (schema) => schema.nullable(),
      }),
    agreement: yup.boolean().oneOf([true], "Agreement required").required(),
  })
  .required();
