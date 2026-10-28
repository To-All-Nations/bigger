import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, CheckCheck, CircleDollarSign, ClipboardList, FileText, MapPin, MessageCircle, Users } from "lucide-react";
import { InternalShell } from "@/components/internal-shell";
import { demoDeploymentRepository } from "@/lib/deployments/demo-repository";

export const metadata: Metadata = { title: "Einsatzdetail · Verwaltung" };

export async function generateStaticParams() {
  const deployments = await demoDeploymentRepository.listInternalDeployments();
  return deployments.map(({ slug }) => ({ slug }));
}

const detailSections = [
  { id: "uebersicht", label: "Übersicht" },
  { id: "teilnehmende", label: "Teilnehmende" },
  { id: "anforderungen", label: "Anforderungen" },
  { id: "dokumente", label: "Dokumente" },
  { id: "aufgaben", label: "Aufgaben" },
  { id: "kommunikation", label: "Kommunikation" },
  { id: "zahlung", label: "Zahlung" },
] as const;

export default function EinsatzdetailPage({ params }: PageProps<"/intern/einsaetze/[slug]">) {
  return (
    <Suspense fallback={<main className="internal-detail-loading">Demo-Einsatz wird geladen …</main>}>
      <Einsatzdetail params={params} />
    </Suspense>
  );
}

async function Einsatzdetail({ params }: { params: PageProps<"/intern/einsaetze/[slug]">["params"] }) {
  const { slug } = await params;
  const record = await demoDeploymentRepository.findInternalDeployment(slug);
  if (!record) notFound();

  const { deployment, details: detail } = record;
  const value = (field: keyof NonNullable<typeof detail>) => detail?.[field] ?? "Für diese Demo nicht hinterlegt.";

  return (
    <InternalShell active="deployments">
      <main className="internal-deployment-detail">
        <nav className="internal-detail-breadcrumb" aria-label="Brotkrumennavigation">
          <Link href="/intern/einsaetze">Einsätze</Link><span aria-hidden="true">/</span><span aria-current="page">{deployment.title}</span>
        </nav>
        <Link className="internal-detail-back" href="/intern/einsaetze"><ArrowLeft size={15} aria-hidden="true" /> Zurück zu allen Einsätzen</Link>

        <section className="internal-detail-hero" aria-labelledby="deployment-title">
          <div className="internal-detail-cover" role="img" aria-label="Neutraler Bildplatzhalter · lokale Demo"><span>Bildplatzhalter · Demo</span></div>
          <div className="internal-detail-heading">
            <span className={`internal-status status-${deployment.status === "Veröffentlicht" ? "published" : deployment.status === "Entwurf" ? "draft" : deployment.status === "In Durchführung" ? "running" : "completed"}`}>{deployment.status}</span>
            <span className="internal-detail-id">Lokaler Demo-Eintrag</span>
            <h1 id="deployment-title">{deployment.title}</h1>
            <p>{detail?.description ?? "Für diesen Demo-Einsatz liegen keine weiteren Beschreibungsangaben vor."}</p>
            <dl className="internal-detail-facts">
              <div><dt><MapPin size={15} aria-hidden="true" /> Ort</dt><dd>{value("location")}</dd></div>
              <div><dt><CalendarDays size={15} aria-hidden="true" /> Zeitraum</dt><dd>{detail?.period ?? deployment.period}</dd></div>
              <div><dt><Users size={15} aria-hidden="true" /> Plätze</dt><dd>{detail?.participants ?? deployment.places}</dd></div>
            </dl>
          </div>
        </section>

        <p className="internal-detail-demo-notice">Schreibgeschützte Demo · lokale Figma-Beispiele; keine echten Einsatz-, Teilnehmer- oder Zahlungsdaten.</p>

        <nav className="internal-detail-tabs" aria-label="Einsatzbereiche">
          {detailSections.map((section, index) => <a aria-current={index === 0 ? "location" : undefined} href={`#${section.id}`} key={section.id}>{section.label}</a>)}
        </nav>

        <section className="internal-detail-overview" id="uebersicht" aria-labelledby="overview-title">
          <div className="internal-detail-section-heading"><div><span>DEMO-ÜBERSICHT</span><h2 id="overview-title">Auf einen Blick</h2></div><span>Nur Ansicht</span></div>
          <div className="internal-detail-metrics">
            <article><span><Users size={15} aria-hidden="true" /> Teilnehmende</span><strong>{detail?.participants ?? deployment.places}</strong><small>Demoangabe</small></article>
            <article><span><ClipboardList size={15} aria-hidden="true" /> Offene Anmeldungen</span><strong>{value("openApplications")}</strong><small>Keine Aktion verfügbar</small></article>
            <article><span><CheckCheck size={15} aria-hidden="true" /> Aufgaben</span><strong>{value("tasks")}</strong><small>Demoangabe</small></article>
            <article><span><FileText size={15} aria-hidden="true" /> Dokumente</span><strong>{value("documents")}</strong><small>Keine Dateien hinterlegt</small></article>
            <article><span><CircleDollarSign size={15} aria-hidden="true" /> Zahlung</span><strong>{value("payment")}</strong><small>Keine Zahlungsdaten</small></article>
          </div>
        </section>

        <div className="internal-detail-sections">
          <section className="internal-detail-panel" id="teilnehmende"><div className="internal-detail-section-heading"><div><span>DEMO-BEREICH</span><h2><Users size={17} aria-hidden="true" /> Teilnehmende</h2></div><span>{detail?.participants ?? "Demo"}</span></div><p>Personenbezogene Einträge sind in dieser lokalen, schreibgeschützten Demo nicht hinterlegt.</p></section>
          <section className="internal-detail-panel" id="anforderungen"><div className="internal-detail-section-heading"><div><span>DEMO-BEREICH</span><h2><CheckCheck size={17} aria-hidden="true" /> Anforderungen</h2></div><span>{value("requirements")}</span></div><p>Für diesen Bereich liegen keine prüfbaren Anforderungsdaten vor.</p></section>
          <section className="internal-detail-panel" id="dokumente"><div className="internal-detail-section-heading"><div><span>DEMO-BEREICH</span><h2><FileText size={17} aria-hidden="true" /> Dokumente</h2></div><span>{value("documents")}</span></div><p>Es sind keine Dateien hinterlegt oder abrufbar.</p></section>
          <section className="internal-detail-panel" id="aufgaben"><div className="internal-detail-section-heading"><div><span>DEMO-BEREICH</span><h2><ClipboardList size={17} aria-hidden="true" /> Aufgaben</h2></div><span>{value("tasks")}</span></div><p>Aufgaben werden hier nur als Figma-Demoangabe angezeigt; es gibt keine ausführbaren Aktionen.</p></section>
          <section className="internal-detail-panel" id="kommunikation"><div className="internal-detail-section-heading"><div><span>DEMO-BEREICH</span><h2><MessageCircle size={17} aria-hidden="true" /> Kommunikation</h2></div><span>{value("communication")}</span></div><p>Keine Nachrichten, Empfänger oder Versandfunktionen in dieser Demo.</p></section>
          <section className="internal-detail-panel" id="zahlung"><div className="internal-detail-section-heading"><div><span>DEMO-BEREICH</span><h2><CircleDollarSign size={17} aria-hidden="true" /> Zahlung</h2></div><span>{value("payment")}</span></div><p>Nur eine statische Figma-Demoangabe; es werden keine Zahlungsdaten verarbeitet.</p></section>
        </div>

        <Link className="internal-detail-back internal-detail-back-bottom" href="/intern/einsaetze"><ArrowLeft size={15} aria-hidden="true" /> Zurück zur Einsatzübersicht</Link>
      </main>
    </InternalShell>
  );
}
