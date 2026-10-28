import type { Metadata } from "next";
import { PortalShell } from "@/components/portal-shell";
import { Eyebrow, StatusMessage } from "@/components/ui";
export const metadata: Metadata = { title: "Meine Einsätze" };
export default function PortalEinsaetzePage() { return <main className="page-main workspace-page"><PortalShell><Eyebrow>Teilnehmerportal</Eyebrow><h1>Meine Einsätze</h1><StatusMessage title="Noch keine Einsatzdaten" text="Sobald Datenquelle und Portalprozess feststehen, erscheinen hier deine Einsätze." /></PortalShell></main>; }
