import { useState } from "react";

import { Eye, EyeClosed } from "@phosphor-icons/react";
import { Input, InputProps } from "../input/input";

export const InputPassword = ({ ...props }: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible((prev) => !prev);
  };

  const renderHideButton = () => {
    return (
      <button
        className="opacity-50 transition-opacity hover:opacity-100"
        type="button"
        onClick={handleChangeVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
      >
        {isVisible ? (
          <EyeClosed weight="bold" size="1.5rem" />
        ) : (
          <Eye weight="bold" size="1.5rem" />
        )}
      </button>
    );
  };

  return (
    <Input
      {...props}
      endContent={renderHideButton()}
      type={isVisible ? "text" : "password"}
    />
  );
};
