import { Stack } from '@mui/material'
import { ReactNode, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Loading } from '~/shared/ui/Loading'

type Props = {
  children?: ReactNode
}

export function Minimal({ children = <Outlet /> }: Props) {
  return (
    <Stack height='100vh' minHeight={0}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Stack>
  )
}
