import Stack from '@mui/material/Stack'
import { useEffect, useRef } from 'react'
import { Container, List, ListItem, Typography } from '@mui/material'

import { CommunicationEvent, getSocket } from '~/shared/api'
import { Chat, useAppDispatch } from '~/store'

import { addMessage, setMessages, useMessages } from './slice'

type Props = {
  chat: Chat
}

export function Body({ chat }: Props) {
  const messages = useMessages()
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const socket = getSocket()
    socket.connect()

    socket.on(CommunicationEvent.ReceiveMessage, (data) => {
      const message = JSON.parse(data)
      dispatch(addMessage(message))
    })

    socket.on(CommunicationEvent.ListMessages, (data) => {
      const messages = JSON.parse(data)

      dispatch(setMessages(messages))
    })
    socket.emit(CommunicationEvent.ListMessages, { chatId: chat.id })

    return () => {
      socket.disconnect()
    }
  }, [chat, dispatch])

  // Scroll to last message
  useEffect(() => {
    const lastChildElement = ref.current?.lastElementChild
    lastChildElement?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <Stack flex={1} minHeight={0}>
      <Container
        maxWidth='md'
        sx={{ flex: 1, minHeight: 0, overflow: 'auto' }}
        disableGutters
      >
        <List ref={ref} sx={{ flex: 1 }}>
          {messages.map((message) => (
            <ListItem key={message.id} divider>
              <Stack>
                <Typography variant='caption' flex={1}>
                  {message.user?.username}
                </Typography>
                <Typography flex={1}>{message.text}</Typography>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Container>
    </Stack>
  )
}
