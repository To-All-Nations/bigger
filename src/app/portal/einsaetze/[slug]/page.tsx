import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, CalendarDays, CircleAlert, FileText, MapPin } from "lucide-react";
import { PortalShell } from "@/components/portal-shell";
import { portalDemoDeploymentDetails } from "@/lib/demo/portal-deployment-details";
import { portalDemoDeployments } from "@/lib/demo/portal-deployments";

export const metadata: Metadata = { title: "Einsatzdetails · Teilnehmerportal" };

export function generateStaticParams() {
  return portalDemoDeployments.flatMap(({ portalDetailSlug }) => portalDetailSlug ? [{ slug: portalDetailSlug }] : []);
}

export default function PortalEinsatzdetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <Suspense fallback={<main className="page-main"><div className="wrap loading-state">Einsatzdetails werden geladen …</div></main>}><PortalEinsatzdetailContent params={params} /></Suspense>;
}

async function PortalEinsatzdetailContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const deployment = portalDemoDeployments.find((item) => item.portalDetailSlug === slug);
  if (!deployment) notFound();

  const detail = portalDemoDeploymentDetails[slug];

  return (
    <main className="page-main workspace-page portal-detail-page">
      <PortalShell active="deployments">
        <div className="portal-detail-content">
          <header className="portal-detail-heading">
            <div><span className="portal-detail-eyebrow">Einsatzdetails · Demo</span><h1>{deployment.title}</h1><p>{detail?.subtitle ?? "Figma-Musteransicht · Für dieses Beispiel sind keine weiteren Detailangaben hinterlegt."}</p></div>
            <Link className="portal-detail-back" href="/portal/einsaetze"><ArrowLeft size={14} aria-hidden="true" /> Zurück zu Meine Einsätze</Link>
          </header>

          <p className="portal-detail-demo-note"><strong>Schreibgeschützte Demo · kein Login, keine echten Konten oder Personendaten.</strong><span>Alle Anforderungen, Dokumentstatus und Einsatzangaben sind statische Figma-Muster. Es gibt keine Datei- oder Statusaktionen.</span></p>

          <div className="portal-detail-layout">
            <div className="portal-detail-main-column">
              <section className="portal-detail-deployment-card" aria-label="Einsatzübersicht · Figma-Demo">
                <div className="portal-detail-image-placeholder" role="img" aria-label="Neutraler Bildplatzhalter · Demo"><span>Bildplatzhalter · Demo</span></div>
                <div className="portal-detail-deployment-copy">
                  <div className="portal-detail-deployment-status"><BadgeCheck size={13} aria-hidden="true" />{deployment.status} · Figma-Demo</div>
                  <h2>{deployment.title}</h2>
                  <div className="portal-detail-facts"><span><CalendarDays size={13} aria-hidden="true" />{deployment.period} · Demo</span><span><MapPin size={13} aria-hidden="true" />{deployment.location}{detail ? ` · ${detail.placeNote}` : " · Demo"}</span></div>
                </div>
              </section>

              <section className="portal-detail-requirements" aria-labelledby="portal-requirements-title">
                <div className="portal-detail-section-heading"><div><h2 id="portal-requirements-title">Offene Anforderungen</h2><p>Statische Figma-Demo · keine Aufgaben ausführen oder bestätigen.</p></div><span>{detail ? `${detail.requirements.length} offene Aufgaben · Demo` : "Nicht hinterlegt · Demo"}</span></div>
                {detail?.requirements.length ? <ul>{detail.requirements.map((requirement) => <li key={requirement.id}>
                  <CircleAlert size={15} aria-hidden="true" />
                  <div><strong>{requirement.title}</strong><small>{requirement.note}</small></div>
                  <span className="portal-detail-open-status">{requirement.status} · Demo</span>
                </li>)}</ul> : <p className="portal-detail-placeholder">Für dieses Beispiel sind im Screen keine offenen Anforderungen angegeben.</p>}
              </section>

              <div className="portal-detail-documents-grid">
                {detail?.documentGroups.map((group) => <section className="portal-detail-document-group" aria-label={`${group.title} · Figma-Demo`} key={group.id}>
                  <div className="portal-detail-section-heading"><div><h2>{group.title}</h2><p>Statische Dokumentstatus · keine Dateien hinterlegt.</p></div><span>{group.summary}</span></div>
                  <ul>{group.documents.map((document) => <li key={document.id}><FileText size={14} aria-hidden="true" /><strong>{document.title}</strong><span className="portal-detail-reviewed-status">{document.status} · Demo</span></li>)}</ul>
                </section>)}
                {!detail ? <section className="portal-detail-document-group portal-detail-document-placeholder"><div className="portal-detail-section-heading"><div><h2>Dokumente</h2><p>Keine Dateiinhalte oder Dokumentstatus vorhanden.</p></div><span>Platzhalter</span></div><p>Für dieses Beispiel sind im Figma-Screen keine Dokumentdetails angegeben.</p></section> : null}
              </div>

              <section className="portal-detail-confirmation" aria-label="Bestätigung · Figma-Demo">
                <BadgeCheck size={17} aria-hidden="true" /><div><h2>Bestätigung erhalten · Beispiel</h2><p>{detail?.confirmationNote ?? "Für dieses Beispiel ist keine Bestätigung im Detail-Screen angegeben."}</p></div>
              </section>
            </div>

            <aside className="portal-detail-side-column" aria-label="Statusübersicht · Figma-Demo">
              <section className="portal-detail-summary-card"><span className="portal-detail-summary-status"><BadgeCheck size={12} aria-hidden="true" />{detail ? "Geprüft · Figma-Demo" : "Status nicht hinterlegt · Demo"}</span><h2>{detail ? "Unterlagen geprüft" : "Unterlagen"}</h2><p>{detail?.documentSummary ?? "Für dieses Beispiel gibt es keinen passenden Statuswert aus Screen 03."}</p></section>
              <section className="portal-detail-next-step"><div><h2>Nächster Schritt · Demo</h2><ArrowRight size={14} aria-hidden="true" /></div><p>{detail?.nextStepNote ?? "Im Figma-Screen für dieses Beispiel nicht näher ausgeführt."}</p><span>Keine Aktion verfügbar</span></section>
            </aside>
          </div>
          <p className="portal-detail-footer">Es werden keine persönlichen Angaben, Dokumentdateien oder Bestätigungen gespeichert oder abgerufen.</p>
        </div>
      </PortalShell>
    </main>
  );
}
