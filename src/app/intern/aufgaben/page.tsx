import type { Metadata } from "next";
import { Search } from "lucide-react";
import { InternalShell } from "@/components/internal-shell";
import { internalDemoTaskGroups } from "@/lib/demo/internal-tasks";

export const metadata: Metadata = { title: "Aufgaben · Verwaltung" };

export default function AufgabenPage() {
  return (
    <InternalShell active="tasks">
      <main className="internal-tasks-page">
        <div className="internal-list-heading internal-task-heading">
          <div><span className="internal-task-eyebrow">Arbeitsorganisation · Demo</span><h1>Aufgaben</h1><p>Teamweite To-dos mit angezeigter Zuständigkeit und Frist.</p></div>
          <button className="button button-primary internal-disabled-action" disabled type="button">Aufgabe erstellen</button>
        </div>
        <p className="internal-demo-notice">Schreibgeschützte Demo · Lokale Figma-Beispiele; keine echten Aufgaben oder Fristen. Zuständigkeit, Filter und Aktionen sind nicht aktiv.</p>

        <section className="internal-task-filters" aria-label="Aufgabenfilter · Demo, nicht aktiv">
          <label className="internal-task-search"><span>Suche</span><span><Search size={14} aria-hidden="true" /><input aria-label="Aufgabe durchsuchen · nicht aktiv" disabled placeholder="Aufgabe durchsuchen" /></span></label>
          <label><span>Zuständig</span><select aria-label="Zuständigkeit · nicht aktiv" disabled><option>Mein Team</option></select></label>
          <label><span>Fälligkeit</span><select aria-label="Fälligkeit · nicht aktiv" disabled><option>Diese Woche</option></select></label>
          <label><span>Priorität</span><select aria-label="Priorität · nicht aktiv" disabled><option>Alle</option></select></label>
        </section>

        <section className="internal-task-board" aria-label="Aufgabenstatus · lokale Demo">
          {internalDemoTaskGroups.map((group) => (
            <section className={`internal-task-column task-column-${group.status === "Offen" ? "open" : group.status === "In Arbeit" ? "progress" : "done"}`} aria-labelledby={`task-column-${group.status.replaceAll(" ", "-")}`} key={group.status}>
              <div className="internal-task-column-heading"><h2 id={`task-column-${group.status.replaceAll(" ", "-")}`}>{group.status}</h2><span>{group.count} · Demo</span></div>
              <div className="internal-task-cards">
                {group.tasks.map((task) => (
                  <article className="internal-task-card" key={task.title}>
                    <h3>{task.title}</h3>
                    <p>{task.detail} · Demo</p>
                    <span className={`internal-task-tag ${group.status === "Erledigt" ? "is-done" : ""}`}>{task.tag}</span>
                  </article>
                ))}
                <p className="internal-task-sample-note">3 Beispielkarten in dieser Statusgruppe</p>
              </div>
            </section>
          ))}
        </section>
      </main>
    </InternalShell>
  );
}
