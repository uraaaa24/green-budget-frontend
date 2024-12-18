import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import DialogHeader from '.'

const meta = {
  title: 'Common / Elements / Dialog / Header',
  component: DialogHeader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClose: fn() }
} satisfies Meta<typeof DialogHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    )
  ],
  args: {
    title: 'Dialog Header'
  }
}
