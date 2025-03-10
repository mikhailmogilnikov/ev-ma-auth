import { InputHTMLAttributes, ReactNode, Ref } from "react";
import { inputTV, InputTvProps } from "./classnames";

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputTvProps & {
    rootRef?: Ref<HTMLLabelElement>;
    startContent?: ReactNode;
    endContent?: ReactNode;
  };

export function Input(props: InputProps) {
  const { rootRef, startContent, endContent, size, className, id, ...rest } =
    props;

  const { root, input, startWrapper, endWrapper } = inputTV({
    className,
    size,
  });

  return (
    <label htmlFor={id} ref={rootRef} className={root()}>
      {startContent && <span className={startWrapper()}>{startContent}</span>}
      <input id={id} type="text" {...rest} className={input()} />
      {endContent && <span className={endWrapper()}>{endContent}</span>}
    </label>
  );
}
