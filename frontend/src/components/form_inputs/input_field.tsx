import {
    FC,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    useEffect,
    useRef,
} from "react";
import { Divider328 } from "../dividers/328";
import { CloseIcon16 } from "../icons/icons16";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    showClearButton?: boolean;
    onClear?: () => void;
    className?: string;
    maxLength?: number;
    textarea?: boolean;
    unit?: string;
}

const InputField: FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    onClear,
    showClearButton = false,
    className = "",
    maxLength,
    type = "text",
    placeholder,
    textarea = false,
    unit,
    ...props
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto-grow textarea height
    useEffect(() => {
        if (textarea && textareaRef.current) {
            const el = textareaRef.current;
            el.style.height = "auto"; // reset height
            el.style.height = `${el.scrollHeight}px`; // set new height based on content
        }
    }, [value, textarea]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (maxLength && e.target.value.length > maxLength) return; // stop input after limit
        onChange?.(e);
    };
    return (
        <div className={`relative flex flex-col gap-3  ${className}`}>
            {/* Label */}
            {label && (
                <div className="flex justify-between sub13-reg text-neutral-10">
                    <span>{label}</span>
                    {maxLength && (
                        <span
                            className={`sub10-reg pt-0.5 ${(value?.toString().length || 0) >= maxLength
                                    ? "text-tech-attention"
                                    : "text-neutral-10"
                                }`}
                        >
                            {value?.toString().length || 0}/{maxLength}
                        </span>
                    )}
                </div>
            )}

            <div className="relative flex flex-col gap-1">
                {textarea ? (
                    <textarea
                        ref={textareaRef}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        rows={1} // height control
                        className="mb-1 ml-0.5  body17-reg outline-none resize-none overflow-hidden w-[320px] " // <--- resize-none is important
                        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        className={`mb-0.5 ml-0.5 pr-4 body17-reg outline-none ${className || "w-[312px]"
                            }`}
                        {...props}
                    />
                )}
                {unit && (
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 body17-reg text-neutral-10 pointer-events-none">
                        {unit}
                    </span>
                )}

                <Divider328 />

                {/* Clear Button */}
                {showClearButton && value && (
                    <CloseIcon16
                        onClick={() => onChange?.({ target: { value: "" } } as any)}
                        className="text-neutral-20 absolute right-2 top-1/2 transform -translate-y-1/2"
                    />
                )}
            </div>
        </div>
    );
};

export default InputField;
