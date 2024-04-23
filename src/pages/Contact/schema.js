import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().trim().required("Name is required"),
  email: yup
    .string()
    .email("Email is invalid")
    .trim()
    .required("Email is required"),
  phone: yup.string().trim().required("Phone is required"),
  message: yup.string().trim().required("Message is required"),
});
