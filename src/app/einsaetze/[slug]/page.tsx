import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, Euro, FileText, MapPin, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink, Eyebrow, Surface } from "@/components/ui";
import { demoDeploymentRepository } from "@/lib/deployments/demo-repository";

export const metadata: Metadata = { title: "Einsatzdetails" };

export async function generateStaticParams() {
  const deployments = await demoDeploymentRepository.listPublicDeployments();
  return deployments.map(({ slug }) => ({ slug }));
}

function DetailFact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="detail-fact">
      <dt><Icon size={16} aria-hidden="true" />{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function EinsatzDetailPage({ params }: PageProps<"/einsaetze/[slug]">) {
  return (
    <Suspense fallback={<main className="page-main"><div className="wrap loading-state"><span className="loading-dot" aria-hidden="true" /><p>Einsatz wird geladen …</p></div></main>}>
      <DeploymentDetail params={params} />
    </Suspense>
  );
}

async function DeploymentDetail({ params }: { params: PageProps<"/einsaetze/[slug]">["params"] }) {
  const { slug } = await params;
  const deployment = await demoDeploymentRepository.findPublicDeployment(slug);
  if (!deployment) notFound();

  return (
    <main className="page-main deployment-detail-page">
      <section className="wrap detail-layout deployment-detail-layout">
        <div className="detail-main">
          <Link href="/einsaetze" className="back-link"><ArrowLeft size={16} aria-hidden="true" /> Zur Einsatzübersicht</Link>
          <div className="deployment-photo deployment-detail-photo" role="img" aria-label="Bildplatzhalter für Demo-Einsatz">
            <span>Bildplatzhalter</span>
          </div>
          <Eyebrow>Demo-Einsatz · BIGGER V1</Eyebrow>
          <h1>{deployment.title}</h1>
          <p className="detail-lead">{deployment.summary}</p>

          <section className="detail-section" aria-labelledby="about-heading">
            <h2 id="about-heading">Worum geht’s?</h2>
            <p>{deployment.description}</p>
          </section>

          <section className="detail-section" aria-labelledby="conditions-heading">
            <h2 id="conditions-heading">Was du mitbringen solltest</h2>
            <div className="conditions-grid">
              <div className="condition-group">
                <h3>Voraussetzungen</h3>
                {deployment.requiredConditions.length ? <ul>{deployment.requiredConditions.map((item) => <li key={item}>{item}</li>)}</ul> : <p>Pflichtvoraussetzungen sind für diese Demo noch nicht festgelegt.</p>}
              </div>
              <div className="condition-group condition-optional">
                <h3>Optional</h3>
                {deployment.optionalConditions.length ? <ul>{deployment.optionalConditions.map((item) => <li key={item}>{item}</li>)}</ul> : <p>Optionale Voraussetzungen sind für diese Demo noch nicht festgelegt.</p>}
              </div>
            </div>
          </section>

          <section className="detail-section" aria-labelledby="documents-heading">
            <h2 id="documents-heading">Dokumente</h2>
            {deployment.documents.length ? (
              <ul className="document-list">
                {deployment.documents.map((document) => <li key={document}><FileText size={17} aria-hidden="true" />{document}</li>)}
              </ul>
            ) : (
              <div className="detail-note"><FileText size={18} aria-hidden="true" /><p>Für diese Demo sind noch keine Dokumente hinterlegt.</p></div>
            )}
          </section>
        </div>

        <aside className="detail-aside" aria-label="Einsatzinformationen">
          <Surface className="deployment-facts-card">
            <span className="tag">Demo-Angaben</span>
            <h2>Auf einen Blick</h2>
            <dl className="detail-facts">
              <DetailFact icon={CalendarDays} label="Zeitraum" value={deployment.period} />
              <DetailFact icon={MapPin} label="Ort" value={deployment.location} />
              <DetailFact icon={Clock3} label="Anmeldefrist" value={deployment.registrationDeadline} />
              <DetailFact icon={Users} label="Kapazität" value={deployment.capacity} />
              <DetailFact icon={Euro} label="Kosten / Beitrag" value={deployment.contribution} />
            </dl>
            <p className="detail-demo-caption">Die Angaben sind Platzhalter und kein Angebot.</p>
            <ButtonLink href={`/anmeldung/${deployment.slug}`}>Anmeldung starten · Demo</ButtonLink>
          </Surface>
        </aside>
      </section>
    </main>
  );
}
