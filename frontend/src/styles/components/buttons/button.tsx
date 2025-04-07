import React, { useState } from "react";

interface ButtonProps {
    icon: React.ReactNode; // `icon` can be any React node, like an SVG or an icon component.
    text: string;
    onClick: () => void; // The `onClick` is a function that takes no arguments and returns nothing.
    className?: string; // Optional `className` prop.
}

const Button: React.FC<ButtonProps> = ({
    icon,
    text,
    onClick,
    className = "",
    }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <button
        className={`w-[320px] h-[48px] border rounded-[12px] border-neutral-20 body17-reg text-neutral-0 flex items-center justify-center gap-2 transition ${
            isPressed ? "bg-neutral-30 border-neutral-30" : "neutral-20"
        } ${className}`}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={onClick}
        >
        {icon}
        {text}
        </button>
    );
};

export default Button;
