import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, CheckCircle2, CircleAlert, FileText, UserRound } from "lucide-react";
import { PortalShell } from "@/components/portal-shell";
import { portalDemoOverview } from "@/lib/demo/portal-overview";

export const metadata: Metadata = { title: "Übersicht · Teilnehmerportal" };

export default function PortalPage() {
  return (
    <main className="page-main workspace-page portal-overview-page">
      <PortalShell active="overview">
        <div className="portal-overview">
          <div className="portal-overview-heading">
            <div><span className="portal-overview-eyebrow">Guten Morgen, {portalDemoOverview.participantLabel}</span><h1>Deine Übersicht</h1><p>Alles Wichtige für deinen nächsten Einsatz.</p></div>
            <Link className="portal-discover-link" href="/einsaetze">Einsatz entdecken <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>

          <p className="portal-demo-notice"><strong>Demo – kein Login, keine echten Konten oder Personendaten.</strong><span>Alle folgenden Inhalte, Beispielstatus und Beträge sind ausschließlich statische Figma-Musterwerte.</span></p>

          <section className="portal-overview-metrics" aria-label="Beispielübersicht · Figma-Demo">
            <article><span><CalendarDays size={13} aria-hidden="true" /> Mustertermin</span><strong>{portalDemoOverview.nextDate}</strong><small>{portalDemoOverview.nextDateNote}</small></article>
            <article><span><CircleAlert size={13} aria-hidden="true" /> Offene Punkte · Demo</span><strong>{portalDemoOverview.openPoints}</strong><small>{portalDemoOverview.openPointsNote}</small></article>
            <article><span><UserRound size={13} aria-hidden="true" /> Profilstatus · Demo</span><strong>{portalDemoOverview.profileCompletion}</strong><small>{portalDemoOverview.profileNote}</small></article>
          </section>

          <section className="portal-participation-notice" aria-label="Teilnahmestatus · Figma-Demo">
            <CheckCircle2 size={17} aria-hidden="true" />
            <div><span>Teilnahmestatus · Beispiel</span><strong>{portalDemoOverview.participationStatus}</strong><small>{portalDemoOverview.participationNote}</small></div>
          </section>

          <div className="portal-overview-lower">
            <section className="portal-sample-deployment" aria-labelledby="portal-sample-title">
              <div className="portal-overview-section-heading"><h2 id="portal-sample-title">{portalDemoOverview.deploymentLabel}</h2><Link href="/portal/einsaetze">Meine Einsätze <ArrowUpRight size={13} aria-hidden="true" /></Link></div>
              <div className="portal-deployment-image-placeholder" role="img" aria-label="Neutraler Bildplatzhalter · Demo"><span>Bildplatzhalter · Demo</span></div>
              <div className="portal-sample-deployment-copy"><span className="portal-sample-status"><CheckCircle2 size={12} aria-hidden="true" />{portalDemoOverview.deploymentStatus}</span><h3>{portalDemoOverview.deploymentTitle}</h3><p>Fiktiver Einsatzeintrag aus dem Figma-Entwurf; keine tatsächlichen Einsatzdaten.</p></div>
            </section>

            <aside className="portal-contribution-card" aria-label="Teilnahmebeitrag · Demo">
              <div className="portal-overview-section-heading"><h2>Teilnahmebeitrag</h2><span className="portal-payment-demo-status">{portalDemoOverview.paymentStatus}</span></div>
              <div className="portal-contribution-amount"><span>{portalDemoOverview.contributionLabel}</span><strong>{portalDemoOverview.contribution}</strong><small>{portalDemoOverview.deploymentTitle} · Demo</small></div>
              <p>{portalDemoOverview.paymentStatus}. Anzeige aus dem Figma-Muster, keine Zahlungsfunktion und keine festgelegte Zahlungsregel.</p>
              <Link className="portal-secondary-link" href="/portal/profil"><FileText size={14} aria-hidden="true" /> Meine Daten ansehen <ArrowUpRight size={13} aria-hidden="true" /></Link>
            </aside>
          </div>

          <p className="portal-overview-footer">Alle Musterstatus, Beispielhinweise und Beträge sind nicht verbindlich. Portalzugriff, Profilanforderungen und Zahlungsregeln sind nicht umgesetzt.</p>
        </div>
      </PortalShell>
    </main>
  );
}
