
import { ComponentType } from "react";
export type { ILogin } from "./auth.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarSubItem {
  title: string;
  url: string;
  component?: ComponentType;
}

export interface ISidebarItem {
  title: string;
  url?: string; // for direct links
  icon?: ComponentType<any>; // for lucide-react icons
  component?: ComponentType;
  items?: ISidebarSubItem[]; // for submenus
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER";

type ZodIssue = {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
};

type ErrorSource = {
  path: string;
  message: string;
};

export interface IErrorResponse {
  success: boolean;
  message: string;
  errorSources?: ErrorSource[];
  err?: {
    issues: ZodIssue[];
    name: string;
  };
  stack?: string;
}