import { User } from './user'

export type Message = {
  id: string
  text: string
  chatId: string
  userId: string
  // Relation
  user?: User
}
