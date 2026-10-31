import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest, type NextFetchEvent } from "next/server";

const isPublicRoute = (pathname: string) => {
  return (
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up") ||
    pathname.startsWith("/api/demo-auth") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  );
};

const hasValidClerkKey = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("YOUR_CLERK") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.length > 30
);

// If Clerk key is valid, wrap in Clerk's middleware
const clerkHandler = hasValidClerkKey
  ? clerkMiddleware(async (auth, req) => {
      const demoSession = req.cookies.get("fsh_demo_session")?.value;
      if (demoSession) return;
      if (!isPublicRoute(req.nextUrl.pathname)) {
        await auth.protect();
      }
    })
  : null;

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  if (clerkHandler) {
    return clerkHandler(req, event);
  }

  // Graceful fallback route protection before user adds their live Clerk keys
  // If demo session cookie exists, allow access to vault
  const demoSession = req.cookies.get("fsh_demo_session")?.value;
  if (!isPublicRoute(req.nextUrl.pathname) && !demoSession) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
