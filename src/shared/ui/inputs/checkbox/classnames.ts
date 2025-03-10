import { tv } from "@/shared/lib/utils";
import { VariantProps } from "tailwind-variants";

export const checkboxTV = tv({
  slots: {
    root: "flex items-center gap-2 cursor-pointer group",
    label: "text-base font-medium",
    checkbox:
      "size-5 bg-default rounded-sm border-2 border-foreground/20 group/check relative group-hover:border-foreground/40 transition-colors outline-2 outline-transparent peer-focus-visible:outline-focus outline-offset-2",
    checkboxIcon:
      "absolute inset-[-2px] flex items-center justify-center text-foreground opacity-0 group-peer-checked/check:opacity-100 transition-opacity bg-primary shrink-0 rounded-sm",
    input: "sr-only peer",
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxTV>;
