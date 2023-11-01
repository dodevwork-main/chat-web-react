import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthUser, useAppSelector } from '~/store'

type State = {
  user: AuthUser | null
}

const initialState: State = {
  user: null,
}
const name = 'name'
export const slice = createSlice({
  name,
  initialState,
  reducers: {
    logout: () => initialState,
    login: (state, { payload }: PayloadAction<AuthUser>) => {
      state.user = payload
    },
  },
})

export const useUser = () => useAppSelector((state) => state[name].user)

export const { logout, login } = slice.actions
