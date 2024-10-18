import { z } from 'zod'
import db from '../db/drizzle'
import { articlesTable } from '../db/schema'
import RandomUtil from '../utils/random.util'
import { publicProcedure, router } from './trpc.router'

export const AppRouter = router({
  createArticle: publicProcedure
    .input(
      z.object({
        content: z.string(),
        nickname: z.string(),
        password: z.string(),
        title: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const articles = await db
        .insert(articlesTable)
        .values({
          content: input.content,
          id: RandomUtil.createRandomHex(8),
          nickname: input.nickname,
          password: input.password,
          title: input.title,
        })
        .returning({ id: articlesTable.id })

      const article = articles[0]
      return article.id
    }),
})
