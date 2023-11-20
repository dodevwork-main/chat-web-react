import { combineReducers } from '@reduxjs/toolkit'

import { userSlice } from '~/features/user'
import { chatBodySlice } from '~/features/chat/body'

import { baseApi } from './api'

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [chatBodySlice.name]: chatBodySlice.reducer,
})
