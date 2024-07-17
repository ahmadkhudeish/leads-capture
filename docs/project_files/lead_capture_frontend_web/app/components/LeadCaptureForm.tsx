"use client";

import React from "react";
import { useLeadCaptureForm } from "../hooks/useLeadCaptureForm";

const LeadCaptureForm: React.FC = () => {
  const { formik, isSubmitted } = useLeadCaptureForm();

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-600">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div>
          <label className="block font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-600">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            checked={formik.values.acceptTerms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="h-6 w-6 text-blue-600 border-gray-300 rounded"
          />
          <label
            htmlFor="acceptTerms"
            className="ml-2 block text-sm font-medium cursor-pointer"
          >
            Accept Terms
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="text-red-600">{formik.errors.acceptTerms}</div>
          ) : null}
        </div>
        <div>
          <label className="block font-medium">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formik.values.mobileNumber ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
            <div className="text-red-600">{formik.errors.mobileNumber}</div>
          ) : null}
        </div>
        <div>
          <label className="block font-medium">Marketing Referral Data</label>
          <input
            type="text"
            name="marketingReferralData"
            value={formik.values.marketingReferralData ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {formik.touched.marketingReferralData &&
          formik.errors.marketingReferralData ? (
            <div className="text-red-600">
              {formik.errors.marketingReferralData}
            </div>
          ) : null}
        </div>
        <div>
          <label className="block font-medium">Notes</label>
          <textarea
            name="notes"
            value={formik.values.notes ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {formik.touched.notes && formik.errors.notes ? (
            <div className="text-red-600">{formik.errors.notes}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
          disabled={formik.isSubmitting}
        >
          Submit
        </button>
      </form>
      {isSubmitted && (
        <div className="mt-4 p-4 border border-green-500 bg-green-100 text-green-700 rounded">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default LeadCaptureForm;
