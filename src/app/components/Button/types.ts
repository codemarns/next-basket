import { HTMLAttributes, ReactElement } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: string | ReactElement;
  label?: string;
  layout?: "auto" | "block";
  type?: "button" | "reset" | "submit";
  variant?: "solid" | "outline" | "ghost";
  corner?: "flat" | "soft-edge" | "rounded";
};
