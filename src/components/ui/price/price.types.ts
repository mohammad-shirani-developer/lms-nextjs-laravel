import { CommonProps } from "../@types/common-props.types";

export type PriceProps = Omit<CommonProps, "isDisabled" | "variant"> & {
  price?: number;
  text?: string;
};
