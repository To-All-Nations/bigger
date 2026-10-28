import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ApplicationDemo } from "@/components/application-demo";
import { demoDeploymentRepository } from "@/lib/deployments/demo-repository";

export const metadata: Metadata = { title: "Anmeldung · BIGGER-Demo" };

export async function generateStaticParams() {
  const deployments = await demoDeploymentRepository.listPublicDeployments();
  return deployments.map(({ slug }) => ({ slug }));
}

export default function AnmeldungPage({ params }: PageProps<"/anmeldung/[slug]">) {
  return <Suspense fallback={<main className="page-main"><div className="wrap loading-state">Anmeldedemo wird geladen …</div></main>}><AnmeldungContent params={params} /></Suspense>;
}

async function AnmeldungContent({ params }: { params: PageProps<"/anmeldung/[slug]">["params"] }) {
  const { slug } = await params;
  const deployment = await demoDeploymentRepository.findPublicDeployment(slug);
  if (!deployment) notFound();

  return <ApplicationDemo deployment={deployment} />;
}
