import Link from "next/link";
import { ButtonLink, Eyebrow } from "@/components/ui";
export default function NotFound() { return <main className="empty-state wrap"><Eyebrow>404 · Seite nicht gefunden</Eyebrow><h1>Hier ist noch kein Weg.</h1><p>Die Seite existiert nicht oder wurde verschoben.</p><ButtonLink href="/">Zur Startseite</ButtonLink><Link className="text-link" href="/einsaetze">Einsätze ansehen</Link></main>; }
