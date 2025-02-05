"use server";

interface BillingInfo {
  // Define the properties of BillingInfo here
  name: string;
  address: string;
  // Add other properties as needed
}

export async function createBillingInfo(input: BillingInfo) {
  return input
}

export async function updateBillingInfo(input: BillingInfo, billingId: string) {
  if (!input) {
    throw new Error("Input is required");
  }
  // Do something with input
  return billingId;
}
