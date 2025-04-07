import OpenAI from "openai";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripHtml(html: string) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

export const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
