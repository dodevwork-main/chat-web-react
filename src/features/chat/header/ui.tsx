import Stack from '@mui/material/Stack'
import { AppBar } from '@mui/material'

import { APP_BAR_HEIGHT } from '~/shared/config/constants'

type Props = {
  chatId: string
}

export function Header({ chatId }: Props) {
  return (
    <Stack>
      <AppBar position='sticky' color='inherit' sx={{ height: APP_BAR_HEIGHT }}>
        <Stack>Header - {chatId}</Stack>
      </AppBar>
    </Stack>
  )
}
