import { getCollection } from "astro:content";

export async function getPage(slug: string) {
  const pages = await getCollection("pages");
  // Match the page using the file name (slug)
  return pages.find((p) => p.id === slug) || null;
}

export async function GET({ request }: { request: Request }) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  if (!slug) {
    // If the slug is missing, return a 400 error
    return new Response(JSON.stringify({ error: "Missing slug parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  console.log("Fetching page:", slug);
  const page = await getPage(slug);

  if (!page) {
    console.error("Page not found:", slug);
    return new Response(JSON.stringify({ error: "Page not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Return the page data as a JSON response
  return new Response(JSON.stringify(page), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
