export { auth as middleware } from '@/lib/next-auth'

export const config = {
  /**
   * Match all request paths except for the ones starting with:
   * - /api (API routes)
   * - /_next/static (Next.js static files)
   * - /_next/image (Next.js image optimization)
   * - /favicon.ico (Favicon)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
