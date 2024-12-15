import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import SubmitButton from './submit-button'

const meta = {
  title: 'Common / Elements / SubmitButton',
  component: SubmitButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof SubmitButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Add Transaction'
  }
}

export const Loading: Story = {
  args: {
    label: 'Add Transaction',
    isLoading: true
  }
}
