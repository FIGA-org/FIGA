import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  // TODO: integrate with your email provider here
  if (!email || typeof email !== "string") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
