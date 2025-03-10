import { tv } from "@/shared/lib/utils";
import { VariantProps } from "tailwind-variants";

export const containerTV = tv({
  base: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  variants: {
    yPadding: {
      true: "py-4 sm:py-6 lg:py-8",
      false: "py-0",
    },
    fullscreen: {
      true: "h-dvh",
      false: "",
    },
  },
  defaultVariants: {
    yPadding: false,
    fullscreen: false,
  },
});

export type ContainerTVProps = VariantProps<typeof containerTV>;
