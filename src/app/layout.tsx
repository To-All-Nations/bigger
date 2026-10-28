import type { Metadata } from "next";
import { Suspense } from "react";
import { PublicSiteChrome } from "@/components/public-site-chrome";
import "./globals.css";

export const metadata: Metadata = { title: { default: "BIGGER – Finde deinen Einsatz", template: "%s · BIGGER" }, description: "Entdecke Einsatzmöglichkeiten und finde deinen nächsten Schritt mit BIGGER." };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="de"><body><Suspense fallback={null}><PublicSiteChrome>{children}</PublicSiteChrome></Suspense></body></html>;
}
