export interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  acceptTerms: boolean;
  mobileNumber?: string | null;
  marketingReferralData?: string | null;
  notes?: string | null;
}
