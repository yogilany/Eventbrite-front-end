import * as Yup from "yup";
import zxcvbn from "zxcvbn";

/**
 * Regex for verifying emails.
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @type {{}}
 */
export const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
    .required("First name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed")
    .required("Last name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: Yup.string().notRequired().matches(isValidEmail, "Invalid email"),
  emailConfirm: Yup.string()
    .oneOf(
      [Yup.ref("email"), null],
      "Email address doesn't match. Please try again"
    )
    .required("Required"),
  password: Yup.string().required("Field is required").min(8, ""),
});
/**
 * Runs a check on the password and returns its score,
 *  a hex color indicating the score,
 *  and a short description about the password strength
 * @date 3/29/2023 - 2:48:25 AM
 * @author h4z3m
 *
 * @param {*} password
 * @returns {{}}
 */

export const getPasswordState = (password) => {
  if (password.length < 8)
    return [0, "#e02e46", "Your password must be at least 8 characters"];

  const result = zxcvbn(password).score;
  switch (result) {
    case 0:
      return password.length < 8
        ? [0, "#e02e46", "Your password must be at least 8 characters"]
        : [1, "#e02e46", "Your password is weak"];
    case 1:
      return [1, "#e02e46", "Your password is weak"];
    case 2:
      return [2, "#f05537", "Your password is moderate"];
    case 3:
      return [3, "#16a85a", "Your password is strong"];
    case 4:
      return [4, "#16a85a", "Your password is very strong"];
    default:
      return "";
  }
};
