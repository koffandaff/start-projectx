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
    .refine((d) => {
      const date = new Date(d);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Allow today's date
      return date >= today;
    }, "Deadline must be today or in the future"),
  requirements: z
    .string()
    .min(10, "Please describe your project (min 10 chars)")
    .max(2000),
});

export function isUrgentDeadline(dateStr: string): boolean {
  if (!dateStr) return false;
  const deadline = new Date(dateStr);
  const now = new Date();
  const diffInMs = deadline.getTime() - now.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays >= 0 && diffInDays <= 2;
}

export type ContactFormData = z.infer<typeof contactSchema>;
