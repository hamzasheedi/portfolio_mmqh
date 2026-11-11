import { z } from "zod";
export const privacyRequestSchema=z.object({type:z.enum(["access","correction","deletion","portability","opt_out"]),jurisdiction:z.enum(["gdpr","ccpa","other"]),contact:z.object({email:z.email(),name:z.string().trim().min(2).max(100).optional()}).strict(),policyVersion:z.string().min(1)}).strict();
