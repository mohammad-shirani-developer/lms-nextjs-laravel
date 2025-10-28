import { CommonProps, Size } from "../ui/@types/common-props.types";

export type ProgressVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type ProgressProps = Omit<CommonProps, "isDisabled"> & {
  variant?: ProgressVariant;
  size?: Size;
  value: number;
  className?: string;
};
