import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "7u8z6e4m", // Find this at manage.sanity.io or in your Sanity studio’s `sanity.json`.
  dataset: "production",
  apiVersion: "2021-03-25", // Use the current date to ensure you're using the latest features.
  useCdn: true,
});
