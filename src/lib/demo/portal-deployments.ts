export type PortalDemoDeploymentStatus = "Bestätigt" | "Vorgemerkt" | "Abgeschlossen";

export type PortalDemoDeployment = {
  id: string;
  title: string;
  period: string;
  location: string;
  status: PortalDemoDeploymentStatus;
  preparation: string;
  portalDetailSlug: string;
};

// Static, anonymized Figma examples. These values do not encode business rules.
export const portalDemoDeployments: PortalDemoDeployment[] = [
  { id: "portal-deployment-a", title: "Quartiersküche unterstützen", period: "12.–16.10.26", location: "Berlin", status: "Bestätigt", preparation: "Geprüft · 2 Aufgaben offen", portalDetailSlug: "quartierskueche-unterstuetzen" },
  { id: "portal-deployment-b", title: "Naturcamp für Jugendliche", period: "24.–28.10.26", location: "Brandenburg", status: "Vorgemerkt", preparation: "Anforderungen in Details", portalDetailSlug: "naturcamp-fuer-jugendliche" },
  { id: "portal-deployment-c", title: "Nachbarschaftsfest begleiten", period: "14.06.26", location: "Potsdam", status: "Abgeschlossen", preparation: "Abgeschlossen", portalDetailSlug: "nachbarschaftsfest-begleiten" },
  { id: "portal-deployment-d", title: "Spendenlager sortieren", period: "02.–03.04.26", location: "Berlin", status: "Abgeschlossen", preparation: "Abgeschlossen", portalDetailSlug: "spendenlager-sortieren" },
];

export const portalDemoDeploymentTabs = [
  { label: "Alle", count: "4" },
  { label: "Aktuell", count: "1" },
  { label: "Vorgemerkt", count: "1" },
  { label: "Abgeschlossen", count: "2" },
] as const;

export const portalDemoHistory = { year: "2026 · Demo", total: "72 Stunden", target: "von 100 h · Figma-Muster" } as const;
