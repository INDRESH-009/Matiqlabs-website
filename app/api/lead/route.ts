import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.company || !body?.email || !body?.details || !body?.intent) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  console.log("Lead request", {
    intent: body.intent,
    name: body.name,
    company: body.company,
    email: body.email,
    details: body.details,
  });

  return NextResponse.json({ ok: true });
}
