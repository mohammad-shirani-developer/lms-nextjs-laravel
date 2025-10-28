import { tv } from "tailwind-variants";
import { BadgeProps } from "./badge.types";

const badge = tv({
  base: "badge inline-flex gap-1 items-center justify-center transition duration-200 ease-in-out rounded-md font-semibold leading-5 px-[0.763rem] w-fit",
  variants: {
    variant: {
      neutral:
        "dark:border-base-content/30 dark:bg-base-content/30 dark:text-base-content",
      primary: "dark:border-primary/30 dark:bg-primary/30 dark:text-primary",
      secondary:
        "dark:border-secondary/30 dark:bg-secondary/30 dark:text-secondary",
      accent: "dark:border-accent/30 dark:bg-accent/30 dark:text-accent",
      info: "dark:border-transparent dark:bg-info/30 dark:text-info",
      success: "dark:border-transparent dark:bg-success/30 dark:text-success",
      warning: "dark:border-transparent dark:bg-warning/30 dark:text-warning",
      error: "dark:border-transparent dark:bg-error/30 dark:text-error",
      ghost: "dark:border-white/30 dark:bg-white/30 dark:text-base-300",
    },
    size: {
      xs: "h-5 text-xs font-bold",
      sm: "h-6 text-sm",
      md: "h-7 text-base",
      lg: "h-8 text-lg",
    },
  },
  defaultVariants: {
    variant: "neutral",
    size: "xs",
  },
});

const Badge = ({ variant, size = "xs", className, children }: BadgeProps) => {
  const classes = badge({
    variant,
    size,
    class: className,
  });

  return <span className={classes}>{children}</span>;
};

export default Badge;
