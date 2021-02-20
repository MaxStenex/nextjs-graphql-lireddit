import * as yup from "yup";

export const createCommentSchema = yup.object().shape({
  text: yup
    .string()
    .min(1, "Minimum 3 symbols.")
    .max(150, "Maximum 150 symbols.")
    .required("Title is required."),
});
