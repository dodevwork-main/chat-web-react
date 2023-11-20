import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Message, useAppSelector } from '~/store'

type State = {
  messages: Message[]
}

const initialState: State = {
  messages: [],
}
const name = 'chat.body'
export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setMessages: (state, { payload }: PayloadAction<Message[]>) => {
      state.messages = payload
    },
    addMessage: (state, { payload }: PayloadAction<Message>) => {
      if (state.messages.every((item) => item.id !== payload.id)) {
        state.messages.push(payload)
      }
    },
  },
})
export const useMessages = () => useAppSelector((state) => state[name].messages)
export const { setMessages, addMessage } = slice.actions
