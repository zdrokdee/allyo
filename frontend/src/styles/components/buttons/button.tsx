import React, { useState } from "react";

interface ButtonProps {
    icon?: React.ReactNode; // `icon` can be any React node, like an SVG or an icon component.
    text?: string;
    onClick: () => void; // The `onClick` is a function that takes no arguments and returns nothing.
    className?: string; // Optional `className` prop.
    disabled?: boolean;
}

 const Button: React.FC<ButtonProps> = ({
    icon,
    text,
    onClick,
    className = "",
    disabled,
    }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <button
            disabled={disabled}
            onClick={disabled ? undefined : onClick}
            className={`w-[328px] h-[40px] border rounded-[8px] border-neutral-20 body17-reg text-neutral-0 flex items-center justify-center gap-2 transition-transform duration-150 ease-in-out 
                ${isPressed ? "scale-[1.01]" : "scale-100"}
                ${disabled ? "bg-neutral-20 text-neutral-5 cursor-not-allowed border-none" : "bg-neutral-40 text-neutral-0"}
                ${className}`}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
        >
            {icon}
            {text}
        </button>
    );
};

export default Button;
