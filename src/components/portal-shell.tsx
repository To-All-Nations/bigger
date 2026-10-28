import Link from "next/link";
import type { ReactNode } from "react";

const portalLinks = [
  { href: "/portal", label: "Übersicht", active: "overview" },
  { href: "/portal/einsaetze", label: "Meine Einsätze", active: "deployments" },
  { href: "/portal/profil", label: "Meine Daten", active: "profile" },
  { href: "/portal/dokumente", label: "Dokumente", active: "documents" },
] as const;

export function PortalShell({ children, label = "Teilnehmerportal", active }: { children: ReactNode; label?: string; active?: "overview" | "deployments" | "profile" | "documents" }) {
  return (
    <div className="workspace wrap">
      <aside className="workspace-nav">
        <p className="eyebrow">BIGGER · TEILNEHMER</p>
        <h2>{label}</h2>
        <nav aria-label={`${label} Navigation`}>
          {portalLinks.map((item) => <Link aria-current={active === item.active ? "page" : undefined} key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <p className="muted small">Demo-Bereich · kein Login und keine echten Konten.</p>
      </aside>
      <section className="workspace-content">{children}</section>
    </div>
  );
}
