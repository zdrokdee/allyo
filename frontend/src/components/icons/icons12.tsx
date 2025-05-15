import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CloseIcon12: React.FC<IconProps> = ({ className, ...props }) => (
  <div className={className} {...props}>
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 2.25L2.25 9.75M2.25 2.25L9.75 9.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
