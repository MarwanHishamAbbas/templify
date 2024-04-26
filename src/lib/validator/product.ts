import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2, "Reqiured"),
  paid: z.boolean().default(false),
  category: z.enum([
    "AI",
    "Photography",
    "Startup",
    "Ecommerce",
    "Agency",
    "Portfolio",
  ]),
  price: z
    .string()
    .refine(
      (value) => {
        return !isNaN(Number(value));
      },
      {
        message: "Value must be a number",
      },
    )
    .optional(),
  demoLink: z.string().url(),
  description: z.string().max(5000, "Description is too long"),
});

export type TCreateProductSchema = z.infer<typeof createProductSchema>;
