import { ReactNode } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Loading } from './Loading'

type Props = {
  isAllowed: boolean
  redirectPath: string
  loading?: boolean
  children?: ReactNode
}

export function GuardedRoute(props: Props) {
  const {
    isAllowed,
    redirectPath,
    children = <Outlet />,
    loading = false,
  } = props

  const { pathname } = useLocation()

  if (loading) {
    return <Loading isHeight100vh />
  }

  if (!isAllowed) {
    return (
      <Navigate
        to={`${redirectPath}?redirectUrl=${encodeURIComponent(pathname)}`}
        replace
      />
    )
  }

  return <>{children}</>
}
