import { NextResponse } from "next/server";

/**
 * Reçoit les inscriptions (guide gratuit, appel découverte).
 * Pour les récupérer, définis LEAD_WEBHOOK_URL sur Vercel :
 * un webhook Make / Zapier / n8n, ou une Google Apps Script qui écrit dans un Google Sheet.
 * Sans webhook, les contacts apparaissent dans les logs Vercel (onglet Logs).
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  if (!name) return NextResponse.json({ ok: false, error: "Prénom requis" }, { status: 400 });
  if (body.source === "guide-gratuit" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "E-mail invalide" }, { status: 400 });
  }

  const lead = {
    name,
    email,
    whatsapp: String(body.whatsapp ?? "").slice(0, 40),
    situation: String(body.situation ?? "").slice(0, 100),
    goal: String(body.goal ?? "").slice(0, 500),
    slot: String(body.slot ?? "").slice(0, 100),
    source: String(body.source ?? "site").slice(0, 50),
    date: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("Webhook en échec", err);
    }
  } else {
    console.log("Nouveau contact :", lead);
  }

  return NextResponse.json({ ok: true });
}
