"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

const publicLinks = [
  { href: "/", label: "Startseite" },
  { href: "/einsaetze", label: "Einsätze" },
  { href: "/#ueber-bigger", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
];

function NavigationLinks() {
  return publicLinks.map(({ href, label }) => <Link href={href} key={label}>{label}</Link>);
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="BIGGER Startseite">BIGGER</Link>
        <nav className="main-nav" aria-label="Hauptnavigation"><NavigationLinks /></nav>
        <details className="mobile-navigation">
          <summary className="mobile-menu" aria-label="Navigation öffnen"><Menu size={22} aria-hidden="true" /><span className="sr-only">Menü</span></summary>
          <nav className="mobile-navigation-panel" aria-label="Hauptnavigation"><NavigationLinks /></nav>
        </details>
      </div>
    </header>
  );
}
