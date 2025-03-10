import { HTMLAttributes } from "react";
import { SpinnerVariantProps } from "./classnames";
import { useSpinner } from "./use-spinner";

export type SpinnerProps = HTMLAttributes<HTMLDivElement> &
  SpinnerVariantProps & {
    size?: number;
    segments?: 8 | 10 | 12;
  };

export function Spinner(props: SpinnerProps) {
  const { buildSpinnerProps } = useSpinner(props);

  return <div {...buildSpinnerProps()} />;
}
