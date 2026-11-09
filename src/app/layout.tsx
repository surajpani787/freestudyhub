import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionManager from "./components/SessionManager";
import CookieConsent from "./components/CookieConsent";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fontSerif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  themeColor: "#0a0d14",
  width: "device-width",
  initialScale: 1,
};

// Global SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://freestudyhub.com"),
  title: "FreeStudyHub — 100% Free Developer Roadmaps, Resources & Tutorials",
  description:
    "Curated tech education platform with 100% free tutorials, developer roadmaps, high-yield interview questions, and downloadable PDF cheat sheets.",
  keywords: [
    "FreeStudyHub",
    "Free Coding Resources",
    "Developer Roadmaps",
    "Programming Tutorials",
    "DSA Notes PDF",
    "Interview Preparation",
    "Web Development",
    "Next.js Tutorials",
    "React Roadmaps",
    "Python Tutorials",
    "System Design",
    "AI Machine Learning Free",
  ],
  authors: [{ name: "FreeStudyHub Team" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "FreeStudyHub — Master Tech for Free",
    description:
      "Explore curated roadmaps, high-quality video courses, interview kits, and premium notes.",
    url: "https://freestudyhub.com",
    siteName: "FreeStudyHub",
    images: [
      {
        url: "/user.png",
        width: 1200,
        height: 630,
        alt: "FreeStudyHub Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeStudyHub — Master Tech for Free",
    description: "Curated developer roadmaps, tutorials, interview prep, and notes. 100% free.",
    images: ["/user.png"],
    creator: "@FreeStudyHub",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const hasValidClerkKey = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("YOUR_CLERK") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.length > 30
);

import { cookies } from "next/headers";
import type { StoredUserSession } from "./components/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const demoCookie = cookieStore.get("fsh_demo_session")?.value;
  let initialSession: StoredUserSession | null = null;

  if (demoCookie) {
    try {
      const decoded = decodeURIComponent(demoCookie);
      const parsed = JSON.parse(decoded);
      if (!parsed.expiresAt || parsed.expiresAt > Date.now()) {
        initialSession = parsed;
      }
    } catch {
      try {
        initialSession = JSON.parse(demoCookie);
      } catch {
        // ignore malformed cookie
      }
    }
  }

  // Also check Clerk server session if Clerk key is valid and demo cookie not present
  if (!initialSession && hasValidClerkKey) {
    try {
      const { auth, currentUser } = await import("@clerk/nextjs/server");
      const { userId } = await auth();
      if (userId) {
        const clerkUser = await currentUser();
        if (clerkUser) {
          initialSession = {
            userId: clerkUser.id,
            name: clerkUser.fullName || clerkUser.username || "Student",
            email: clerkUser.primaryEmailAddress?.emailAddress || "student@freestudyhub.com",
            avatar: clerkUser.imageUrl || "/user.png",
            provider: clerkUser.externalAccounts?.[0]?.provider || "google",
          };
        }
      }
    } catch {
      // fallback if clerk is not configured yet
    }
  }

  const content = (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable} scroll-smooth`}>
      <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                name: "FreeStudyHub",
                url: "https://freestudyhub.com",
                logo: "https://freestudyhub.com/user.png",
                description:
                  "FreeStudyHub provides 100% free developer learning roadmaps, tutorials, and notes.",
              }),
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('error', function(e) {
                  if (e && e.message && (e.message.indexOf('Loading chunk') !== -1 || e.message.indexOf('ChunkLoadError') !== -1)) {
                    var key = '_chunk_retry';
                    if (!sessionStorage.getItem(key)) {
                      sessionStorage.setItem(key, '1');
                      window.location.reload();
                    }
                  }
                });
                setTimeout(function() {
                  sessionStorage.removeItem('_chunk_retry');
                }, 5000);
              `,
            }}
          />
        </head>
        <body className="bg-[#0a0d14] text-slate-100 font-sans antialiased selection:bg-amber-500/20 selection:text-amber-200 min-h-screen flex flex-col relative w-full max-w-full overflow-x-clip">
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              />
              <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}

          {/* Subtle Humanized Ambient Atmosphere */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Soft Warm Editorial Overhead Glow */}
            <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[1000px] h-[460px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),rgba(245,158,11,0.03)_60%,transparent_80%)] blur-2xl" />
            {/* Gentle depth accent */}
            <div className="absolute top-[30%] -right-[150px] w-[500px] h-[500px] bg-indigo-500/[0.04] blur-[120px] rounded-full" />
            <div className="absolute top-[65%] -left-[150px] w-[500px] h-[500px] bg-amber-500/[0.03] blur-[120px] rounded-full" />
            {/* Subtle organic micro-dot texture */}
            <div className="absolute inset-0 bg-ambient-grain opacity-[0.035]" />
          </div>

          <SessionManager />
          <Navbar initialSession={initialSession} />
          <main className="relative z-10 flex-1 flex flex-col w-full min-w-0 max-w-full overflow-x-clip">{children}</main>
          <Footer />
          <CookieConsent />
        </body>
      </html>
  );

  if (hasValidClerkKey) {
    return <ClerkProvider>{content}</ClerkProvider>;
  }

  return content;
}
