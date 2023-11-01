import { baseApi } from './base'

export type Chat = {
  id: string
  slug: string
  title: string
  description?: string
}

export const { useGetChatsQuery } = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getChats: build.query<Chat[], void>({
      query: () => '/chats',
    }),
  }),
})
