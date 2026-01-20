/**
 * Utility functions for the AMM Market application.
 * 
 * @module lib/utils
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names with Tailwind CSS conflict resolution.
 * 
 * @description
 * Merges multiple class name inputs using clsx for conditional classes
 * and tailwind-merge to resolve Tailwind CSS conflicts (e.g., `p-2 p-4` → `p-4`).
 * 
 * @param inputs - Class values to merge (strings, objects, arrays, undefined, null)
 * @returns A single string of merged, conflict-resolved class names
 * 
 * @example
 * // Basic usage
 * cn("px-4 py-2", "bg-blue-500")
 * // Returns: "px-4 py-2 bg-blue-500"
 * 
 * @example
 * // With conditionals
 * cn("base-class", isActive && "active-class", { "error": hasError })
 * // Returns: "base-class active-class error" (if isActive and hasError are true)
 * 
 * @example
 * // Tailwind conflict resolution
 * cn("p-2", "p-4")
 * // Returns: "p-4" (later value wins)
 * 
 * @see https://github.com/lukeed/clsx
 * @see https://github.com/dcastil/tailwind-merge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
