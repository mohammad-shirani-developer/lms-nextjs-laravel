import {
  AccessDeniedError,
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledError,
  ValidationError,
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};

export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData } as ValidationError;
};

export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, detail: "سرویس مورد نظر یافت نشد" } as NotFoundError;
};

export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "شما مجاز به دسترسی به این منبع نیستید",
  } as UnauthorizedError;
};

export const accessDeniedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "شما اجازه دسترسی به این عملیات را ندارید",
  } as AccessDeniedError;
};

export const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, detail: "خطای سرور" } as UnhandledError;
};

export const networkErrorStrategy = () => {
  throw { detail: "خطای شبکه" } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: badRequestErrorStrategy,
  401: unauthorizedErrorStrategy,
  403: accessDeniedErrorStrategy,
  404: notFoundErrorStrategy,
  422: validationErrorStrategy,
  500: unhandledExceptionStrategy,
};
