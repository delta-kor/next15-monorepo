import { initTRPC } from '@trpc/server'
import superjson from 'superjson'

const t = initTRPC.create({
  errorFormatter: (opts) => {
    const { error, shape } = opts

    if (error.code === 'INTERNAL_SERVER_ERROR') {
      console.error(error)
      return { ...shape, message: 'Internal server error' }
    }

    if (error.code === 'UNPROCESSABLE_CONTENT') return { ...shape, message: error.message }

    return {
      ...shape,
      message: 'Error occurred',
    }
  },
  transformer: superjson,
})

export const router = t.router
export const publicProcedure = t.procedure
export const adminProcedure = t.procedure
