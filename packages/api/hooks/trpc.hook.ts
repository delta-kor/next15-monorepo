import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '../routers/app.router'

export const trpc = createTRPCReact<typeof AppRouter>()
