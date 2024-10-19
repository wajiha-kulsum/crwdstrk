// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine clsx and tailwind-merge for utility class merging in TypeScript
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(...inputs));
}
