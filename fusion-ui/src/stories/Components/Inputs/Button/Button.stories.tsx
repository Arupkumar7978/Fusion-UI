import type { Meta, StoryObj } from '@storybook/react';
import { HiMail } from 'react-icons/hi';

import Button from './Button';

const meta = {
  // title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button'
  }
};
export const Outlined: Story = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary'
  }
};
export const IconButton: Story = {
  args: {
    variant: 'primary',
    label: 'Icon Button',
    setIcon: {
      icon: <HiMail />,
      alignment: 'left'
    }
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Button'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button'
  }
};
