import React from 'react'
import { X } from 'lucide-react'

type DialogHeaderProps = {
  title: string
  onClose?: () => void
}

const DialogHeader = ({ title, onClose }: DialogHeaderProps) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <X onClick={onClose} className="cursor-pointer text-gray-500 hover:text-gray-700" size={24} />
    </div>
  )
}

export default DialogHeader
