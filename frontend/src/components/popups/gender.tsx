'use client';

import { FC, useEffect, useRef } from 'react';
import { CloseIcon16 } from '../icons/icons16';
import { useOutsideClick } from 'src/hooks/use_outside';

interface GenderModalProps {
    selected: string;
    onSelect: (gender: string) => void;
    onClose: () => void;
    }

    const genders = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

    const GenderModal: FC<GenderModalProps> = ({ selected, onSelect, onClose }) => {

        const modalRef = useRef<HTMLDivElement>(null);
        useOutsideClick(modalRef, onClose);

    
    return (
        <div ref={modalRef}
            className="w-full max-w-[336px] z-50 h-1/4 bg-bg-white rounded-tl-[8px] rounded-tr-[8px] bottom-0 fixed overflow-hidden">
        <div className="absolute mt-4 px-4 flex flex-col gap-6 ">
            <div className='flex items-center justify-between'>
                <h3 className="body17-reg text-neutral-0">select gender</h3>
                <CloseIcon16
                    onClick={() => onClose()}
                    className="text-neutral-0 "
                    />
            </div>
            
            
            <div className="flex flex-wrap gap-3">
            {genders.map((gender) => (
                <button
                    key={gender}
                    onClick={() => onSelect(gender)}
                    className={`px-4 py-1 rounded-[6px] outline body17-reg ${
                        selected === gender
                        ? 'outline  bg-neutral-0 neutral-40'
                        : '  text-neutral-0 '
                    }`}
                    >
                    {gender}
                </button>
            ))}
            </div>
        
        </div>
        </div>
    );
};

export default GenderModal;
