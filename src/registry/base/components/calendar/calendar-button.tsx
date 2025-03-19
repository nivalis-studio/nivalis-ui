import * as React from "react";
import { useButton } from "react-aria";

import { IconButton } from "@/registry/base/components/icon-button";
import type { AriaButtonProps } from "react-aria";

type CalendarButtonProps = {} & AriaButtonProps<"button">;

const CalendarButton = React.forwardRef<HTMLButtonElement, CalendarButtonProps>(
  ({ children, ...props }, ref) => {
    const innerRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => innerRef.current!);

    const { buttonProps } = useButton(props, innerRef);

    return (
      <IconButton
        size='small'
        variant='transparent'
        className='rounded-[4px]'
        {...buttonProps}
      >
        {children}
      </IconButton>
    );
  },
);

CalendarButton.displayName = "CalendarButton";

export { CalendarButton };
