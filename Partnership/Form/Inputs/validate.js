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
  if (!value) return true;
  const badwords = new BadWordsNext();
  badwords.add(en);
  badwords.add(ru);
  badwords.add(uk);
  badwords.add(rl);
  return !badwords.check(value);
};

export const schema = yup
  .object({
    // Contact info
    fullName: yup
      .string()
      .trim()
      .required("Full name is required")
      .test(
        "no-profanity",
        "Full name contains swear words",
        badWordsValidator,
      ),
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .email("Invalid email"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .test("is-valid-phone", "Phone number is not valid", phoneNumberValidator)
      .test(
        "is-possible-phone",
        "Phone number is not possible",
        possiblePhoneNumberValidator,
      ),

    // Company type & Agreement
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
          .required("Company type is required"),
      )
      .min(1, "Company type is required"),
    agreement: yup.boolean().oneOf([true], "Agreement required").required(),
  })
  .required();
