import React, { ComponentProps } from 'react'

type HeaderProps = ComponentProps<'header'> & {
  label: string
}

const Header = ({ label, ...props }: HeaderProps) => {
  return (
    <header {...props} className="pb-2">
      <h1 className="text-4xl font-bold">{label}</h1>
    </header>
  )
}

export default Header
