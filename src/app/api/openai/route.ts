import { client } from "@/lib/utils";

export async function POST(req: Request) {
  const { prompt, action, currentContent } = await req.json();

  // if (!prompt) return new Response("Prompt is required.", { status: 400 });

  // console.log("PROMPT: ", prompt);

  let fullPrompt = prompt;

  // console.log("CURRENT CONTENT: ", currentContent);

  if (action === "continue") {
    fullPrompt = `Continue writing the following content: \n\n${currentContent}`;
  } else if (action === "lengthen") {
    fullPrompt = `Make the following content longer and more detailed:\n\n${currentContent}`;
  } else if (action === "shorten") {
    fullPrompt = `Make the following content more concise:\n\n${currentContent}`;
  }

  if (!fullPrompt) return new Response("Prompt is required.", { status: 400 });

  const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: fullPrompt,
    instructions:
      "Format the response in HTML with headings, paragraphs, and styled tags where appropriate. The response does not need to have <html> and <head> tag.",
  });

  if (!response) return new Response("Cannot call to OpenAI.", { status: 401 });

  // console.log("RESPONSE: ", response);

  return new Response(JSON.stringify(response), { status: 200 });
}
