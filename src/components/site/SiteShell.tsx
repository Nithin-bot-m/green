"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Masthead from "./Masthead";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

/* Shared chrome: masthead + page body + footer, with a soft
   cross-page fade keyed to the current route. */
export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="paper-grain relative min-h-screen bg-paper text-ink">
      <Masthead />
      <main key={pathname} className="page-enter">
        {children}
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}
