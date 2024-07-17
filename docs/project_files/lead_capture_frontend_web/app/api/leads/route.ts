import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as yup from "yup";
import validator from "validator";
import { leadSchema } from "./validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validatedData = await leadSchema.validate(body, {
      abortEarly: false,
    });

    const sanitizedData = {
      firstName: validator.escape(validatedData.firstName),
      lastName: validator.escape(validatedData.lastName),
      email: validator.escape(validatedData.email),
      acceptTerms: validatedData.acceptTerms,
      mobileNumber: validatedData.mobileNumber
        ? validator.escape(validatedData.mobileNumber)
        : "",
      marketingReferralData: validatedData.marketingReferralData
        ? validator.escape(validatedData.marketingReferralData)
        : "",
      notes: validatedData.notes ? validator.escape(validatedData.notes) : "",
    };

    // Simulate saving data (e.g., save to a database)
    console.log("Sanitized lead data:", sanitizedData);
    return NextResponse.json({ message: "Lead captured successfully" });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Error capturing lead" },
      { status: 500 }
    );
  }
}
