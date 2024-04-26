import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRotuer = createTRPCRouter({
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
});
