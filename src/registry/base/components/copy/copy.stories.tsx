import * as React from "react";

import { Button } from "@/registry/base/components/button";
import { TooltipProvider } from "@/registry/base/components/tooltip";
import { Copy } from "./copy";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Copy> = {
  title: "Components/Copy",
  component: Copy,
  parameters: {
    layout: "centered",
  },
  render: args => (
    <TooltipProvider>
      <Copy {...args} />
    </TooltipProvider>
  ),
};

export default meta;

type Story = StoryObj<typeof Copy>;

export const Default: Story = {
  args: {
    content: "Hello world",
  },
};

export const AsChild: Story = {
  args: {
    content: "Hello world",
    asChild: true,
    children: <Button className='text-ui-fg-on-color'>Copy</Button>,
  },
};
