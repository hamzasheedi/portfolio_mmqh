import { z } from "zod";

export const inquirySchema = z.object({
  // Honeypot — must be empty
  _hp: z.string().max(0, "Invalid submission"),

  inquiryType: z.enum(
    ["general", "financial", "web-development", "partnership"],
    { error: "Please select an inquiry type." }
  ),

  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid work email address."),

  company: z
    .string()
    .trim()
    .min(1, "Company name is required.")
    .max(120, "Company name is too long."),

  country: z.string().trim().max(80).optional(),

  website: z
    .string()
    .trim()
    .max(200)
    .refine(
      (v) => !v || /^https?:\/\/.+/.test(v),
      "Website must start with https://"
    )
    .optional(),

  budgetRange: z.string().trim().max(60).optional(),

  timeline: z.string().trim().max(60).optional(),

  message: z
    .string()
    .trim()
    .min(20, "Please describe your project in at least 20 characters.")
    .max(3000, "Message is too long (max 3000 characters)."),

  secureTransfer: z.boolean().optional(),

  consent: z
    .literal(true, { error: "You must accept the privacy policy to continue." }),
});

export type InquiryPayload = z.infer<typeof inquirySchema>;
