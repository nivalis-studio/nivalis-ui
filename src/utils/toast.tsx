/* eslint-disable promise/catch-or-return */
/* eslint-disable func-style */
import { toast as toastFn } from "sonner";
import { Toast } from "@/registry/base/components/toast";
import type { ReactNode } from "react";
import type {
  ToastAction,
  ToastVariant,
  ToasterPosition,
} from "@/registry/base/components/toast";
import type { ExternalToast } from "sonner";

type BaseToastProps = {
  id?: string | number;
  position?: ToasterPosition;
  duration?: number;
  dismissable?: boolean;
  icon?: ReactNode;
};

type ToastProps = {
  description?: ReactNode;
  action?: ToastAction;
} & BaseToastProps;

function create(
  variant: ToastVariant,
  title: ReactNode,
  props: ToastProps = {},
) {
  const external: ExternalToast = {
    position: props.position,
    duration: props.duration,
    dismissible: props.dismissable,
  };

  if (props.id) {
    external.id = props.id;
  }

  return toastFn.custom(t => {
    return (
      <Toast
        id={t}
        title={title}
        description={props.description}
        dismissable={props.dismissable}
        variant={variant}
        action={props.action}
        icon={props.icon}
      />
    );
  }, external);
}

function message(
  /**
   * The title of the toast.
   */
  title: string,
  /**
   * The props of the toast.
   */
  props: ToastProps = {},
) {
  return create("message", title, props);
}

type VariantToastProps = {} & Omit<ToastProps, "icon">;

function info(
  /**
   * The title of the toast.
   */ title: string,
  /**
   * The props of the toast.
   */
  props: VariantToastProps = {},
) {
  return create("info", title, props);
}

function error(
  /**
   * The title of the toast.
   */ title: string,
  /**
   * The props of the toast.
   */
  props: VariantToastProps = {},
) {
  return create("error", title, props);
}

function success(
  /**
   * The title of the toast.
   */ title: string,
  /**
   * The props of the toast.
   */
  props: VariantToastProps = {},
) {
  return create("success", title, props);
}

function warning(
  /**
   * The title of the toast.
   */ title: string,
  /**
   * The props of the toast.
   */
  props: VariantToastProps = {},
) {
  return create("warning", title, props);
}

function loading(
  /**
   * The title of the toast.
   */ title: string,
  /**
   * The props of the toast.
   */
  props: VariantToastProps = {},
) {
  return create("loading", title, { ...props, dismissable: false });
}

type PromiseStateProps =
  | string
  | {
      title: string;
      description?: string;
    };

type PromiseToastProps = {
  loading: PromiseStateProps;
  success: PromiseStateProps;
  error: PromiseStateProps;
} & Omit<BaseToastProps, "icon">;

function createUniqueID() {
  // eslint-disable-next-line sonarjs/pseudo-random
  return Math.random().toString(36).slice(2, 8);
}

// eslint-disable-next-line @typescript-eslint/require-await
async function promise<TData>(
  /**
   * The promise to be resolved.
   */
  promise: Promise<TData> | (() => Promise<TData>),
  /**
   * The props of the toast.
   */
  props: PromiseToastProps,
) {
  let id: string | number | undefined = props.id || createUniqueID();
  let shouldDismiss = id !== undefined;

  id = create(
    "loading",
    typeof props.loading === "string" ? props.loading : props.loading.title,
    {
      id,
      position: props.position,
      description:
        typeof props.loading === "string"
          ? undefined
          : props.loading.description,
      duration: Infinity,
      dismissable: false,
    },
  );

  const p = promise instanceof Promise ? promise : promise();

  p.then(() => {
    shouldDismiss = false;
    create(
      "success",
      typeof props.success === "string" ? props.success : props.success.title,
      {
        id,
        position: props.position,
        description:
          typeof props.success === "string"
            ? undefined
            : props.success.description,
      },
    );
  })
    .catch(() => {
      shouldDismiss = false;
      create(
        "error",
        typeof props.error === "string" ? props.error : props.error.title,
        {
          id,
          position: props.position,
          description:
            typeof props.error === "string"
              ? undefined
              : props.error.description,
        },
      );
    })
    .finally(() => {
      if (shouldDismiss) {
        toastFn.dismiss(id);
        id = undefined;
      }
    });

  return id;
}

export const toast = Object.assign(message, {
  info,
  error,
  warning,
  success,
  promise,
  loading,
  dismiss: toastFn.dismiss,
});
