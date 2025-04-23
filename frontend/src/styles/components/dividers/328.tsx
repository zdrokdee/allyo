import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Divider328: React.FC<IconProps> = ({ className, ...props }) => (
    <div 
    className={` ${className}`} {...props}>
        <svg
        width="328"
        height="1"
        viewBox="0 0 328 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 1H368" stroke="currentColor" stroke-width="0.4" />
        </svg>
    </div>
);