export type DemoParticipantStatus = "In Prüfung" | "Eingegangen" | "Geprüft";

export type InternalDemoParticipant = {
  slug: string;
  name: string;
  initials: string;
  id: string;
  deployment: string;
  registration: DemoParticipantStatus;
  documents: string;
  insurance: string;
  payment: string;
  confirmation: string;
  attention: string;
  attentionTime: string;
  registrationId?: string;
  profile?: {
    birthYear: string;
    language: string;
    email: string;
    region: string;
    profileCompletion: string;
    registrationStatus: string;
    documentStatus: string;
    confirmationStatus: string;
    paymentStatus: string;
  };
};

export const internalParticipantMetrics = [
  { label: "Alle", value: "48", note: "aktuelle Anmeldungen" },
  { label: "Handlungsbedarf", value: "9", note: "3 heute fällig", emphasis: "attention" },
  { label: "Dokumentprüfung", value: "6", note: "Nachweise offen" },
  { label: "Zahlung offen", value: "4", note: "gesamt 100 €" },
  { label: "Bestätigt", value: "29", note: "vollständig" },
] as const;

export const internalDemoParticipants: InternalDemoParticipant[] = [
  {
    slug: "teilnehmer-a",
    name: "Teilnehmer A",
    initials: "TA",
    id: "2048",
    registrationId: "AN-2026-118",
    deployment: "Quartiersküche unterstützen",
    registration: "In Prüfung",
    documents: "In Prüfung",
    insurance: "In Prüfung",
    payment: "Kostenfrei",
    confirmation: "Ausstehend",
    attention: "Dokument prüfen",
    attentionTime: "Heute · 14:00",
    profile: {
      birthYear: "1996",
      language: "Deutsch",
      email: "teilnehmer.a@beispiel.invalid",
      region: "Berlin",
      profileCompletion: "82 %",
      registrationStatus: "Geprüft",
      documentStatus: "1 in Prüfung",
      confirmationStatus: "Gesperrt",
      paymentStatus: "Kostenfrei",
    },
  },
  {
    slug: "teilnehmer-b",
    name: "Teilnehmer B",
    initials: "TB",
    id: "2047",
    deployment: "Naturcamp für Jugendliche",
    registration: "Eingegangen",
    documents: "Vollständig",
    insurance: "Bestätigt",
    payment: "Offen · 25 €",
    confirmation: "Ausstehend",
    attention: "Zahlung erinnern",
    attentionTime: "Heute · 18:00",
  },
  {
    slug: "teilnehmer-c",
    name: "Teilnehmer C",
    initials: "TC",
    id: "2049",
    deployment: "Quartiersküche unterstützen",
    registration: "Geprüft",
    documents: "Vollständig",
    insurance: "Bestätigt",
    payment: "Kostenfrei",
    confirmation: "Versendet",
    attention: "Rückmeldung fehlt",
    attentionTime: "Morgen",
  },
];

export function getInternalDemoParticipant(slug: string) {
  return internalDemoParticipants.find((participant) => participant.slug === slug);
}
