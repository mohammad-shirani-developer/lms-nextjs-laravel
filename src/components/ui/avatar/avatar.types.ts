import { CommonProps } from "../@types/common-props.types";

export type AvatarProps = Omit<CommonProps, "isDisabled"> & {
  src?: string;
  alt?: string;
};
