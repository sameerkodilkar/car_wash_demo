import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, datetime, washType } = data;

    // Format datetime as DD/MM/YY hh:mm am/pm
    const dateObj = new Date(datetime);
    const formattedDateTime =
      `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear().toString().slice(-2)} ` +
      dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();

    // We assume the user has set these environment variables securely
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    // Replace literal '\n' with actual newlines if necessary
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    // The Sheet ID from the provided URL
    const spreadsheetId = "1CvzGMy7e05k_KSK1iokKY0dvOoi5NxXVOnC1N71BQXI";

    if (!clientEmail || !privateKey) {
      console.warn("Google API credentials are missing. Simulating success.");
      // Simulation mode if env variables are not yet provided
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Booking received (Simulation)" });
    }

    // Authenticate with Google Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Columns: Booking_No, Name, Contact_Number, Date_Time, Service, Appointment_Status, Notes, Approval_Batch_ID
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Bookings!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            "=ROW()-1", // Booking_No
            name,
            phone,
            formattedDateTime,
            washType,
            "Pending", // Appointment Status
            "Form via website", // Notes
            "", // Notification_Sent_At
            "New", //Approval_Status
            "", // Approval_Batch_ID
            "",//Last_Updated
          ],
        ],
      },
    });

    return NextResponse.json({ success: true, message: "Booking saved to Google Sheets" });
  } catch (error: any) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to submit booking", details: error },
      { status: 500 }
    );
  }
}
