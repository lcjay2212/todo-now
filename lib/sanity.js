import sanityClient from "@sanity/client";

const client = sanityClient({
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-03-25",
});

export default client;
