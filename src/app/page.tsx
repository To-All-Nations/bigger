import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "BIGGER – Startseite" },
  description: "Öffentliche Startseite von BIGGER.",
};

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero wrap">
        <div className="home-copy">
          <Eyebrow>BIGGER · ÖFFENTLICHE WEBSITE</Eyebrow>
          <h1>Finde deinen <span>Einsatz.</span></h1>
          <p className="home-intro">Entdecke die Einsatzmöglichkeiten von BIGGER und finde den Einstieg, der zu dir passt.</p>
          <div className="button-row home-actions">
            <ButtonLink href="/einsaetze">EINSÄTZE ENTDECKEN <ArrowUpRight size={17} aria-hidden="true" /></ButtonLink>
            <Link className="text-link" href="#ueber-bigger">Über BIGGER <span aria-hidden="true">↓</span></Link>
          </div>
        </div>
        <div className="home-visual-placeholder" role="img" aria-label="Neutraler Bildplatzhalter für die BIGGER-Startseite">
          <span>Bildplatzhalter</span>
        </div>
      </section>

      <section className="home-about" id="ueber-bigger" aria-labelledby="about-bigger-heading">
        <div className="wrap home-about-inner">
          <div>
            <Eyebrow>Über BIGGER</Eyebrow>
            <h2 id="about-bigger-heading">Gemeinsam unterwegs</h2>
          </div>
          <p>Die freigegebenen Informationen zu BIGGER werden hier ergänzt.</p>
          <Link className="home-about-link" href="/einsaetze">Einsätze ansehen <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
