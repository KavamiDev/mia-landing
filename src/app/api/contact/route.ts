import { Resend } from "resend";
import { NextResponse } from "next/server";

const CONTACT_TO = "mia-product@kavami.re";
const MAX_LEN = 8000;

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  type?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!key || !from) {
    return NextResponse.json(
      { useClientFallback: true as const },
      { status: 200 }
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().slice(0, 320);
  const phone = (body.phone ?? "").trim().slice(0, 80);
  const company = (body.company ?? "").trim().slice(0, 200);
  const type = (body.type ?? "autre").trim().slice(0, 120);
  const message = (body.message ?? "").trim().slice(0, MAX_LEN);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nom, e-mail et message sont obligatoires." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }

  const subject = `[MIA — Contact] ${type} — ${company || name}`;
  const html = `
    <p><strong>Type de demande :</strong> ${escapeHtml(type)}</p>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Établissement :</strong> ${escapeHtml(company || "—")}</p>
    <hr />
    <pre style="font-family:system-ui,sans-serif;white-space:pre-wrap">${escapeHtml(message)}</pre>
  `;

  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from,
      to: CONTACT_TO,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend:", error);
      return NextResponse.json(
        {
          error:
            error.message ||
            "L’envoi e-mail a échoué. Vérifiez le domaine expéditeur sur Resend et RESEND_FROM_EMAIL.",
        },
        { status: 502 }
      );
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Service e-mail temporairement indisponible." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true as const });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
