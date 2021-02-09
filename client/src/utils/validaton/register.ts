import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Minimum 3 symbols.")
    .max(50, "Maximum 50 symbols.")
    .required("Username is required."),
  password: yup
    .string()
    .min(5, "Minimum 5 symbols.")
    .max(255, "Maximum 255 symbols.")
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .required("Please, confirm your password.")
    .oneOf([yup.ref("password"), null], "Passwords are not equals."),
  email: yup
    .string()
    .email("Please fix your email to continue.")
    .required("Email is required."),
});
