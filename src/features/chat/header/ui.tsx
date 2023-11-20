import Stack from '@mui/material/Stack'
import { AppBar, Typography } from '@mui/material'

import { APP_BAR_HEIGHT } from '~/shared/config/constants'
import { Chat } from '~/store'

type Props = {
  chat: Chat
}

export function Header({ chat }: Props) {
  return (
    <Stack>
      <AppBar position='sticky' color='inherit' sx={{ height: APP_BAR_HEIGHT }}>
        <Stack direction='row' justifyContent='center' spacing={2}>
          <Typography variant='h3'>Chat</Typography>

          <Typography variant='h3'>{chat.slug}</Typography>
        </Stack>
      </AppBar>
    </Stack>
  )
}
