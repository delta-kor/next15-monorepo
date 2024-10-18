import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { AppRouter } from './routers/app.router'

const ApiHandler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: AppRouter,
  })

export default ApiHandler
