import { ButtonHTMLAttributes } from "react";
import { CommonProps, LoadingBehavior } from "../@types/common-props.types";

export type ButtonShape = "default" | "wide" | "block" | "square";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps &
  LoadingBehavior & {
    isOutline?: boolean;
    shape?: ButtonShape;
    isLink?: boolean;
    animatedIcon?: boolean;
  };
