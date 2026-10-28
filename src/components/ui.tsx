import type { ReactNode } from "react";
import Link from "next/link";

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function SectionTitle({ children }: { children: ReactNode }) { return <h2 className="section-title">{children}</h2>; }
export function Surface({ children, className = "" }: { children: ReactNode; className?: string }) { return <article className={`surface ${className}`}>{children}</article>; }
export function ButtonLink({ children, href, variant = "primary" }: { children: ReactNode; href: string; variant?: "primary" | "light" }) { return <Link className={`button button-${variant}`} href={href}>{children}</Link>; }
export function StatusMessage({ title, text }: { title: string; text: string }) { return <div className="status-message" role="status"><strong>{title}</strong><p>{text}</p></div>; }
