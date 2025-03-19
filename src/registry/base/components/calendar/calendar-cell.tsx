"use client";

import { useRef } from "react";
import { useCalendarCell } from "react-aria";
import { cn } from "@/lib/classnames";
import type { CalendarState } from "react-stately";
import type { CalendarDate } from "@internationalized/date";

/*
 * Check if the date is today. The CalendarDate is using a 1-based index for the month.
 * @param date
 * @returns Whether the CalendarDate is today.
 */
const getIsToday = (date: CalendarDate) => {
  const today = new Date();

  return (
    [date.year, date.month, date.day].join("-") ===
    [today.getFullYear(), today.getMonth() + 1, today.getDate()].join("-")
  );
};

type CalendarCellProps = {
  readonly date: CalendarDate;
  readonly state: CalendarState;
};

const CalendarCell = ({ state, date }: CalendarCellProps) => {
  const ref = useRef(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  const isToday = getIsToday(date);

  return (
    <td {...cellProps} className='p-1'>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={cn(
          "bg-ui-bg-base txt-compact-small relative flex size-8 items-center justify-center rounded-md border border-transparent outline-none transition-fg",
          "hover:bg-ui-bg-base-hover",
          "focus-visible:shadow-borders-focus focus-visible:border-ui-border-interactive",
          {
            "!bg-ui-bg-interactive !text-ui-fg-on-color": isSelected,
            "hidden": isOutsideVisibleRange,
            "text-ui-fg-muted hover:!bg-ui-bg-base cursor-default":
              isDisabled || isUnavailable,
          },
        )}
      >
        {formattedDate}
        {isToday ? (
          <div
            role='none'
            className={cn(
              "bg-ui-bg-interactive absolute bottom-[3px] left-1/2 size-[3px] -translate-x-1/2 rounded-full transition-fg",
              {
                "bg-ui-fg-on-color": isSelected,
              },
            )}
          />
        ) : null}
      </div>
    </td>
  );
};

export { CalendarCell };
