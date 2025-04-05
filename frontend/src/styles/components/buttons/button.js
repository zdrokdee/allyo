import React, { useState } from "react";

const Button = ({ text, onClick, className = "" }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <button
        className={`w-[320px] h-[48px] border rounded-md border-neutral-20 body17-reg text-neutral-0 flex items-center justify-center transition ${
            isPressed ? "bg-neutral-30 border-neutral-30" : "neutral-20"
        } ${className}`}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={onClick}
        >
        {text} 
        </button>
    );
};

export default Button;
