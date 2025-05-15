"use client";
import React  from "react";
import { FC, useRef, useState } from "react";
import { CloseIcon16 } from "../icons/icons16";
import { useOutsideClick } from "src/hooks/use_outside";

interface LanguageModalProps {
    selected: string[];
    onSelect: (language: string) => void;
    onClose: () => void;
    onRemove: (language: string) => void;
}

const languages = [
    "English", "Spanish", "Chinese", "Hindi", "Arabic", "Bengali", "Portuguese",
    "Russian", "Japanese", "Punjabi", "German", "Korean", "French", "Turkish",
    "Vietnamese", "Italian", "Thai", "Polish", "Ukrainian", "Romanian", "Dutch",
    "Greek", "Czech", "Swedish", "Hungarian", "Hebrew", "Danish", "Finnish",
    "Norwegian", "Bulgarian", "Croatian", "Slovak", "Serbian", "Slovenian",
    "Malay", "Indonesian", "Tamil", "Telugu", "Marathi", "Urdu", "Swahili",
    "Somali", "Georgian", "Albanian", "Macedonian", "Bosnian", "Latvian",
    "Lithuanian", "Estonian",
];

const LanguageModal: FC<LanguageModalProps> = ({
    selected = [],
    onSelect,
    onClose,
    onRemove,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState("");

    useOutsideClick(modalRef, onClose);

    const filteredLanguages = languages.filter((lang) =>
        lang.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleSelect = (language: string) => {
        selected.includes(language) ? onRemove(language) : onSelect(language);
    };

    return (
        <div
            ref={modalRef}
            className="w-full max-w-[336px] z-50 h-1/2 bg-bg-white rounded-tl-[8px] rounded-tr-[8px] bottom-0 fixed"
        >
            <div className="mt-4 px-4 flex flex-col gap-6 overflow-y-auto h-full">
                <div className="flex items-center justify-between">
                    <h3 className="body17-reg text-neutral-5">select language</h3>
                    <CloseIcon16 onClick={onClose} className="text-neutral-0 cursor-pointer" />
                </div>

                <input
                    type="text"
                    placeholder="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-1 pl-2 border text-neutral-0 sub13-reg rounded-md border-neutral-20"
                    aria-label="search languages"
                />

                <div className="flex flex-wrap gap-3 mt-1">
                    {filteredLanguages.map((language) => {
                        const isSelected = selected.includes(language);
                        return (
                            <button
                                key={language}
                                onClick={() => toggleSelect(language)}
                                className={`px-4 py-1 rounded-[6px] outline  body17-reg ${
                                    isSelected ? "bg-neutral-30 text-neutral-0 outline-none" : "text-neutral-0 outline-neutral-20"
                                }`}
                                aria-label={`Toggle ${language}`}
                            >
                                {language}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LanguageModal;
