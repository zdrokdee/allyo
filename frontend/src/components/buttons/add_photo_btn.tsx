import React, { FC, useRef } from "react";
import { AddPhoto } from "../icons/add_photo";
import { Options24 } from "../icons/icons24";

interface PhotoSlotProps {
  index: number;
  imageUrl?: string;
  onFileSelect: (file: File, index: number) => void;
  onClick: () => void;
  onReplace?: () => void;
}

export const PhotoSlot: FC<PhotoSlotProps> = ({
  index,
  imageUrl,
  onFileSelect,
  onClick,
  onReplace,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleReplace = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // allow same file re-selection
      inputRef.current.click();
    }
    onReplace?.(); // notify parent to close popup
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file, index);
  };

  return (
    <div
      onClick={imageUrl ? onClick : handleReplace}
      className="relative w-[104px] h-[104px] outline-none overflow-hidden"
    >
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-full h-full object-cover absolute inset-0 rounded-xl"
          />
          <div className="absolute bottom-2 right-2 z-10">
            <Options24 />
          </div>
        </>
      ) : (
        <AddPhoto />
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};
