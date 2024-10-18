import { char, pgTable, varchar } from 'drizzle-orm/pg-core'

export const articlesTable = pgTable('articles', {
  content: varchar('content', { length: 1024 }).notNull(),
  id: char('id', { length: 8 }).primaryKey(),
  nickname: varchar('nickname', { length: 64 }).notNull(),
  password: varchar('password', { length: 64 }).notNull(),
  title: varchar('title', { length: 256 }).notNull(),
})
