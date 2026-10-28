import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/intern", label: "Dashboard", available: true },
  { href: "/intern/einsaetze", label: "Einsätze", available: true },
  { href: "/intern/teilnehmer", label: "Teilnehmer", available: true },
  { href: "/intern/aufgaben", label: "Aufgaben", available: true },
  { href: "/intern/dokumente", label: "Dokumente", available: true },
  { href: "/intern/kommunikation", label: "Kommunikation", available: true },
] as const;

export function InternalShell({ active, children }: { active: "dashboard" | "deployments" | "participants" | "tasks" | "documents" | "communication"; children: ReactNode }) {
  const isActive = (label: string) => active === "dashboard" && label === "Dashboard" || active === "deployments" && label === "Einsätze" || active === "participants" && label === "Teilnehmer" || active === "tasks" && label === "Aufgaben" || active === "documents" && label === "Dokumente" || active === "communication" && label === "Kommunikation";
  return (
    <div className="internal-shell">
      <aside className="internal-sidebar" aria-label="Interner Bereich">
        <Link className="internal-brand" href="/intern" aria-label="BIGGER Dashboard">
          <span>BIGGER</span><small>INTERN</small>
        </Link>
        <nav className="internal-navigation" aria-label="Interne Navigation">
          {navItems.map((item) => item.available ? (
            <Link
              aria-current={isActive(item.label) ? "page" : undefined}
              className={isActive(item.label) ? "is-active" : ""}
              href={item.href}
              key={item.label}
            >{item.label}</Link>
          ) : (
            <span aria-disabled="true" className="internal-nav-placeholder" key={item.label}>{item.label}</span>
          ))}
        </nav>
        <div className="internal-account"><strong>Demo-Bereich</strong><span>Lokale Beispieldaten</span></div>
      </aside>
      <div className="internal-main">
        <header className="internal-topbar">
          <span>BIGGER BACKOFFICE</span>
          <span className="internal-demo-pill">Demo · keine echten Daten</span>
        </header>
        <div className="internal-content">{children}</div>
      </div>
    </div>
  );
}
