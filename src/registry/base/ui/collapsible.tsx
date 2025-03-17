"use client";

import {
  CollapsibleContent as RadixContent,
  CollapsibleTrigger as RadixTrigger,
  Root,
} from "@radix-ui/react-collapsible";

const Collapsible = ({ ...props }: React.ComponentProps<typeof Root>) => {
  return <Root data-slot='collapsible' {...props} />;
};

const CollapsibleTrigger = ({
  ...props
}: React.ComponentProps<typeof RadixTrigger>) => {
  return <RadixTrigger data-slot='collapsible-trigger' {...props} />;
};

const CollapsibleContent = ({
  ...props
}: React.ComponentProps<typeof RadixContent>) => {
  return <RadixContent data-slot='collapsible-content' {...props} />;
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
