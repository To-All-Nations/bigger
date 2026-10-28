export type InternalDemoConversation = {
  id: string;
  participant: string;
  preview: string;
  time: string;
  detail: string;
};

export type InternalDemoMessage = {
  id: string;
  sender: "Teilnehmer A" | "BIGGER-Team";
  text: string;
  time: string;
};

// Anonymized, display-only examples based on Flow 04 / Screen 11. No messages are sent or stored.
export const internalDemoConversations: InternalDemoConversation[] = [
  { id: "conversation-a", participant: "Teilnehmer A · Demo", preview: "Beispielnachweis", time: "08:58 · Demo", detail: "Dokumentenprüfung offen · Figma-Demo" },
  { id: "conversation-b", participant: "Teilnehmer B · Demo", preview: "Beispielhinweis", time: "Gestern · Demo", detail: "Keine weiteren Gesprächsdaten · Demo" },
  { id: "conversation-team", participant: "BIGGER-Team · Demo", preview: "Beispielnachricht", time: "Mi. · Demo", detail: "Keine weiteren Gesprächsdaten · Demo" },
];

export const internalDemoMessages: InternalDemoMessage[] = [
  { id: "message-1", sender: "Teilnehmer A", text: "Hallo Team, mein Beispieldokument ist eingegangen. Ist die Prüfung schon abgeschlossen?", time: "08:42 · Demo" },
  { id: "message-2", sender: "BIGGER-Team", text: "Hallo Teilnehmer A, dein Beispieldokument ist eingegangen und wird noch geprüft. Eine Freigabe liegt noch nicht vor.", time: "08:49 · Demo" },
  { id: "message-3", sender: "Teilnehmer A", text: "Danke! Wo kann ich den Beispielstatus sehen?", time: "08:53 · Demo" },
  { id: "message-4", sender: "BIGGER-Team", text: "Der Beispielstatus ist im Teilnehmerportal unter „Dokumente“ angezeigt.", time: "08:58 · Demo" },
];

export const internalDemoReplyTemplates = ["Führungszeugnis", "Eingangsbestätigung", "Startunterlagen"] as const;

export const internalDemoReplyPreview = "Hallo Teilnehmer A, dein Beispieldokument ist eingegangen und wird noch geprüft. Eine Freigabe liegt noch nicht vor.";
