import { baseApi } from './base'

export type Chat = {
  id: string
  slug: string
  title: string
  description?: string
}

export const { useGetChatsQuery, useGetChatBySlugQuery } =
  baseApi.injectEndpoints({
    endpoints: (build) => ({
      getChats: build.query<Chat[], void>({
        query: () => '/chats',
      }),
      getChatBySlug: build.query<Chat | null, string>({
        query: (slug) => `/chats/${slug}`,
      }),
    }),
  })
