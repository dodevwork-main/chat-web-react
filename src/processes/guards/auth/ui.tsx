import { useUpdateEffect } from 'react-use'

import { GuardedRoute } from '~/shared/ui/GuardedRoute'
import { Path } from '~/shared/config/constants'
import { useAppDispatch, useVerifyQuery } from '~/store'
import { login, useUser } from '~/features/user/slice'

export function Auth() {
  const dispatch = useAppDispatch()
  const { data, isFetching, isSuccess, refetch } = useVerifyQuery()
  const user = useUser()

  useUpdateEffect(() => {
    if (data) {
      dispatch(login(data))
    }
  }, [data, dispatch])

  useUpdateEffect(() => {
    if (!user) {
      refetch()
    }
  }, [user])

  return (
    <GuardedRoute
      isAllowed={isSuccess}
      redirectPath={Path.Login}
      loading={isFetching}
    />
  )
}
