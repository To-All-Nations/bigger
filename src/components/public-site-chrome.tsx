"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export function PublicSiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/intern")) return children;

  return (
    <>
      <SiteHeader />
      {children}
      <footer className="site-footer" id="kontakt">
        <div className="wrap footer-inner">
          <Link href="/" className="brand" aria-label="BIGGER Startseite">BIGGER</Link>
          <p>Kontaktinformationen werden ergänzt.</p>
          <div><Link href="/">Startseite</Link><Link href="/einsaetze">Einsätze</Link><Link href="/#ueber-bigger">Über uns</Link></div>
          <small>© BIGGER · Öffentliche Website</small>
        </div>
      </footer>
    </>
  );
}
