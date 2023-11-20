import Stack from '@mui/material/Stack'
import { Container, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useForm } from 'react-hook-form'
import { TextFieldElement } from 'react-hook-form-mui'

import { Chat } from '~/store'
import { CommunicationEvent, socket } from '~/shared/api'

type FormValues = {
  text: string
}

type Props = {
  chat: Chat
}

export function Input({ chat }: Props) {
  const { handleSubmit, control, reset } = useForm<FormValues>()

  const sendMessageHandle = ({ text }: FormValues) => {
    socket?.emit(CommunicationEvent.SendMessage, {
      chatId: chat.id,
      text,
    })

    reset()
  }

  return (
    <Stack alignItems='center' m={2}>
      <Container maxWidth='md' sx={{ flex: 1 }} disableGutters>
        <Stack
          flex={1}
          direction='row'
          component='form'
          onSubmit={handleSubmit(sendMessageHandle)}
        >
          <TextFieldElement
            placeholder='Send Message'
            name='text'
            control={control}
            multiline
            fullWidth
          />

          <Stack justifyContent='center'>
            <IconButton type='submit'>
              <SendIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
