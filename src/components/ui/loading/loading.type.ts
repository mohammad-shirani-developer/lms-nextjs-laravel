import { CommonProps } from "../@types/common-props.types";

export type LoadingProps = Omit<CommonProps, "isDisabled"> & {
  types?: "ring" | "spinner";
};
