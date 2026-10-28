import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText, Users } from "lucide-react";
import { PortalShell } from "@/components/portal-shell";
import { Eyebrow, Surface } from "@/components/ui";
export const metadata: Metadata = { title: "Teilnehmerportal" };
export default function PortalPage() { return <main className="page-main workspace-page"><PortalShell><Eyebrow>Dein BIGGER-Bereich</Eyebrow><h1>Willkommen im Portal.</h1><p className="workspace-lead">Hier findest du künftig die Informationen zu deinen Einsätzen und deinem Profil.</p><div className="workspace-cards"><Surface><span className="feature-icon"><Users size={20} /></span><h2>Meine Einsätze</h2><p>Deine Einsatzübersicht und nächste Schritte an einem Ort.</p><Link className="card-link" href="/portal/einsaetze">Zur Übersicht <ArrowUpRight size={16} /></Link></Surface><Surface><span className="feature-icon"><FileText size={20} /></span><h2>Profil & Angaben</h2><p>Persönliche Angaben und benötigte Informationen.</p><Link className="card-link" href="/portal/profil">Profil öffnen <ArrowUpRight size={16} /></Link></Surface></div></PortalShell></main>; }
