import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2, "Reqiured"),
  paid: z.boolean(),
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
  description: z.string(),
});

export type TCreateProductSchema = z.infer<typeof createProductSchema>;
