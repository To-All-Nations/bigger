export type PortalDemoDocumentStatus = "Geprüft" | "In Prüfung";

export type PortalDemoDocumentEntry = {
  id: string;
  fileName: string;
  assignment: string;
  updated: string;
  status: PortalDemoDocumentStatus;
};

// Names, assignments, dates and status values are anonymized display examples from Flow 05 / Screen 05.
// No files exist and these values do not represent active document rules.
export const portalDemoDocuments: PortalDemoDocumentEntry[] = [
  { id: "portal-doc-a", fileName: "beispiel-personalausweis.pdf", assignment: "Allgemein · Demo", updated: "29.09.2026 · Demo", status: "Geprüft" },
  { id: "portal-doc-b", fileName: "beispiel-erste-hilfe.pdf", assignment: "Allgemein · Demo", updated: "18.09.2026 · Demo", status: "Geprüft" },
  { id: "portal-doc-c", fileName: "beispiel-fuehrungszeugnis.pdf", assignment: "Nicht zugeordnet · Demo", updated: "01.10.2026 · Demo", status: "In Prüfung" },
  { id: "portal-doc-d", fileName: "beispiel-einwilligung.pdf", assignment: "Muster-Einsatz · Demo", updated: "02.03.2026 · Demo", status: "Geprüft" },
];

export const portalDemoDocumentMetrics = [
  { label: "Vollständig", value: "3", note: "geprüft · Figma-Demo" },
  { label: "In Prüfung", value: "1", note: "wird bearbeitet · Figma-Demo" },
] as const;

export const portalDemoConsentNote = {
  title: "Einwilligung · Figma-Musterhinweis",
  text: "Im Entwurf altersbezogen als „nur bei 16/17“ dargestellt. Alters- und Einwilligungsregeln sind fachlich offen und werden hier nicht angewendet.",
} as const;
