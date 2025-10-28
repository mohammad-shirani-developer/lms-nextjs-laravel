import { tv } from "tailwind-variants";
import { LoadingProps } from "./loading.type";

// تعریف کلاس‌های Loading با واریانت‌ها و سایزها
const loading = tv({
  base: "loading pointer-events-none inline-block aspect-square",
  variants: {
    types: {
      spinner: "loading-spinner",
      ring: "loading-ring",
    },
    size: {
      xs: "loading-xs w-4",
      sm: "loading-sm w-5",
      md: "loading-md w-6",
      lg: "loading-lg w-10",
    },
    variant: {
      neutral: "dark:text-base-content/30",
      ghost: "dark:text-base",
      primary: "dark:text-primary",
      secondary: "dark:text-secondary",
      accent: "dark:text-accent",
      info: "dark:text-info",
      success: "dark:text-success",
      warning: "dark:text-warning",
      error: "dark:text-error",
    },
  },
  defaultVariants: {
    types: "spinner",
    size: "md",
    variant: "neutral",
  },
});

const Loading = ({
  types = "spinner",
  size = "md",
  variant = "neutral",
  className,
}: LoadingProps) => {
  const classes = loading({
    types,
    size,
    variant,
    class: className,
  });

  return <span className={classes}>Loading</span>;
};

export default Loading;
