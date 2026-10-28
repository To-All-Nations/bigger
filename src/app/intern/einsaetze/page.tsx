import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { InternalShell } from "@/components/internal-shell";
import { Eyebrow } from "@/components/ui";
import { internalDemoStatusCounts } from "@/lib/demo/internal-management";
import { demoDeploymentRepository } from "@/lib/deployments/demo-repository";

export const metadata: Metadata = { title: "Einsätze" };

const statusClass: Record<string, string> = {
  Veröffentlicht: "published",
  Entwurf: "draft",
  "In Durchführung": "running",
  Abgeschlossen: "completed",
};

export default async function EinsatzverwaltungPage() {
  const deployments = await demoDeploymentRepository.listInternalDeployments();

  return (
    <InternalShell active="deployments">
      <main className="internal-deployments-page">
        <div className="internal-list-heading">
          <div><Eyebrow>Einsatzmanagement</Eyebrow><h1>Einsätze</h1><p>Planen, besetzen und veröffentlichen.</p></div>
          <button className="button button-primary internal-disabled-action" disabled type="button">Einsatz anlegen</button>
        </div>
        <p className="internal-demo-notice">Demo-Ansicht · Lokale Figma-Beispiele; keine echten Einsätze oder gespeicherten Daten.</p>

        <section className="internal-filters" aria-label="Demo-Filter, nicht aktiv">
          <label className="internal-search-field"><span>Suche</span><span className="internal-input-wrap"><Search size={16} aria-hidden="true" /><input aria-label="Titel oder Ort (Demo, nicht aktiv)" disabled placeholder="Titel oder Ort" /></span></label>
          <label><span>Status</span><select aria-label="Status (Demo, nicht aktiv)" disabled><option>Alle</option></select></label>
          <label><span>Zeitraum</span><input aria-label="Zeitraum (Demo, nicht aktiv)" disabled value="Oktober – November 2026" readOnly /></label>
        </section>

        <section className="internal-status-counts" aria-label="Statusübersicht · Demo">
          {internalDemoStatusCounts.map((item) => <div className={item.label === "Alle" ? "is-selected" : ""} key={item.label}><span>{item.label}</span><strong>{item.count}</strong></div>)}
        </section>

        <section className="internal-deployment-list" aria-label="Beispiel-Einsätze">
          <div className="internal-table-header" aria-hidden="true"><span>Einsatz</span><span>Zeitraum</span><span>Plätze</span><span>Status</span><span>Verantwortlich</span><span>Aktion</span></div>
          <ul>
            {deployments.map((deployment) => (
              <li className="internal-deployment-row" key={deployment.title}>
                <strong className="row-title" data-label="Einsatz"><Link href={`/intern/einsaetze/${deployment.slug}`}>{deployment.title}</Link></strong>
                <span data-label="Zeitraum">{deployment.period}</span>
                <span data-label="Plätze">{deployment.places}</span>
                <span data-label="Status"><span className={`internal-status status-${statusClass[deployment.status]}`}>{deployment.status}</span></span>
                <span data-label="Verantwortlich">Demoangabe</span>
                <span data-label="Aktion"><button className="internal-disabled-row-action" disabled type="button">Bearbeiten</button></span>
              </li>
            ))}
          </ul>
          <div className="internal-pagination"><span>1–4 von 34 · Demo</span><span aria-label="Seitennavigation, nicht aktiv">‹ 1 2 3 … 9 ›</span></div>
        </section>
        <Link className="internal-back-link" href="/intern"><ArrowLeft size={15} aria-hidden="true" /> Zum Dashboard</Link>
      </main>
    </InternalShell>
  );
}
