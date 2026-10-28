# BIGGER V1: Entscheidungsgrundlage für Anmeldung und Teilnehmerdaten

**Status:** offen – alle Empfehlungen in diesem Dokument sind unverbindliche Vorschläge, keine beschlossenen BIGGER-Regeln.
**Zweck:** Fachliche Freigaben vorbereiten, bevor Anmelde- und Teilnehmerdaten produktiv verarbeitet oder Berechtigungen implementiert werden.
**Nicht enthalten:** verbindliche Rechtsbewertung, Schema/Migrationen, Anwendungslogik oder Cloud-Konfiguration.

## Leseschlüssel

- **Blockiert** bedeutet: Der fachliche Teil des jeweiligen Flows oder eine sichere Verarbeitung echter Teilnehmerdaten kann ohne Entscheidung nicht fertig umgesetzt werden.
- **Unabhängig startbar** benennt Arbeiten, die mit Platzhaltern, Mock-Daten oder rein visuellen Zuständen keine Regel vorwegnehmen.
- Jede **Empfehlung** ist ein Diskussionsvorschlag und muss von BIGGER bestätigt oder verworfen werden.

## Quellenstand: bestätigt, offen und noch abzugleichen

### In den lokalen Projektunterlagen bestätigt

Die folgenden Punkte sind **im lokalen README bzw. in der Migrationsnotiz dokumentiert**. Das ist eine Bestätigung des lokalen Projektstands, kein unabhängiger Vollabgleich mit den Originaldateien:

- **Öffentlicher Weg:** Das README ordnet Flow 02 als Einsatzübersicht und Einsatzdetail ein und beschreibt den Anschluss an die mehrstufige Anmeldung. Die konkreten Geschäftsregeln und Pflichtfelder dieser Anmeldung sind dort ausdrücklich offen.
- **Teilnehmerportal und interne Verwaltung:** Portalbereiche für Übersicht, Einsätze und Profil sind lokal Platzhalter ohne Konten- oder Berechtigungslogik. Das README hält aus der Figma-QA für Flow 4 eine gemeinsame Verwaltungsnavigation sowie Kommunikation am Teilnehmerprofil mit Verlauf, Nachrichtenfeld und Senden-Aktion fest. Die UI/der Versand sind nicht umgesetzt.
- **Administration:** Laut README ergänzt Flow 6 die Navigation um „Administration“. Daraus folgen keine bestätigten Rollen oder Berechtigungen.
- **Kommunikation:** Das README hält den dargestellten Nachrichtenversand als Gestaltung und die WhatsApp-Anbindung als offene Frage fest.
- **Tools und Systemgrenzen:** Das README ordnet GitHub Quellcode/Versionshistorie, Vercel Hosting sowie Preview-/Produktiv-Deployment und Supabase PostgreSQL, Auth, Storage, Berechtigungen und Backend zu. Es bestätigt zugleich, dass keine konkreten Cloud-Projekte verbunden sind. Das sind dokumentierte Toolrollen, keine Freigabe einer Zielressource oder eines produktiven Betriebs.
- **Datenbank:** `supabase/migrations/README.md` bestätigt, dass Schema, Zugriffsregeln, Aufbewahrung und exaktes Supabase-Projekt nicht freigegeben sind; es gibt noch keine Migration.

### Originalquellen und Abgleichgrenze

Die Projektunterlagen verweisen auf die Figma-Datei „BIGGER – V1 Produktdesign“, die Figma-QA und die Loop-Unterlage „01 – Offene Entscheidungen“. In dieser Sitzung waren die Figma-Frames und die Loop-Unterlage nicht direkt zugänglich. Daher ist dies **kein vollständiger Abgleich** der Figma-QA, der Toolanforderungen aus dem Erstgespräch oder sämtlicher Screens. Die Flow-Zuordnung oben gibt nur wieder, was im lokalen README festgehalten ist. Insbesondere werden keine unbekannten Formtexte, Pflichtangaben, Statuswerte, Rollen oder Figma-Interaktionen ergänzt oder als beschlossen ausgegeben. Vor einer Freigabe muss die Original-QA mit den Beteiligten abgeglichen werden.

- [BIGGER V1 Produktdesign in Figma](https://www.figma.com/design/I3Ddw9PxZvECuqAFyMJouc/BIGGER-%E2%80%93-V1-Produktdesign?node-id=0-1)
- Lokale Projektübersicht: `README.md` (Flow-Stand und dokumentierte offene Entscheidungen)
- Lokale Migrationsnotiz: `supabase/migrations/README.md` (Schema, Zugriff und Aufbewahrung nicht freigegeben)

## Entscheidungsfragen

### 1. Login-Verfahren und Teilnehmerkonto

**Offene Frage:** Können Interessierte eine Anmeldung ohne Konto beginnen/absenden, und wann bzw. wie entsteht ein Teilnehmerkonto? Welches Anmeldeverfahren ist für spätere Portalzugriffe vorgesehen?

**Betroffene Flows, Daten und Berechtigungen:** Mehrstufige Anmeldung; Teilnehmerportal (Übersicht, Einsätze, Profil); spätere Kommunikation. Betroffen sind E-Mail bzw. Login-Kennung, Authentifizierungsdaten, Konto- und Anmeldungsverknüpfung sowie der Zugriff einer Person auf ihr eigenes Profil und ihre Anmeldungen.

**Mögliche Optionen:**

- **Konto vor dem Start erforderlich:** klare Identität und direkter Portalzugriff; zusätzliche Hürde und Abbruchrisiko vor einer Anmeldung.
- **Gast-Anmeldung, Konto danach anbieten:** niedrige Einstiegshürde; Zusammenführung von Gastdaten und späterem Konto muss sicher und nachvollziehbar geregelt werden.
- **Passwortloser Zugriff per E-Mail-Link/Code:** kein Passwortmanagement; Abhängigkeit von E-Mail-Zustellung und Entscheidung über Link-/Code-Laufzeit und Wiederverwendung.
- **Passwortkonto:** bekanntes Verfahren; Anforderungen an Passwortschutz, Wiederherstellung und Support kommen hinzu.

**Unverbindlicher Vorschlag:** Zuerst fachlich entscheiden, ob eine Anmeldung ohne Konto möglich ist. Für einen risikoarmen ersten Betrieb könnte eine Gast-Anmeldung mit Kontoanlage oder Portal-Einladung nach einem definierten Ereignis geprüft werden; das Verfahren (Passwort oder passwortlos) bleibt separat freizugeben.

**Blockiert:** Echte Authentifizierung, Kontoanlage/-verknüpfung, Self-Service im Portal sowie Berechtigungsregeln für Teilnehmerdaten.
**Unabhängig startbar:** Anmeldebildschirme mit Demo-Daten, Layout der Login- und Wiederherstellungszustände sowie unverbundene Portal-Prototypen.

### 2. Pflichtfelder und spätere Ergänzungen der Anmeldung

**Offene Frage:** Welche Angaben sind beim ersten Absenden zwingend, welche erst nach einer Zusage oder für einen konkreten Einsatz erforderlich, und welche können freiwillig bleiben? Darf eine Anmeldung als Entwurf gespeichert und später fortgesetzt werden? Ist V1 auf Einzelanmeldungen begrenzt, oder kann eine Person mehrere Teilnehmende (z. B. Familie/Gruppe) anmelden?

**Betroffene Flows, Daten und Berechtigungen:** Anmelde-Flow und Teilnehmerprofil. Mögliche Datenkategorien sind Kontakt- und Identitätsangaben, Erreichbarkeit, einsatzbezogene Antworten, Notfallkontakt sowie später nachgereichte Angaben oder Dokumente. Bei Gruppen-/Familienanmeldungen muss entschieden werden, ob eine Kontaktperson mehrere eigenständige Teilnehmerprofile verwaltet oder ob jede Person separat anmeldet. Festzulegen ist auch, wer Antworten sehen oder ergänzen darf und ob Änderungen nach dem Absenden zulässig sind.

**Mögliche Optionen:**

- **Alle Angaben beim ersten Absenden:** vollständige Prüfung und weniger Nachforderungen; mehr Datenerhebung und höhere Einstiegshürde.
- **Kleiner Erst-Antrag, Ergänzung nach Prüfung/Zusage:** weniger Hürde und Datenminimierung am Einstieg; benötigt einen klaren Folgeprozess mit Fristen und offenen Aufgaben.
- **Pflichtfelder pro Einsatz konfigurierbar:** passt zu unterschiedlichen Anforderungen; benötigt redaktionelle Pflege, Versionierung und verständliche Kennzeichnung im Formular.
- **Ein einheitlicher, fester Pflichtfeldsatz:** einfacher umzusetzen und zu erklären; kann unnötige Daten für einzelne Einsätze erheben oder benötigte Informationen auslassen.
- **Einzelanmeldung je Teilnehmer:in:** klare Zuordnung und Berechtigungsgrenze; bei Familien/Gruppen können wiederholte Eingaben und ein koordinierender Kontakt fehlen.
- **Eine Kontaktperson meldet mehrere Personen an:** weniger wiederholte Eingabe; Vertretungs-/Einwilligungsbefugnis, getrennte Profile und Zugriffsrechte müssen geklärt werden.

**Unverbindlicher Vorschlag:** Nur die zur Kontaktaufnahme und ersten fachlichen Einordnung zwingend nötigen Angaben beim ersten Absenden verlangen; weitere Angaben erst mit benanntem Zweck und Auslöser nachfordern. Für jede Einsatzart soll BIGGER den Pflichtfeldsatz ausdrücklich freigeben. Gruppen-/Familienanmeldung als separate Entscheidung behandeln und nicht aus einer einzelnen Kontakt-E-Mail oder aus Formular-Platzhaltern ableiten.

**Blockiert:** Verbindliche Formularvalidierung, produktive Speicherung, Entwurfs-/Nachreichungsablauf, Gruppen-/Familienanmeldung und finale Datenstruktur.
**Unabhängig startbar:** Mehrstufige Navigation, Feldgruppen und Formularzustände mit ausdrücklich fiktiven Beispielen.

### 3. Altersgrenzen und Ablauf für Minderjährige

**Offene Frage:** Gibt es eine allgemeine oder einsatzspezifische Mindest-/Höchstaltersgrenze? Wie wird das Alter ermittelt, und wann sind Zustimmung und Mitwirkung einer sorgeberechtigten Person erforderlich?

**Betroffene Flows, Daten und Berechtigungen:** Einsatzdetails und Anmeldevalidierung; Teilnehmerkonto; gegebenenfalls eigene Kontaktdaten und Einwilligungen einer sorgeberechtigten Person. Betroffen sind Geburtsdatum oder Altersbestätigung, Zuordnung zur Person, Zugriff auf Minderjährigendaten und ein möglicher Prüf-/Freigabestatus. Welche Daten ausreichen, ist auch datenschutz- und rechtlich zu prüfen.

**Mögliche Optionen:**

- **Feste BIGGER-weite Altersgrenze:** leicht verständlich und einheitlich; kann Anforderungen einzelner Einsätze verfehlen.
- **Grenze pro Einsatz:** flexibel; braucht Verantwortliche und kontrollierte Pflege pro Ausschreibung.
- **Keine Altersabfrage vorab, manuelle Prüfung bei Bedarf:** geringe Datenerhebung am Einstieg; ungeeignet, wenn die Eignung vor einer Anmeldung feststehen muss.
- **Sorgeberechtigtenprozess je nach Altersgruppe:** kann Schutz und Nachweisbarkeit verbessern; erhöht Datenumfang und Prozesskomplexität.

**Unverbindlicher Vorschlag:** Vor Umsetzung pro Einsatz die Altersanforderung sichtbar und strukturiert festlegen lassen. Eine konkrete Altersgrenze oder Einwilligungsform darf nicht aus dem UI abgeleitet werden; den Minderjährigenprozess mit Datenschutz/Kinderschutz-Verantwortlichen freigeben.

**Blockiert:** Altersvalidierung, Erhebung von Geburtsdaten, Minderjährigen-Konten und produktive Zustimmungserfassung.
**Unabhängig startbar:** Neutrale UI-Zustände für „Angabe erforderlich“, „Prüfung erforderlich“ und „nicht fortfahren“, solange diese nicht als echte Entscheidung ausgeführt werden.

### 4. Notwendige Einwilligungen und Bestätigungen

**Offene Frage:** Welche Verarbeitungszwecke brauchen welche Information, Bestätigung oder echte Einwilligung? Was ist für die Anmeldung erforderlich, was freiwillig (z. B. Bild-/Mediennutzung oder zusätzliche Kommunikation), und wie werden Version, Zeitpunkt und Widerruf dokumentiert?

**Betroffene Flows, Daten und Berechtigungen:** Anmeldung, Portalprofil, Uploads, Kommunikation und Administration. Betroffen sind Nachweise zu Datenschutzinformation, Minderjährigen-/Sorgeberechtigtenzustimmung und optionalen Zwecken. Rollen müssen Einsicht und Korrektur begrenzen; Verantwortliche benötigen eine nachvollziehbare Historie. Rechtliche Einordnung und Texte müssen BIGGER fachlich sowie mit zuständiger Datenschutz-/Rechtsberatung prüfen.

**Mögliche Optionen:**

- **Eine pauschale Checkbox für alles:** einfaches Formular; vermischt Zwecke und kann Freiwilligkeit/Nachweisbarkeit unklar machen.
- **Getrennte Bestätigungen nach Zweck:** besser nachvollziehbar; mehr Erklärungsbedarf und Pflege verschiedener Texte/Versionen.
- **Nur erforderliche Informationen bestätigen, freiwillige Zwecke separat:** unterstützt eine klare Wahl; verlangt genaue fachliche und rechtliche Abgrenzung.
- **Einwilligungen erst bei konkretem Anlass einholen:** vermeidet vorsorgliche Abfragen; der jeweilige Folgeprozess muss zuverlässig blockieren, bis ein Nachweis vorliegt.

**Unverbindlicher Vorschlag:** Zwecke trennen, optionale Einwilligungen nicht an die Anmeldung koppeln und für jede aktive Bestätigung Textversion, Zweck und Zeitpunkt festlegen. Keine produktive Checkbox ohne freigegebenen Wortlaut und Prozess.

**Blockiert:** Produktive Checkboxen, Speicherung von Einwilligungsnachweisen, Widerrufsprozess und Verarbeitung der daran gebundenen Daten.
**Unabhängig startbar:** Formular-Layout für getrennte Pflicht-/Wahlzustände mit klar markiertem, nicht absendendem Mustertext.

### 5. Einsatzkapazität, Anmeldeschluss und Warteliste

**Offene Frage:** Wann belegt eine Anmeldung einen Platz? Wie wird die Kapazität berechnet, wann schließt die Anmeldung, und gibt es eine Warteliste mit welcher Reihenfolge und Angebotsfrist?

**Betroffene Flows, Daten und Berechtigungen:** Öffentliche Einsatzübersicht/-details; Anmeldung; Teilnehmerportal; interne Einsatzverwaltung und Kommunikation. Betroffen sind Kapazität, Frist/Zeitzone, Anmeldestatus, Zeitpunkt, Platzreservierung und Wartelistenposition. Festzulegen ist, wer Kapazität und Frist ändern darf und ob Änderungen bestehende Anmeldungen betreffen.

**Mögliche Optionen:**

- **Platz bei Absenden reservieren:** sofortige Rückmeldung; unbeendete oder ungeprüfte Anträge können Plätze blockieren.
- **Platz erst bei manueller Zusage belegen:** flexible Prüfung; Verfügbarkeitsanzeige kann bis zur Entscheidung unverbindlich sein.
- **Warteliste automatisch nach Eingang:** nachvollziehbare Reihenfolge; braucht Gleichstands-, Frist- und Angebotsannahmeregeln.
- **Warteliste manuell verwaltet:** ermöglicht Einzelfallentscheidung; benötigt klare interne Zuständigkeit und Protokollierung.
- **Keine Warteliste in V1:** einfacher Ablauf; nach Erreichen der Kapazität keine standardisierte Nachrückmöglichkeit.

**Unverbindlicher Vorschlag:** Kapazität und Frist pro Einsatz konfigurierbar machen, aber Platz erst bei einem ausdrücklich festgelegten Statuswechsel vergeben. Warteliste erst nach Entscheidung über Reihenfolge, Angebotsfrist, Verfall und Benachrichtigung implementieren.

**Blockiert:** Verfügbarkeits-/Restplatzanzeige, automatisches Schließen, Reservierung, Aufnahme/Nachrücken von der Warteliste.
**Unabhängig startbar:** Anzeige neutraler Kapazitäts-/Fristfelder in Demo-Inhalten und interne UI-Prototypen ohne automatische Entscheidung.

### 6. Dokumentarten, Prüfstatus, Dateigröße und Löschung

**Offene Frage:** Welche Dokumente werden für welche Einsätze und Personen benötigt, welche Dateiformate und Größen sind zulässig, wer prüft sie, welche Status gibt es und wann werden Datei sowie Prüfprotokoll gelöscht?

**Betroffene Flows, Daten und Berechtigungen:** Anmeldung, Teilnehmerportal, interne Prüfung/Administration und Benachrichtigungen. Betroffen sind Dateiinhalt und Metadaten, Person-/Einsatzbezug, Uploadzeit, Prüfstatus, Prüfvermerk und Löschzeitpunkt. Benötigt werden minimale Zugriffsrechte für Upload, Prüfung, Download, Korrektur und Löschung; Dokumente können besonders sensible Inhalte enthalten.

**Mögliche Optionen:**

- **Keine Uploads in V1:** kleiner Daten- und Berechtigungsumfang; Nachweise müssen außerhalb der App bearbeitet werden.
- **Nur eng definierte Formulare/Dokumente:** planbare Prüfung; BIGGER muss jede Dokumentart und den Zweck verbindlich benennen.
- **Allgemeiner Datei-Upload:** flexibel; deutlich mehr Risiko bei Schadsoftware, unangemessenen Inhalten, Speicherzugriff und Aufbewahrung.
- **Prüfung je Upload durch benannte Rolle:** einfacher Statusfluss; Kapazität und Vertretung für Prüfer:innen sind nötig.

**Unverbindlicher Vorschlag:** Vor Upload-Funktion Dokumentarten und Zweck-Löschung-Matrix festlegen. Für eine risikoarme erste Ausbaustufe nur explizit freigegebene Dokumenttypen zulassen; Format-/Größenlimits und Prüfstatus anschließend anhand realer Anforderungen festlegen. Keine medizinischen oder Identitätsdokumente vorsorglich anfordern.

**Blockiert:** Datei-Upload, Storage-Policies, Downloadrechte, Prüfworkflow und Löschautomatisierung.
**Unabhängig startbar:** Platzhalteransichten für „fehlt“, „eingereicht“ und „Rückfrage“, ohne echte Dateien oder persistente Statuswerte.

### 7. Rollen und erlaubte Statuswechsel

**Offene Frage:** Welche benannten Rollen existieren, welche Daten darf jede Rolle sehen/bearbeiten, und wer darf welche Statuswechsel ausführen? Sind Änderungen zu protokollieren oder freizugeben?

**Betroffene Flows, Daten und Berechtigungen:** Teilnehmerportal; interne Verwaltung; Administration; Dokumentprüfung und Kommunikation. Betroffen sind mindestens Zugriff auf eigenes Profil, Anmeldungen und Dokumente sowie Verwaltungszugriffe auf Einsätze und fremde Teilnehmerdaten. Rollen dürfen nicht nur über UI-Ausblendung, sondern müssen serverseitig und auf Datenebene durchgesetzt werden.

**Mögliche Optionen:**

- **Kleine Rollenmenge (Teilnehmer, Einsatzverwaltung, Administration):** leicht zu erklären; kann Aufgaben mit unterschiedlichen Datenschutzbedarfen zusammenfassen.
- **Zusätzliche Fachrollen (z. B. Kommunikation, Dokumentprüfung):** engere Zuständigkeit; mehr Pflege und Abstimmung der Grenzen.
- **Einstatusmodell mit manueller Prüfung:** transparent und kontrollierbar; verlangt eine Zuständigkeit für jeden Übergang.
- **Automatische Übergänge für eindeutige Ereignisse:** weniger manuelle Arbeit; Fehler wirken unmittelbar auf Plätze, Nachrichten und Teilnehmende.

**Unverbindlicher Vorschlag:** Ein Rollen-/Rechtematrix und Statusdiagramm vor Schema oder UI-Aktionen freigeben lassen. Teilnehmer:innen sollten grundsätzlich nur eigene Daten sehen; konkrete Ausnahmen, Verwaltungsrollen und automatische Übergänge müssen ausdrücklich festgelegt werden.

**Blockiert:** Authentifizierung mit echten Rollen, RLS-/Serverberechtigungen und speichernde Verwaltungsaktionen.
**Unabhängig startbar:** Read-only Verwaltungs-Demos, Tabellen-/Detailansichten und nicht ausführbare Statusdarstellungen.

### 8. Zahlung, Stornierung und Erstattung

**Offene Frage:** Sind Einsätze kostenpflichtig oder gibt es Beiträge/Kautionen? Wann wird Zahlung fällig, welche Zahlwege werden genutzt und wie werden Rücktritt, Absage durch BIGGER und Erstattung behandelt?

**Betroffene Flows, Daten und Berechtigungen:** Öffentliche Einsatzdetails; Anmeldung; Teilnehmerportal; Administration; Kommunikation. Betroffen sind Preis/Beitragsart, Zahlungsstatus, Transaktionsreferenz (falls ein Anbieter gewählt wird), Rücktrittsgrund, Stornierungszeitpunkt und Erstattungsstatus. Zahlungsdaten und Aktionen benötigen stark begrenzte Berechtigungen und eine freigegebene Systemgrenze.

**Mögliche Optionen:**

- **Keine Zahlungsabwicklung in V1:** kleinster technischer und organisatorischer Umfang; Gebühren müssten außerhalb der App erklärt/abgewickelt werden.
- **Beitrag nur anzeigen, manuelle Zahlung außerhalb:** schneller startbar; Statusabgleich und Rückfragen bleiben manuell.
- **Integrierter Zahlungsanbieter:** automatisierbare Bestätigung/Erstattung; Gebühren, Verträge, Rückerstattungsregeln und Fehlerbehandlung müssen vorab geklärt werden.
- **Zahlung erst nach Zusage:** kein Geld für nicht angenommene Anmeldungen; Zusage und Zahlungsfrist müssen zusammenpassen.

**Unverbindlicher Vorschlag:** Zahlung und automatisierte Erstattung aus V1 heraushalten, bis BIGGER Beitragshöhe, Fälligkeit, Zahlungsweg und Stornoregeln freigegeben hat. Falls Kosten angezeigt werden, Anzeige und Zahlungsabwicklung klar getrennt halten.

**Blockiert:** Checkout, Zahlungsstatus, automatisierte Zusage nach Zahlung sowie Storno-/Erstattungsaktionen.
**Unabhängig startbar:** neutrale Anzeige eines noch zu bestätigenden Kostenfelds und statische Statusansichten ohne Zahlungsdaten.

### 9. Kommunikationsauslöser und WhatsApp-Abgrenzung

**Offene Frage:** Welche Ereignisse lösen welche Nachricht aus, über welche Kanäle, und ist die in Figma-QA dargestellte Kommunikation ein internes Nachrichtenfach, ein externer Messenger oder beides? Welche Gespräche werden in BIGGER gespeichert?

**Betroffene Flows, Daten und Berechtigungen:** Anmeldung, Teilnehmerprofil/Portal, interne Verwaltung und Administration. README dokumentiert für die Figma-QA an Flow 4 einen Verlauf, Nachrichtenfeld und Senden-Aktion am Teilnehmerprofil; der tatsächliche Versand und WhatsApp-Umfang bleiben offen. Betroffen sind Inhalt, Empfänger, Kanal, Auslöser, Zustellstatus, Verlauf und Zugriff durch Teilnehmende bzw. Mitarbeiter:innen.

**Mögliche Optionen:**

- **Nur E-Mail für Systemereignisse:** etabliert und gut für Quittungen/Status; kein gemeinsamer Gesprächsverlauf.
- **Internes Portal-Postfach:** Nachrichten an einem Teilnehmerprofil nachvollziehbar; benötigt Zugriffsschutz, Benachrichtigungsweg und Aufbewahrungskonzept.
- **WhatsApp als Benachrichtigung, Portal als Akte:** kurze Reichweite/Erinnerung ohne vollständige Fallbearbeitung im Messenger; Einwilligung, Anbieter-/Vorlagenfreigabe und Umgang mit Antworten bleiben nötig.
- **WhatsApp als Gesprächskanal:** vertrauter Dialog; stärkere Anforderungen an Einwilligungen, Identitätszuordnung, Mitarbeiterzugriff, Export/Archivierung und Datenlöschung.
- **Manuelle Kommunikation außerhalb der App:** kein technischer Versand in V1; Status und Verlauf sind im Portal nicht zentral sichtbar.

**Unverbindlicher Vorschlag:** Zuerst Ereignisse und Zweck je Nachricht festlegen (z. B. Eingang, Rückfrage, Entscheidung, fehlendes Dokument, Frist, Wartelistenangebot). Eine Portalnachricht bzw. E-Mail-Benachrichtigung separat von WhatsApp entscheiden. WhatsApp erst nach Freigabe von Kanalzweck, Einwilligung, Antwortverarbeitung und Aufbewahrung anschließen; keine stillschweigende Synchronisierung ganzer Chatverläufe.

**Blockiert:** Automatisierter Versand, persistenter Chatverlauf, WhatsApp-Integration und Benachrichtigungsauslöser.
**Unabhängig startbar:** statische Portal-Chatansicht mit Demo-Nachrichten, Composer ohne Versand sowie Liste möglicher Ereignisse zur fachlichen Abstimmung.

## Reihenfolge für die Freigabe

Diese Reihenfolge reduziert das Risiko, Felder, Zugriffe und Flows später mehrfach umzubauen. Sie ist ein unverbindlicher Arbeitsvorschlag.

1. **Kontomodell und Erst-Anmeldung** (Fragen 1–2): Wer meldet sich an, welche minimalen Angaben sind wann nötig, und wann entsteht Portalzugriff?
2. **Minderjährige und Einwilligungen** (Fragen 3–4): Welche Alters-/Sorgeberechtigtenprozesse und Nachweise sind erforderlich? Vor echten Daten mit zuständigen Datenschutz-/Kinderschutz-Verantwortlichen prüfen.
3. **Rollen, Rechte und Statusmodell** (Frage 7): Erst damit lassen sich serverseitige Berechtigungen und die Zuständigkeit für Entscheidungen sicher ableiten.
4. **Kapazität, Fristen und Warteliste** (Frage 5): Statusmodell und Platzvergabe gemeinsam freigeben, bevor Verfügbarkeit automatisiert wird.
5. **Dokumente und Aufbewahrung** (Frage 6): Dokumentzweck und Löschfristen festlegen, bevor Storage und Upload starten.
6. **Zahlung/Storno** (Frage 8) und **Kommunikation/WhatsApp** (Frage 9): als eigene optionale Ausbauschritte entscheiden; sie müssen nicht den nicht-speichernden Formularprototyp blockieren.

## Arbeitsgrenze bis zur Freigabe

Bis die jeweiligen Fragen beantwortet sind, können Teams visuelle Formulare, responsive Zustände und statische Portal-/Verwaltungsansichten mit fiktiven Daten vorbereiten. Nicht freigegeben sind produktive Pflichtfelder, Authentifizierung, Teilnehmerdatenbank, Dateiablage, Rollen-/Statusaktionen, Benachrichtigungen, Zahlungen oder SQL-Migrationen. Bestehende Platzhalter und Demo-Daten sind keine Fachentscheidung.

## Entscheidungsprotokoll

| Frage | Entscheidung / Link zur Freigabe | Verantwortlich | Datum |
| --- | --- | --- | --- |
| 1. Login und Konto | Offen | Offen | — |
| 2. Anmeldefelder und Ergänzungen | Offen | Offen | — |
| 3. Alter und Minderjährige | Offen | Offen | — |
| 4. Einwilligungen | Offen | Offen | — |
| 5. Kapazität, Frist, Warteliste | Offen | Offen | — |
| 6. Dokumente und Löschung | Offen | Offen | — |
| 7. Rollen und Statuswechsel | Offen | Offen | — |
| 8. Zahlung, Storno, Erstattung | Offen | Offen | — |
| 9. Kommunikation und WhatsApp | Offen | Offen | — |
