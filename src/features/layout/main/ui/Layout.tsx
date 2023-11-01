import Stack from '@mui/material/Stack'
import { ReactNode, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Loading } from '~/shared/ui/Loading'

import { ChatDrawer } from '../chat-drawer'

type Props = {
  children?: ReactNode
}

export function Layout({ children = <Outlet /> }: Props) {
  return (
    <Stack height='100vh' minHeight={0} direction='row'>
      <ChatDrawer />

      <Stack flex={1} minHeight={0}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Stack>
    </Stack>
  )
}
