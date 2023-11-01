import { useParams } from 'react-router-dom'

import { ChatBody } from '~/features/chat/body'
import { Loading } from '~/shared/ui/Loading'
import { ChatInput } from '~/features/chat/input'
import { ChatHeader } from '~/features/chat/header'

export default function ChatPage() {
  const { chatId } = useParams<{ chatId: string }>()

  if (!chatId) return <Loading />

  return (
    <>
      <ChatHeader chatId={chatId} />

      <ChatBody chatId={chatId} />

      <ChatInput chatId={chatId} />
    </>
  )
}
