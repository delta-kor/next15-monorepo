import { publicProcedure, router } from './trpc.router'

export const AppRouter = router({
  getName: publicProcedure.query((opts) => {
    return { name: 'John Doe' }
  }),
})
