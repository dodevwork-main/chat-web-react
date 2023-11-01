import { AUTH_USER_ID_KEY } from '~/shared/config/constants'

import { LocalStore } from './LocalStore'

export const authStore = new LocalStore(AUTH_USER_ID_KEY)

export type { AuthStore } from './types'
