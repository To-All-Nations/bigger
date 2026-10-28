import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, Euro, MapPin, Users } from "lucide-react";
import { Eyebrow, Surface } from "@/components/ui";
import { demoDeploymentRepository } from "@/lib/deployments/demo-repository";

export const metadata: Metadata = { title: "Einsätze entdecken" };

export default async function EinsaetzePage() {
  const deployments = await demoDeploymentRepository.listPublicDeployments();

  return (
    <main className="page-main deployments-page">
      <section className="page-hero wrap deployment-hero">
        <Eyebrow>Finde deinen Einsatz</Eyebrow>
        <h1 className="section-title">Einsatzübersicht</h1>
        <p>Entdecke Möglichkeiten, dich einzubringen und gemeinsam unterwegs zu sein.</p>
      </section>

      <section className="wrap listing-section deployment-list" aria-labelledby="deployments-heading">
        <div className="listing-head">
          <div>
            <Eyebrow>Entdecke Möglichkeiten</Eyebrow>
            <h2 id="deployments-heading">Aktuelle Einsätze</h2>
          </div>
          <span className="demo-notice">Demo-Inhalte · keine echten Einsatzangebote</span>
        </div>

        <div className="opportunity-grid">
          {deployments.map((deployment) => (
            <Surface className="opportunity-card deployment-card" key={deployment.slug}>
              <div className="deployment-photo" role="img" aria-label="Bildplatzhalter für Demo-Einsatz">
                <span>Bildplatzhalter</span>
              </div>
              <div className="opportunity-copy">
                <span className="tag">Demo-Einsatz</span>
                <h3>{deployment.title}</h3>
                <p className="deployment-summary">{deployment.summary}</p>
                <dl className="deployment-card-facts">
                  <div><dt><CalendarDays size={15} aria-hidden="true" /> Zeitraum</dt><dd>{deployment.period}</dd></div>
                  <div><dt><MapPin size={15} aria-hidden="true" /> Ort</dt><dd>{deployment.location}</dd></div>
                  <div><dt><Euro size={15} aria-hidden="true" /> Kosten</dt><dd>{deployment.contribution}</dd></div>
                  <div><dt><Clock3 size={15} aria-hidden="true" /> Anmeldefrist</dt><dd>{deployment.registrationDeadline}</dd></div>
                  <div><dt><Users size={15} aria-hidden="true" /> Kapazität</dt><dd>{deployment.capacity}</dd></div>
                </dl>
                <Link className="card-link deployment-card-link" href={`/einsaetze/${deployment.slug}`}>
                  Einsatz ansehen <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Surface>
          ))}
        </div>
      </section>
    </main>
  );
}
