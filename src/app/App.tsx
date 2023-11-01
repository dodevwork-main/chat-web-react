import { RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { router } from '~/processes'
import { store } from '~/store'
import { theme } from '~/shared/config/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ReduxProvider>
    </ThemeProvider>
  )
}
