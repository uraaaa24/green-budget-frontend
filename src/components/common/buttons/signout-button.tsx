import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/next-auth'
import React from 'react'

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        'use server'

        await signOut()
      }}
    >
      <Button className="w-full">Sign Out</Button>
    </form>
  )
}

export default SignOutButton
