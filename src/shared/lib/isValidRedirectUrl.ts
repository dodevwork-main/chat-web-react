export function isValidRedirectUrl(url?: unknown): url is string {
  return typeof url === 'string' && url.startsWith('/')
}
