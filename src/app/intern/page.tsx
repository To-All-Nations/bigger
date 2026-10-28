import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { InternalShell } from "@/components/internal-shell";
import { Eyebrow } from "@/components/ui";
import { internalDashboardMetrics, internalDemoAttentionItems, upcomingDemoDeployments } from "@/lib/demo/internal-management";

export const metadata: Metadata = { title: "Dashboard" };

export default function InternPage() {
  return (
    <InternalShell active="dashboard">
      <main className="internal-dashboard">
        <div className="internal-page-heading">
          <div><Eyebrow>Freitag, 2. Oktober · Mission Control</Eyebrow><h1>Dashboard</h1></div>
          <button className="button button-primary internal-disabled-action" disabled type="button">Einsatz anlegen</button>
        </div>
        <p className="internal-demo-notice">Demo-Ansicht · Alle Zahlen und Einträge sind lokale Figma-Beispiele, keine echten Einsatz- oder Teilnehmerdaten.</p>

        <section className="internal-alert-strip" aria-label="Demo-Hinweise">
          <strong><span>Sofort</span> 5 Aktionen erfordern deine Aufmerksamkeit</strong>
          <div><span>3 Teilnehmer</span><span>2 Dokumente</span><span>Einsatz 05.10.</span></div>
        </section>

        <section className="internal-metrics" aria-label="Demo-Kennzahlen">
          {internalDashboardMetrics.map((metric) => (
            <article className={`internal-metric ${"emphasis" in metric ? `metric-${metric.emphasis}` : ""}`} key={metric.label}>
              <span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.note}</small>
            </article>
          ))}
        </section>

        <div className="internal-dashboard-grid">
          <div className="internal-dashboard-main-column">
            <section className="internal-panel" aria-labelledby="upcoming-title">
              <div className="internal-panel-heading"><h2 id="upcoming-title">Kommende Einsätze</h2><span>Nach Beginn sortiert · Demo</span></div>
              <ul className="internal-upcoming-list">
                {upcomingDemoDeployments.map((deployment) => (
                  <li className={deployment.status === "Achtung" ? "upcoming-warning" : ""} key={deployment.title}>
                    <span className="upcoming-date"><strong>{deployment.day}</strong><small>{deployment.month}</small></span>
                    <div className="upcoming-copy"><strong>{deployment.title}</strong><span>{deployment.places} · Demo-Verantwortung</span></div>
                    <span className={`internal-status status-${deployment.status === "Achtung" ? "warning" : "ready"}`}>{deployment.status}</span>
                  </li>
                ))}
              </ul>
              <Link className="internal-panel-link" href="/intern/einsaetze">Zur Einsatzübersicht <ArrowRight size={15} aria-hidden="true" /></Link>
            </section>

            <section className="internal-panel internal-open-applications" aria-labelledby="applications-title">
              <div className="internal-panel-heading"><h2 id="applications-title">Offene Anmeldungen</h2><span className="internal-count-badge">7 neu · Demo</span></div>
              <div className="internal-placeholder-row" aria-hidden="true"><span>Teilnehmer</span><span>Einsatz</span><span>Handlungsbedarf</span></div>
              <p className="internal-muted">Einträge sind in dieser lokalen Demo nicht mit Teilnehmerdaten befüllt.</p>
            </section>
          </div>

          <aside className="internal-dashboard-side-column">
            <section className="internal-attention-panel" aria-labelledby="attention-title">
              <div className="internal-panel-heading"><h2 id="attention-title">Heute im Blick</h2><span>8 fällig · Demo</span></div>
              <ul>{internalDemoAttentionItems.map((item) => <li key={item.label}><span>{item.count}</span>{item.label}</li>)}</ul>
            </section>
            <section className="internal-panel internal-documents-panel" aria-labelledby="documents-title">
              <div className="internal-panel-heading"><h2 id="documents-title">Dokumente mit Handlungsbedarf</h2><span className="internal-count-badge">9 · Demo</span></div>
              <p><CalendarDays size={15} aria-hidden="true" /> Beispielhafte Prüfhinweise aus dem Figma-Screen. Dokumente sind nicht hinterlegt.</p>
              <span className="internal-panel-link is-static">Prüfstatus und Dokumentzugriff sind nicht aktiv</span>
            </section>
            <section className="internal-panel internal-payments-panel" aria-label="Offene Zahlungen">
              <div className="internal-panel-heading"><h2>Offene Zahlungen</h2><span>4 offen · Demo</span></div>
              <p>Nur eine statische Designangabe; keine Zahlungsdaten oder Aktionen.</p>
            </section>
          </aside>
        </div>
      </main>
    </InternalShell>
  );
}
