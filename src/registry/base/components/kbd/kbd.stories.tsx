import { Kbd } from "./kbd";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: "⌘",
  },
};
