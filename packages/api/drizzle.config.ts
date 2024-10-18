import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  dialect: 'postgresql',
  out: './migrations',
  schema: './db/schema.ts',
})
