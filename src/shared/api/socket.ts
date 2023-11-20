import { io, Socket } from 'socket.io-client'

import { API_URL } from '~/shared/config/env'
import { authStore } from '~/shared/lib/store'

export enum CommunicationEvent {
  SendMessage = 'send_message',
  ReceiveMessage = 'receive_message',
  ListMessages = 'list_messages',
}

export let socket: Socket

export function getSocket() {
  if (!socket) {
    socket = io(API_URL, {
      autoConnect: false,
      extraHeaders: {
        Authorization: `Bearer ${authStore.userId}`,
      },
    })
  }

  return socket
}
