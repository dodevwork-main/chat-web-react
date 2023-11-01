import { AuthStore } from './types'

export class BaseStore implements AuthStore {
  protected baseUserId = ''

  get userId(): string {
    return this.baseUserId
  }

  get isIdValid(): boolean {
    return this.userId.length > 0
  }

  saveUserId(id: string): void {
    this.baseUserId = id
  }

  clear(): void {
    this.baseUserId = ''
  }
}
