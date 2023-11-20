import { useParams } from 'react-router-dom'

import { ChatBody } from '~/features/chat/body'
import { Loading } from '~/shared/ui/Loading'
import { ChatInput } from '~/features/chat/input'
import { ChatHeader } from '~/features/chat/header'
import { useGetChatBySlugQuery } from '~/store'

type Params = {
  slug: string
}

export default function ChatPage() {
  const { slug } = useParams<Params>()
  const { data: chat } = useGetChatBySlugQuery(slug ?? '', {
    skip: !slug,
  })

  if (!chat) return <Loading />

  return (
    <>
      <ChatHeader chat={chat} />

      <ChatBody chat={chat} />

      <ChatInput chat={chat} />
    </>
  )
}
