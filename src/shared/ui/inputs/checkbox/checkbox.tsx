import { InputHTMLAttributes, RefObject } from "react";
import { checkboxTV, CheckboxVariants } from "./classnames";
import { Check } from "@phosphor-icons/react";

interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    CheckboxVariants {
  label: string;
  rootRef?: RefObject<HTMLLabelElement>;
}

export function Checkbox(props: CheckboxProps) {
  const { label, id, rootRef, className, ...rest } = props;

  const {
    root,
    label: labelStyles,
    input,
    checkbox,
    checkboxIcon,
  } = checkboxTV();

  return (
    <label
      aria-label={label}
      className={root({ className })}
      htmlFor={id}
      ref={rootRef}
    >
      <input type="checkbox" id={id} className={input()} {...rest} />
      <span className={checkbox()}>
        <span className={checkboxIcon()}>
          <Check weight="bold" className="w-5/7 h-5/7" />
        </span>
      </span>
      <span className={labelStyles()}>{label}</span>
    </label>
  );
}
