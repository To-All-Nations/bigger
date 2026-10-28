import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export function SiteHeader() {
  return <header className="site-header"><div className="wrap header-inner"><Link href="/" className="brand" aria-label="BIGGER Startseite"><span className="brand-mark">B</span><span>BIGGER<span className="brand-dot">.</span></span></Link><nav className="main-nav" aria-label="Hauptnavigation"><Link href="/einsaetze">Einsätze</Link><Link href="/#so-gehts">Über BIGGER</Link><Link href="/portal">Teilnehmerportal</Link></nav><div className="header-actions"><Link className="header-login" href="/portal">Anmelden</Link><Link className="header-cta" href="/einsaetze">Einsatz finden <ArrowUpRight size={15} /></Link><button className="mobile-menu" aria-label="Menü"><Menu size={22} /></button></div></div></header>;
}
