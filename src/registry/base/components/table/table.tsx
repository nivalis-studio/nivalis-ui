import { Minus } from "@medusajs/icons";
import * as React from "react";
import { Button } from "@/registry/base/components/button";
import { cn } from "@/lib/classnames";

/*
 * This component is based on the table element and its various children:
 *
 * - `Table`: `table`
 * - `Table.Header`: `thead`
 * - `Table.Row`: `tr`
 * - `Table.HeaderCell`: `th`
 * - `Table.Body`: `tbody`
 * - `Table.Cell`: `td`
 *
 * Each component supports the props or attributes of its equivalent HTML element.
 */
const Root = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) => (
  // eslint-disable-next-line sonarjs/table-header
  <table
    className={cn("text-ui-fg-subtle txt-compact-small w-full", className)}
    {...props}
  />
);

Root.displayName = "Table";

const Row = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr
    className={cn(
      "bg-ui-bg-base hover:bg-ui-bg-base-hover border-ui-border-base border-b transition-fg",
      "[&_td:last-child]:pr-6 [&_th:last-child]:pr-6",
      "[&_td:first-child]:pl-6 [&_th:first-child]:pl-6",
      className,
    )}
    {...props}
  />
);

Row.displayName = "Table.Row";

const Cell = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) => (
  <td className={cn("h-12 py-0 pl-0 pr-6", className)} {...props} />
);

Cell.displayName = "Table.Cell";

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead
    className={cn(
      "border-ui-border-base txt-compact-small-plus [&_tr]:bg-ui-bg-subtle [&_tr]:hover:bg-ui-bg-subtle border-y",
      className,
    )}
    {...props}
  />
);

Header.displayName = "Table.Header";

const HeaderCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "txt-compact-small-plus h-12 py-0 pl-0 pr-6 text-left",
      className,
    )}
    {...props}
  />
));

HeaderCell.displayName = "Table.HeaderCell";

const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("border-ui-border-base border-b", className)}
    {...props}
  />
));

Body.displayName = "Table.Body";

type TablePaginationProps = {
  readonly count: number;
  readonly pageSize: number;
  readonly pageIndex: number;
  readonly pageCount: number;
  readonly canPreviousPage: boolean;
  readonly canNextPage: boolean;
  readonly translations?: {
    of?: string;
    results?: string;
    pages?: string;
    prev?: string;
    next?: string;
  };
  readonly previousPage: () => void;
  readonly nextPage: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

/*
 * This component is based on the `div` element and supports all of its props
 */
const Pagination = ({
  className,
  /**
   * The total number of items.
   */
  count,
  /**
   * The number of items per page.
   */
  pageSize,
  /**
   * The total number of pages.
   */
  pageCount,
  /**
   * The current page index.
   */
  pageIndex,
  /**
   * Whether there's a previous page that can be navigated to.
   */
  canPreviousPage,
  /**
   * Whether there's a next page that can be navigated to.
   */
  canNextPage,
  /**
   * A function that handles navigating to the next page.
   * This function should handle retrieving data for the next page.
   */
  nextPage,
  /**
   * A function that handles navigating to the previous page.
   * This function should handle retrieving data for the previous page.
   */
  previousPage,
  /**
   * An optional object of words to use in the pagination component.
   * Use this to override the default words, or translate them into another language.
   */
  translations = {
    of: "of",
    results: "results",
    pages: "pages",
    prev: "Prev",
    next: "Next",
  },
  ...props
}: TablePaginationProps) => {
  const { from, to } = React.useMemo(() => {
    const from = count === 0 ? count : pageIndex * pageSize + 1;
    const to = Math.min(count, (pageIndex + 1) * pageSize);

    return { from, to };
  }, [count, pageIndex, pageSize]);

  return (
    <div
      className={cn(
        "text-ui-fg-subtle txt-compact-small-plus flex w-full items-center justify-between px-3 py-4",
        className,
      )}
      {...props}
    >
      <div className='inline-flex items-center gap-x-1 px-3 py-[5px]'>
        <p>{from}</p>
        <Minus className='text-ui-fg-muted' />
        <p>{`${to} ${translations.of} ${count} ${translations.results}`}</p>
      </div>
      <div className='flex items-center gap-x-2'>
        <div className='inline-flex items-center gap-x-1 px-3 py-[5px]'>
          <p>
            {pageIndex + 1} {translations.of} {Math.max(pageCount, 1)}{" "}
            {translations.pages}
          </p>
        </div>
        <Button
          type='button'
          variant='transparent'
          disabled={!canPreviousPage}
          onClick={previousPage}
        >
          {translations.prev}
        </Button>
        <Button
          type='button'
          variant='transparent'
          disabled={!canNextPage}
          onClick={nextPage}
        >
          {translations.next}
        </Button>
      </div>
    </div>
  );
};

Pagination.displayName = "Table.Pagination";

const Table = Object.assign(Root, {
  Row,
  Cell,
  Header,
  HeaderCell,
  Body,
  Pagination,
});

export { Table };
