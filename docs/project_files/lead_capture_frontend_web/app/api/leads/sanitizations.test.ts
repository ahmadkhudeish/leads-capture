import { Lead } from "./model";
import { sanitizeLeadsData } from "./sanitizations";

describe("sanitizeLeadsData", () => {
  it("should sanitize all fields correctly", () => {
    const input: Lead = {
      firstName: "<John>",
      lastName: "Doe & Co",
      email: "john.doe@example.com",
      acceptTerms: true,
      mobileNumber: "123-456-7890",
      marketingReferralData: "Referral data <script>",
      notes: "Some notes & more notes",
    };

    const sanitized = sanitizeLeadsData(input);

    expect(sanitized.firstName).toBe("&lt;John&gt;");
    expect(sanitized.lastName).toBe("Doe &amp; Co");
    expect(sanitized.email).toBe("john.doe@example.com");
    expect(sanitized.acceptTerms).toBe(true);
    expect(sanitized.mobileNumber).toBe("123-456-7890");
    expect(sanitized.marketingReferralData).toBe(
      "Referral data &lt;script&gt;"
    );
    expect(sanitized.notes).toBe("Some notes &amp; more notes");
  });

  it("should handle optional fields correctly", () => {
    const input: Lead = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      acceptTerms: true,
      mobileNumber: undefined,
      marketingReferralData: undefined,
      notes: undefined,
    };

    const sanitized = sanitizeLeadsData(input);

    expect(sanitized.firstName).toBe("John");
    expect(sanitized.lastName).toBe("Doe");
    expect(sanitized.email).toBe("john.doe@example.com");
    expect(sanitized.acceptTerms).toBe(true);
    expect(sanitized.mobileNumber).toBe("");
    expect(sanitized.marketingReferralData).toBe("");
    expect(sanitized.notes).toBe("");
  });
});
