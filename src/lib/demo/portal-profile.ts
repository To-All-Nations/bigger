export const portalDemoProfile = {
  firstName: "Teilnehmer",
  lastName: "A",
  email: "teilnehmer.a@example.invalid",
  phone: "+49 000 0000000",
  street: "Beispielweg 1",
  postalCode: "00000",
  city: "Demoort",
  initials: "TA",
} as const;

export const portalDemoEmergencyContact = {
  name: "Nicht hinterlegt · Demo",
  relationship: "Nicht hinterlegt · Demo",
  phone: "Nicht hinterlegt · Demo",
} as const;

export const portalProfilePrivacyPlaceholder = {
  heading: "Datenschutz · offene Figma-Frage",
  retention: "Welche Profildaten dürfen nach einer Teilnahmebestätigung gespeichert werden?",
  access: "Zugriffsregel noch festzulegen.",
} as const;
