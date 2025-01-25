export { auth as middleware } from '@/lib/next-auth'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
