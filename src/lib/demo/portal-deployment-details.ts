export type PortalDemoRequirement = {
  id: string;
  title: string;
  note: string;
  status: "Offen";
};

export type PortalDemoDocument = {
  id: string;
  title: string;
  status: "Geprüft";
};

export type PortalDemoDocumentGroup = {
  id: string;
  title: string;
  summary: string;
  documents: PortalDemoDocument[];
};

export type PortalDemoDeploymentDetail = {
  subtitle: string;
  placeNote: string;
  documentSummary: string;
  requirements: PortalDemoRequirement[];
  documentGroups: PortalDemoDocumentGroup[];
  confirmationNote: string;
  nextStepNote: string;
};

// Only the first deployment has detail content in Flow 05 / Screen 03.
// These labels and statuses are static Figma samples, not applied rules.
export const portalDemoDeploymentDetails: Partial<Record<string, PortalDemoDeploymentDetail>> = {
  "quartierskueche-unterstuetzen": {
    subtitle: "Einsatzdetails, Unterlagen und organisatorische Informationen auf einen Blick.",
    placeNote: "Küche & Ausgabe · Figma-Demo",
    documentSummary: "Alle 3 zugeordneten Nachweise sind geprüft. Deine Vorbereitung ist noch offen.",
    requirements: [
      { id: "requirement-contact", title: "Notfallkontakt ergänzen", note: "Persönliche Daten · ca. 2 Min. · Figma-Demo", status: "Offen" },
      { id: "requirement-introduction", title: "Einführung ansehen und bestätigen", note: "Vorbereitung · Figma-Demo", status: "Offen" },
    ],
    documentGroups: [
      { id: "general-documents", title: "Allgemeine Nachweise", summary: "2 von 2 geprüft · Figma-Demo", documents: [
        { id: "identity", title: "Personalausweis", status: "Geprüft" },
        { id: "first-aid", title: "Erste-Hilfe-Nachweis", status: "Geprüft" },
      ] },
      { id: "deployment-documents", title: "Einsatzbezogene Dokumente", summary: "1 von 1 geprüft · Figma-Demo", documents: [
        { id: "privacy-consent", title: "Datenschutz-Einwilligung", status: "Geprüft" },
      ] },
    ],
    confirmationNote: "Statischer Bestätigungsbereich aus dem Figma-Entwurf · hier wird keine Teilnahme bestätigt oder reserviert.",
    nextStepNote: "Platzhalter aus dem Figma-Entwurf · keine Aktion oder Statusregel umgesetzt.",
  },
};
