import { AppBar, IconButton, Paper, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { APP_BAR_HEIGHT } from '~/shared/config/constants'

import { ChatList } from './ChatList'
import { Search } from './Search'

const WIDTH = '350px'

export function ChatDrawer() {
  return (
    <Stack minHeight={0} width={WIDTH}>
      <Paper
        sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
      >
        <AppBar
          position='sticky'
          color='inherit'
          sx={{ height: APP_BAR_HEIGHT }}
        >
          <Stack direction='row' py={1} px={2} spacing={1} height='100%'>
            <Stack alignItems='center' justifyContent='center'>
              <IconButton color='primary'>
                <MenuIcon />
              </IconButton>
            </Stack>

            <Search />
          </Stack>
        </AppBar>

        <ChatList />
      </Paper>
    </Stack>
  )
}
