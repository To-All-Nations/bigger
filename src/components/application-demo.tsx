"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Info } from "lucide-react";
import type { DemoDeployment } from "@/lib/demo/deployments";

const steps = [
  { id: "deployment", label: "Einsatz", short: "Einsatz" },
  { id: "personal", label: "Persönliche Daten", short: "Daten" },
  { id: "contact", label: "Kontakt", short: "Kontakt" },
  { id: "questions", label: "Einsatzfragen", short: "Fragen" },
  { id: "consents", label: "Zustimmungen", short: "Zustimmungen" },
  { id: "summary", label: "Zusammenfassung", short: "Prüfen" },
  { id: "confirmation", label: "Bestätigungsvorschau", short: "Vorschau" },
] as const;

type StepId = (typeof steps)[number]["id"];
type Values = Record<string, string>;

const personalFields = [
  { name: "firstName", label: "Vorname", hint: "Figma-Feld · Pflichtstatus offen" },
  { name: "lastName", label: "Nachname", hint: "Figma-Feld · Pflichtstatus offen" },
  { name: "birthDate", label: "Geburtsdatum", hint: "Figma-Feld · Zweck und Pflichtstatus offen", type: "date" },
];

const contactFields = [
  { name: "email", label: "E-Mail-Adresse", hint: "Musterfeld · Pflichtstatus offen", type: "email" },
  { name: "phone", label: "Telefonnummer", hint: "Musterfeld · Pflichtstatus offen", type: "tel" },
  { name: "emergencyName", label: "Notfallkontakt · Name", hint: "Figma-Musterfeld · Erforderlichkeit offen" },
  { name: "emergencyRelation", label: "Beziehung", hint: "Figma-Musterfeld · Erforderlichkeit offen" },
  { name: "emergencyPhone", label: "Notfallkontakt · Telefonnummer", hint: "Figma-Musterfeld · Erforderlichkeit offen", type: "tel" },
];

const parentFields = [
  { name: "guardianName", label: "Vor- und Nachname" },
  { name: "guardianRelation", label: "Beziehung" },
  { name: "guardianEmail", label: "E-Mail-Adresse", type: "email" },
  { name: "guardianPhone", label: "Telefonnummer", type: "tel" },
];

const questionOptions = ["Ja", "Noch unsicher"];
const consentExamples = [
  { name: "privacy", text: "Datenschutzinformationen gelesen · Figma-Mustertext, nicht freigegeben" },
  { name: "conduct", text: "Verhaltensregeln anerkannt · Figma-Mustertext, nicht freigegeben" },
  { name: "details", text: "Angaben und Kontakt bestätigt · Figma-Mustertext, nicht freigegeben" },
  { name: "updates", text: "Informationen zu weiteren Einsätzen · als optional markiert im Figma-Entwurf; fachlich offen" },
];

export function ApplicationDemo({ deployment }: { deployment: DemoDeployment }) {
  const [step, setStep] = useState<StepId>("deployment");
  const [values, setValues] = useState<Values>({});
  const [parentVariantOpen, setParentVariantOpen] = useState(false);

  const updateValue = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };
  const currentIndex = steps.findIndex((item) => item.id === step);
  const go = (index: number) => setStep(steps[Math.max(0, Math.min(steps.length - 1, index))].id);
  const currentLabel = steps[currentIndex].label;

  return (
    <main className="page-main signup-page application-demo-page">
      <div className="signup-wrap application-demo-wrap">
        <div className="application-demo-banner" role="note"><Info size={17} aria-hidden="true" /><strong>Demo – Angaben werden nicht gespeichert oder übertragen.</strong></div>
        <Link href={`/einsaetze/${deployment.slug}`} className="back-link"><ArrowLeft size={16} aria-hidden="true" /> Zurück zum Einsatz</Link>
        <header className="signup-heading application-demo-heading">
          <p className="eyebrow">BIGGER · FLOW 03 · LOKALE DEMO</p>
          <h1>Interesse anmelden</h1>
          <p>Ein klickbarer Musterablauf. Eingaben bleiben nur bis zum Verlassen dieser Ansicht im Arbeitsspeicher des Browsers.</p>
        </header>

        <nav className="application-demo-stepnav" aria-label="Demo-Schritte">
          {steps.map((item, index) => (
            <button key={item.id} type="button" aria-current={step === item.id ? "step" : undefined} onClick={() => go(index)}>
              <span>{index < currentIndex ? <Check size={13} aria-hidden="true" /> : index + 1}</span><span className="application-demo-step-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <section className="form-card application-demo-card" aria-labelledby="application-step-heading">
          <div className="application-demo-step-meta"><span>{step === "deployment" ? "Einsatz auswählen · Figma Screen 01" : step === "summary" || step === "confirmation" ? "Außerhalb der fünf Formularschritte · Demo" : `Schritt ${step === "personal" ? "1" : step === "contact" ? "2" : step === "questions" ? "3" : "4"} von 5 · Figma-Muster`}</span><span>{currentIndex + 1} / {steps.length} Ansichten</span></div>
          <h2 id="application-step-heading">{currentLabel}</h2>
          <p className="application-demo-step-intro">{stepIntro(step)}</p>

          {step === "deployment" && <DeploymentStep deployment={deployment} />}
          {step === "personal" && <FieldGroup fields={personalFields} values={values} onChange={updateValue} />}
          {step === "contact" && (
            <>
              <FieldGroup fields={contactFields} values={values} onChange={updateValue} />
              <section className="application-demo-variant" aria-labelledby="guardian-variant-heading">
                <div><span className="application-demo-open-label">OFFENE MUSTERVARIANTE · NICHT AUTOMATISIERT</span><h3 id="guardian-variant-heading">Elternangaben (16/17)</h3><p>Der Figma-Entwurf zeigt diesen Zweig altersbezogen. Altersgrenze, Auslöser und Einwilligungsregeln sind ungeklärt; es erfolgt keine Ableitung aus dem Geburtsdatum.</p></div>
                <button className="button button-secondary" type="button" aria-expanded={parentVariantOpen} onClick={() => setParentVariantOpen((open) => !open)}>{parentVariantOpen ? "Variante schließen" : "Musterzweig manuell ansehen"}</button>
                {parentVariantOpen && <div className="application-demo-variant-fields"><FieldGroup fields={parentFields.map((field) => ({ ...field, hint: "Offenes Figma-Musterfeld · keine Regel" }))} values={values} onChange={updateValue} /><p>Der Entwurf zeigt außerdem Formular- und Zustimmungsbausteine. Wortlaut, Notwendigkeit und Nachweis sind offen; hier sind keine Datei- oder Zustimmungsaktionen verfügbar.</p></div>}
              </section>
              <p className="application-demo-open-note">Im Figma wird WhatsApp im Kontaktkontext erwähnt. Kanal, Zweck und Einwilligung sind offen; diese Demo bietet keine WhatsApp-Option.</p>
            </>
          )}
          {step === "questions" && <QuestionsStep values={values} onChange={updateValue} />}
          {step === "consents" && <ConsentsStep values={values} onChange={updateValue} />}
          {step === "summary" && <SummaryStep deployment={deployment} values={values} includeParent={parentVariantOpen} />}
          {step === "confirmation" && <ConfirmationPreview />}

          <footer className="application-demo-actions">
            <button className="button button-secondary" type="button" onClick={() => go(currentIndex - 1)} disabled={currentIndex === 0}><ArrowLeft size={15} aria-hidden="true" /> Zurück</button>
            {step === "summary" ? <button className="button button-primary" type="button" onClick={() => go(currentIndex + 1)}>Bestätigungsvorschau ansehen <ArrowRight size={15} aria-hidden="true" /></button> : step === "confirmation" ? <button className="button button-primary" type="button" disabled>Anmeldung absenden · deaktiviert</button> : <button className="button button-primary" type="button" onClick={() => go(currentIndex + 1)}>Weiter <ArrowRight size={15} aria-hidden="true" /></button>}
          </footer>
        </section>
        <p className="application-demo-footnote">Keine Pflichtfeldprüfung, Anmeldung, Bestätigung, Kontoanlage oder Datenübertragung. Die Fachregeln sind noch offen.</p>
      </div>
    </main>
  );
}

function stepIntro(step: StepId) {
  const text: Record<StepId, string> = {
    deployment: "Prüfe den ausgewählten Demo-Einsatz. Dieser Schritt startet keine Anmeldung.",
    personal: "Figma-Musterfelder. Welche Angaben erforderlich sind, ist fachlich noch offen.",
    contact: "Kontakt- und Notfallkontakt-Muster aus dem Entwurf. Pflichtstatus und Zweck sind nicht festgelegt.",
    questions: "Einsatzbezogene Musterfragen ohne Validierung oder Auswirkungen auf eine Anmeldung.",
    consents: "Die sichtbaren Texte sind nicht freigegebene Figma-Muster und stellen keine gültigen Einwilligungen dar.",
    summary: "Lokale Zusammenfassung der aktuellen Eingaben. Nichts wird eingereicht.",
    confirmation: "Nur Vorschau des Figma-Abschlusszustands; es wurde keine Anmeldung übermittelt oder bestätigt.",
  };
  return text[step];
}

function DeploymentStep({ deployment }: { deployment: DemoDeployment }) {
  return <article className="application-demo-deployment"><span className="tag">Lokaler Demo-Einsatz</span><h3>{deployment.title}</h3><p>{deployment.summary}</p><dl><div><dt>Ort</dt><dd>{deployment.location}</dd></div><div><dt>Zeitraum</dt><dd>{deployment.period}</dd></div><div><dt>Kosten / Beitrag</dt><dd>{deployment.contribution}</dd></div></dl><p className="small muted">Die Einsatzangaben sind lokale Platzhalter und kein Angebot.</p></article>;
}

type Field = { name: string; label: string; hint?: string; type?: string };
function FieldGroup({ fields, values, onChange }: { fields: Field[]; values: Values; onChange: (name: string, value: string) => void }) {
  return <div className="application-demo-fields">{fields.map((field) => <label key={field.name}><span>{field.label}</span>{field.hint && <small>{field.hint}</small>}<input type={field.type ?? "text"} autoComplete="off" value={values[field.name] ?? ""} onChange={(event) => onChange(field.name, event.target.value)} /></label>)}</div>;
}

function QuestionsStep({ values, onChange }: { values: Values; onChange: (name: string, value: string) => void }) {
  return <div className="application-demo-question-stack">
    <fieldset><legend>Kannst du dir grundsätzlich vorstellen, am Einsatz teilzunehmen? <small>Figma-Musterfrage · Pflichtstatus offen</small></legend>{questionOptions.map((option) => <label className="application-demo-choice" key={option}><input type="radio" name="participation" checked={values.participation === option} onChange={() => onChange("participation", option)} />{option}</label>)}</fieldset>
    <label className="application-demo-textarea">Gibt es etwas, das wir für deine Teilnahme berücksichtigen sollten? <small>Figma-Musterfrage · keine Pflichtregel</small><textarea value={values.considerations ?? ""} onChange={(event) => onChange("considerations", event.target.value)} rows={3} /></label>
    <label className="application-demo-textarea">Erwartungen oder Wünsche <small>Im Entwurf als optional gekennzeichnet</small><textarea value={values.expectations ?? ""} onChange={(event) => onChange("expectations", event.target.value)} rows={3} /></label>
  </div>;
}

function ConsentsStep({ values, onChange }: { values: Values; onChange: (name: string, value: string) => void }) {
  return <div className="application-demo-consents">{consentExamples.map((item) => <label key={item.name}><input type="checkbox" checked={values[item.name] === "yes"} onChange={(event) => onChange(item.name, event.target.checked ? "yes" : "")}/><span>{item.text}</span></label>)}<aside><Info size={16} aria-hidden="true"/><p>Keine Auswahl gilt als Einwilligung oder wird gespeichert. Wortlaut, Zweck, Version, Erforderlichkeit und Widerruf müssen fachlich geklärt werden.</p></aside></div>;
}

function SummaryStep({ deployment, values, includeParent }: { deployment: DemoDeployment; values: Values; includeParent: boolean }) {
  const summaryFields = [...personalFields, ...contactFields, ...(includeParent ? parentFields : []), { name: "participation", label: "Teilnahme-Einschätzung" }, { name: "considerations", label: "Hinweis zur Teilnahme" }, { name: "expectations", label: "Erwartungen oder Wünsche" }];
  return <div className="application-demo-summary"><article><h3>Einsatz · Demo</h3><p>{deployment.title}</p></article><article><h3>Angaben · nur lokal</h3><dl>{summaryFields.map((field) => <div key={field.name}><dt>{field.label}</dt><dd>{values[field.name] || "Offen · Demo-Platzhalter"}</dd></div>)}</dl></article><p>Die Übersicht dient nur der Vorschau. Es gibt keine Pflichtfeld- oder Eignungsprüfung.</p></div>;
}

function ConfirmationPreview() {
  return <div className="application-demo-confirmation"><span className="application-demo-confirm-icon"><Check size={23} aria-hidden="true" /></span><h3>Figma-Abschlussansicht · nicht bestätigt</h3><p>Der Figma-Flow zeigt nach dem Absenden eine Eingangsbestätigung. Diese Demo hat nichts gesendet; es gibt keine Anmeldenummer, kein Konto und keinen gespeicherten Vorgang.</p><div>Nur eine statische Vorschau des vorgesehenen Folgezustands.</div></div>;
}
