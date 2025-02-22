'use server'

import { signOut } from '@/lib/next-auth'

export async function handleSignOut() {
  await signOut()
}
