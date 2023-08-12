import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  // title: 'Example/Button',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {
    variant: "display",
    children: "Welcome to the world of Typography",
  },
};

export const Body: Story = {
  args: {
    variant: "body",
    children: "Welcome to the world of Typography",
  },
};

export const Heading: Story = {
  args: {
    variant: "heading",
    children: "Welcome to the world of Typography",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Welcome to the world of Typography",
  },
};
