import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRotuer = createTRPCRouter({
  getAllUsers: publicProcedure
    .input(z.number())
    .query(async ({ ctx, input: limit }) => {
      const allUsers = ctx.db.user.findMany({
        take: limit,
      });
      return allUsers;
    }),
  getUserById: publicProcedure
    .input(z.string())
    .query(async ({ input: userId, ctx }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          id: userId,
        },
      });
      return user;
    }),
  getUserProducts: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input: authorId }) => {
      const authorProducts = await ctx.db.product.findMany({
        where: {
          authorId: {
            equals: authorId,
          },
        },
      });
      return authorProducts;
    }),
});
