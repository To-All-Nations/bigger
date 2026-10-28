import type { Metadata } from "next";
import { FileText, Info, Upload } from "lucide-react";
import { PortalShell } from "@/components/portal-shell";
import { portalDemoConsentNote, portalDemoDocumentMetrics, portalDemoDocuments } from "@/lib/demo/portal-documents";

export const metadata: Metadata = { title: "Dokumente · Teilnehmerportal" };

function statusClass(status: string) {
  return status === "Geprüft" ? "is-reviewed" : "is-reviewing";
}

function DisabledDocumentActions() {
  return <div className="portal-document-actions"><button type="button" disabled>Zuordnen · deaktiviert</button><button type="button" disabled>Öffnen · deaktiviert</button></div>;
}

export default function PortalDokumentePage() {
  return (
    <main className="page-main workspace-page portal-documents-page">
      <PortalShell active="documents">
        <div className="portal-documents-content">
          <header className="portal-documents-heading">
            <div><span className="portal-documents-eyebrow">Profil · Demo</span><h1>Dokumente</h1><p>Figma-Demo: allgemeine und einsatzbezogene Musterangaben · keine Dateien gespeichert.</p></div>
            <button className="portal-documents-upload" type="button" disabled><Upload size={13} aria-hidden="true" /> Dokument hochladen · deaktiviert</button>
          </header>

          <p className="portal-documents-demo-note"><strong>Demo – kein Login, keine echten Konten oder Personendaten.</strong><span>Alle Einträge, Zuordnungen und Status sind anonymisierte Figma-Muster. Es sind keine Dateien vorhanden oder abrufbar.</span></p>

          <section className="portal-documents-metrics" aria-label="Dokumentenübersicht · Figma-Demo">
            {portalDemoDocumentMetrics.map((metric) => <article key={metric.label}><span>{metric.label} · Demo</span><strong>{metric.value}</strong><small>{metric.note}</small></article>)}
          </section>

          <section className="portal-documents-table-wrap" aria-label="Dokumente · lokale Demo, nur Anzeige">
            <div className="portal-documents-table-scroll">
              <table className="portal-documents-table">
                <thead><tr><th scope="col">Dokument · Demo</th><th scope="col">Zuordnung · Demo</th><th scope="col">Aktualisiert · Demo</th><th scope="col">Status · Demo</th><th scope="col">Aktion</th></tr></thead>
                <tbody>{portalDemoDocuments.map((document) => <tr key={document.id}>
                  <td data-label="Dokument · Demo"><span className="portal-document-name"><FileText size={14} aria-hidden="true" /><strong>{document.fileName}</strong></span></td>
                  <td data-label="Zuordnung · Demo">{document.assignment}</td>
                  <td data-label="Aktualisiert · Demo">{document.updated}</td>
                  <td data-label="Status · Demo"><span className={`portal-document-status ${statusClass(document.status)}`}>{document.status} · Demo</span></td>
                  <td data-label="Aktion"><DisabledDocumentActions /></td>
                </tr>)}</tbody>
              </table>
            </div>
            <div className="portal-documents-mobile-list">{portalDemoDocuments.map((document) => <article key={document.id}>
              <div className="portal-document-mobile-title"><FileText size={15} aria-hidden="true" /><strong>{document.fileName}</strong></div>
              <dl><div><dt>Zuordnung</dt><dd>{document.assignment}</dd></div><div><dt>Aktualisiert</dt><dd>{document.updated}</dd></div><div><dt>Status · Demo</dt><dd><span className={`portal-document-status ${statusClass(document.status)}`}>{document.status}</span></dd></div></dl>
              <DisabledDocumentActions />
            </article>)}</div>
          </section>

          <aside className="portal-document-consent-note" aria-label="Offener Figma-Hinweis · keine Regel">
            <Info size={16} aria-hidden="true" /><div><strong>{portalDemoConsentNote.title}</strong><p>{portalDemoConsentNote.text}</p></div>
          </aside>

          <section className="portal-document-process" aria-label="Dateiaktionen · deaktiviert">
            <article><span>Schritt 1 · Demo</span><h2>Formular herunterladen</h2><p>Der Figma-Screen zeigt diesen Schritt als Muster. Es wird keine Datei bereitgestellt.</p><button type="button" disabled>Herunterladen · deaktiviert</button></article>
            <article><span>Schritt 2 · Demo</span><h2>Dokument übermitteln</h2><p>Keine Uploadfunktion und keine Dateiannahme in dieser Demo.</p><button type="button" disabled><Upload size={13} aria-hidden="true" /> Datei auswählen · deaktiviert</button></article>
          </section>
          <p className="portal-documents-footer">Keine Vorschau, Downloads, Uploads, Prüfungen, Löschungen oder Statusänderungen möglich.</p>
        </div>
      </PortalShell>
    </main>
  );
}
