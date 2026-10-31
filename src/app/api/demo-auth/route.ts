import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("fsh_demo_session")?.value;

  if (!session) {
    return NextResponse.json({ authenticated: false, user: null });
  }

  try {
    const user = JSON.parse(session);
    return NextResponse.json({ authenticated: true, user });
  } catch {
    return NextResponse.json({ authenticated: false, user: null });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const provider = body.provider || "google";
    const name = body.name || (provider === "github" ? "GitHub Developer" : "Google Student");
    const email = body.email || (provider === "github" ? "dev@github.user" : "student@gmail.com");

    const sessionData = {
      name,
      email,
      provider,
      avatar: provider === "github" ? "/user.png" : "/user.png",
      loggedInAt: new Date().toISOString(),
    };

    const cookieStore = await cookies();
    cookieStore.set("fsh_demo_session", JSON.stringify(sessionData), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      httpOnly: false, // accessible to client for smooth UI state
      sameSite: "lax",
    });

    return NextResponse.json({ success: true, user: sessionData });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to create session" }, { status: 400 });
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("fsh_demo_session");
  return NextResponse.json({ success: true });
}
