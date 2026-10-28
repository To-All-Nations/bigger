import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { PortalShell } from "@/components/portal-shell";
import { portalDemoDeploymentTabs, portalDemoDeployments, portalDemoHistory } from "@/lib/demo/portal-deployments";

export const metadata: Metadata = { title: "Meine Einsätze · Teilnehmerportal" };

function statusClass(status: string) {
  if (status === "Bestätigt") return "is-confirmed";
  if (status === "Vorgemerkt") return "is-pending";
  return "is-complete";
}

export default function PortalEinsaetzePage() {
  return (
    <main className="page-main workspace-page portal-deployments-page">
      <PortalShell active="deployments">
        <div className="portal-deployments-overview">
          <header className="portal-deployments-heading">
            <div><span className="portal-deployments-eyebrow">Einsätze · Demo</span><h1>Meine Einsätze</h1><p>Status und Vorbereitung je Einsatz · offene Punkte sind nur Figma-Musterwerte.</p></div>
            <Link className="portal-find-deployment" href="/einsaetze">Neuen Einsatz finden <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </header>

          <p className="portal-deployments-demo-note"><strong>Demo · kein Login, keine echten Konten oder Personendaten.</strong><span>Alle Einsatzangaben, Status, Aufgaben und Stunden sind statische, anonymisierte Figma-Musterwerte. Es gibt keine Statusaktionen.</span></p>

          <nav className="portal-deployment-tabs" aria-label="Statusübersicht · Figma-Demo, nicht interaktiv">
            {portalDemoDeploymentTabs.map((tab, index) => <span aria-current={index === 0 ? "true" : undefined} className={index === 0 ? "is-current" : ""} key={tab.label}>{tab.label} <strong>{tab.count}</strong></span>)}
          </nav>

          <section className="portal-deployment-table-wrap" aria-label="Meine Einsätze · lokale Demo">
            <div className="portal-deployment-table-scroll">
              <table className="portal-deployment-table">
                <thead><tr><th scope="col">Einsatz · Demo</th><th scope="col">Zeitraum · Demo</th><th scope="col">Ort · Demo</th><th scope="col">Persönlicher Status · Demo</th><th scope="col">Unterlagen / Vorbereitung · Demo</th><th scope="col">Ansicht</th></tr></thead>
                <tbody>{portalDemoDeployments.map((deployment) => <tr key={deployment.id}>
                  <td data-label="Einsatz · Demo"><strong>{deployment.title}</strong></td>
                  <td data-label="Zeitraum · Demo"><span className="portal-deployment-fact"><CalendarDays size={12} aria-hidden="true" />{deployment.period}</span></td>
                  <td data-label="Ort · Demo"><span className="portal-deployment-fact"><MapPin size={12} aria-hidden="true" />{deployment.location}</span></td>
                  <td data-label="Persönlicher Status · Demo"><span className={`portal-deployment-status ${statusClass(deployment.status)}`}>{deployment.status}</span></td>
                  <td data-label="Unterlagen / Vorbereitung · Demo">{deployment.preparation}<small className="portal-deployment-field-note">Figma-Demo · keine Aktion</small></td>
                  <td data-label="Ansicht">{deployment.portalDetailSlug ? <Link className="portal-deployment-detail-link" href={`/portal/einsaetze/${deployment.portalDetailSlug}`}>Details · Demo <ArrowRight size={12} aria-hidden="true" /></Link> : <span className="portal-deployment-detail-placeholder" aria-disabled="true">Portaldetail · Platzhalter</span>}</td>
                </tr>)}</tbody>
              </table>
            </div>
            <div className="portal-deployment-mobile-list">{portalDemoDeployments.map((deployment) => <article key={deployment.id}>
              <div className="portal-deployment-mobile-heading"><strong>{deployment.title}</strong><span className={`portal-deployment-status ${statusClass(deployment.status)}`}>{deployment.status} · Demo</span></div>
              <dl><div><dt>Zeitraum</dt><dd>{deployment.period} · Demo</dd></div><div><dt>Ort</dt><dd>{deployment.location} · Demo</dd></div><div className="is-wide"><dt>Unterlagen / Vorbereitung</dt><dd>{deployment.preparation} · Figma-Muster</dd></div></dl>
              {deployment.portalDetailSlug ? <Link className="portal-deployment-detail-link" href={`/portal/einsaetze/${deployment.portalDetailSlug}`}>Details · Demo <ArrowRight size={12} aria-hidden="true" /></Link> : <span className="portal-deployment-detail-placeholder" aria-disabled="true">Portaldetail · Platzhalter</span>}
            </article>)}</div>
          </section>

          <section className="portal-deployment-history" aria-label="Einsatzhistorie · Figma-Demo">
            <div><div className="portal-deployment-history-heading"><h2>Einsatzhistorie · Demo</h2><span>{portalDemoHistory.year}</span></div><div className="portal-deployment-history-meter"><strong>{portalDemoHistory.total}</strong><span aria-hidden="true"><i /></span><small>{portalDemoHistory.target}</small></div></div>
            <p>Statische Figma-Musteranzeige · keine Stundenberechnung oder Zielregel implementiert.</p>
          </section>
        </div>
      </PortalShell>
    </main>
  );
}
