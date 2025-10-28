import { CommonProps } from "../@types/common-props.types";

export type RatingProps = Omit<CommonProps, "isDisabled"> & {
  rate: number;
};
