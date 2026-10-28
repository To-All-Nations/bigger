import type { InternalDeploymentDetail, InternalDeploymentSummary } from "@/lib/deployments/types";

export type { InternalDeploymentStatus } from "@/lib/deployments/types";

export const internalDashboardMetrics = [
  { label: "Aktive Einsätze", value: "18", note: "4 starteten diese Woche" },
  { label: "Teilnehmer", value: "326", note: "+12 im September" },
  { label: "Offene Aufgaben", value: "27", note: "8 heute fällig", emphasis: "attention" },
  { label: "In Prüfung", value: "9", note: "Dokumente warten", emphasis: "review" },
  { label: "Offene Zahlungen", value: "4", note: "1.140 € ausstehend" },
] as const;

export const upcomingDemoDeployments = [
  { day: "05", month: "Okt.", title: "Schulgarten winterfest machen", places: "8 / 10 Plätze", status: "Achtung" },
  { day: "12", month: "Okt.", title: "Quartiersküche unterstützen", places: "12 / 16 bestätigt", status: "Bereit" },
  { day: "24", month: "Okt.", title: "Naturcamp für Jugendliche", places: "8 / 10 Plätze", status: "Bereit" },
] as const;

export const internalDemoDeployments: InternalDeploymentSummary[] = [
  { slug: "quartierskueche", title: "Quartiersküche unterstützen", period: "12.–16.10.", places: "12 / 16", status: "Veröffentlicht" },
  { slug: "naturcamp", title: "Naturcamp für Jugendliche", period: "24.–28.10.", places: "8 / 10", status: "Veröffentlicht" },
  { slug: "kulturfest", title: "Kulturfest barrierefrei", period: "07.–09.11.", places: "4 / 14", status: "Entwurf" },
  { slug: "winterhilfe", title: "Winterhilfe Logistik", period: "18.–20.11.", places: "0 / 16", status: "Veröffentlicht" },
];

export const internalDemoDeploymentDetails: Readonly<Record<string, InternalDeploymentDetail | undefined>> = {
  quartierskueche: {
    description: "Gemeinsam Mahlzeiten vorbereiten und ausgeben.",
    location: "Berlin-Neukölln",
    period: "12.–16. Okt. 2026",
    participants: "12 von 16 bestätigt",
    openApplications: "4 · Demoangabe",
    requirements: "3 · Demoangabe",
    documents: "4 / 4 vollständig · Demo",
    tasks: "3 offen · Demo",
    communication: "3 · Demoangabe",
    payment: "Kostenfrei · Figma-Demo",
  },
} as const;

export function getInternalDemoDeployment(slug: string) {
  return internalDemoDeployments.find((deployment) => deployment.slug === slug);
}

export const internalDemoStatusCounts = [
  { label: "Alle", count: "34" },
  { label: "Entwurf", count: "5" },
  { label: "Veröffentlicht", count: "12" },
  { label: "In Durchführung", count: "4" },
  { label: "Abgeschlossen", count: "13" },
] as const;

export const internalDemoAttentionItems = [
  { count: "3", label: "Teilnehmer prüfen" },
  { count: "2", label: "Dokumente freigeben" },
  { count: "1", label: "Einsatz 05.10. absichern" },
  { count: "2", label: "Rückfragen beantworten" },
] as const;
