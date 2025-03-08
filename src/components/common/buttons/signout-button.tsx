import { handleSignOut } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const SignOutButton = () => {
  return (
    <form action={handleSignOut}>
      <Button className="w-full">サインアウト</Button>
    </form>
  )
}

export default SignOutButton
