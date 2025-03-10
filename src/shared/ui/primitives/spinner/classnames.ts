import { tv, VariantProps } from "tailwind-variants";

export const spinnerTv = tv({
  slots: {
    base: "relative size-6",
    item: "w-[10%] h-[30%] absolute top-[38%] left-[48%] rounded-full animate-ios-spinner",
  },
  variants: {
    color: {
      inverse: {
        item: "bg-background",
      },
      default: {
        item: "bg-foreground",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
});

export type SpinnerVariantProps = VariantProps<typeof spinnerTv>;
