import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { ButtonLink, Eyebrow, Surface } from "@/components/ui";

export const metadata: Metadata = { title: "Einsatzdetails" };
export default async function EinsatzDetailPage({ params }: PageProps<"/einsaetze/[slug]">) {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
  return <main className="page-main"><section className="wrap detail-layout"><div className="detail-main"><Link href="/einsaetze" className="back-link"><ArrowLeft size={16} /> Alle Einsätze</Link><div className="detail-art"><span>B</span><p>BIGGER · GEMEINSAM UNTERWEGS</p></div><Eyebrow>Einsatzmöglichkeit</Eyebrow><h1>{title}</h1><p className="detail-lead">Die Einsatzbeschreibung und konkrete Rahmenbedingungen werden gemeinsam mit dem BIGGER-Team abgestimmt.</p><div className="detail-section"><h2>Worum geht es?</h2><p>Hier entsteht die ausführliche Beschreibung des Einsatzes. Sie zeigt, was dich erwartet, wer beteiligt ist und welche Erfahrungen du mitnehmen kannst.</p></div><div className="detail-section"><h2>Das erwartet dich</h2><p>Informationen zu Aufgaben, Zeitraum, Unterkunft und Begleitung werden ergänzt, sobald die fachlichen Anforderungen bestätigt sind.</p></div></div><aside className="detail-aside"><Surface className="apply-card"><span className="tag">Einsatzprofil</span><h2>Ein Schritt, der zu dir passt.</h2><p><MapPin size={16} /> Ort und Zeitraum folgen</p><ButtonLink href={`/anmeldung/${slug}`}>Interesse anmelden <ArrowUpRight size={16} /></ButtonLink><small>Der Anmeldeablauf ist derzeit ein UI-Grundgerüst.</small></Surface></aside></section></main>;
}
