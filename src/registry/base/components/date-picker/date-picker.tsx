"use client";

import { getLocalTimeZone } from "@internationalized/date";
import { CalendarMini, Clock, XMarkMini } from "@medusajs/icons";
import { cva } from "class-variance-authority";
import * as React from "react";
import { useDatePicker, useInteractOutside } from "react-aria";
import { useDatePickerState } from "react-stately";

import { InternalCalendar } from "@/registry/base/components/calendar";
import { Popover } from "@/registry/base/components/popover";
import { TimeInput } from "@/registry/base/components/time-input";
import {
  createCalendarDateFromDate,
  getDefaultCalendarDateFromDate,
  updateCalendarDateFromDate,
} from "@/utils/calendar";
import { cn } from "@/lib/classnames";

import { DatePickerButton } from "./date-picker-button";
import { DatePickerClearButton } from "./date-picker-clear-button";
import { DatePickerField } from "./date-picker-field";
import type {
  AriaDatePickerProps as BaseDatePickerProps,
  DateValue,
} from "react-aria";
import type { CalendarDate, CalendarDateTime } from "@internationalized/date";

export type Granularity = "day" | "hour" | "minute" | "second";

type DatePickerValueProps = {
  readonly defaultValue?: Date | null;
  readonly value?: Date | null;
  readonly onChange?: (value: Date | null) => void;
  readonly isDateUnavailable?: (date: Date) => boolean;
  readonly minValue?: Date;
  readonly maxValue?: Date;
  readonly shouldCloseOnSelect?: boolean;
  readonly granularity?: Granularity;
  readonly size?: "base" | "small";
  readonly className?: string;
  readonly modal?: boolean;
};

type DatePickerProps = {} & Omit<
  BaseDatePickerProps<CalendarDateTime | CalendarDate>,
  keyof DatePickerValueProps
> &
  DatePickerValueProps;

const datePickerStyles = (
  isOpen: boolean,
  isInvalid: boolean,
  value?: DateValue | null,
) =>
  cva({
    base: cn(
      "bg-ui-bg-field shadow-borders-base txt-compact-small text-ui-fg-base grid h-fit items-center gap-2 overflow-hidden rounded-md transition-fg",
      "focus-within:shadow-borders-interactive-with-active focus-visible:shadow-borders-interactive-with-active",
      "aria-[invalid=true]:shadow-borders-error invalid:shadow-borders-error",
      {
        "shadow-borders-interactive-with-active": isOpen,
        "shadow-borders-error": isInvalid,
        "pr-2": !value,
      },
    ),
    variants: {
      size: {
        small: cn("grid-cols-[28px_1fr]", {
          "grid-cols-[28px_1fr_28px]": !!value,
        }),
        base: cn("grid-cols-[32px_1fr]", {
          "grid-cols-[32px_1fr_32px]": !!value,
        }),
      },
    },
  });

const HAS_TIME = new Set<Granularity>(["hour", "minute", "second"]);

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      size = "base",
      shouldCloseOnSelect = true,
      className,
      modal = false,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState<
      CalendarDateTime | CalendarDate | null | undefined
    >(
      getDefaultCalendarDateFromDate(
        props.value,
        props.defaultValue,
        props.granularity,
      ),
    );

    const innerRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => innerRef.current!);

    const contentRef = React.useRef<HTMLDivElement>(null);

    const _props = convertProps(props, setValue);

    const state = useDatePickerState({
      ..._props,
      shouldCloseOnSelect,
    });

    const { groupProps, fieldProps, buttonProps, dialogProps, calendarProps } =
      useDatePicker(_props, state, innerRef);

    React.useEffect(() => {
      setValue(
        props.value
          ? updateCalendarDateFromDate(value, props.value, props.granularity)
          : null,
      );
      state.setValue(
        props.value
          ? updateCalendarDateFromDate(value, props.value, props.granularity)
          : null,
      );
    }, [props.value]);

    function clear(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      e.stopPropagation();

      props.onChange?.(null);
      state.setValue(null);
    }

    useInteractOutside({
      ref: contentRef,
      onInteractOutside: () => {
        state.setOpen(false);
      },
    });

    const hasTime = props.granularity && HAS_TIME.has(props.granularity);
    const Icon = hasTime ? Clock : CalendarMini;

    return (
      <Popover modal={modal} open={state.isOpen} onOpenChange={state.setOpen}>
        <Popover.Anchor asChild>
          <div
            ref={ref}
            className={cn(
              datePickerStyles(
                state.isOpen,
                state.isInvalid,
                state.value,
              )({ size }),
              className,
            )}
            {...groupProps}
          >
            <DatePickerButton {...buttonProps} size={size}>
              <Icon />
            </DatePickerButton>
            <DatePickerField {...fieldProps} size={size} />
            {!!state.value && (
              <DatePickerClearButton onClick={clear}>
                <XMarkMini />
              </DatePickerClearButton>
            )}
          </div>
        </Popover.Anchor>
        <Popover.Content
          ref={contentRef}
          {...dialogProps}
          className='flex flex-col divide-y p-0'
        >
          <div className='p-3'>
            <InternalCalendar autoFocus {...calendarProps} />
          </div>
          {state.hasTime ? (
            <div className='p-3'>
              <TimeInput
                value={state.timeValue}
                hourCycle={props.hourCycle}
                onChange={state.setTimeValue}
              />
            </div>
          ) : null}
        </Popover.Content>
      </Popover>
    );
  },
);

DatePicker.displayName = "DatePicker";

// eslint-disable-next-line func-style
function convertProps(
  props: DatePickerProps,
  setValue: React.Dispatch<
    React.SetStateAction<CalendarDateTime | CalendarDate | null | undefined>
  >,
): BaseDatePickerProps<CalendarDateTime | CalendarDate> {
  const {
    minValue,
    maxValue,
    isDateUnavailable: _isDateUnavailable,
    onChange: _onChange,
    value: __value__,
    defaultValue: __defaultValue__,
    ...rest
  } = props;

  const onChange = (value: CalendarDateTime | null) => {
    setValue(value);
    _onChange?.(value ? value.toDate(getLocalTimeZone()) : null);
  };

  const isDateUnavailable = (date: DateValue) => {
    const _date = date.toDate(getLocalTimeZone());

    return _isDateUnavailable ? _isDateUnavailable(_date) : false;
  };

  return {
    ...rest,
    onChange: onChange as BaseDatePickerProps<
      CalendarDateTime | CalendarDate
    >["onChange"],
    isDateUnavailable,
    minValue: minValue
      ? createCalendarDateFromDate(minValue, props.granularity)
      : minValue,
    maxValue: maxValue
      ? createCalendarDateFromDate(maxValue, props.granularity)
      : maxValue,
  };
}

export { DatePicker };
