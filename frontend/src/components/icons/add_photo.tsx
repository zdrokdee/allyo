import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    
    className?: string;
}




export const AddPhoto: React.FC<IconProps> = ({ className, ...props }) => (
    <svg width="104" height="104" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <rect x="1" y="1" width="118" height="118" rx="8" stroke="#626262" strokeWidth="2"/>
        <path d="M60 51V69M69 60L51 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);