export const buttonStyles = {
  base: "h-12 flex items-center justify-center text-base font-semibold transition-all duration-150 ease-in-out",
  cursor: {
    default: "cursor-pointer",
    disabled: "cursor-not-allowed",
  },
  layout: {
    auto: "w-auto",
    block: "w-full",
  },
  padding: {
    default: "px-4", // label or label with icon
    iconOnly: "!w-12", // icon only
  },
  variant: {
    solid: {
      base: "text-white border",
      default: "bg-zinc-800 hover:bg-zinc-950 border-zinc-800 hover:border-zinc-950",
      disabled: "bg-zinc-500 border-zinc-500",
    },
    outline: {
      base: "bg-white border border-zinc-300",
      default: "text-zinc-800 hover:text-zinc-950 hover:border-zinc-950",
      disabled: "text-zinc-300",
    },
    ghost: {
      base: "bg-white hover:bg-zinc-200",
      default: "",
      disabled: "",
    },
  },
  corner: {
    flat: "rounded-none",
    "soft-edge": "rounded-lg",
    rounded: "rounded-full",
  },
};
