"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#070a12] text-white min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-block p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-6">
            <AlertTriangle size={36} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Application Error
          </h1>
          <p className="text-slate-400 text-sm mb-6">
            A critical error occurred while rendering the root application.
          </p>
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 text-white font-semibold text-sm transition cursor-pointer"
          >
            <RotateCcw size={15} />
            <span>Reload Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}
