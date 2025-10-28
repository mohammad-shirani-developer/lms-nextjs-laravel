import { Comment } from "@/types/comment.interface";
import { CommonProps } from "../@types/common-props.types";

export type CommentProps = Omit<CommonProps, "isDisabled" | "size"> & Comment;
