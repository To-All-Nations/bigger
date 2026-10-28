export type InternalDemoDocument = {
  id: string;
  fileName: string;
  assignedTo: string;
  received: string;
  category: string;
  status: "In Prüfung" | "Neu" | "Freigegeben" | "Rückfrage";
};

// Display-only examples based on Flow 04 / Screen 10. No files are present.
export const internalDemoDocuments: InternalDemoDocument[] = [
  { id: "doc-a", fileName: "beispiel-nachweis-a.pdf", assignedTo: "Teilnehmer A · Demo", received: "Heute, 08:42 · Demo", category: "Nachweis", status: "In Prüfung" },
  { id: "doc-b", fileName: "beispiel-qualifikation-b.pdf", assignedTo: "Teilnehmer B · Demo", received: "Heute, 08:16 · Demo", category: "Qualifikation", status: "Neu" },
  { id: "doc-c", fileName: "beispiel-vereinbarung.pdf", assignedTo: "BIGGER · Demo", received: "Gestern · Demo", category: "Vertrag", status: "Freigegeben" },
  { id: "doc-d", fileName: "beispiel-identitaet-c.pdf", assignedTo: "Teilnehmer C · Demo", received: "Gestern · Demo", category: "Identität", status: "Rückfrage" },
];

export const internalDocumentDemoMetrics = [
  { label: "Eingang heute", value: "14", note: "9 noch ungeprüft" },
  { label: "Läuft ab", value: "7", note: "in den nächsten 30 Tagen" },
  { label: "Speicher", value: "68 %", note: "4,1 von 6 GB" },
] as const;
