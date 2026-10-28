import { demoDeployments } from "@/lib/demo/deployments";
import { internalDemoDeploymentDetails, internalDemoDeployments } from "@/lib/demo/internal-management";
import type { DeploymentRepository, InternalDeploymentDetail, InternalDeploymentRecord } from "@/lib/deployments/types";

const internalDetailsBySlug: Readonly<Record<string, InternalDeploymentDetail | undefined>> = internalDemoDeploymentDetails;

/** Local-only data source. Replaceable by a future approved data adapter. */
export const demoDeploymentRepository: DeploymentRepository = {
  async listPublicDeployments() {
    return demoDeployments;
  },

  async findPublicDeployment(slug) {
    return demoDeployments.find((deployment) => deployment.slug === slug);
  },

  async listInternalDeployments() {
    return internalDemoDeployments;
  },

  async findInternalDeployment(slug): Promise<InternalDeploymentRecord | undefined> {
    const deployment = internalDemoDeployments.find((item) => item.slug === slug);
    if (!deployment) return undefined;

    return {
      deployment,
      details: internalDetailsBySlug[slug],
    };
  },
};
