import { useState } from "react";
import { useFormik } from "formik";
import { captureLead } from "../services/leads";
import { Lead } from "../api/leads/model";
import { leadSchema } from "../api/leads/validations";

export const useLeadCaptureForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
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
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await captureLead(values as Lead);
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error capturing lead:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return { formik, isSubmitted };
};
