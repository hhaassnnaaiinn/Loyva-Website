import { Resend } from "resend";
import type { APIRoute } from "astro";

export const prerender = false; // Disable prerendering for API routes

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Ensure request content-type is JSON
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid Content-Type. Expected application/json." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await request.json(); // Parse JSON body
    const { fullName, email, company, message } = body;

    if (!fullName || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await resend.emails.send({
      from: "contact@loyva.io", // Replace with your verified domain
      to: ["support@loyva.io"], // Replace with your email
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!", data: response }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error sending email", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
