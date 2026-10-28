import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Eyebrow, StatusMessage } from "@/components/ui";
export const metadata: Metadata = { title: "Administration" };
export default function AdministrationPage() { return <main className="page-main"><section className="wrap admin-page"><Eyebrow>Systembereich</Eyebrow><h1><ShieldCheck size={30} /> Administration</h1><p className="workspace-lead">Technischer Platzhalter. Adminzugriff und Berechtigungen sind noch nicht aktiviert.</p><StatusMessage title="Noch nicht verbunden" text="Keine Rollenprüfung, Kontenverwaltung oder Systemänderung ist in diesem Grundgerüst aktiv." /></section></main>; }
