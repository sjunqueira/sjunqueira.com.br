import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "faheuxp5",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
