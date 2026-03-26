const CONTACT_EMAIL = "mia-product@kavami.re";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  type: string;
  message: string;
  /** honeypot — doit rester vide */
  website: string;
};

function isTruthySuccess(v: unknown) {
  return v === true || v === "true";
}

function formSubmitMessageFr(raw: string) {
  const m = raw.toLowerCase();
  if (m.includes("activate form") || m.includes("activation")) {
    return "Le service FormSubmit attend une activation : ouvrez la boîte mia-product@kavami.re, cliquez sur le lien « Activate Form » dans l’e-mail de FormSubmit, puis renvoyez le formulaire.";
  }
  if (m.includes("web server") || m.includes("html files")) {
    return "Envoi refusé par le service. Configurez Resend (recommandé) ou Web3Forms.";
  }
  return raw;
}

/** Envoie via l’API Next (Resend) si configuré, sinon repli navigateur. */
export async function submitContactForm(
  payload: ContactPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (payload.website) {
    return { ok: true };
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
      useClientFallback?: boolean;
    };

    if (data.useClientFallback) {
      return submitContactFormClientFallback(payload);
    }

    if (res.ok && data.ok) {
      return { ok: true };
    }

    return {
      ok: false,
      error: data.error ?? "Une erreur est survenue lors de l’envoi.",
    };
  } catch {
    return submitContactFormClientFallback(payload);
  }
}

async function submitContactFormClientFallback(
  payload: ContactPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  // Web3Forms / FormSubmit si Resend n’est pas configuré (RESEND_* dans .env.local).
  const web3 = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  const typeLabel = payload.type;
  const subject = `[MIA — Contact] ${typeLabel} — ${payload.company || payload.name}`;
  const bodyText = [
    `Type : ${typeLabel}`,
    "",
    payload.message,
    "",
    `Téléphone : ${payload.phone || "—"}`,
    `Établissement : ${payload.company || "—"}`,
  ].join("\n");

  if (web3) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: web3,
        subject,
        from_name: payload.name,
        name: payload.name,
        email: payload.email,
        message: bodyText,
        botcheck: false,
      }),
    });
    let data: { success?: unknown; message?: string } = {};
    try {
      data = (await res.json()) as { success?: unknown; message?: string };
    } catch {
      /* ignore */
    }
    if (isTruthySuccess(data.success)) {
      return { ok: true };
    }
    return {
      ok: false,
      error:
        data.message ??
        "Web3Forms a refusé l’envoi. Ajoutez RESEND_API_KEY et RESEND_FROM_EMAIL côté serveur (recommandé).",
    };
  }

  const url = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _replyto: payload.email,
      _template: "table",
      _captcha: false,
      name: payload.name,
      email: payload.email,
      phone: payload.phone || "—",
      company: payload.company || "—",
      type: typeLabel,
      message: payload.message,
    }),
  });

  let data: { success?: unknown; message?: string } = {};
  try {
    data = (await res.json()) as { success?: unknown; message?: string };
  } catch {
    return {
      ok: false,
      error:
        "Aucun service d’envoi configuré. Ajoutez RESEND_API_KEY + RESEND_FROM_EMAIL dans .env.local.",
    };
  }

  if (isTruthySuccess(data.success)) {
    return { ok: true };
  }

  const raw = data.message ?? "Envoi refusé par FormSubmit.";
  return { ok: false, error: formSubmitMessageFr(raw) };
}

export { CONTACT_EMAIL };
