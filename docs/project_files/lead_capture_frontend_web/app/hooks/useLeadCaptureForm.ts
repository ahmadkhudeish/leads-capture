import { useFormik } from "formik";
import { captureLead } from "../services/leads";
import { Lead } from "../api/leads/model";
import { leadSchema } from "../api/leads/validations";

export const useLeadCaptureForm = () => {
  const formik = useFormik<Lead>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      acceptTerms: false,
      mobileNumber: "",
      marketingReferralData: "",
      notes: "",
    },
    validationSchema: leadSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await captureLead(values);
        if (response.status === 200) {
          console.log("Lead captured:", response.data);
        } else {
          console.error("Error:", response.data.message);
        }
      } catch (error) {
        console.error("Error capturing lead:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return { formik };
};
