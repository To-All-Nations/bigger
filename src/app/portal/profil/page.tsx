import type { Metadata } from "next";
import { PortalShell } from "@/components/portal-shell";
import { Eyebrow, StatusMessage } from "@/components/ui";
export const metadata: Metadata = { title: "Mein Profil" };
export default function PortalProfilPage() { return <main className="page-main workspace-page"><PortalShell><Eyebrow>Teilnehmerportal</Eyebrow><h1>Mein Profil</h1><StatusMessage title="Profilbereich in Vorbereitung" text="Welche Angaben Teilnehmende verwalten können, wird noch fachlich definiert." /></PortalShell></main>; }
