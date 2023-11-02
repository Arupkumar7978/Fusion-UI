import type {Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField.tsx';

const meta = {
    component: TextField,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof TextField>;

  export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Outlined: Story = {
  args: {
    variant:'outlined',
    label: 'Outlined',
    size:"medium"
  },
};

export const Filled: Story = {
  args: {
    variant:'filled',
    label: 'Filled',
    size:"medium"
  },
};
export const Standard: Story = {
  args: {
    variant:'standard',
    label: 'Standard',
    size:"medium"
  },
};