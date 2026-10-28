import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = { title: { default: "BIGGER – Finde deinen Einsatz", template: "%s · BIGGER" }, description: "Entdecke Einsatzmöglichkeiten und finde deinen nächsten Schritt mit BIGGER." };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="de"><body><SiteHeader />{children}<footer className="site-footer"><div className="wrap footer-inner"><Link href="/" className="brand"><span className="brand-mark">B</span><span>BIGGER<span className="brand-dot">.</span></span></Link><p>Glaube praktisch leben. Gemeinsam unterwegs.</p><div><Link href="/einsaetze">Einsätze</Link><Link href="/portal">Teilnehmerportal</Link></div><small>© BIGGER · V1-Grundgerüst</small></div></footer></body></html>;
}
