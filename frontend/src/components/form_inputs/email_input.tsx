import React from "react";
import { CloseIcon16 } from "../icons/icons16";
import { Divider328 } from "../dividers/328";

interface TextFields extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

}

export const EmailInput: React.FC<TextFields> = ({
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="email"
        placeholder="Email"
        value={value}
        onChange={onChange}
        maxLength={54}
        className="mb-2 ml-0.5 pr-5 w-[312px] body17-reg outline-none"
        {...props}
      />
      <Divider328 />
      {value && (
        <CloseIcon16
          onClick={() => onChange?.({ target: { value: "" } } as any)}
          className="text-neutral-20 absolute right-0.5 top-1/3 transform -translate-y-1/2"
        />
      )}
    </div>
  );
};
