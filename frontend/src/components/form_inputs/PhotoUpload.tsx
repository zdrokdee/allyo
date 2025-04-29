import { FC } from "react";

const PhotoUpload: FC = () => (
    <div className="flex gap-4">
        {Array.from({ length: 3 }).map((_, idx) => (
        <div
            key={idx}
            className="w-20 h-20 border border-gray-600 flex items-center justify-center text-3xl text-gray-400 rounded-md"
        >
            +
        </div>
        ))}
    </div>
);

export default PhotoUpload;
