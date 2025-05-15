import { FC } from "react";
import { CloseIcon12 } from "../icons/icons12";
import { Divider328 } from "../dividers/328";

interface InputCapsuleFieldProps {
  label?: string;
  values: string[];
  placeholder?: string;
  maxItems?: number;
  onRemove: (item: string) => void;
  onClick: () => void;
}

const InputCapsuleField: FC<InputCapsuleFieldProps> = ({
  label = "",
  values,
  placeholder,
  maxItems = 6,
  onRemove,
  onClick,
}) => {
  const isGender = label.toLowerCase() === "gender";
  const isLanguage = label.toLowerCase() === "language";
  const showAddButton =
    isLanguage && values.length > 0 && values.length < maxItems;

  return (
    <div className="relative flex flex-col gap-3 w-full">
      {/* Label + optional Add button row */}
      {label && (
        <div className="flex justify-between items-center  sub13-reg text-neutral-10">
          <span>{label}</span>
          {showAddButton && (
            <button
              onClick={onClick}
              className="text-neutral-10 sub13-reg cursor-pointer"
              type="button"
            >
              + add
            </button>
          )}
        </div>
      )}

      {/* Capsules */}
      <div className="flex flex-wrap gap-2">
        {values.map((val) => (
          <div
            key={val}
            onClick={isGender ? onClick : undefined}
            className={`flex items-center gap-1 bg-neutral-30 rounded-[6px] px-3 py-1 ${
              isGender ? "cursor-pointer" : ""
            }`}
          >
            <span className="text-neutral-0 body17-reg">{val}</span>
            {!isGender && (
              <CloseIcon12
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(val);
                }}
                className="cursor-pointer text-neutral-0"
                role="button"
                aria-label={`Remove ${val}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Placeholder when no values */}
      {values.length === 0 && (
        <div
          onClick={onClick}
          role="button"
          aria-label={`Add ${label}`}
          className="cursor-pointer body17-reg text-neutral-20 outline-none"
        >
          <span className="px-4 py-1 rounded-[6px] outline body17-reg">
            {placeholder}
          </span>
        </div>
      )}

      {/* Divider with extra spacing */}
      <div className="pt-0">
        <Divider328 />
      </div>
    </div>
  );
};

export default InputCapsuleField;
