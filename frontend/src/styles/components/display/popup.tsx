import React from "react";
import Button from "../buttons/button";
import { CloseIcon24 } from "../icons/interface";
import { FacebookIcon24, GoogleIcon24 } from "../icons/social";

// Define the type for the Popup props
interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="w-full max-w-[560px] h-[462px] bg-bg-white rounded-tl-[12px] rounded-tr-[12px] bottom-0 fixed">
      <CloseIcon24 className="top-4 right-4 absolute" onClick={onClose} />
      <div className="absolute top-[88px] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <p className="title30-reg text-neutral-0">Join Allyo</p>
      </div>
      <div className="absolute top-[216px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <Button icon={<GoogleIcon24 />} text="Google" onClick={() => {}} />
        <Button
          icon={<FacebookIcon24 className="mb-0.5" />}
          text="Facebook"
          onClick={() => {}}
        />
        <Button text="Email" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Popup;
