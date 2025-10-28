import { ReactNode } from "react";
import { CommonProps } from "../@types/common-props.types";

export type BadgeProps = Omit<CommonProps, "isDisabled"> & {
  children: ReactNode;
};
