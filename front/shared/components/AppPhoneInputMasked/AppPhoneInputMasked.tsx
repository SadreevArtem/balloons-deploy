import React from "react";
import InputMask, { Props as InputMaskProps } from "react-input-mask";
import { AppTextField } from "../AppTextField";

type Props = {
  value: InputMaskProps["value"];
  onChange: InputMaskProps["onChange"];
  mask?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  inputClassName?: string;
};

export const AppPhoneInputMasked: React.FC<Props> = ({
  value,
  onChange,
  disabled,
  mask = "+7 (999) 999-99-99",
  placeholder = "+7 (900) 000-00-00",
  className,
  ...props
}) => {
  return (
    <InputMask
      className={className}
      mask={mask}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
      <AppTextField className={className} tag='input' {...props} />
    </InputMask>
  );
};
