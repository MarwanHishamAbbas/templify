import { createProductSchema } from "~/lib/validator/product";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const productRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createProductSchema.extend({ imageUrl: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { name, category, demoLink, description, imageUrl, paid, price } =
        input;

      const newProduct = ctx.db.product.create({
        data: {
          name: name,
          authorId: ctx.session.user.id,
          description: description,
          imageUrl: imageUrl,
          paid: paid,
          demoLink: demoLink,
          price: parseInt(price ?? "0"),
          category,
        },
      });
      return newProduct;
    }),
});
