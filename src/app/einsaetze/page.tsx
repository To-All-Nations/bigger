import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Search } from "lucide-react";
import { Eyebrow, SectionTitle, Surface } from "@/components/ui";

export const metadata: Metadata = { title: "Einsätze entdecken" };

const opportunities = [
  { slug: "gemeinsam-anpacken", title: "Gemeinsam anpacken", place: "Einsatzort wird ergänzt", type: "Gemeinschaft & Alltag", tone: "sage" },
  { slug: "menschen-begegnen", title: "Menschen begegnen", place: "Einsatzort wird ergänzt", type: "Begegnung & Begleitung", tone: "peach" },
  { slug: "hoffnung-teilen", title: "Hoffnung teilen", place: "Einsatzort wird ergänzt", type: "Team & Engagement", tone: "lavender" },
];

export default function EinsaetzePage() {
  return <main className="page-main"><section className="page-hero wrap"><Eyebrow>Finden, was dich bewegt</Eyebrow><SectionTitle>Dein Einsatz. Dein nächster Schritt.</SectionTitle><p>Entdecke Möglichkeiten, bringe deine Interessen ein und lerne neue Perspektiven kennen.</p><form className="search-panel" action="/einsaetze" aria-label="Einsätze filtern"><label className="search-field"><Search size={18} /><span className="sr-only">Suchbegriff</span><input name="q" placeholder="Wonach suchst du?" /></label><label className="search-field"><MapPin size={18} /><span className="sr-only">Ort</span><input name="place" placeholder="Ort oder Region" /></label><button className="button button-primary" type="submit">Suchen</button></form></section>
    <section className="wrap listing-section"><div className="listing-head"><div><Eyebrow>Entdecke Möglichkeiten</Eyebrow><h2>Aktuelle Einsätze</h2></div><span className="muted">Beispielinhalte für die V1-Planung</span></div><div className="opportunity-grid">{opportunities.map((item) => <Surface className="opportunity-card" key={item.slug}><div className={`opportunity-visual ${item.tone}`}><span className="visual-orbit" /><span className="visual-letter">B</span><span className="visual-caption">BIGGER · EINSATZ</span></div><div className="opportunity-copy"><span className="tag">{item.type}</span><h3>{item.title}</h3><p><MapPin size={15} />{item.place}</p><Link className="card-link" href={`/einsaetze/${item.slug}`}>Details ansehen <ArrowUpRight size={16} /></Link></div></Surface>)}</div></section></main>;
}
