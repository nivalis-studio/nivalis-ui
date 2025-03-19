import { getWeeksInMonth } from "@internationalized/date";
import * as React from "react";
import { useCalendarGrid, useLocale } from "react-aria";
import { CalendarCell } from "./calendar-cell";
import type { AriaCalendarGridProps } from "react-aria";

import type { CalendarState } from "react-stately";

type CalendarGridProps = {
  readonly state: CalendarState;
} & AriaCalendarGridProps;

const CalendarGrid = ({ state, ...props }: CalendarGridProps) => {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th
              key={index}
              className='txt-compact-small-plus text-ui-fg-muted size-8 rounded-md p-1'
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map(weekIndex => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                ),
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { CalendarGrid };
