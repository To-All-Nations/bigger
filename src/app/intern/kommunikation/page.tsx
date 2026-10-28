import type { Metadata } from "next";
import { MessageSquare, Paperclip, Send } from "lucide-react";
import { InternalShell } from "@/components/internal-shell";
import { internalDemoConversations, internalDemoMessages, internalDemoReplyPreview, internalDemoReplyTemplates } from "@/lib/demo/internal-communication";

export const metadata: Metadata = { title: "Kommunikation · Verwaltung" };

export default function KommunikationPage() {
  return (
    <InternalShell active="communication">
      <main className="internal-communication-page">
        <header className="internal-communication-heading">
          <div><span className="internal-communication-eyebrow">WhatsApp-Verwaltung · Demo</span><h1>Zentrale Nachrichtenverwaltung</h1><p>Figma-Darstellung · WhatsApp-Anbindung und Zustellstatus sind offen.</p></div>
          <button className="button button-primary internal-disabled-action" disabled type="button">Neues Gespräch</button>
        </header>
        <p className="internal-demo-notice">Schreibgeschützte Demo · Gespräche und Inhalte sind anonymisierte Platzhalter. Es besteht keine Verbindung zu WhatsApp oder einem anderen Kommunikationsdienst.</p>

        <div className="internal-communication-grid">
          <section className="internal-communication-list" aria-labelledby="communication-list-title">
            <div className="internal-communication-panel-heading"><h2 id="communication-list-title">Gespräche</h2><span>3 · Demo</span></div>
            {internalDemoConversations.map((conversation, index) => <article className={`internal-conversation-row${index === 0 ? " is-selected" : ""}`} key={conversation.id}>
              <span className="internal-conversation-avatar" aria-hidden="true">{index === 2 ? "BT" : `T${index === 0 ? "A" : "B"}`}</span>
              <div><strong>{conversation.participant}</strong><span>{conversation.preview}</span></div>
              <small>{conversation.time}</small>
            </article>)}
            <p className="internal-communication-list-note">Weitere Gesprächsinhalte · Platzhalter</p>
          </section>

          <section className="internal-communication-thread" aria-label="Gesprächsverlauf · Demo">
            <header className="internal-thread-heading">
              <span className="internal-conversation-avatar" aria-hidden="true">TA</span>
              <div><strong>Teilnehmer A · Demo</strong><span>WhatsApp · nicht verbunden</span></div>
              <span className="internal-thread-status">Dokumentenprüfung offen · Figma-Demo</span>
              <span className="internal-thread-status is-attention">Prüfung nötig · Figma-Demo</span>
            </header>
            <div className="internal-message-list">
              {internalDemoMessages.map((message) => <article className={`internal-message${message.sender === "BIGGER-Team" ? " is-team" : ""}`} key={message.id}>
                <span>{message.sender} · Demo</span><p>{message.text}</p><small>{message.time}</small>
              </article>)}
            </div>
            <div className="internal-composer-tabs" aria-label="Composer-Bereiche · nicht aktiv"><span aria-disabled="true">Textbausteine</span><span aria-disabled="true">Datei</span><span aria-disabled="true">Info</span></div>
            <div className="internal-composer" aria-label="Nachrichteneingabe · deaktiviert">
              <input disabled aria-label="Nachricht eingeben · nicht verfügbar" placeholder="Antwort vorbereiten …" />
              <button type="button" disabled aria-label="Datei anhängen · nicht verfügbar"><Paperclip size={15} aria-hidden="true" /></button>
              <button type="button" disabled aria-label="Nachricht senden · nicht verfügbar"><Send size={14} aria-hidden="true" />Senden</button>
            </div>
            <p className="internal-composer-note">Eingabe, Dateianhang und Versand sind deaktiviert.</p>
          </section>

          <aside className="internal-communication-reply" aria-labelledby="reply-title">
            <div className="internal-communication-panel-heading"><h2 id="reply-title">Schnellantwort</h2><span>Demo</span></div>
            <p className="internal-reply-channel">WhatsApp · Figma-Darstellung, nicht verbunden</p>
            <span className="internal-reply-section-label">Textbausteine · Figma-Demo</span>
            <div className="internal-reply-template-list">{internalDemoReplyTemplates.map((template) => <button disabled type="button" key={template}>{template}</button>)}</div>
            <span className="internal-reply-section-label">Vorschau · Demo, nicht verwendbar</span>
            <p className="internal-reply-preview">{internalDemoReplyPreview}</p>
            <div className="internal-attachment-placeholder" aria-label="Dateianhang · nicht verfügbar">
              <Paperclip size={17} aria-hidden="true" /><strong>Datei anhängen</strong><span>In dieser Demo nicht verfügbar</span>
              <button type="button" disabled><MessageSquare size={13} aria-hidden="true" />Datei auswählen · deaktiviert</button>
            </div>
            <button className="internal-reply-use" type="button" disabled>Vorlage nutzen · deaktiviert</button>
          </aside>
        </div>
      </main>
    </InternalShell>
  );
}
