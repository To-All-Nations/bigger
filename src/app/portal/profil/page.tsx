import type { Metadata } from "next";
import { CircleHelp, Shield, UserRound } from "lucide-react";
import { PortalShell } from "@/components/portal-shell";
import { portalDemoEmergencyContact, portalDemoProfile, portalProfilePrivacyPlaceholder } from "@/lib/demo/portal-profile";

export const metadata: Metadata = { title: "Meine Daten · Teilnehmerportal" };

function ReadOnlyField({ label, value }: { label: string; value: string }) {
  return <label className="portal-profile-field"><span>{label} · Demo</span><input readOnly value={value} aria-label={`${label} · Demo, nur lesbar`} /></label>;
}

export default function PortalProfilPage() {
  return (
    <main className="page-main workspace-page portal-profile-page">
      <PortalShell active="profile">
        <div className="portal-profile-content">
          <header className="portal-profile-heading">
            <div><span className="portal-profile-eyebrow">Profil · Demo</span><h1>Meine Daten</h1><p>Figma-Hinweis: Angaben aktuell halten, damit passende Einsätze dich finden. Bearbeitungsfunktion nicht verfügbar.</p></div>
            <button className="portal-profile-save" type="button" disabled>Änderungen speichern · deaktiviert</button>
          </header>

          <p className="portal-profile-demo-notice"><strong>Demo – kein Login, keine echten Konten oder Personendaten.</strong><span>Alle Profilwerte sind fiktive, lokale Musterwerte. Die Felder sind schreibgeschützt; es gibt keine Speicherung.</span></p>

          <div className="portal-profile-layout">
            <div className="portal-profile-main-column">
              <section className="portal-profile-panel" aria-labelledby="portal-personal-title">
                <div className="portal-profile-panel-heading"><h2 id="portal-personal-title">Persönliche Angaben</h2><span>Figma-Felder · Demo</span></div>
                <div className="portal-profile-fields-grid">
                  <ReadOnlyField label="Vorname" value={portalDemoProfile.firstName} />
                  <ReadOnlyField label="Nachname" value={portalDemoProfile.lastName} />
                  <ReadOnlyField label="E-Mail" value={portalDemoProfile.email} />
                  <ReadOnlyField label="Telefon" value={portalDemoProfile.phone} />
                </div>
              </section>

              <section className="portal-profile-panel" aria-labelledby="portal-address-title">
                <div className="portal-profile-panel-heading"><h2 id="portal-address-title">Adresse</h2><span>Demo-Musterwerte</span></div>
                <div className="portal-profile-address-grid">
                  <ReadOnlyField label="Straße und Hausnummer" value={portalDemoProfile.street} />
                  <ReadOnlyField label="PLZ" value={portalDemoProfile.postalCode} />
                  <ReadOnlyField label="Ort" value={portalDemoProfile.city} />
                </div>
              </section>

              <section className="portal-profile-panel" aria-labelledby="portal-emergency-title">
                <div className="portal-profile-panel-heading"><h2 id="portal-emergency-title">Notfallkontakt</h2><span>Platzhalter · Demo</span></div>
                <div className="portal-profile-emergency-grid">
                  <ReadOnlyField label="Name der Kontaktperson" value={portalDemoEmergencyContact.name} />
                  <ReadOnlyField label="Beziehung" value={portalDemoEmergencyContact.relationship} />
                  <ReadOnlyField label="Telefonnummer" value={portalDemoEmergencyContact.phone} />
                </div>
                <p className="portal-profile-help">Die Figma-Beispielplatzhalter enthalten keine echten Kontaktangaben.</p>
              </section>
            </div>

            <aside className="portal-profile-side-column">
              <section className="portal-profile-panel portal-profile-image-panel" aria-labelledby="portal-image-title">
                <div className="portal-profile-panel-heading"><h2 id="portal-image-title">Profilbild</h2><span>Demo</span></div>
                <div className="portal-profile-avatar" role="img" aria-label="Neutrales Demo-Profilbild mit den Initialen TA"><UserRound size={24} aria-hidden="true" /><span>{portalDemoProfile.initials}</span></div>
                <button className="portal-profile-image-action" type="button" disabled>Bild ändern · deaktiviert</button>
              </section>

              <section className="portal-profile-panel portal-profile-privacy-panel" aria-labelledby="portal-privacy-title">
                <div className="portal-profile-panel-heading"><h2 id="portal-privacy-title"><Shield size={14} aria-hidden="true" /> {portalProfilePrivacyPlaceholder.heading}</h2></div>
                <p className="portal-profile-privacy-question"><CircleHelp size={14} aria-hidden="true" />{portalProfilePrivacyPlaceholder.retention}</p>
                <p className="portal-profile-privacy-access">{portalProfilePrivacyPlaceholder.access}</p>
                <span className="portal-profile-open-label">Offene Entscheidung · keine Regel implementiert</span>
              </section>
            </aside>
          </div>

          <p className="portal-profile-footer">Profilfelder dienen nur der visuellen Figma-Demo. Es werden keine Daten gespeichert, abgerufen oder bearbeitet.</p>
        </div>
      </PortalShell>
    </main>
  );
}
