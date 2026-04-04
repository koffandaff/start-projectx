import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name too short").max(80),
  email: z.string().email("Invalid email"),
  whatsapp: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),
  projectType: z.enum([
    "fullstack",
    "java",
    "python",
    "cpp",
    "aiml",
    "datascience",
    "custom",
    "other",
  ]),
  deadline: z
    .string()
    .refine((d) => new Date(d) > new Date(), "Deadline must be in the future"),
  description: z
    .string()
    .min(20, "Please describe your project (min 20 chars)")
    .max(1000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
