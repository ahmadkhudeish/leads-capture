import { test, expect } from "@playwright/test";

test.describe("Lead Capture Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders the form fields correctly", async ({ page }) => {
    await expect(page.locator('input[name="firstName"]')).toBeVisible();
    await expect(page.locator('input[name="lastName"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="acceptTerms"]')).toBeVisible();
    await expect(page.locator('input[name="mobileNumber"]')).toBeVisible();
    await expect(
      page.locator('input[name="marketingReferralData"]')
    ).toBeVisible();
    await expect(page.locator('textarea[name="notes"]')).toBeVisible();
  });

  test("validates form fields correctly", async ({ page }) => {
    await page.click('button[type="submit"]');
    await page.waitForTimeout(1000);

    await expect(page.locator("text=First name is required")).toBeVisible();
    await expect(page.locator("text=Last name is required")).toBeVisible();
    await expect(page.locator("text=Email is required")).toBeVisible();
    await expect(
      page.locator("text=Accepting terms is required")
    ).toBeVisible();
  });

  test("submits the form when validation passes", async ({ page }) => {
    await page.fill('input[name="firstName"]', "John");
    await page.fill('input[name="lastName"]', "Doe");
    await page.fill('input[name="email"]', "john.doe@example.com");
    await page.check('input[name="acceptTerms"]');
    await page.click('button[type="submit"]');
    await page.waitForTimeout(1000);
    await expect(page.locator(".text-red-600")).toHaveCount(0);
  });
});
