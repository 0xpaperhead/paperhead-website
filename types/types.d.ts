export type Project = {
  id: number;
  name: string;
  description: string;
  status: string;
  technology: string[];
  streamDate: string;
  liveUrl: string | null;
  githubUrl: string | null;
  paperheadIntegration?: string;
};