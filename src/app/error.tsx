"use client";
import { useEffect } from "react";
export default function ErrorPage({ error, retry }: { error: unknown; retry: () => void }) { useEffect(() => { console.error(error); }, [error]); return <main className="empty-state wrap"><p className="eyebrow">Das hat nicht geklappt</p><h1>Wir konnten die Seite nicht laden.</h1><p>Versuche es noch einmal. Falls der Fehler bleibt, ist die Datenanbindung noch nicht eingerichtet.</p><button className="button button-primary" onClick={() => retry()}>Erneut versuchen</button></main>; }
