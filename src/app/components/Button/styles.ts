export const buttonStyles = {
  base: "h-12 flex items-center justify-center text-base font-semibold transition-all duration-150 ease-in-out",
  layout: {
    auto: "w-auto",
    block: "w-full",
  },
  padding: {
    default: "px-4", // label or label with icon
    iconOnly: "!w-12", // icon only
  },
  variant: {
    solid:
      "text-white bg-zinc-800 hover:bg-zinc-950 border border-zinc-800 hover:border-zinc-950",
    outline:
      "text-zinc-800 hover:text-zinc-950 bg-white border border-zinc-300 hover:border-zinc-950",
    ghost: "bg-white hover:bg-zinc-200",
  },
  corner: {
    flat: "rounded-none",
    "soft-edge": "rounded-lg",
    rounded: "rounded-full",
  },
};
