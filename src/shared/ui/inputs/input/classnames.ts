import { tv } from "@/shared/lib/utils";
import { VariantProps } from "tailwind-variants";

export const inputTV = tv({
  slots: {
    root: "w-full outline-2 outline-offset-2 outline-transparent focus-within:outline-focus bg-default  flex items-center",
    input: "w-full border-none outline-none",
    startWrapper: "w-10 h-full flex items-center justify-center",
    endWrapper: "w-10 h-full flex items-center justify-center",
  },
  variants: {
    size: {
      sm: {
        root: "h-8 rounded-md px-2",
        input: "h-full text-sm",
      },
      md: {
        root: "h-10 rounded-lg px-3 ",
        input: "h-full text-base",
      },
      lg: {
        root: "h-12 rounded-lg px-3 ",
        input: "h-full text-base",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type InputTvProps = VariantProps<typeof inputTV>;
