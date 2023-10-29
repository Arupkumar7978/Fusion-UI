import type { Meta, StoryObj } from '@storybook/react';
import Demo from './Demo';

const meta = {
  component: Demo,
  tags: ['autodocs']
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DemoStory: Story = {
  args: {}
};
