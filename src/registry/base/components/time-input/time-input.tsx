"use client";

import * as React from "react";
import { useLocale, useTimeField } from "react-aria";
import { useTimeFieldState } from "react-stately";
import { DateSegment } from "@/registry/base/components/date-segment";
import { cn } from "@/lib/classnames";
import type { AriaTimeFieldProps, TimeValue } from "react-aria";

const TimeInput = (props: AriaTimeFieldProps<TimeValue>) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { locale } = useLocale();
  const state = useTimeFieldState({
    ...props,
    locale,
  });
  const { fieldProps } = useTimeField(props, state, ref);

  return (
    <div
      ref={ref}
      {...fieldProps}
      aria-label='Time input'
      className={cn(
        "bg-ui-bg-field shadow-borders-base txt-compact-small flex items-center rounded-md px-2 py-1",
        {
          "": props.isDisabled,
        },
      )}
    >
      {state.segments.map((segment, index) => {
        return <DateSegment key={index} segment={segment} state={state} />;
      })}
    </div>
  );
};

export { TimeInput };
