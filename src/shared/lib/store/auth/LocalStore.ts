import { Mixin } from 'ts-mixer'

import { LocalStorage } from '../LocalStorage'

import { BaseStore } from './BaseStore'

export class LocalStore extends Mixin(BaseStore, LocalStorage) {
  constructor(private readonly userIdKey: string) {
    super()
  }

  get userId(): string {
    return this.storageGet(this.userIdKey) || ''
  }

  saveUserId(id: string) {
    this.storageSet(this.userIdKey, id)

    super.saveUserId(id)
  }

  clear() {
    this.storageRemove(this.userId)

    super.clear()
  }
}
