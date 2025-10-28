import { useMemo } from "react";
import { tv } from "tailwind-variants";
import { ProgressProps } from "./progress.types";

const progress = tv({
  base: "progress relative w-full appearance-none overflow-hidden rounded-lg bg-transparent",
  variants: {
    variant: {
      neutral: "progress-neutral",
      primary: "progress-primary",
      secondary: "progress-secondary",
      accent: "progress-accent",
      info: "progress-info",
      success: "progress-success",
      warning: "progress-warning",
      error: "progress-error",
    },
    size: {
      xs: "h-1",
      sm: "h-2",
      md: "h-3",
      lg: "h-4",
    },
  },
  defaultVariants: {
    variant: "neutral",
    size: "sm",
  },
});

const getProgressColor = (variant: ProgressProps["variant"] = "neutral") => {
  switch (variant) {
    case "primary":
      return "bg-primary";
    case "secondary":
      return "bg-secondary";
    case "accent":
      return "bg-accent";
    case "info":
      return "bg-info";
    case "success":
      return "bg-success";
    case "warning":
      return "bg-warning";
    case "error":
      return "bg-error";
    default:
      return "bg-base-content";
  }
};

const Progress = ({
  variant = "neutral",
  size = "sm",
  value,
  className,
}: ProgressProps) => {
  const classes = progress({ variant, size, class: className });
  const progressColor = getProgressColor(variant);

  const styleTag = useMemo(() => {
    return `
      .progress::-webkit-progress-bar {
        background-color: transparent;
        border-radius: 0.5rem;
      }
      .progress::-webkit-progress-value {
        border-radius: 0.5rem;
        background-color: ${progressColor};
      }
      .progress::-moz-progress-bar {
        border-radius: 0.5rem;
        background-color: ${progressColor};
      }
    `;
  }, [progressColor]);

  return (
    <>
      <style>{styleTag}</style>
      <progress value={value} max={100} className={classes} />
    </>
  );
};

export default Progress;
