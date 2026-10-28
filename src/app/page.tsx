import Link from "next/link";
import { ArrowUpRight, Compass, HeartHandshake, MapPin, Sprout } from "lucide-react";
import { ButtonLink, Eyebrow, SectionTitle, Surface } from "@/components/ui";

const highlights = [
  { icon: Compass, title: "Finde deinen Einsatz", text: "Entdecke Möglichkeiten, die zu deinen Interessen und deinem nächsten Schritt passen.", href: "/einsaetze", action: "Einsätze entdecken" },
  { icon: HeartHandshake, title: "Gemeinsam unterwegs", text: "Lerne Menschen kennen, die Hoffnung praktisch werden lassen wollen.", href: "/einsaetze", action: "So funktioniert BIGGER" },
  { icon: Sprout, title: "Wachsen mit Wirkung", text: "Ein Einsatz, der dich fordert, stärkt und neue Perspektiven eröffnet.", href: "/einsaetze", action: "Mehr erfahren" },
];

export default function Home() {
  return (
    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <Eyebrow>Glaube. Gemeinschaft. Welt bewegen.</Eyebrow>
          <h1>Dein nächster Schritt kann <span>mehr bewegen.</span></h1>
          <p className="hero-intro">Finde einen Einsatz, der zu dir passt. Entdecke neue Orte, begegne Menschen und bring deine Stärken ein.</p>
          <div className="button-row"><ButtonLink href="/einsaetze">Einsätze entdecken <ArrowUpRight size={17} /></ButtonLink><Link className="text-link" href="#so-gehts">So geht BIGGER <span aria-hidden="true">↓</span></Link></div>
          <div className="hero-note"><span className="note-mark">B</span><span>Für Menschen, die ihren Glauben praktisch leben möchten.</span></div>
        </div>
        <div className="hero-art" aria-label="Abstrakte Illustration von Weg und Landschaft" role="img">
          <div className="art-sun" /><div className="art-hill art-hill-back" /><div className="art-hill art-hill-front" />
          <div className="art-label"><MapPin size={16} /><span>Dein Abenteuer wartet</span></div>
          <div className="art-stamp">BIGGER<br /><small>HINSCHAUEN · LOSGEHEN</small></div>
        </div>
      </section>

      <section className="intro-band" id="so-gehts"><div className="wrap intro-band-inner"><p>Du musst nicht schon alles wissen.</p><p>Du musst nur bereit sein, loszugehen.</p></div></section>

      <section className="wrap features-section">
        <div className="section-heading"><div><Eyebrow>Ein Anfang mit Perspektive</Eyebrow><SectionTitle>Mach den ersten Schritt.</SectionTitle></div><p>Ob du schon eine klare Idee hast oder erst einmal stöbern möchtest: Hier beginnt deine Reise.</p></div>
        <div className="feature-grid">{highlights.map(({ icon: Icon, title, text, href, action }, i) => <Surface className="feature-card" key={title}><span className="feature-index">0{i + 1}</span><span className="feature-icon"><Icon size={21} strokeWidth={1.8} /></span><h3>{title}</h3><p>{text}</p><Link className="card-link" href={href}>{action}<ArrowUpRight size={16} /></Link></Surface>)}</div>
      </section>

      <section className="closing-cta"><div className="wrap closing-inner"><div><Eyebrow>Dein Weg beginnt hier</Eyebrow><h2>Bereit, BIGGER zu denken?</h2><p>Schau dir die aktuellen Möglichkeiten an und finde heraus, was zu dir passt.</p></div><ButtonLink href="/einsaetze" variant="light">Einsatz finden <ArrowUpRight size={17} /></ButtonLink></div></section>
    </main>
  );
}
