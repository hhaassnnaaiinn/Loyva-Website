import { getCollection } from "astro:content";

export async function getPage(slug: string) {
  const pages = await getCollection("pages");

  // Astro stores the slug as the file name (id)
  return pages.find((p) => p.id === slug) || null;
}
