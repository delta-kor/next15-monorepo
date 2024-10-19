'use client'

import { trpc } from '@repo/api/hooks/trpc.hook'
import React from 'react'

export default function WriteSection() {
  const createArticleMutation = trpc.createArticle.useMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.currentTarget
    const form = new FormData(target)

    const payload = {
      content: form.get('content') as string,
      nickname: form.get('nickname') as string,
      password: form.get('password') as string,
      title: form.get('title') as string,
    }

    createArticleMutation
      .mutateAsync(payload)
      .then((result) => {
        alert('Article created with id: ' + result)
      })
      .catch((error) => {
        alert('Failed to create article: ' + error.message)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="text-3xl font-bold">Write a new post</div>
      <div className="grid grid-cols-[min-content_auto] items-center gap-x-8 gap-y-2">
        <div className="font-bold">Title</div>
        <input name="title" type="text" className="rounded-md border border-gray-300 p-2 text-sm" />
        <div className="font-bold">Content</div>
        <input
          name="content"
          type="text"
          className="rounded-md border border-gray-300 p-2 text-sm"
        />
        <div className="font-bold">Nickname</div>
        <input
          name="nickname"
          type="text"
          className="rounded-md border border-gray-300 p-2 text-sm"
        />
        <div className="font-bold">Password</div>
        <input
          name="password"
          type="password"
          className="rounded-md border border-gray-300 p-2 text-sm"
        />
      </div>
      <button type="submit" className="self-start rounded-md bg-blue-500 px-4 py-2 text-white">
        Submit
      </button>
    </form>
  )
}
