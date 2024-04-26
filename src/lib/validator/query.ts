import { z } from "zod";

export const QueryValidator = z.object({
  category: z
    .enum(["AI", "Photography", "Startup", "Ecommerce", "Agency", "Portfolio"])
    .nullable(),
  limit: z.number().optional(),
});

export type TQueryValidator = z.infer<typeof QueryValidator>;
