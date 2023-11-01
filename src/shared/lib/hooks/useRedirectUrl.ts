import { useCallback } from 'react'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

import { Path } from '~/shared/config/constants'

import { isValidRedirectUrl } from '../isValidRedirectUrl'

export function useRedirectUrl(path?: string) {
  const { search } = useLocation()
  const navigate = useNavigate()

  return useCallback(() => {
    const params = createSearchParams(search)

    const redirectUrl = params.get('redirectUrl')

    navigate(isValidRedirectUrl(redirectUrl) ? redirectUrl : path ?? Path.Home)
  }, [search, navigate, path])
}
