import React from "react";

// Define the interface for props
interface CloseIconProps {
  className?: string; // Optional className prop
}

export const CloseIcon24: React.FC<CloseIconProps> = ({ className }) => (
    <div className={className}>
        <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M19.1197 4.80664L4.80078 19.1256M19.1197 19.1256L4.80078 4.80664"
            stroke="#202020"
            strokeWidth="2"
            strokeLinecap="round"
        />
        </svg>
    </div>
);
