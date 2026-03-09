'use server';

/**
 * @fileOverview Server Action for handling contact form submissions to Zoho Flow.
 * Ensures that data is sent in a structured JSON format for proper mapping in Zoho Flow,
 * Zoho Sheets, and downstream WhatsApp notifications.
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
    // We send a flat JSON object including metadata to help Zoho Flow 
    // identify the source for its WhatsApp notification logic.
    const payload = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      source: "arkaadigital_web_v1",
      submitted_at: new Date().toISOString()
    };

    const response = await fetch(ZOHO_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Zoho Webhook Error (${response.status}):`, errorText);
      return { success: false, error: 'Webhook rejected the request.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Zoho Submission Server Error:', error);
    return { success: false, error: 'Failed to communicate with the integration server.' };
  }
}
