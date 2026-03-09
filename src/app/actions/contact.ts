'use server';

/**
 * @fileOverview Server Action for handling contact form submissions to Zoho Flow.
 * Moving this to the server resolves CORS issues that occur during client-side fetch.
 */

const ZOHO_WEBHOOK_URL = "https://flow.zoho.in/60066961770/flow/webhook/incoming?zapikey=1001.ac2cb11074ede804c0e7bdcaf93442dc.9e3de0160abd3fc92b66e103017c3ba5&isdebug=false";

export type ZohoSubmissionData = {
  name: string;
  email: string;
  subject: string;
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
        "subject": data.subject,
        "message": data.message,
        "submission_time": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
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
