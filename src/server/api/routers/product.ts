import { createProductSchema } from "~/lib/validator/product";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";
import { QueryValidator } from "~/lib/validator/query";

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
  products: publicProcedure
    .input(QueryValidator)
    .query(async ({ input, ctx }) => {
      const { category, limit } = input;
      const allProducts = await ctx.db.product.findMany({
        take: limit,
        where: {
          category: {
            equals: category ?? undefined,
          },
        },
      });
      return allProducts;
    }),
  getProductById: publicProcedure
    .input(z.number())
    .query(async ({ input: productId, ctx }) => {
      const product = ctx.db.product.findUnique({
        where: {
          id: productId,
        },
      });
      return product;
    }),
});
