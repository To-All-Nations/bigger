import Link from "next/link";
import type { ReactNode } from "react";

const portalLinks = [
  ["/portal", "Übersicht"],
  ["/portal/einsaetze", "Meine Einsätze"],
  ["/portal/profil", "Mein Profil"],
];

export function PortalShell({ children, label = "Teilnehmerportal" }: { children: ReactNode; label?: string }) {
  return <div className="workspace wrap"><aside className="workspace-nav"><p className="eyebrow">BIGGER · INTERN</p><h2>{label}</h2><nav aria-label={`${label} Navigation`}>{portalLinks.map(([href, title]) => <Link key={href} href={href}>{title}</Link>)}</nav><p className="muted small">Zugriff und Rollen werden vor dem Produktivbetrieb festgelegt.</p></aside><section className="workspace-content">{children}</section></div>;
}
