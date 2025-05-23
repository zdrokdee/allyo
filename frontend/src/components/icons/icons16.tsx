import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const CloseIcon16: React.FC<IconProps> = ({ className, ...props }) => (
    <div className={className} {...props}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 3L3 13M3 3L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    </div>
);
