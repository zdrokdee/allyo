import { FC } from "react";

interface TagProps {
  text: string;
}

const Tag: FC<TagProps> = ({ text }) => (
  <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full text-white text-sm">
    {text}
    <span className="text-gray-400 cursor-pointer">×</span>
  </div>
);

export default Tag;
