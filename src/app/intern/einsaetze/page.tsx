import type { Metadata } from "next";
import { PortalShell } from "@/components/portal-shell";
import { Eyebrow, StatusMessage } from "@/components/ui";
export const metadata: Metadata = { title: "Einsatzverwaltung" };
export default function EinsatzverwaltungPage() { return <main className="page-main workspace-page"><PortalShell label="Interne Verwaltung"><Eyebrow>Interner Bereich</Eyebrow><h1>Einsatzverwaltung</h1><StatusMessage title="Verwaltung ohne Datenquelle" text="Bearbeitungsfelder und Freigabeprozesse werden nach Klärung der Einsatzdaten modelliert." /></PortalShell></main>; }
