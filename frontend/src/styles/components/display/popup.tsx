import React from "react";
import Button from "../buttons/button";
import { CloseIcon24 } from "../icons/icons24";
import { FacebookIcon24, GoogleIcon24 } from "../../social";

// Define the type for the Popup props
interface PopupProps {
  title: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose, title }) => {
  return (
    <div className="w-full max-w-[560px] h-1/2 bg-neutral-30 rounded-tl-[12px] rounded-tr-[12px] bottom-0 fixed">
      <CloseIcon24 className="top-4 right-4 absolute" onClick={onClose} />
      <div className="absolute top-[88px]  left-1/2 -translate-x-1/2 flex flex-col items-center gap-20">
        <p className="body17-reg text-neutral-0">{title}</p>
        <div className="flex flex-col items-center gap-4">
          <Button text="Email" onClick={() => {}} />
          <Button text="Email" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
