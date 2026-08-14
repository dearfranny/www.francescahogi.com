import { JWT } from "google-auth-library";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const TAB_NAME = process.env.GOOGLE_SHEETS_TAB_NAME || "Sheet1";

export async function POST(request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const source = typeof body.source === "string" ? body.source : "";

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKeyB64 = process.env.GOOGLE_SHEETS_PRIVATE_KEY_B64;
    const privateKey = privateKeyB64
      ? Buffer.from(privateKeyB64, "base64").toString("utf8")
      : (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n");

    if (!clientEmail || !privateKey || !SHEET_ID) {
      console.error(
        "Missing Google Sheets env vars: GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY, GOOGLE_SHEET_ID. See SETUP.md."
      );
      return Response.json({ ok: false, error: "not_configured" }, { status: 500 });
    }

    const client = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const { access_token } = await client.authorize();

    const range = `${TAB_NAME}!A:C`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(
      range
    )}:append?valueInputOption=RAW`;

    const sheetsRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[new Date().toISOString(), email, source]],
      }),
    });

    if (!sheetsRes.ok) {
      const text = await sheetsRes.text();
      console.error("Google Sheets append failed:", sheetsRes.status, text);
      return Response.json({ ok: false, error: "sheets_error" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("subscribe route error:", err);
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
