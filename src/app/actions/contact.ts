'use server';

/**
 * @fileOverview Server Action for handling contact form submissions to Zoho Flow.
 * Moving this to the server resolves CORS issues that occur during client-side fetch.
 */

const ZOHO_WEBHOOK_URL = "https://flow.zoho.in/60066892414/flow/webhook/incoming?zapikey=1001.f535287f02f527c39f3fd70817a55cac.929563d7435f52fbf3fe1aad89c56004&isdebug=false";

export type ZohoSubmissionData = {
  name: string;
  email: string;
  project: string;
  message: string;
};

export async function submitToZoho(data: ZohoSubmissionData) {
  try {
    const response = await fetch(ZOHO_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": data.name,
        "email": data.email,
        "project": data.project,
        "message": data.message
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Zoho API error (${response.status}):`, errorText);
      return { success: false, error: 'Failed to send data to Zoho.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Zoho Submission Server Error:', error);
    return { success: false, error: 'An unexpected error occurred while sending data.' };
  }
}
