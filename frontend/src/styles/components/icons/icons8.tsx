import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const CloseIcon8: React.FC<IconProps> = ({ className, ...props }) => (
    <div className={className} {...props}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L4 4M4 4L5.99999 5.99999M4 4L2.00001 5.99999M4 4L6 2" stroke="white" stroke-linecap="round"/>
        </svg>
    </div>
);
