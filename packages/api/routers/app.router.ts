import { publicProcedure, router } from '@/routers/trpc.router'

export const AppRouter = router({
  getName: publicProcedure.query((opts) => {
    return { name: 'John Doe' }
  }),
})
