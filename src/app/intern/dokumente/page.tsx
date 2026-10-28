import type { Metadata } from "next";
import { FileText, Search } from "lucide-react";
import { InternalShell } from "@/components/internal-shell";
import { internalDemoDocuments, internalDocumentDemoMetrics } from "@/lib/demo/internal-documents";

export const metadata: Metadata = { title: "Dokumente · Verwaltung" };

function DocumentStatus({ status }: { status: string }) {
  const statusClass = status === "Freigegeben" ? "is-approved" : status === "Neu" ? "is-new" : status === "Rückfrage" ? "is-question" : "is-review";
  return <span className={`internal-document-status ${statusClass}`}>{status}</span>;
}

export default function DokumentePage() {
  return (
    <InternalShell active="documents">
      <main className="internal-documents-page">
        <div className="internal-list-heading internal-document-heading">
          <div><span className="internal-document-eyebrow">Dateiverwaltung · Demo</span><h1>Dokumente</h1><p>Lokale Figma-Beispiele · nur Leseansicht.</p></div>
          <button className="button button-primary internal-disabled-action" disabled type="button">Dokument hinzufügen</button>
        </div>
        <p className="internal-demo-notice">Schreibgeschützte Demo · Alle Einträge sind fiktive Anzeigeplatzhalter. Es sind keine Dateien gespeichert oder abrufbar; sämtliche Aktionen sind deaktiviert.</p>

        <section className="internal-document-metrics" aria-label="Kennzahlen · Figma-Demo">
          {internalDocumentDemoMetrics.map((metric) => <article key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.note} · Figma-Demo</small></article>)}
        </section>

        <section className="internal-document-filters" aria-label="Suche und Filter · Demo, nicht aktiv">
          <label className="internal-document-search"><span>Suche</span><span><Search size={14} aria-hidden="true" /><input aria-label="Datei oder Teilnehmer suchen · nicht aktiv" disabled placeholder="Datei oder Teilnehmer" /></span></label>
          <label><span>Kategorie</span><select aria-label="Kategorie · nicht aktiv" disabled><option>Alle</option></select></label>
          <label><span>Prüfstatus</span><select aria-label="Prüfstatus · nicht aktiv" disabled><option>Ungeprüft</option></select></label>
        </section>

        <section className="internal-document-list" aria-label="Dokumente · lokale Demo, nur Anzeige">
          <div className="internal-document-table-scroll">
            <table className="internal-document-table">
              <thead><tr><th scope="col">Dokument</th><th scope="col">Zugeordnet zu</th><th scope="col">Eingang</th><th scope="col">Kategorie</th><th scope="col">Status · Demo</th><th scope="col">Aktionen</th></tr></thead>
              <tbody>{internalDemoDocuments.map((document) => <tr key={document.id}>
                <td data-label="Dokument"><span className="internal-document-name"><FileText size={15} aria-hidden="true" /><strong>{document.fileName}</strong></span></td>
                <td data-label="Zugeordnet zu">{document.assignedTo}</td>
                <td data-label="Eingang">{document.received}</td>
                <td data-label="Kategorie">{document.category}</td>
                <td data-label="Status · Demo"><DocumentStatus status={document.status} /></td>
                <td data-label="Aktionen"><span className="internal-document-no-action">Keine Aktion</span></td>
              </tr>)}</tbody>
            </table>
          </div>
          <div className="internal-document-mobile-list">{internalDemoDocuments.map((document) => <article key={document.id}>
            <div className="internal-document-mobile-title"><FileText size={15} aria-hidden="true" /><strong>{document.fileName}</strong></div>
            <dl><div><dt>Zugeordnet zu</dt><dd>{document.assignedTo}</dd></div><div><dt>Eingang</dt><dd>{document.received}</dd></div><div><dt>Kategorie</dt><dd>{document.category}</dd></div><div><dt>Status · Demo</dt><dd><DocumentStatus status={document.status} /></dd></div></dl>
            <span className="internal-document-no-action">Keine Aktion verfügbar</span>
          </article>)}</div>
          <p className="internal-document-footer">4 lokale Anzeigeeinträge · Demo · Keine Dateien vorhanden</p>
        </section>
      </main>
    </InternalShell>
  );
}
