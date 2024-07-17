import * as yup from "yup";

export const leadSchema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  email: yup
    .string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
    .required("Email is required"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "Accepting terms is required")
    .required("Accepting terms is required"),
  mobileNumber: yup.string().trim().nullable(),
  marketingReferralData: yup.string().trim().nullable(),
  notes: yup.string().trim().nullable(),
});
