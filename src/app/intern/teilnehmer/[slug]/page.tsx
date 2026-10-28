import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BadgeCheck, CalendarDays, CheckCheck, CircleDollarSign, ClipboardCheck, FileText, MapPin, MessageCircle, ShieldCheck, UserRound } from "lucide-react";
import { InternalShell } from "@/components/internal-shell";
import { getInternalDemoParticipant, internalDemoParticipants } from "@/lib/demo/internal-participants";

export const metadata: Metadata = { title: "Teilnehmerdetail · Verwaltung" };

export function generateStaticParams() {
  return internalDemoParticipants.map(({ slug }) => ({ slug }));
}

const sections = [
  { id: "uebersicht", label: "Übersicht" },
  { id: "stammdaten", label: "Stammdaten" },
  { id: "anforderungen", label: "Anforderungen" },
  { id: "dokumente", label: "Dokumente" },
  { id: "checkliste", label: "Checkliste" },
  { id: "zahlung", label: "Zahlung" },
  { id: "verlauf", label: "Verlauf" },
  { id: "kommunikation", label: "Kommunikation" },
] as const;

const deploymentSlugs: Record<string, string> = {
  "Quartiersküche unterstützen": "quartierskueche",
  "Naturcamp für Jugendliche": "naturcamp",
};

export default function TeilnehmerdetailPage({ params }: PageProps<"/intern/teilnehmer/[slug]">) {
  return <Suspense fallback={<main className="internal-detail-loading">Demo-Profil wird geladen …</main>}><Teilnehmerdetail params={params} /></Suspense>;
}

async function Teilnehmerdetail({ params }: { params: PageProps<"/intern/teilnehmer/[slug]">["params"] }) {
  const { slug } = await params;
  const participant = getInternalDemoParticipant(slug);
  if (!participant) notFound();
  const profile = participant.profile;
  const value = (field: "birthYear" | "language" | "email" | "region") => profile?.[field] ?? "Nicht hinterlegt · Demo";

  return (
    <InternalShell active="participants">
      <main className="internal-participant-detail">
        <nav className="internal-detail-breadcrumb" aria-label="Brotkrumennavigation"><Link href="/intern/teilnehmer">Teilnehmer</Link><span aria-hidden="true">/</span><span aria-current="page">{participant.name} · #{participant.id}</span></nav>
        <Link className="participant-back-link" href="/intern/teilnehmer"><ArrowLeft size={15} aria-hidden="true" /> Zurück zur Teilnehmerübersicht</Link>

        <section className="participant-profile-header" aria-labelledby="participant-title">
          <div className="participant-profile-avatar" aria-hidden="true">{participant.initials}</div>
          <div className="participant-profile-copy">
            <div className="participant-profile-meta"><span className="participant-profile-flag">{profile ? "Handlungsbedarf · Demo" : "Figma-Demo"}</span><span>Teilnehmer #{participant.id}{participant.registrationId ? ` · Anmeldung ${participant.registrationId}` : ""}</span></div>
            <h1 id="participant-title">{participant.name}</h1>
            <p>Interner neutraler Beispieldatensatz{profile ? ` · Profil vollständig zu ${profile.profileCompletion}` : " · Detailangaben nicht hinterlegt"}</p>
            <div className="participant-profile-contact"><span><UserRound size={14} aria-hidden="true" />{value("email")}</span><span><MapPin size={14} aria-hidden="true" />Region {value("region")}</span><span><CalendarDays size={14} aria-hidden="true" />{participant.deployment}</span></div>
          </div>
          <div className="participant-profile-actions"><button className="participant-disabled-confirm" disabled type="button"><BadgeCheck size={14} aria-hidden="true" />{profile?.confirmationStatus === "Gesperrt" ? "Bestätigung gesperrt · Demo" : "Nur Leseansicht"}</button><button className="participant-disabled-edit" disabled type="button">Bearbeiten · nicht verfügbar</button></div>
        </section>

        <section className="participant-review-notice" aria-label="Demo-Hinweis zum Dokumentstatus">
          <div><span className="participant-review-icon"><ShieldCheck size={17} aria-hidden="true" /></span><div><span>Figma-Demo · Dokumentstatus: {profile?.documentStatus ?? "nicht hinterlegt"}</span><strong>{profile ? "Versicherungsnachweis · nur Statusanzeige" : "Für dieses Profil liegen keine Dokumentdetails vor."}</strong><p>Es sind keine Dokumente gespeichert oder prüfbar. Dokumentprüfung und Bestätigung sind nicht verfügbar.</p></div></div>
          <button disabled type="button">Dokument prüfen · nicht verfügbar</button>
        </section>

        <p className="participant-demo-disclaimer">Schreibgeschützte Demo mit fiktiven Figma-Beispielen. Status und Angaben sind keine bestätigten Geschäftsregeln. In den Figma-Screens 04 und 05 weicht der Anmeldestatus dieses Beispiels ab.</p>

        <nav className="participant-detail-tabs" aria-label="Teilnehmerbereiche">{sections.map((section, index) => <a aria-current={index === 0 ? "location" : undefined} href={`#${section.id}`} key={section.id}>{section.label}{section.id === "dokumente" && profile ? <span>2</span> : null}</a>)}</nav>

        <div className="participant-detail-grid" id="uebersicht">
          <div className="participant-detail-main-column">
            <section className="participant-detail-panel participant-master-data" id="stammdaten">
              <div className="participant-detail-heading"><div><span>INTERNE PROFILDATEN UND ERREICHBARKEIT · DEMO</span><h2>Stammdaten</h2></div><button disabled type="button">Bearbeiten</button></div>
              <dl className="participant-data-grid">
                <div><dt>Anzeigename</dt><dd>{participant.name}<small>neutralisierte Darstellung · Demo</small></dd></div>
                <div><dt>Geburtsjahr</dt><dd>{value("birthYear")}<small>Figma-Beispielangabe · keine Altersregel</small></dd></div>
                <div><dt>Sprache</dt><dd>{value("language")}<small>Für Teamabsprachen · Demo</small></dd></div>
                <div><dt>E-Mail</dt><dd>{value("email")}</dd></div>
                <div><dt>Telefon</dt><dd>Nicht hinterlegt<small>optional laut Figma-Beispiel</small></dd></div>
                <div><dt>Notfallkontakt</dt><dd>Nicht angezeigt<small>keine Kontaktdaten in dieser Demo</small></dd></div>
              </dl>
            </section>

            <section className="participant-detail-panel participant-linked-deployment" aria-labelledby="linked-deployment-title">
              <div className="participant-detail-heading"><div><span>AKTIVE TEILNAHME UND RELEVANTE EINSATZDATEN · DEMO</span><h2 id="linked-deployment-title">Zugehöriger Einsatz</h2></div><span className="participant-static-state">Figma-Beispiel</span></div>
              <div className="participant-linked-deployment-content"><span className="participant-deployment-placeholder" role="img" aria-label="Neutraler Bildplatzhalter · Demo">Bildplatzhalter</span><div><h3>{participant.deployment}</h3><p>Lokale Figma-Demo · keine echten Einsatzdaten</p><span><MapPin size={13} aria-hidden="true" /> {participant.deployment === "Quartiersküche unterstützen" ? "Berlin-Neukölln" : "Ort nicht hinterlegt · Demo"}</span><span><CalendarDays size={13} aria-hidden="true" /> Zeitraum laut Demo-Einsatzübersicht</span>{deploymentSlugs[participant.deployment] ? <Link href={`/intern/einsaetze/${deploymentSlugs[participant.deployment]}`}>Einsatzdetail öffnen <ArrowUpRight size={13} aria-hidden="true" /></Link> : null}</div></div>
            </section>

            <section className="participant-detail-panel" id="anforderungen"><div className="participant-detail-heading"><div><span>DEMO-BEREICH</span><h2><CheckCheck size={16} aria-hidden="true" /> Anforderungen</h2></div><span>{profile ? "2 von 3 erfüllt · Figma-Demo" : "Keine Demoangabe"}</span></div><p>Nur die im Entwurf gezeigte Zusammenfassung. Es werden keine Voraussetzungen oder Altersregeln angewendet.</p></section>
            <section className="participant-detail-panel" id="dokumente"><div className="participant-detail-heading"><div><span>DEMO-BEREICH</span><h2><FileText size={16} aria-hidden="true" /> Dokumente</h2></div><span>{profile ? "2 · Figma-Demo" : "Keine Demoangabe"}</span></div><p>{profile ? "Versicherungsnachweis · Status In Prüfung. Keine Datei vorhanden; Prüfstatus ist eine statische Designangabe." : "Für dieses Demo-Profil sind keine Dokumentangaben hinterlegt."}</p></section>
            <section className="participant-detail-panel" id="checkliste"><div className="participant-detail-heading"><div><span>DEMO-BEREICH</span><h2><ClipboardCheck size={16} aria-hidden="true" /> Checkliste</h2></div><span>Nur Ansicht</span></div><p>Keine ausführbaren Prüfschritte oder Statusaktionen in der lokalen Demo.</p></section>
            <section className="participant-detail-panel" id="verlauf"><div className="participant-detail-heading"><div><span>DEMO-BEREICH</span><h2>Verlauf</h2></div><span>Nur Ansicht</span></div><p>Für diesen Bereich sind keine Ereignis- oder Änderungsdaten hinterlegt.</p></section>
            <section className="participant-detail-panel" id="kommunikation"><div className="participant-detail-heading"><div><span>DEMO-BEREICH</span><h2><MessageCircle size={16} aria-hidden="true" /> Kommunikation</h2></div><span>Nur Ansicht</span></div><p>Keine Nachrichten, Empfänger oder Versandfunktion in dieser Demo.</p></section>
          </div>

          <aside className="participant-detail-side-column" aria-label="Status- und Zahlungsübersicht · Demo">
            <section className="participant-detail-panel participant-total-status"><div className="participant-detail-heading"><div><span>Figma-STATUS · DEMO</span><h2>Gesamtstatus</h2></div><span className="participant-profile-flag">{profile ? "Handlungsbedarf" : "Nicht hinterlegt"}</span></div>
              <label>Vollständigkeit <span>{profile?.profileCompletion ?? "–"}</span></label><div className="participant-progress" aria-label={profile ? `Vollständigkeit ${profile.profileCompletion}, Demo` : "Vollständigkeit nicht hinterlegt"}><span style={{ width: profile?.profileCompletion.replace(" ", "") ?? "0%" }} /></div>
              <dl><div><dt>Anmeldung</dt><dd>{profile?.registrationStatus ?? participant.registration} · Demo</dd></div><div><dt>Dokumente</dt><dd>{profile?.documentStatus ?? "Nicht hinterlegt"} · Demo</dd></div><div><dt>Bestätigung</dt><dd>{profile?.confirmationStatus ?? participant.confirmation} · Demo</dd></div></dl>
              <button className="participant-disabled-confirm" disabled type="button"><BadgeCheck size={14} aria-hidden="true" />Bestätigung nicht verfügbar</button>
              <small>Keine Statusänderung in dieser Ansicht.</small>
            </section>
            <section className="participant-detail-panel participant-payment-panel" id="zahlung"><div className="participant-detail-heading"><div><span>DEMO-BEREICH</span><h2><CircleDollarSign size={16} aria-hidden="true" /> Zahlung</h2></div><span>Keine Aktion</span></div><p>{profile?.paymentStatus ?? participant.payment} · Figma-Demo</p><small>Keine Zahlungsdaten und keine Buchungsfunktion.</small></section>
          </aside>
        </div>

        <Link className="participant-back-link participant-back-bottom" href="/intern/teilnehmer"><ArrowLeft size={15} aria-hidden="true" /> Zurück zur Teilnehmerübersicht</Link>
      </main>
    </InternalShell>
  );
}
