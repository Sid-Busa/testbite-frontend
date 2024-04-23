import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email is invalid")
    .trim()
    .required("Email is required"),
  password: yup.string().trim().required("Password is required"),
});

export const registerSchema = yup.object({
  email: yup
    .string()
    .email("Email is invalid")
    .trim()
    .required("Email is required"),
  phone: yup.string().trim().required("Phone is required"),
  password: yup.string().trim().required("Password is required"),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Both passwords must match"),
});
