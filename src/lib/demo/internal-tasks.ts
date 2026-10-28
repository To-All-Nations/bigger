export type InternalTaskGroup = "Offen" | "In Arbeit" | "Erledigt";

export const internalDemoTaskGroups: Array<{
  status: InternalTaskGroup;
  count: string;
  tasks: Array<{ title: string; detail: string; tag: string }>;
}> = [
  {
    status: "Offen",
    count: "9",
    tasks: [
      { title: "Teilnehmerunterlagen prüfen", detail: "Heute · Hoch", tag: "Intern" },
      { title: "BIGGER-Briefing abstimmen", detail: "Heute · Mittel", tag: "Intern" },
      { title: "Einsatzplan finalisieren", detail: "Mo · Hoch", tag: "Intern" },
    ],
  },
  {
    status: "In Arbeit",
    count: "5",
    tasks: [
      { title: "Führungszeugnisse freigeben", detail: "Demo-Zuständigkeit · 3 Fälle", tag: "Intern" },
      { title: "Willkommensmail überarbeiten", detail: "Demo-Zuständigkeit · Morgen", tag: "Intern" },
      { title: "Reisebuchung klären", detail: "Demo-Zuständigkeit · Fr", tag: "Intern" },
    ],
  },
  {
    status: "Erledigt",
    count: "18",
    tasks: [
      { title: "Küchenteam bestätigen", detail: "Heute · 09:24", tag: "Erledigt" },
      { title: "Raumplan versenden", detail: "Gestern · 16:08", tag: "Erledigt" },
      { title: "Teilnehmerliste exportieren", detail: "Gestern · 11:30", tag: "Erledigt" },
    ],
  },
];
