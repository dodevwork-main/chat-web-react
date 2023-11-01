import { combineReducers } from '@reduxjs/toolkit'

import { userSlice } from '~/features/user'

import { baseApi } from './api'

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [userSlice.name]: userSlice.reducer,
})
