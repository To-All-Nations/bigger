import type { DemoDeployment } from "@/lib/deployments/types";

export type { DemoDeployment } from "@/lib/deployments/types";

/** Local-only, explicitly fictional content for the public deployment flow. */

const placeholder = "Demoangabe folgt";

export const demoDeployments: DemoDeployment[] = [
  {
    slug: "quartierskueche-unterstuetzen",
    title: "Quartiersküche unterstützen",
    summary: "Ein Demo-Einsatz aus dem BIGGER-Designentwurf.",
    location: placeholder,
    period: placeholder,
    contribution: placeholder,
    registrationDeadline: placeholder,
    capacity: placeholder,
    description: "Die konkrete Beschreibung wird ergänzt, sobald die Einsatzinhalte fachlich abgestimmt sind.",
    requiredConditions: [],
    optionalConditions: [],
    documents: [],
  },
  {
    slug: "naturcamp-fuer-jugendliche",
    title: "Naturcamp für Jugendliche",
    summary: "Ein Demo-Einsatz aus dem BIGGER-Designentwurf.",
    location: placeholder,
    period: placeholder,
    contribution: placeholder,
    registrationDeadline: placeholder,
    capacity: placeholder,
    description: "Die konkrete Beschreibung wird ergänzt, sobald die Einsatzinhalte fachlich abgestimmt sind.",
    requiredConditions: [],
    optionalConditions: [],
    documents: [],
  },
];

export function getDemoDeployment(slug: string) {
  return demoDeployments.find((deployment) => deployment.slug === slug);
}
