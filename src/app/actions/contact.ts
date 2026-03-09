'use server';

/**
 * @fileOverview Server Action for handling contact form submissions to Zoho Flow.
 * Standardizes API field names and maps them to lowercase column names for Zoho Sheets.
 */

const ZOHO_WEBHOOK_URL = "https://flow.zoho.in/60066961770/flow/webhook/incoming?zapikey=1001.ac2cb11074ede804c0e7bdcaf93442dc.9e3de0160abd3fc92b66e103017c3ba5&isdebug=false";

export type ZohoSubmissionData = {
  leadId: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  dateTime: string;
  status: string;
};

export async function submitToZoho(data: ZohoSubmissionData) {
  try {
    /**
     * Mapping Internal Fields to Zoho Sheet lowercase column names:
     * leadId -> sl no (Sheet) & lead_id (API/Webhook)
     * name -> name
     * email -> email
     * subject -> subject
     * message -> message
     * dateTime -> date & time
     * status -> status
     */
    const payload = {
      "sl no": data.leadId,
      "lead_id": data.leadId,
      "name": data.name,
      "email": data.email,
      "subject": data.subject,
      "message": data.message,
      "date & time": data.dateTime,
      "status": data.status,
      "source": "arkaadigital_web_v2"
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
