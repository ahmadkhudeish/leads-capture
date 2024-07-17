import validator from "validator";
import { Lead } from "./model";

export const sanitizeLeadsData = (data: Lead) => ({
  firstName: validator.escape(data.firstName),
  lastName: validator.escape(data.lastName),
  email: validator.escape(data.email),
  acceptTerms: data.acceptTerms,
  mobileNumber: data.mobileNumber ? validator.escape(data.mobileNumber) : "",
  marketingReferralData: data.marketingReferralData
    ? validator.escape(data.marketingReferralData)
    : "",
  notes: data.notes ? validator.escape(data.notes) : "",
});
