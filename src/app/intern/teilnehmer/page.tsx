import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { InternalShell } from "@/components/internal-shell";
import { internalDemoParticipants, internalParticipantMetrics } from "@/lib/demo/internal-participants";

export const metadata: Metadata = { title: "Teilnehmer · Verwaltung" };

function Status({ children }: { children: string }) {
  return <span className="participant-status">{children}</span>;
}

export default function TeilnehmeruebersichtPage() {
  return (
    <InternalShell active="participants">
      <main className="internal-participants-page">
        <div className="internal-list-heading participant-list-heading">
          <div><span className="participant-eyebrow">Personenmanagement · Demo</span><h1>Teilnehmer</h1><p>Anmeldungen, Nachweise und Teilnehmende · nur Leseansicht.</p></div>
          <button className="button button-primary internal-disabled-action" disabled type="button">Teilnehmer hinzufügen</button>
        </div>
        <p className="internal-demo-notice">Demo-Ansicht · Fiktive Figma-Beispiele. Keine echten Teilnehmerdaten; Suche, Filter und Geschäftsaktionen sind nicht aktiv.</p>

        <section className="participant-metrics" aria-label="Figma-Kennzahlen · Demo">
          {internalParticipantMetrics.map((metric, index) => <article className={`${index === 0 ? "is-primary" : ""} ${"emphasis" in metric ? "has-attention" : ""}`} key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.note} · Demo</small></article>)}
        </section>

        <section className="participant-filters" aria-label="Filter · Demo, nicht aktiv">
          <label className="participant-search"><span>Suche · Demo</span><span><Search size={14} aria-hidden="true" /><input aria-label="Name, ID oder Einsatz suchen · nicht aktiv" disabled placeholder="Name, ID oder Einsatz suchen" /></span></label>
          <label><span>Gesamtstatus</span><select aria-label="Gesamtstatus · nicht aktiv" disabled><option>Alle Status</option></select></label>
          <label><span>Einsatz</span><select aria-label="Einsatz · nicht aktiv" disabled><option>Alle Einsätze</option></select></label>
          <label><span>Frist</span><select aria-label="Frist · nicht aktiv" disabled><option>Nächste 7 Tage</option></select></label>
          <button type="button" disabled aria-label="Filter nicht aktiv"><SlidersHorizontal size={14} aria-hidden="true" /> Filter</button>
        </section>

        <div className="participant-readonly-note"><span>Auswahl und Aktionen sind in dieser Demo deaktiviert.</span><span>Legende · Blockiert · Offen · Erledigt</span></div>

        <section className="participant-table-wrap" aria-label="Beispiel-Teilnehmer · Demo">
          <div className="participant-table-scroll">
            <table className="participant-table">
              <thead><tr><th scope="col">Name / Einsatz</th><th scope="col">Anmeldung</th><th scope="col">Dokumente</th><th scope="col">Versicherung</th><th scope="col">Zahlung</th><th scope="col">Bestätigung</th><th scope="col">Offene Punkte</th><th scope="col">Ansicht</th></tr></thead>
              <tbody>{internalDemoParticipants.map((participant) => <tr key={participant.slug}>
                <td data-label="Name / Einsatz"><Link className="participant-name-link" href={`/intern/teilnehmer/${participant.slug}`}><span className="participant-avatar">{participant.initials}</span><span><strong>{participant.name}</strong><small>#{participant.id} · {participant.deployment}</small></span></Link></td>
                <td data-label="Anmeldung"><Status>{participant.registration}</Status></td>
                <td data-label="Dokumente"><Status>{participant.documents}</Status></td>
                <td data-label="Versicherung"><Status>{participant.insurance}</Status></td>
                <td data-label="Zahlung"><Status>{participant.payment}</Status></td>
                <td data-label="Bestätigung"><Status>{participant.confirmation}</Status></td>
                <td data-label="Offene Punkte"><span className="participant-open-point">{participant.attention}<small>{participant.attentionTime} · Demo</small></span></td>
                <td data-label="Ansicht"><Link className="participant-open-link" href={`/intern/teilnehmer/${participant.slug}`}>Details <ArrowRight size={13} aria-hidden="true" /></Link></td>
              </tr>)}</tbody>
            </table>
          </div>
          <div className="participant-mobile-list">{internalDemoParticipants.map((participant) => <article className="participant-mobile-card" key={participant.slug}>
            <div className="participant-mobile-card-heading"><Link className="participant-name-link" href={`/intern/teilnehmer/${participant.slug}`}><span className="participant-avatar">{participant.initials}</span><span><strong>{participant.name}</strong><small>#{participant.id} · {participant.deployment}</small></span></Link><Link className="participant-mobile-chevron" href={`/intern/teilnehmer/${participant.slug}`} aria-label={`Details zu ${participant.name}`}><ArrowRight size={16} aria-hidden="true" /></Link></div>
            <dl className="participant-mobile-facts"><div><dt>Anmeldung</dt><dd><Status>{participant.registration}</Status></dd></div><div><dt>Dokumente</dt><dd><Status>{participant.documents}</Status></dd></div><div><dt>Versicherung</dt><dd><Status>{participant.insurance}</Status></dd></div><div><dt>Zahlung</dt><dd><Status>{participant.payment}</Status></dd></div><div><dt>Bestätigung</dt><dd><Status>{participant.confirmation}</Status></dd></div><div><dt>Offener Punkt</dt><dd>{participant.attention}<small>{participant.attentionTime} · Demo</small></dd></div></dl>
            <Link className="participant-mobile-detail-link" href={`/intern/teilnehmer/${participant.slug}`}>Teilnehmerdetail ansehen <ArrowRight size={14} aria-hidden="true" /></Link>
          </article>)}</div>
        </section>
        <p className="participant-pagination">3 Figma-Beispiele · Demo · Keine echte Teilnehmerliste</p>
      </main>
    </InternalShell>
  );
}
