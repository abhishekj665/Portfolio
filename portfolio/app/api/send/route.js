import { EmailTemplate, EmailTemplate2 } from "../../..//components/email-template.jsx";
import { Resend } from "resend";
import { profile_data } from "../../../project_data";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(req) {
  if (!resend) {
    return Response.json(
      { error: "RESEND_API_KEY is not configured." },
      { status: 500 },
    );
  }

  const json = await req.json();
  const { name, email, message } = json;

  try {
    const ownerEmail = process.env.CONTACT_RECEIVER_EMAIL || profile_data.email;

    const data = await resend.batch.send([
      {
        from: `${name} <onboarding@resend.dev>`,
        to: [ownerEmail],
        reply_to: [email],
        subject: `New message from ${name}`,
        react: EmailTemplate({ messageData: message, name, email }),
      },
      {
        from: `${profile_data.name} <onboarding@resend.dev>`,
        to: [email],
        subject: `Reply from ${profile_data.name}`,
        react: EmailTemplate2({ name }),
      },
    ]);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
