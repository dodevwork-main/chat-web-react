import { isBrowser } from '../isBrowser'

export class LocalStorage {
  protected fallback: string | null = null

  /**
   * Retrieves `key` from the browser's local storage
   * (or runtime/memory if local storage is undefined).
   */
  protected storageGet(key: string): string | null {
    if (isBrowser()) {
      return window.localStorage.getItem(key)
    }

    // fallback to runtime/memory
    return this.fallback
  }

  /**
   * Stores a new data in the browser's local storage
   * (or runtime/memory if local storage is undefined).
   */
  protected storageSet(key: string, value: string) {
    if (isBrowser()) {
      // store in local storage
      window.localStorage.setItem(key, value)
    } else {
      // store in runtime/memory
      this.fallback = value
    }
  }

  /**
   * Removes `key` from the browser's local storage and the runtime/memory.
   */
  protected storageRemove(key: string) {
    // delete from local storage
    if (isBrowser()) {
      window.localStorage.removeItem(key)
    }

    // delete from runtime/memory
    this.fallback = null
  }
}
