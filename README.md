# BIGGER V1

Lokales Next.js-Grundgerüst für die BIGGER-V1-Flows. Es enthält Seitenstruktur und visuelle Platzhalter, aber noch keine produktiven Geschäftsregeln, Daten oder Konten.

## Lokal starten

Voraussetzungen: Node.js 20.9 oder neuer und pnpm. Dieses Repository ist mit pnpm 11 erstellt; `pnpm-lock.yaml` ist eingecheckt.

```bash
pnpm install
pnpm dev
```

Die App ist anschließend unter [http://localhost:3000](http://localhost:3000) erreichbar. Prüfungen:

```bash
pnpm lint
pnpm build
```

Für Supabase lokale Platzhalterdatei erstellen:

```bash
cp .env.example .env.local
```

Die Werte erst eintragen, wenn die konkrete BIGGER-Zielressource bestätigt ist. Derzeit ist kein Git-Remote, Vercel-Projekt oder Supabase-Projekt verbunden. Es gibt keine produktive Konfiguration.

## Projektstruktur

```text
src/
  app/
    page.tsx                      öffentliche Startseite
    einsaetze/                    öffentliche Suche und Einsatzdetails
    anmeldung/[slug]/             mehrstufige Anmeldung (UI-Skelett)
    portal/                       Teilnehmerportal
    intern/                       interne Einsatzverwaltung
    administration/               systemweite Administration
    error.tsx, loading.tsx, not-found.tsx
  components/                     gemeinsame UI und Navigationsrahmen
  lib/supabase/                   Browser- und Server-Client-Factory
supabase/migrations/              reservierter Ort für versionierte Migrationen
```

## Flows und Gestaltungsstand

Der [Figma-Entwurf](https://www.figma.com/design/I3Ddw9PxZvECuqAFyMJouc/BIGGER-%E2%80%93-V1-Produktdesign?node-id=0-1) und die Loop-Unterlage „BIGGER – Projektgrundlage“ wurden im Arbeitskontext geprüft. Die sichtbaren Einsatzwahl- und Anmeldungsansichten zeigen eine helle warme Fläche, dunkelrote Bereichsüberschriften, kompakte Einsatzkarten und einen klaren Ablauf von Einsatzübersicht über Einsatzdetail zur Anmeldung. Die aktuelle Figma-QA führt Flow 4 und Flow 6 zusammen: Flow 4 bekommt Kommunikation und eine gemeinsame Verwaltungsnavigation; Teilnehmerprofile erhalten Chatverlauf, Nachrichtenfeld und Senden-Aktion. Flow 6 bleibt die Admin-Erweiterung mit „Administration“ als zusätzlichem Menüpunkt. Der Versand ist als Gestaltung dargestellt, die WhatsApp-Anbindung ist noch offen.

Die Seitenstruktur und das vorläufige Farbsystem greifen diese Richtung auf. Die gezeigten Stockfotos und der vollständige Brand-/Typografie-Token-Satz aus Figma sind noch nicht exportiert und werden daher nicht als vermeintlich exakte Assets ausgegeben.

### Umgesetzter öffentlicher Flow: Einsatzübersicht → Einsatzdetail

`/einsaetze` und `/einsaetze/[slug]` bilden den öffentlichen Flow 02 mit zwei lokalen, ausdrücklich als Demo gekennzeichneten Figma-Beispielen („Quartiersküche unterstützen“ und „Naturcamp für Jugendliche“) ab. Karten und Detailseite zeigen Bildplatzhalter sowie Zeitraum, Ort, Kosten/Beitrag, Anmeldefrist und Kapazität. Die Detailseite gliedert Beschreibung, verpflichtende und optionale Voraussetzungen sowie Dokumente. Jede Karte öffnet ihr passendes Detail; der Rücklink führt zur Übersicht. Unbekannte Slugs zeigen die vorhandene 404-Ansicht. Es gibt keine Filter, Anmeldung, externen Abrufe oder Supabase-Aufrufe.

Die Daten liegen zentral in `src/lib/demo/deployments.ts`, damit eine spätere Datenquelle die UI-Datenform ersetzen kann. Nur Einsatznamen stammen aus dem Figma-Screen; konkrete Einsatzdaten und Inhalte sind dort nicht ausreichend eindeutig übernommen und bleiben daher als „Demoangabe folgt“ bzw. als offene fachliche Platzhalter stehen. Die Figma-Fotos und finalen Markenmittel fehlen lokal; sichtbar sind deshalb ausdrücklich gekennzeichnete, neutrale Bildflächen. Diese Platzhalter sind keine finalgetreuen Bilder.

| Bereich | Lokaler Stand |
| --- | --- |
| Öffentliche Website | Startseite, Navigation und Einstieg; Gestaltung noch nicht fachlich abgenommen |
| Einsatzsuche | Suchfelder und Kartenplatzhalter; Figma zeigt Einsatzübersicht und veröffentlichte Angebote, Suche ist noch nicht daten-/filtergebunden |
| Einsatzdetails | Detailansicht für Beschreibung, Voraussetzungen, Dokumente, Kapazität, Zeit und Kosten; derzeit Mustertexte ohne Geschäftsregeln |
| Anmeldung | dreistufiger UI-Indikator und Formularschritt „Über dich“; nicht absendend und noch ohne verbindliche Pflichtfelder |
| Teilnehmerportal | Übersicht, Einsätze und Profil als leere Zustände; die endgültige V1-Kontoentscheidung ist offen |
| Interne Verwaltung | Bereicheinsatz und Administration als Navigations-/Statusgerüst, ohne Speicherung oder Berechtigungsprüfung |
| Kommunikation | Figma-QA sieht Verlauf und Composer am Teilnehmerprofil vor; die UI ist noch nicht gebaut, WhatsApp-Umfang ungeklärt |
| Administration | eigener Platzhalter als Admin-Erweiterung, ohne Benutzerverwaltung oder Rollenprüfung |
| Responsive / Fehlerzustände | mobile und Desktop-Layouts, Ladeansicht, globale Fehleransicht und 404-Seite; Figma-Responsive-QA noch ausstehend |

## Technische Entscheidungen

- Next.js App Router, TypeScript, React und pnpm.
- CSS Custom Properties als zentrale vorläufige Design-Tokens; keine zusätzliche UI-Bibliothek.
- Supabase-Client-Factory mit `@supabase/ssr`; öffentliche URL und Publishable Key kommen aus der Umgebung. Es gibt noch keine Authentifizierungs- oder Autorisierungslogik.
- `supabase/migrations/` ist vorbereitet, enthält aber bewusst noch keine SQL-Migration.
- Git bleibt auf dem vorhandenen lokalen Branch. Es wurden weder Remote noch Deployment eingerichtet.
- BIGGER-Unterlagen ordnen GitHub Quellcode/Versionshistorie, Vercel Hosting/Preview- und Produktiv-Deployment sowie Supabase PostgreSQL/Auth/Storage/Berechtigungen/Backend zu. Diese Zuordnung ist fachliche Toolplanung, keine bestätigte konkrete Cloud-Projekt-ID.

## Offene fachliche und technische Entscheidungen

Vor dem nächsten fachlichen Umsetzungsschritt müssen die offenen Punkte aus „01 – Offene Entscheidungen“ und der Figma-QA abgestimmt werden. Konkret fehlen:

- Verbindliche Komponenten, Typografie, Farbwerte, Assets und responsive Breakpoints aus Figma.
- Vollständige Flows und Validierungs-/Fehlerzustände für Suche, Anmeldung, Teilnehmerportal, interne Verwaltung, Teilnehmerkommunikation und Administration.
- Verbindliche Pflichtfelder pro Anmeldung und Einsatz, Bestätigungs-/Absagelogik, Gruppen-/Familienanmeldung, Benachrichtigungen und Statusübergänge.
- Login-Verfahren, Rollenmodell und Berechtigungen.
- Fachregeln zu Altersgrenzen, Warteliste, Zahlungen, Stornierungen und Dokumentaufbewahrung.
- Umfang und technische Freigabe der WhatsApp-Anbindung sowie Chat-Nachrichtenversand.
- Regeln für nicht öffentliche Einsätze/private Links, Anmeldefristen und den Jahreskalender der Einsätze.
- BIGGER-eigene Supabase-Projektidentität, Schema und RLS-/Zugriffsmodell.
- Exakter GitHub- und Vercel-Zielname samt ID, falls diese später verbunden werden sollen.
- Zuständige technische Verantwortung und Freigaberegel für produktive Änderungen.

Für die Umsetzung wurden keine dieser Regeln angenommen. Beispielinhalte dienen nur der Visualisierung.
