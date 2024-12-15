import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '.'

const meta = {
  title: 'Common / Elements / Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const disabled: Story = {
  args: {
    children: 'Button',
    disabled: true
  }
}
