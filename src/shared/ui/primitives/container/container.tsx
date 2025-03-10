import { PolymorphicComponentProps } from "@/shared/lib/types";
import { ElementType, HTMLAttributes } from "react";
import { containerTV, ContainerTVProps } from "./classnames";

type ContainerBaseProps = HTMLAttributes<HTMLDivElement> & ContainerTVProps;

export type ContainerProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  ContainerBaseProps
>;

export function Container<T extends ElementType = "div">(
  props: ContainerProps<T>
) {
  const {
    className,
    as: Component = "div",
    yPadding,
    fullscreen,
    ...rest
  } = props;

  const ContainerClassName = containerTV({
    className,
    yPadding,
    fullscreen,
  });

  return <Component className={ContainerClassName} {...rest} />;
}
