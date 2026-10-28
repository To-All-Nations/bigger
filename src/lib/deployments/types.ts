/**
 * UI/demo view models for the deployment flows. These types describe what the
 * current demo screens render; they are not an approved database schema.
 */
export type DemoDeployment = {
  slug: string;
  title: string;
  summary: string;
  location: string;
  period: string;
  contribution: string;
  registrationDeadline: string;
  capacity: string;
  description: string;
  requiredConditions: string[];
  optionalConditions: string[];
  documents: string[];
};

export type InternalDeploymentStatus = "Veröffentlicht" | "Entwurf" | "In Durchführung" | "Abgeschlossen";

export type InternalDeploymentSummary = {
  slug: string;
  title: string;
  period: string;
  places: string;
  status: InternalDeploymentStatus;
};

export type InternalDeploymentDetail = Partial<{
  description: string;
  location: string;
  period: string;
  participants: string;
  openApplications: string;
  requirements: string;
  documents: string;
  tasks: string;
  communication: string;
  payment: string;
}>;

export type InternalDeploymentRecord = {
  deployment: InternalDeploymentSummary;
  details?: InternalDeploymentDetail;
};

export interface DeploymentRepository {
  listPublicDeployments(): Promise<readonly DemoDeployment[]>;
  findPublicDeployment(slug: string): Promise<DemoDeployment | undefined>;
  listInternalDeployments(): Promise<readonly InternalDeploymentSummary[]>;
  findInternalDeployment(slug: string): Promise<InternalDeploymentRecord | undefined>;
}
