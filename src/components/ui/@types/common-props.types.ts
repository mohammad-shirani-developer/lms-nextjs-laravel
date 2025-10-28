export type Variant =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "info"
  | "success"
  | "warning"
  | "error";
export type Size = "xs" | "sm" | "md" | "lg";

export type Color =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "info"
  | "success"
  | "warning"
  | "error";

export type LoadingBehavior = {
  isLoading?: boolean;
  loadingType?: "spinner" | "ring";
  loadingText?: string;
};

export type CommonProps = {
  variant?: Variant;
  size?: Size;
  isDisabled?: boolean;
  className?: string;
  color?: Color;
};

export type RefinedMerge<T, U> = Omit<T, keyof U> & U;
