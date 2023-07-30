import type { Meta, StoryObj } from '@storybook/react';
import { HiMail } from 'react-icons/hi';

import Button from './Button';

const meta = {
  // title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary',
  },
};
export const Outlined: Story = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary',
  },
};
export const IconButton: Story = {
  args: {
    variant: 'primary',
    label: 'LogIn with Email',
    setIcon: {
      icon: <HiMail />,
    },
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
