import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "Anmeldung" };
const steps = ["Über dich", "Dein Einsatz", "Prüfen"];
export default async function AnmeldungPage({ params }: PageProps<"/anmeldung/[slug]">) {
  const { slug } = await params;
  return <main className="page-main signup-page"><section className="signup-wrap"><Link href={`/einsaetze/${slug}`} className="back-link"><ArrowLeft size={16} /> Zurück zum Einsatz</Link><div className="signup-heading"><Eyebrow>Dein nächster Schritt</Eyebrow><h1>Interesse anmelden</h1><p>Der mehrstufige Ablauf wird hier vorbereitet. Inhalt und Pflichtangaben müssen fachlich noch festgelegt werden.</p></div><ol className="stepper" aria-label="Anmeldeschritte">{steps.map((step, index) => <li className={index === 0 ? "active" : ""} key={step}><span>{index === 0 ? "1" : index + 1}</span>{step}</li>)}</ol><form className="form-card" action="#"><h2>Über dich</h2><p>Diese Ansicht ist ein nicht absendendes UI-Muster.</p><div className="form-grid"><label>Vorname<input placeholder="Vorname" name="firstName" autoComplete="given-name" /></label><label>Nachname<input placeholder="Nachname" name="lastName" autoComplete="family-name" /></label><label className="full-field">E-Mail-Adresse<input placeholder="name@beispiel.de" name="email" type="email" autoComplete="email" /></label></div><label className="consent-row"><input type="checkbox" /> <span>Ich möchte mit dem BIGGER-Team über diesen Einsatz sprechen.</span></label><div className="form-actions"><span className="muted small">Schritt 1 von 3</span><button className="button button-primary" type="button">Weiter <ArrowRight size={16} /></button></div></form></section></main>;
}
