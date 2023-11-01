export type AuthStore = {
  readonly userId: string
  readonly isIdValid: boolean

  saveUserId(token: string): void
  clear(): void
}
