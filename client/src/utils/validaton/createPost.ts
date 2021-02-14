import * as yup from "yup";

export const createPostSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Minimum 3 symbols.")
    .max(50, "Maximum 50 symbols.")
    .required("Title is required."),
  text: yup
    .string()
    .min(5, "Minimum 5 symbols.")
    .max(300, "Maximum 300 symbols.")
    .required("Text is required."),
});
