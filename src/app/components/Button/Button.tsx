"use client";

import React from "react";
import cn from "classnames";
import { ButtonProps } from "./types";
import { buttonStyles as styles } from "./styles";

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    id,
    icon,
    label = "",
    type = "button",
    layout = "auto",
    variant = "solid",
    corner = "soft-edge",
    disabled = false,
    onClick,
  } = props;

  return (
    <button
      {...props}
      id={id}
      type={type}
      disabled={disabled}
      className={cn(
        className,
        styles.base,
        styles.layout[layout],
        styles.corner[corner],
        styles.variant[variant].base,
        disabled
          ? [styles.cursor.disabled, styles.variant[variant].disabled]
          : [styles.cursor.default, styles.variant[variant].default],
        icon ? styles.padding.iconOnly : styles.padding.default
      )}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};
